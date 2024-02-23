import Image from "next/image";
import HeroText from "./text";

const Hero = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* BG */}
      <div className="absolute inset-0">
        <Image
          className="object-cover object-top"
          src="https://image.tmdb.org/t/p/original/4wtuXhDpvJRWDk03g8YLqtTUzRo.jpg"
          draggable={false}
          alt="background"
          width={1920}
          height={1080}
        />
        {/* Blending gradient */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Hero Text */}
      <div className="relative flex w-fit flex-col items-center justify-center gap-7 pt-80">
        <div className="flex flex-col items-center justify-center gap-2">
          <HeroText>Track your favorite movies, shows, and anime.</HeroText>
          <HeroText>Discover what to watch next.</HeroText>
          <HeroText>Share your ratings with friends.</HeroText>
        </div>
        {/* Sign up button */}
        <button className="rounded-lg bg-white px-4 py-2 text-lg font-semibold text-black transition-all hover:scale-105 hover:opacity-80">
          Start tracking now
        </button>
      </div>
    </div>
  );
};

export default Hero;
