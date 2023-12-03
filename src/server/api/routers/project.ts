import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "src/server/api/trpc";
import { TRPCClientError } from "@trpc/client";
import { TRPCError } from "@trpc/server";

export const projectRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        key: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const { name, key } = input;

        if (!name) {
          throw new TRPCClientError("Name is required");
        }

        if (!key) {
          throw new TRPCClientError("Key is required");
        }

        return await ctx.db.project.create({
          data: {
            name: input.name,
            key: input.key,
            user: { connect: { id: ctx.session.user.id } },
          },
        });
      } catch (e) {
        throw new TRPCClientError("Project already exists");
      }
    }),

  list: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.project.findMany({
      where: { user: { id: ctx.session.user.id } },
    });
  }),

  byId: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { id } = input;

      if (!id) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Id is required",
        });
      }

      // Fake slow query
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const project = await ctx.db.project.findUnique({
        where: { id: input.id },
      });

      if (!project) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Project not found",
        });
      }

      return project;
    }),
});
