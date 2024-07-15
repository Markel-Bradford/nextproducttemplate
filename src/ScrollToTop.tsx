"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

const ScrollToTop: React.FC = () => {
  const router = useRouter();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return null; // This component does not render anything visible
};

export default ScrollToTop;
