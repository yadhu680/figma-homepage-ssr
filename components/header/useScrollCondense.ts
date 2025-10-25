"use client";
import { useEffect, useRef, useState } from "react";

export function useScrollCondense(topStripVisible: boolean) {
  const [condensed, setCondensed] = useState(false);
  const [showTopStrip, setShowTopStrip] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!topStripVisible) {
            lastScrollY.current = currentY;
            ticking = false;
            return;
          }
          const scrollingDown = currentY > lastScrollY.current;
          if (scrollingDown && currentY > 36) {
            setShowTopStrip(false);
            setCondensed(true);
          } else {
            setShowTopStrip(true);
            setCondensed(currentY > 36);
          }
          lastScrollY.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [topStripVisible]);

  return { condensed, showTopStrip, setShowTopStrip };
}
