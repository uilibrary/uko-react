import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { FC, ReactNode, useEffect } from "react";
import rtlPlugin from "stylis-plugin-rtl";

// component props types
type RTLProps = {
  children?: ReactNode;
  direction: string;
};

const cacheRTL = () =>
  createCache({
    key: "rtl",
    prepend: true,
    stylisPlugins: [rtlPlugin],
  });

const RTL: FC<RTLProps> = ({ children, direction }) => {
  // const theme = useTheme();

  useEffect(() => {
    // document.dir = theme.direction;
    document.dir = direction;
  }, [direction]);

  // const cacheRTL = createCache({
  //   key: theme.direction === "rtl" ? "rtl" : "css",
  //   // @ts-ignore
  //   stylisPlugins: theme.direction === "rtl" ? [rtlPlugin] : [],
  // });

  // cacheRTL.compat = true;

  // return <CacheProvider value={cacheRTL()}>{children}</CacheProvider>;

  if (direction === "rtl") {
    return <CacheProvider value={cacheRTL()}>{children}</CacheProvider>;
  }

  return <>{children}</>;
};

export default RTL;
