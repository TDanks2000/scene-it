import { type FC, type HTMLAttributes, type PropsWithChildren } from "react";

type Props = PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>;

const HeroText: FC<Props> = ({ children, ...props }) => {
  return (
    <p
      className="whitespace-pre-wrap break-words break-all text-center text-3xl font-semibold text-white"
      {...props}
    >
      {children}
    </p>
  );
};

export default HeroText;
