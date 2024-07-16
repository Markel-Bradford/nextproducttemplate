import { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../Styles/globals.css"; // Make sure the path is correct
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
