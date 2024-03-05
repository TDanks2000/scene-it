import { type FC } from "react";

interface CastCardProps {
  image: string;
}

const CastCard: FC<CastCardProps> = ({ image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
    ></div>
  );
};

export default CastCard;
