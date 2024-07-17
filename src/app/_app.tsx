import { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
import ScrollToTop from "@/ScrollToTop";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ScrollToTop />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
