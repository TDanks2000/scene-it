import { SearchTypeEnum } from "@/@types";
import { AnimeInfoContainer, MovieInfoContainer } from "@/containers";
import { api } from "@/trpc/server";
import { getTitle } from "@/utils";
import {
  type AppendToResponse,
  type MovieDetails,
  type TvShowDetails,
} from "@tdanks2000/tmdb-wrapper";
import { type Metadata } from "next";
import { redirect } from "next/navigation";
import { cache, type FC } from "react";

interface InfoPageProps {
  params: {
    type: "movie" | "tv" | "anime";
    id: string;
  };
}

const fetch = cache(async (type: "movie" | "tv", id: string) => {
  const data = await api.tmdb.info.query({
    id: parseInt(id),
    type: type === "movie" ? SearchTypeEnum.MOVIE : SearchTypeEnum.TV,
  });

  return data;
});

export async function generateMetadata({
  params,
}: InfoPageProps): Promise<Metadata> {
  if (params.type === "movie" || params.type === "tv") {
    let data = await fetch(params.type, params.id);

    switch (params.type) {
      case "movie":
      default:
        data = data as AppendToResponse<
          MovieDetails,
          (
            | "images"
            | "recommendations"
            | "reviews"
            | "credits"
            | "similar"
            | "release_dates"
            | "alternative_titles"
            | "watch/providers"
          )[],
          "movie"
        >;
        return {
          title: `Scene it | ${getTitle(data.title)}`,
          description: data.overview,
        };
      case "tv":
        data = data as AppendToResponse<
          TvShowDetails,
          (
            | "alternative_titles"
            | "images"
            | "credits"
            | "watch/providers"
            | "reviews"
            | "recommendations"
            | "similar"
          )[],
          "tvShow"
        >;
        return {
          title: "getTitle(data.name)",
          description: data.overview,
        };
    }
  }
  return {
    title: "Scene it",
  };
}

const InfoPage: FC<InfoPageProps> = ({ params }) => {
  const { type, id } = params;

  switch (type) {
    case "movie":
    case "tv":
      return <MovieInfoContainer type={type} id={id} fetch={fetch} />;
    case "anime":
      return <AnimeInfoContainer id={id} />;
    default:
      return redirect("/");
  }
};

export default InfoPage;
