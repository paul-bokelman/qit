import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "tailwindcss/tailwind.css";

import { trpc } from "@/utils/trpc";

import SEO from "@/components/SEO";

const QueueIt: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <SEO />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(QueueIt);
