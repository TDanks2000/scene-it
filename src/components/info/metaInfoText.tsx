import {
  type FunctionComponent,
  type HtmlHTMLAttributes,
  type PropsWithChildren,
} from "react";

type MetaInfoTextProps = PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>;

const MetaInfoText: FunctionComponent<MetaInfoTextProps> = ({
  children,
  ...props
}) => {
  return (
    <div
      className="flex items-center after:ml-4 after:h-1 after:w-1 after:rounded-full after:bg-white  last-of-type:after:hidden"
      {...props}
    >
      {children}
    </div>
  );
};

export default MetaInfoText;
