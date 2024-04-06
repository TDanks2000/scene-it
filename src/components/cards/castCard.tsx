import Image from "next/image";
import { type FC } from "react";

interface CastCardProps {
  id: number;
  image: string;
  name: string;
  role: string;
}

const CastCard: FC<CastCardProps> = ({ image, id, name, role }) => {
  return (
    <div
      className="o relative flex h-72 w-48 flex-col gap-4 rounded-lg bg-cover bg-center transition-all hover:cursor-pointer hover:bg-white hover:bg-opacity-10 hover:opacity-80"
      key={id}
    >
      <div className="h-[75%] w-full flex-shrink-0 flex-grow-0 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={name}
          width={300}
          height={250}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 overflow-hidden px-2 pb-3">
        <h3 className="line-clamp-1">{name}</h3>
        <p className="line-clamp-1 text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default CastCard;
