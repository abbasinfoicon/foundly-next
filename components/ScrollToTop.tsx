"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollableHeight > 0
          ? Math.min(100, Math.max(0, (scrollTop / scrollableHeight) * 100))
          : 0;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 180);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={`Scroll to top, ${Math.round(scrollProgress)}% page progress`}
      title="Back to top"
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0a0a0a] shadow-[0_4px_16px_rgba(10,10,10,0.12)] transition-all duration-300 hover:scale-105 hover:text-[var(--primary-color,#6958f5)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--primary-color,#6958f5)]/25 sm:bottom-8 sm:right-8 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      style={{
        background: `linear-gradient(white, white) padding-box, conic-gradient(var(--primary-color, #6958f5) ${scrollProgress}%, #e5e7eb ${scrollProgress}%) border-box`,
        border: "2px solid transparent",
      }}
    >
      <FiArrowUp className="h-[22px] w-[22px]" strokeWidth={2.5} />
    </button>
  );
}
