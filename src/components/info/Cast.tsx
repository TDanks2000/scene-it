import CastCard from "@/components/cards/castCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type FC } from "react";

interface CastProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

const Cast: FC<CastProps> = ({ data }) => {
  return (
    <Carousel>
      <CarouselContent>
        {data.map((item) => {
          return (
            <CarouselItem key={item.id}>
              <CastCard image={"test"} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default Cast;
