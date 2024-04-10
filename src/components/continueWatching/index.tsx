import ContineWatchingCard from "@/components/cards/continueWatchingCard";
import { FastForwardIcon } from "lucide-react";
import { type FunctionComponent } from "react";

const ContinueWatching: FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="flex items-center gap-4 text-2xl font-bold">
        <FastForwardIcon size={29} />
        Next Up
      </h1>

      <div className="flex w-full items-center gap-4">
        <ContineWatchingCard
          name="The flash"
          image={
            "https://image.tmdb.org/t/p/original/goqjRP9UBEf6ztinVt46FdoUwDC.jpg"
          }
          id={1}
          key={1}
          season={1}
          episode={5}
        />
        <ContineWatchingCard
          name="The flash"
          image={
            "https://image.tmdb.org/t/p/original/goqjRP9UBEf6ztinVt46FdoUwDC.jpg"
          }
          id={1}
          key={1}
          season={1}
          episode={5}
        />
        <ContineWatchingCard
          name="The flash"
          image={
            "https://image.tmdb.org/t/p/original/goqjRP9UBEf6ztinVt46FdoUwDC.jpg"
          }
          id={1}
          key={1}
          season={1}
          episode={5}
        />
        <ContineWatchingCard
          name="The flash"
          image={
            "https://image.tmdb.org/t/p/original/goqjRP9UBEf6ztinVt46FdoUwDC.jpg"
          }
          id={1}
          key={1}
          season={1}
          episode={5}
        />
      </div>
    </div>
  );
};

export default ContinueWatching;
