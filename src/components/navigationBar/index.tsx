import NavLink from "@/components/navigationBar/navLink";
import NavSearch from "@/components/navigationBar/search";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { type FunctionComponent } from "react";
// interface NavigationBarProps {}

const NavigationBar: FunctionComponent = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 flex h-[75px] w-full flex-row justify-between gap-5 bg-black bg-opacity-20 px-16 py-2.5 text-2xl">
      <div className="flex flex-row items-center gap-5 overflow-hidden">
        <Link href={"/"} className="focus-within:opacity-80 hover:opacity-80">
          <h1 className="font-bold text-white">Scene It</h1>
        </Link>
        <Separator orientation="vertical" className="bg-white" />

        {/* LINKS */}
        <div className="flex flex-row gap-5">
          <NavLink href={"/search"}>Search</NavLink>
          <NavLink href={"/lists"}>Lists</NavLink>
        </div>
      </div>

      <div className="flex flex-row items-center justify-self-end">
        <NavSearch placeholder="What would you like to search for?" />
      </div>
    </div>
  );
};

export default NavigationBar;
