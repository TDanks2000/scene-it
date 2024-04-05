import { unstable_noStore as noStore } from "next/cache";

import FeatureShowcase from "@/components/featureShowcase";
import Hero from "@/components/hero";
import {
  BarChart4,
  CalendarDays,
  LibraryBig,
  MessageSquareDiff,
  StarIcon,
  UsersRound,
} from "lucide-react";

export default async function Home() {
  noStore();

  const size = 33;

  const features = [
    {
      title: "Collections",
      description:
        "Keep track of your favorite movies and shows. Create lists of your favorite movies and shows.",
      icon: <LibraryBig size={size} />,
      isAvailable: true,
    },
    {
      title: "Rete",
      description:
        "Rate your favorite movies and shows. Share your ratings with others.",
      icon: <StarIcon size={size} />,
      isAvailable: true,
    },
    {
      title: "Review",
      description:
        "Review your favorite movies and shows. tell others what you like or dislike.",
      icon: <MessageSquareDiff size={size} />,
      isAvailable: true,
    },
    {
      title: "Stats",
      description:
        "Do you like stats? see how many movies you have watched, how much time you have sinked into entertainment, and much more.",
      icon: <BarChart4 size={size} />,
      isAvailable: true,
    },
    {
      title: "Community",
      description:
        "A community of users who love shows and movies. Come join us! we would love to have you!",
      icon: <UsersRound size={size} />,
      isAvailable: true,
    },
    {
      title: "Calendar",
      description:
        "See when your favorite movies and shows will be on the big screen.",
      icon: <CalendarDays size={size} />,
      isAvailable: true,
    },
  ];

  return (
    <main className="h-full max-h-full w-full max-w-full">
      <div className="h-[675px] w-screen max-w-full overflow-hidden">
        <Hero />
      </div>

      {/* Feature showcase */}
      <div className="mt-14 flex h-full w-full max-w-full flex-row items-center justify-center bg-black bg-opacity-20 px-16 py-4">
        <FeatureShowcase features={features} />
      </div>
    </main>
  );
}
