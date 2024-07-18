// src/app/_app.tsx
import { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import FontAwesome styles
import '../styles/globals.css'; // Import global CSS
import ScrollToTop from '@/ScrollToTop'; // Import ScrollToTop component

config.autoAddCss = false; // Disable auto-adding FontAwesome CSS

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ScrollToTop />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
