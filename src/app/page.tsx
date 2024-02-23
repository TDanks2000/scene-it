import { unstable_noStore as noStore } from "next/cache";

import Hero from "@/components/hero";

export default async function Home() {
  noStore();

  return (
    <main className="h-full max-h-full w-full max-w-full">
      <div className="h-[675px] w-screen max-w-full overflow-hidden">
        <Hero />
      </div>
    </main>
  );
}
