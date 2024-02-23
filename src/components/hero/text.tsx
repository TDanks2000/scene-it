import React from "react";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const HeroText: FC<Props> = ({ children, ...props }) => {
  return (
    <p className="text-3xl font-semibold text-white" {...props}>
      {children}
    </p>
  );
};

export default HeroText;
