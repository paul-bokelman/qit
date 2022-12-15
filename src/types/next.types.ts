import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import type { NextPage } from "next";
import type { LayoutWrapperProps } from "@/components";

export type NextPageWithConfig<P = unknown, IP = P> = NextPage<P, IP> & {
  layout?: LayoutWrapperProps;
};

export type ExtendedAppProps<P = unknown> = AppProps<P> & {
  Component: NextPageWithConfig;
  pageProps: { session: Session } & P;
};
