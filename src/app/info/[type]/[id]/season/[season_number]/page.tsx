import { SearchTypeEnum } from "@/@types";
import { api } from "@/trpc/server";
import { redirect } from "next/navigation";
import { cache, type FC } from "react";

interface InfoPageProps {
  params: {
    type: "movie" | "tv" | "anime";
    id: string;
    season_number: string;
  };
}

const fetch = cache(async (type: "movie" | "tv", id: string) => {
  const data = await api.tmdb.info.query({
    id: parseInt(id),
    type: type === "movie" ? SearchTypeEnum.MOVIE : SearchTypeEnum.TV,
  });

  return data;
});

const InfoSeasonPage: FC<InfoPageProps> = ({ params }) => {
  const { id, type, season_number } = params;

  console.log(season_number)

  if (type === "movie") return redirect(`/info/${type}/${id}`);

  return <div></div>;
};

export default InfoSeasonPage;
