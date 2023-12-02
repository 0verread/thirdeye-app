import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "src/server/api/trpc";
import { TRPCClientError } from "@trpc/client";

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

  list: protectedProcedure.query(({ ctx }) => {
    return ctx.db.project.findMany({
      where: { user: { id: ctx.session.user.id } },
    });
  }),
});
