import { SearchTypeEnum } from "@/@types";
import BannerCard from "@/components/cards/bannerCard";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/server";
import type { Movie, PopularTvShowResult } from "@tdanks2000/tmdb-wrapper";
import { type FunctionComponent } from "react";

type Type = "TV_SHOWS" | "MOVIES";

interface TopGridProps {
  type: Type;
}

const fetch = async (type: Type) => {
  const res = await api.tmdb.top.query({
    type: type === "TV_SHOWS" ? SearchTypeEnum.TV : SearchTypeEnum.MOVIE,
  });

  return res;
};

const TopGrid: FunctionComponent<TopGridProps> = async ({ type }) => {
  const TopClasses = "h-60";

  const data = await fetch(type);

  if (!data) return null;

  const sortedArray = data?.results?.sort(
    (a, b) => b.popularity - a.popularity,
  );

  if (type === "MOVIES") {
    const movieData = sortedArray as Movie[];

    if (!movieData[0]) return null;

    return (
      <>
        <h1 className="text-4xl font-bold lowercase capitalize-first">
          Top {type.replaceAll("_", " ")} to watch
        </h1>

        <div className="grid grid-cols-3 grid-rows-2 gap-5">
          <div className={cn("col-span-2", TopClasses)}>
            <BannerCard
              id={movieData[0].id.toString()}
              title={movieData[0].title}
              image={
                `https://image.tmdb.org/t/p/original/${movieData[0].backdrop_path}` ||
                ""
              }
              type={type}
              rating={movieData[0].vote_average}
            />
          </div>
          <div className={cn(`col-start-1 row-start-2`, TopClasses)}>
            <BannerCard
              id={movieData[1]!.id.toString()}
              title={movieData[1]!.title}
              image={
                `https://image.tmdb.org/t/p/original/${
                  movieData[1]!.backdrop_path
                }` || ""
              }
              type={type}
              rating={movieData[1]!.vote_average}
            />
          </div>
          <div className={cn("col-start-3 row-start-2", TopClasses)}>
            <BannerCard
              id={movieData[2]!.id.toString()}
              title={movieData[2]!.title}
              image={
                `https://image.tmdb.org/t/p/original/${
                  movieData[2]!.backdrop_path
                }` || ""
              }
              rating={movieData[2]!.vote_average}
              type={type}
            />
          </div>
          <div className={cn("col-start-2 row-start-2", TopClasses)}>
            <BannerCard
              id={movieData[3]!.id.toString()}
              title={movieData[3]!.title}
              image={
                `https://image.tmdb.org/t/p/original/${
                  movieData[3]!.backdrop_path
                }` || ""
              }
              type={type}
              rating={movieData[3]!.vote_average}
            />
          </div>
          <div className={cn("col-start-3 row-start-1", TopClasses)}>
            <BannerCard
              id={movieData[4]!.id.toString()}
              title={movieData[4]!.title}
              image={
                `https://image.tmdb.org/t/p/original/${
                  movieData[4]!.backdrop_path
                }` || ""
              }
              type={type}
              rating={movieData[4]!.vote_average}
            />
          </div>
        </div>
      </>
    );
  }

  if (type === "TV_SHOWS") {
    const tvData = sortedArray as PopularTvShowResult[];

    if (!tvData[0]) return null;

    return (
      <>
        <h1 className="text-4xl font-bold lowercase capitalize-first">
          Top {type.replaceAll("_", " ")} to watch in 2024
        </h1>

        <div className="grid grid-cols-3 grid-rows-2 gap-5">
          <div className={cn("col-span-2", TopClasses)}>
            <BannerCard
              id={tvData[0].id.toString()}
              title={tvData[0].name}
              image={
                `https://image.tmdb.org/t/p/original/${tvData[0].backdrop_path}` ||
                ""
              }
              type={type}
              rating={tvData[0].vote_average}
            />
          </div>
          <div className={cn(`col-start-1 row-start-2`, TopClasses)}>
            <BannerCard
              id={tvData[1]!.id.toString()}
              title={tvData[1]!.name}
              image={
                `https://image.tmdb.org/t/p/original/${
                  tvData[1]!.backdrop_path
                }` || ""
              }
              type={type}
              rating={tvData[1]!.vote_average}
            />
          </div>
          <div className={cn("col-start-3 row-start-2", TopClasses)}>
            <BannerCard
              id={tvData[2]!.id.toString()}
              title={tvData[2]!.name}
              image={
                `https://image.tmdb.org/t/p/original/${
                  tvData[2]!.backdrop_path
                }` || ""
              }
              type={type}
              rating={tvData[2]!.vote_average}
            />
          </div>
          <div className={cn("col-start-2 row-start-2", TopClasses)}>
            <BannerCard
              id={tvData[3]!.id.toString()}
              title={tvData[3]!.name}
              image={
                `https://image.tmdb.org/t/p/original/${
                  tvData[3]!.backdrop_path
                }` || ""
              }
              type={type}
              rating={tvData[3]!.vote_average}
            />
          </div>
          <div className={cn("col-start-3 row-start-1", TopClasses)}>
            <BannerCard
              id={tvData[4]!.id.toString()}
              title={tvData[4]!.name}
              image={
                `https://image.tmdb.org/t/p/original/${
                  tvData[4]!.backdrop_path
                }` || ""
              }
              type={type}
              rating={tvData[4]!.vote_average}
            />
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default TopGrid;
