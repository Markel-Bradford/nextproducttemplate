// components/ScrollToTop.tsx
"use client"; // This directive ensures the component is rendered client-side

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component does not render anything visible
};

export default ScrollToTop;
