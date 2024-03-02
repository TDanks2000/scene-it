import { anilistRouter } from "@/server/api/routers/anilist";
import { tmdbRouter } from "@/server/api/routers/tmdb";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  tmdb: tmdbRouter,
  anilist: anilistRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
