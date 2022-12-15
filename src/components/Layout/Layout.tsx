import Link from "next/link";
import type { Children } from "@/types";

type NavigationLinks = "sign in" | "my room" | "join room";

export type LayoutWrapperProps =
  | ({
      omitLayout?: false;
    } & LayoutProps)
  | { omitLayout: true };

export const LayoutWrapper: React.FC<LayoutWrapperProps & Children> = (
  props
) => {
  const { omitLayout, children } = props;

  if (!omitLayout) return <Layout links={props.links}>{children}</Layout>;

  return <>{children}</>;
};

type LayoutProps = {
  links?: Array<NavigationLinks>;
};

export const Layout: React.FC<LayoutProps & Children> = ({
  links: activeLinks = ["sign in"],
  children,
}) => {
  const links = {
    "sign in": "/auth/signin",
    "my room": "/room",
    "join room": "/room/join",
  } as const;

  const visibleLinks = Object.entries(links).filter(([link]) =>
    activeLinks.includes(link as NavigationLinks)
  );

  return (
    <div>
      <div>
        {visibleLinks.map(([link, dest]) => (
          <Link
            key={link}
            href={dest}
            className="mr-2 capitalize text-blue-500 underline"
          >
            {link}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
};
