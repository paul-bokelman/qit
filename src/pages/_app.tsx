import type { ExtendedAppProps } from "@/types";
import { SessionProvider } from "next-auth/react";
import "tailwindcss/tailwind.css";

import { trpc } from "@/utils/trpc";
import { SEO, LayoutWrapper } from "@/components";

const QueueIt = ({
  Component,
  pageProps: { session, ...pageProps },
}: ExtendedAppProps) => {
  const { layout } = Component;

  return (
    <SessionProvider session={session}>
      <SEO />
      <LayoutWrapper {...layout}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </SessionProvider>
  );
};

export default trpc.withTRPC(QueueIt);
