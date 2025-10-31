import { useState, useEffect, useRef } from "react";

export default function useViewport( {
  breakpoint = { mobile: 480, tablet: 768, smallDesktop: 1024, largeDesktop: 1280 },
  debounceMs = 150
} = {}) {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const timeouteRef = useRef(null);
  
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      if (debounceMs > 0) {
        clearTimeout(timeouteRef.current);
        timeouteRef.current = setTimeout(() => {
          setWidth(window.innerWidth);
        }, debounceMs);
      } else {
        setWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeouteRef.current);
    };
  }, [debounceMs]);

  const isMobile = width <= breakpoint.mobile;
  const isTablet = width > breakpoint.mobile && width <= breakpoint.tablet;
  const isSmallDesktop = width > breakpoint.tablet && width <= breakpoint.smallDesktop;
  const isLargeDesktop = width > breakpoint.smallDesktop;

  const deviceType = isMobile
    ? "mobile": isTablet
    ? "tablet" : isSmallDesktop
    ? "small-desktop" : "large-desktop";

    return { width, isMobile, isTablet, isSmallDesktop, isLargeDesktop, deviceType} ;

}
  

  