import { type FunctionComponent } from "react";

const NavSearch: FunctionComponent<React.HTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return <input {...props} />;
};

export default NavSearch;
