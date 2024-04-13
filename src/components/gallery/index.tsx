import { type Image as TMDBImage } from "@tdanks2000/tmdb-wrapper";
import Image from "next/image";
import { type FunctionComponent } from "react";

interface ImageGalleryProps {
  images: {
    backdrops: TMDBImage[];
    posters: TMDBImage[];
    logos: TMDBImage[];
  };
}

const ImageGallery: FunctionComponent<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="flex flex-row gap-5 overflow-hidden">
      {images.backdrops.map((image) => (
        <Image
          key={image.file_path}
          src={`https://image.tmdb.org/t/p/original/${image.file_path}`}
          alt={image.file_path}
          className="overflow-hidden rounded-lg object-cover"
          width={300}
          height={300}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
