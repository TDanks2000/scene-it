import BannerCard from "@/components/cards/bannerCard";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/server";
import { getTitle } from "@/utils";
import { type FunctionComponent } from "react";

const fetch = async () => {
  const res = await api.anilist.top_rated.query({});

  return res;
};

const TopGridAnime: FunctionComponent = async () => {
  const TopClasses = "h-60";

  const data = await fetch();

  if (!data) return null;

  const sortedAnime = data?.data?.Page?.media?.sort(
    (a, b) => b.popularity - a.popularity,
  );

  return (
    <>
      <h1 className="text-4xl font-bold lowercase capitalize-first">
        Top Anime to watch
      </h1>

      <div className="grid grid-cols-3 grid-rows-2 gap-5">
        <div className={cn("col-span-2", TopClasses)}>
          <BannerCard
            id={sortedAnime[0]!.id.toString()}
            title={getTitle(sortedAnime[0]!.title)}
            image={sortedAnime[0]!.bannerImage ?? ""}
            type={"anime"}
            rating={sortedAnime[0]!.averageScore ?? 0}
          />
        </div>
        <div className={cn(`col-start-1 row-start-2`, TopClasses)}>
          <BannerCard
            id={sortedAnime[1]!.id.toString()}
            title={getTitle(sortedAnime[1]!.title)}
            image={sortedAnime[1]!.bannerImage ?? ""}
            type={"anime"}
            rating={sortedAnime[1]!.averageScore ?? 0}
          />
        </div>
        <div className={cn("col-start-3 row-start-2", TopClasses)}>
          <BannerCard
            id={sortedAnime[2]!.id.toString()}
            title={getTitle(sortedAnime[2]!.title)}
            image={sortedAnime[2]!.bannerImage ?? ""}
            type={"anime"}
            rating={sortedAnime[2]!.averageScore ?? 0}
          />
        </div>
        <div className={cn("col-start-2 row-start-2", TopClasses)}>
          <BannerCard
            id={sortedAnime[3]!.id.toString()}
            title={getTitle(sortedAnime[3]!.title)}
            image={sortedAnime[3]!.bannerImage ?? ""}
            type={"anime"}
            rating={sortedAnime[3]!.averageScore ?? 0}
          />
        </div>
        <div className={cn("col-start-3 row-start-1", TopClasses)}>
          <BannerCard
            id={sortedAnime[4]!.id.toString()}
            title={getTitle(sortedAnime[4]!.title)}
            image={sortedAnime[4]!.bannerImage ?? ""}
            type={"anime"}
            rating={sortedAnime[4]!.averageScore ?? 0}
          />
        </div>
      </div>
    </>
  );
};

export default TopGridAnime;
