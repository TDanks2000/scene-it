import Cast from "@/components/info/Cast";
import InfoTop from "@/components/info/infoTop";
import { getTitle } from "@/utils";
import {
  type AppendToResponse,
  type MovieDetails,
  type TvShowDetails,
} from "@tdanks2000/tmdb-wrapper";
import Head from "next/head";
import { type FC } from "react";

interface MovieInfoProps {
  type: "movie" | "tv";
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetch: (type: "movie" | "tv", id: string) => Promise<any>;
}

const MovieInfoContainer: FC<MovieInfoProps> = async ({ id, type, fetch }) => {
  let data = await fetch(type, id);

  if (type === "tv") {
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
      | "credits"
      | "similar"
      | "release_dates"
      | "alternative_titles"
      | "watch/providers"
    )[],
    "movie"
  >;

  return (
    <>
      <div>
        <InfoTop
          cover={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          title={data.title}
          type={type}
          year={new Date(data.release_date).getFullYear()}
          genres={data.genres}
          description={data.overview}
        />

        <div className="px-16 pb-14">
          <Cast data={data.credits.cast} />
        </div>
      </div>
    </>
  );
};

export default MovieInfoContainer;
