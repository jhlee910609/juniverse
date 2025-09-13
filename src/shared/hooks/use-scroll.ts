"use client";

import { useEffect, useState } from "react";

export function useScroll() {
  const [scrollState, setScrollState] = useState({
    isScrolled: false,
    isScrollingUp: false,
    isScrollingDown: false,
    scrollY: 0,
    isVisible: true,
  });

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrollingUp = currentScrollY < lastScrollY;
          const isScrollingDown = currentScrollY > lastScrollY;

          setScrollState({
            isScrolled: currentScrollY > 50,
            isScrollingUp,
            isScrollingDown,
            scrollY: currentScrollY,
            isVisible:
              currentScrollY < 100 || isScrollingUp || Math.abs(currentScrollY - lastScrollY) < 5,
          });

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollState;
}
