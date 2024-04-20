import { redirect } from "next/navigation";
import { type FC } from "react";

interface InfoPageProps {
  params: {
    type: "movie" | "tv" | "anime";
    id: string;
  };
}

const InfoEpisodePage: FC<InfoPageProps> = ({ params }) => {
  const { id, type } = params;

  if (type === "movie") return redirect(`/info/${type}/${id}`);

  return <div></div>;
};

export default InfoEpisodePage;
