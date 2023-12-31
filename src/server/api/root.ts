import { postRouter } from "src/server/api/routers/post";
import { createTRPCRouter } from "src/server/api/trpc";
import { projectRouter } from "./routers/project";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  project: projectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
