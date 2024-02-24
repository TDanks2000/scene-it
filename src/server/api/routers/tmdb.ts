import { SearchTypeEnum } from "@/@types";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { tmdb } from "@/server/structs/tmdb";
import { z } from "zod";

export const tmdbRouter = createTRPCRouter({
  search: publicProcedure
    .input(
      z.object({
        query: z.string(),
        type: z.enum([
          SearchTypeEnum.MOVIE,
          SearchTypeEnum.PERSON,
          SearchTypeEnum.MULTI,
          SearchTypeEnum.TV,
        ]),
      }),
    )
    .query(async ({ input }) => {
      const { query, type } = input;

      return await tmdb.search(
        query,
        type as "movie" | "person" | "multi" | "tv",
      );
    }),
  popular: publicProcedure
    .input(
      z.object({
        type: z.enum([SearchTypeEnum.MOVIE, SearchTypeEnum.PERSON]),
        page: z.number(),
      }),
    )
    .query(async ({ input }) => {
      const { page, type } = input;

      return await tmdb.popular(type as "movie" | "tv", page);
    }),
});
