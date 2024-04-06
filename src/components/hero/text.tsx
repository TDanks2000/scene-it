import { cn } from "@/lib/utils";
import { type FC, type HTMLAttributes, type PropsWithChildren } from "react";

type Props = PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>;

const HeroText: FC<Props> = ({ children, className, ...props }) => {
  return (
    <p
      className={cn(
        "whitespace-pre-wrap break-words break-all text-center text-3xl font-semibold text-white",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default HeroText;
