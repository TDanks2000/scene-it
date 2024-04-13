import DefaultCard from "@/components/cards/defaultCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type Season } from "@tdanks2000/tmdb-wrapper";
import { useMemo, type FunctionComponent } from "react";

interface SeasonComponentProps {
  seasons: Season[];
}

const SeasonsComponent: FunctionComponent<SeasonComponentProps> = ({
  seasons,
}) => {
  const sorted = useMemo(() => {
    if (!seasons) return null;
    return seasons.sort((a, b) => a.season_number - b.season_number);
  }, [seasons]);

  if (!sorted) return null;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Seasons</h3>
      <Carousel
        opts={{
          skipSnaps: false,
          align: "start",
        }}
      >
        <CarouselContent>
          {sorted.map((item) => (
            <CarouselItem
              key={item.id}
              className="md:basis-[16%] lg:basis-[13.5%]"
            >
              <DefaultCard
                key={item.id}
                title={item.name}
                image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                id={item.id}
                description={`Episodes ${item.episode_count}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SeasonsComponent;
