import { AnimeInfoContainer, MovieInfoContainer } from "@/containers";
import { redirect } from "next/navigation";
import { type FC } from "react";

interface InfoPageProps {
  params: {
    type: "movie" | "tv" | "anime";
    id: string;
  };
}

const InfoPage: FC<InfoPageProps> = ({ params }) => {
  const { type, id } = params;

  switch (type) {
    case "movie":
    case "tv":
      return <MovieInfoContainer type={type} id={id} />;
    case "anime":
      return <AnimeInfoContainer id={id} />;
    default:
      return redirect("/");
  }
};

export default InfoPage;
