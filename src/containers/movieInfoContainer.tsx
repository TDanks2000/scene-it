import SeasonsComponent from "@/components/Seasons";
import Cast from "@/components/info/Cast";
import InfoTop from "@/components/info/infoTop";
import { getTitle } from "@/utils";
import type {
  AppendToResponse,
  MovieDetails,
  TvShowDetails,
} from "@tdanks2000/tmdb-wrapper";
import { type FC } from "react";

interface MovieInfoProps {
  type: "movie" | "tv";
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetch: (type: "movie" | "tv", id: string) => Promise<any>;
}

const MovieInfoContainer: FC<MovieInfoProps> = async ({ id, type, fetch }) => {
  const data = await fetch(type, id);

  if (type === "tv") {
    const tvData = data as AppendToResponse<
      TvShowDetails,
      (
        | "alternative_titles"
        | "images"
        | "videos"
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
          cover={`https://image.tmdb.org/t/p/original/${tvData.backdrop_path}`}
          title={getTitle(tvData.name)}
          type={type}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          episodes={tvData.number_of_episodes}
          year={new Date(tvData.first_air_date).getFullYear()}
          genres={tvData.genres}
          description={tvData.overview}
        />

        <div className="flex flex-col gap-14 px-16 pb-14">
          <Cast data={tvData.credits.cast} />

          <SeasonsComponent seasons={tvData.seasons} />
        </div>
      </div>
    );
  }

  const movieData = data as AppendToResponse<
    MovieDetails,
    (
      | "images"
      | "videos"
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
          cover={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
          title={movieData.title}
          type={type}
          year={new Date(movieData.release_date).getFullYear()}
          genres={movieData.genres}
          description={movieData.overview}
        />

        <div className="flex flex-col gap-14 px-16 pb-14">
          <Cast data={movieData.credits.cast} />
        </div>
      </div>
    </>
  );
};

export default MovieInfoContainer;
