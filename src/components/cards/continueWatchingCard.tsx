import { type FC } from "react";

interface CastCardProps {
  id: number;
  image: string;
  name: string;
  season: number;
  episode: number;
}

const ContineWatchingCard: FC<CastCardProps> = ({
  image,
  id,
  name,
  season,
  episode,
}) => {
  return (
    <div
      className="o relative flex h-48 w-72 cursor-pointer flex-col gap-4 overflow-hidden rounded-lg bg-cover bg-center transition-all hover:opacity-80"
      key={id}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex h-full w-full flex-col items-start justify-end overflow-hidden p-4 pb-5">
        <h3 className="line-clamp-2 text-lg text-white">{name}</h3>
        <p className="line-clamp-1 text-sm text-gray-300">
          Season {season} - Episode {episode}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 w-full overflow-hidden bg-white bg-opacity-25">
        <div className="absolute bottom-0 left-0 right-0 h-full w-[50%] bg-red-500" />
      </div>
    </div>
  );
};

export default ContineWatchingCard;
