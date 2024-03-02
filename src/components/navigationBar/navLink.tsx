import Link, { type LinkProps } from "next/link";
import { type FunctionComponent, type PropsWithChildren } from "react";

type NavLinkProps = PropsWithChildren<LinkProps>;

const NavLink: FunctionComponent<NavLinkProps> = ({ children, ...props }) => {
  return (
    <Link {...props} className="text-white transition-all hover:opacity-80">
      {children}
    </Link>
  );
};

export default NavLink;
