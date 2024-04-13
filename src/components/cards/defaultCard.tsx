import { type FunctionComponent } from "react";

interface DefaultCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

const DefaultCard: FunctionComponent<DefaultCardProps> = ({
  description,
  id,
  image,
  title,
}) => {
  return (
    <div
      className="group relative h-[250px] w-[170px] cursor-pointer overflow-hidden rounded-md bg-cover"
      key={id}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Show on hover */}
      <div className="absolute -bottom-[251px] left-0 right-0 flex h-full w-full flex-col justify-end overflow-hidden bg-gradient-to-t from-zinc-950 to-transparent p-3 transition-all group-hover:bottom-0">
        <div className="flex-col gap-2 p-2">
          <h3 className="line-clamp-2 text-lg text-white">{title}</h3>
          <p className="line-clamp-2 text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DefaultCard;
