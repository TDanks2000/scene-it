import CastCard from "@/components/cards/castCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Cast } from "@tdanks2000/tmdb-wrapper";
import { type FC } from "react";

interface CastProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Cast[];
}

const Cast: FC<CastProps> = ({ data }) => {
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
};

export default Cast;
