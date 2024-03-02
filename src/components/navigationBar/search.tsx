import { Input } from "@/components/ui/input";
import { type FunctionComponent } from "react";

const NavSearch: FunctionComponent<React.HTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return <Input size={35} className="h-11 " {...props} />;
};

export default NavSearch;
