import { SearchTypeEnum } from "@/@types";
import { api } from "@/trpc/server";
import { type PopularMovies } from "@tdanks2000/tmdb-wrapper";
import Image from "next/image";
import Link from "next/link";
import HeroText from "./text";

const fetch = async () => {
  const res = (await api.tmdb.popular.query({
    type: SearchTypeEnum.MOVIE,
  })) as PopularMovies;

  const sortedArray = res.results.sort((a, b) => b.popularity - a.popularity);
  return sortedArray[0];
};

const Hero = async () => {
  const data = await fetch();

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* BG */}
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover object-top"
          src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
          draggable={false}
          alt="background"
          fill
        />

        {/* Blending gradient */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent" />

        <div className="absolute bottom-0 left-0 p-5 text-white transition-all hover:underline hover:opacity-80">
          <Link href={`/info/movie/${data!.id}`} className="text-xs ">
            {data?.title} ({new Date(data?.release_date ?? 0).getFullYear()})
          </Link>
        </div>
      </div>

      {/* Hero Text */}
      <div className="relative mt-56 flex w-fit flex-col items-center justify-center gap-7">
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
