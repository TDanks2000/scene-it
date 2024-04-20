import CastCard from "@/components/cards/castCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { MediaCharacter } from "@tdanks2000/anilist-wrapper";
import { Cast } from "@tdanks2000/tmdb-wrapper";
import { type FC } from "react";

type CastProps =
  | {
      type: "tv" | "movie";
      data: Cast[];
    }
  | {
      type: "anime";
      data: MediaCharacter[];
    };

const Cast: FC<CastProps> = ({ data, type }) => {
  if (type === "anime") {
    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Cast</h2>
        <Carousel
          opts={{
            skipSnaps: false,
            align: "start",
          }}
        >
          <CarouselContent>
            {data.map((item) => {
              const voiceActor = item.voiceActors[0];

              return (
                <CarouselItem
                  key={voiceActor?.id}
                  className="lg:basis-1/7 md:basis-[15%]"
                >
                  <CastCard
                    image={voiceActor?.image.large ?? voiceActor?.image.medium}
                    key={voiceActor?.id}
                    role={item?.node?.name.userPreferred ?? "??"}
                    name={voiceActor?.name.userPreferred}
                    id={voiceActor?.id}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Cast</h2>
        <Carousel
          opts={{
            skipSnaps: false,
            align: "start",
          }}
        >
          <CarouselContent>
            {data.map((item) => {
              return (
                <CarouselItem
                  key={item.id}
                  className="lg:basis-1/7 md:basis-[15%]"
                >
                  <CastCard
                    image={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                    key={item.id}
                    role={item.character}
                    name={item.name}
                    id={item.id}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    );
  }
};

export default Cast;
