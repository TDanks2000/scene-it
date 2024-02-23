import { Separator } from "@/components/ui/separator";
import Link from "next/link";
// interface NavigationBarProps {}

const NavigationBar: FunctionComponent<> = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 flex h-[75px] w-full flex-row items-center gap-5 bg-black bg-opacity-20 px-16 py-2.5 text-2xl">
      <h1 className="font-bold text-white">Scene It</h1>
      <Separator orientation="vertical" />

      {/* LINKS */}
      <div className="flex flex-row gap-5">
        <Link
          href={"/search"}
          className="text-white transition-all hover:opacity-80"
        >
          Search
        </Link>
        <Link
          href={"/lists"}
          className="text-white transition-all hover:opacity-80"
        >
          Lists
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
