import { SearchTypeEnum } from "@/@types";
import InfoTop from "@/components/info/infoTop";
import { api } from "@/trpc/server";
import { getTitle } from "@/utils";
import {
  type AppendToResponse,
  type MovieDetails,
  type TvShowDetails,
} from "@tdanks2000/tmdb-wrapper";
import { type FC } from "react";

interface MovieInfoProps {
  type: "movie" | "tv";
  id: string;
}

const fetch = async (type: "movie" | "tv", id: string) => {
  const data = await api.tmdb.info.query({
    id: parseInt(id),
    type: type === "movie" ? SearchTypeEnum.MOVIE : SearchTypeEnum.TV,
  });

  return data;
};

const MovieInfoContainer: FC<MovieInfoProps> = async ({ id, type }) => {
  let data = await fetch(type, id);

  if (type === "tv") {
    data = data as AppendToResponse<
      TvShowDetails,
      (
        | "alternative_titles"
        | "images"
        | "watch/providers"
        | "reviews"
        | "recommendations"
        | "similar"
      )[],
      "tvShow"
    >;
    return (
      <div>
        <InfoTop
          cover={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          title={getTitle(data.name)}
          type={type}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          episodes={data.number_of_episodes}
          year={new Date(data.first_air_date).getFullYear()}
          genres={data.genres}
          description={data.overview}
        />
      </div>
    );
  }

  data = data as AppendToResponse<
    MovieDetails,
    (
      | "images"
      | "recommendations"
      | "reviews"
      | "similar"
      | "release_dates"
      | "alternative_titles"
      | "watch/providers"
    )[],
    "movie"
  >;

  return (
    <div>
      <InfoTop
        cover={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        title={data.title}
        type={type}
        year={new Date(data.release_date).getFullYear()}
        genres={data.genres}
        description={data.overview}
      />
    </div>
  );
};

export default MovieInfoContainer;
