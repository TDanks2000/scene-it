import { cn } from "@/lib/utils";
import { type FunctionComponent } from "react";

interface FeatureCardItemprops {
  title: string;
  description: string;
  icon: JSX.Element;
  isAvailable: boolean;
}

const FeatureCard: FunctionComponent<FeatureCardItemprops> = ({
  title,
  description,
  icon,
  isAvailable,
}) => {
  return (
    <div className="flex w-full flex-row items-center justify-center gap-5 rounded-lg p-3 transition-all hover:cursor-pointer hover:bg-white hover:bg-opacity-10 hover:opacity-80">
      {/* LEFT */}
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full",
        )}
      >
        {icon}
      </div>
      {/* RIGHT */}
      <div className="flex flex-col items-start justify-center gap-1">
        <h3 className={cn("text-lg font-semibold")}>{title}</h3>
        <p className={cn("text-md")}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
