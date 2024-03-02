import InfoTop from "@/components/info/infoTop";
import { api } from "@/trpc/server";
import { getTitle } from "@/utils";
import { type FC } from "react";

interface AnimeInfoProps {
  id: string;
}

const fetch = async (id: string) => {
  const data = await api.anilist.info.query(parseInt(id));

  return data;
};

const AnimeInfoContainer: FC<AnimeInfoProps> = async ({ id }) => {
  const data = await fetch(id);

  if (!data?.data?.Media) return null;

  const media = data.data.Media;

  return (
    <div>
      <InfoTop
        cover={media.bannerImage}
        title={getTitle(media.title)}
        type={media.type as "anime"}
        episodes={media.episodes}
        year={media.seasonYear ?? media.startDate ?? 0}
        genres={media.genres.map((genre) => ({ name: genre }))}
        description={media.description}
      />
    </div>
  );
};

export default AnimeInfoContainer;
