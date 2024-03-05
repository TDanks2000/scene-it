import MetaInfoText from "@/components/info/metaInfoText";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMemo, type FunctionComponent } from "react";

import { textSanitizer } from "@/utils";
import { Check, Heart, LibraryBig } from "lucide-react";

type InfoTopProps = {
  title: string;
  cover: string;
  type: "movie" | "anime" | "tv";
  episodes?: number;
  year: number;
  genres: {
    name: string;
    id?: number;
  }[];
  description: string;
} & (
  | {
      type: "anime" | "tv";
      episodes: number;
    }
  | {
      type: "movie";
    }
);

const InfoTop: FunctionComponent<InfoTopProps> = ({
  cover,
  title,
  type,
  episodes,
  year,
  genres,
  description,
}) => {
  const splicedGenres = useMemo(() => {
    return genres.splice(0, type === "movie" ? 3 : 2);
  }, [genres, type]);

  return (
    <div className="h-[675px] w-full text-white">
      <div className="absolute inset-0 ">
        <Image
          className="object-cover object-top"
          src={cover}
          draggable={false}
          alt="background"
          fill
        />
        {/* Blending gradient */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative mt-20 flex h-full w-full flex-col items-start justify-center gap-6 px-16">
        <div className="mt-3 flex w-full flex-col items-start justify-start gap-4">
          {/* media type */}

          <div className="inline-flex gap-5">
            <Button variant={"secondary"}>
              <span className="text-xl capitalize-first">{type}</span>
            </Button>
            <Button variant={"secondary"}>
              <span className="text-xl capitalize-first">Trailer</span>
            </Button>
          </div>

          <h1 className="capa h-full w-full truncate text-5xl capitalize leading-tight">
            {title}
          </h1>
          <div className="flex items-center justify-start gap-3 text-[16px]">
            {Boolean(!!episodes) && (
              <MetaInfoText>{episodes ?? 0} Episodes</MetaInfoText>
            )}
            <MetaInfoText>{year ?? 0}</MetaInfoText>
            {splicedGenres.map((g, i) => {
              return <MetaInfoText key={i}>{g.name}</MetaInfoText>;
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="relative flex gap-5">
          <Button
            key={"watch-status"}
            variant={"secondary"}
            className="gap-2"
            size={"default"}
          >
            <Check />
            <span>Mark as watched</span>
          </Button>
          <Button
            key={"library"}
            variant={"secondary"}
            size={"icon"}
            className="gap-2"
          >
            <LibraryBig />
          </Button>
          <Button
            key={"like"}
            variant={"secondary"}
            size={"icon"}
            className="gap-2"
          >
            <Heart />
          </Button>
        </div>

        <div className="mt-5 flex w-full flex-col gap-1.5">
          <span className="w-full text-xl font-bold">Summary</span>
          <p className="line-clamp-4">{textSanitizer(description)}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoTop;
