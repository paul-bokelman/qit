import type { Children } from "@/types";
import type { NavigationProps } from ".";
import { Nav } from ".";

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

type LayoutProps = NavigationProps & {};

export const Layout: React.FC<LayoutProps & Children> = ({
  links,
  children,
}) => {
  return (
    <div className="bg-black">
      <Nav links={links} />
      {children}
    </div>
  );
};
