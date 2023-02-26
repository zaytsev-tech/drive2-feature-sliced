import type { AppProps } from "next/app";
import "shared/styles/normalize.css";
import "shared/styles/fonts.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
