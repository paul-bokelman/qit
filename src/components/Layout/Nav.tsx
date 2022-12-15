import Link from "next/link";
import { Logo } from "@/components";

export type NavigationLinks = "sign in" | "my room" | "join room";

export type NavigationProps = {
  links?: Array<NavigationLinks>;
};

export const Nav: React.FC<NavigationProps> = ({
  links: activeLinks = ["sign in"],
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
    <div className="absolute w-full">
      <div className="mx-auto max-w-[720px] px-16 pt-12">
        <div className="relative flex items-center justify-between">
          <Logo />
          {visibleLinks.map(([link, dest]) => (
            <Link key={link} href={dest} className="mr-2 capitalize text-white">
              {link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
