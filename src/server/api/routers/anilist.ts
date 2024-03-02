import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { Anilist } from "@tdanks2000/anilist-wrapper";
import { z } from "zod";

const anilist = new Anilist();

export const anilistRouter = createTRPCRouter({
  search: publicProcedure
    .input(
      z.object({
        query: z.string(),
        page: z.number().default(1),
        perPage: z.number().default(25),
      }),
    )
    .query(async ({ input }) => {
      const { query, page, perPage } = input;

      return await anilist.search.anime(query, page, perPage);
    }),
  popular: publicProcedure
    .input(
      z.object({
        page: z.number().default(1),
        perPage: z.number().default(25),
      }),
    )
    .query(async ({ input }) => {
      const { page, perPage } = input;

      return await anilist.search.advanced_anime({
        page,
        size: perPage,
        sort: ["POPULARITY_DESC"],
      });
    }),
  info: publicProcedure.input(z.number()).query(async ({ input }) => {
    const id = input;

    return await anilist.media.anime(id);
  }),
  top_rated: publicProcedure
    .input(
      z.object({
        page: z.number().default(1),
        perPage: z.number().default(25),
      }),
    )
    .query(async ({ input }) => {
      const { page, perPage } = input;

      return await anilist.search.advanced_anime({
        page,
        size: perPage,
        sort: ["SCORE_DESC"],
      });
    }),
  trending: publicProcedure
    .input(
      z.object({
        page: z.number().default(1),
        perPage: z.number().default(25),
      }),
    )
    .query(async ({ input }) => {
      const { page, perPage } = input;

      return await anilist.search.advanced_anime({
        page,
        size: perPage,
        sort: ["TRENDING_DESC", "POPULARITY_DESC"],
      });
    }),
});
