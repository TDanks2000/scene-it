import { SearchTypeEnum } from "@/@types";
import { env } from "@/env";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TMDB } from "@tdanks2000/tmdb-wrapper";
import { z } from "zod";

const tmdb = new TMDB(env.TMDB_ACCESS_TOKEN);

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
        page: z.number().default(1),
      }),
    )
    .query(async ({ input }) => {
      const { query, type, page } = input;

      switch (type) {
        case SearchTypeEnum.MOVIE:
          return await tmdb.search.movies({ query, page });
        case SearchTypeEnum.PERSON:
          return await tmdb.search.people({ query, page });
        case SearchTypeEnum.MULTI:
          return await tmdb.search.multi({ query, page });
        case SearchTypeEnum.TV:
          return await tmdb.search.tv({ query, page });
        default:
          throw new Error("Invalid search type");
      }
    }),
  popular: publicProcedure
    .input(
      z.object({
        type: z.enum([
          SearchTypeEnum.MOVIE,
          SearchTypeEnum.PERSON,
          SearchTypeEnum.TV,
        ]),
        page: z.number().default(1),
      }),
    )
    .query(async ({ input }) => {
      const { page, type } = input;

      switch (type) {
        case SearchTypeEnum.MOVIE:
          return await tmdb.movies.popular({ page });
        case SearchTypeEnum.PERSON:
          return await tmdb.people.popular({ page });
        case SearchTypeEnum.TV:
          return await tmdb.tvShows.popular({ page });
        default:
          throw new Error("Invalid search type");
      }
    }),
  info: publicProcedure
    .input(
      z.object({
        id: z.number(),
        type: z.enum([
          SearchTypeEnum.MOVIE,
          SearchTypeEnum.PERSON,
          SearchTypeEnum.TV,
        ]),
      }),
    )
    .query(async ({ input }) => {
      const { id, type } = input;

      switch (type) {
        case SearchTypeEnum.MOVIE:
          return await tmdb.movies.details(
            id,
            [
              "alternative_titles",
              "images",
              "videos",
              "watch/providers",
              "release_dates",
              "reviews",
              "recommendations",
              "similar",
              "credits",
            ],
            "en",
          );
        case SearchTypeEnum.PERSON:
          return await tmdb.people.details(id);
        case SearchTypeEnum.TV:
          return await tmdb.tvShows.details(id, [
            "alternative_titles",
            "images",
            "videos",
            "watch/providers",
            "reviews",
            "recommendations",
            "similar",
            "credits",
          ]);
        default:
          throw new Error("Invalid search type");
      }
    }),
});
