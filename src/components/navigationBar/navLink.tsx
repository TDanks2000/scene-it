import Link, { type LinkProps } from "next/link";
import { type FunctionComponent } from "react";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
}

const NavLink: FunctionComponent<NavLinkProps> = ({ children, ...props }) => {
  return (
    <Link {...props} className="text-white transition-all hover:opacity-80">
      {children}
    </Link>
  );
};

export default NavLink;
