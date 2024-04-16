import { StarIcon } from "lucide-react";
import Link from "next/link";
import { type FunctionComponent } from "react";

interface BannerCardProps {
  id: string;
  image: string;
  title: string;
  type: string;
  rating: number;
}

const BannerCard: FunctionComponent<BannerCardProps> = ({
  id,
  image,
  title,
  type,
  rating,
}) => {
  return (
    <Link
      className="group h-full w-full overflow-hidden rounded-lg transition-all hover:opacity-80"
      href={`/info/${type.toLowerCase().includes("tv") ? "tv" : "movie"}/${id}`}
    >
      <div
        className="flex h-full w-full flex-col justify-between overflow-hidden rounded-lg bg-cover bg-center transition-all"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <div className="flex h-full w-full flex-col justify-between bg-gradient-to-tr from-zinc-900 to-transparent p-4 ">
          <div className="flex items-center justify-start">
            <div className="flex flex-row items-center gap-2 rounded-lg bg-black px-3 py-1.5 text-sm font-bold">
              <StarIcon size={16} color="yellow" fill="yellow" />
              {rating.toFixed(1) ?? "??"}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-300">
              {type.toLowerCase().includes("tv") ? "Tv Series" : "Movie"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BannerCard;
