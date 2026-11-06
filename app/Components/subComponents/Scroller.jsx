import React, { useEffect, useRef } from "react";

// Scroll progress. Desktop: the vertical bar with a percentage on the left edge.
// Phones and tablets: a thin bar along the top, so it never covers content.
// Drawn in white with `mix-blend-difference`, so it shows black over the white page
// and flips to white over black sections (hero card, terminals, stat cards).
const ScrollProgressBar = () => {
  const vertical = useRef(null);
  const horizontal = useRef(null);
  const percentage = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (vertical.current) vertical.current.style.transform = `scaleY(${progress})`;
      if (horizontal.current) horizontal.current.style.transform = `scaleX(${progress})`;
      if (percentage.current) percentage.current.textContent = `${Math.round(progress * 100)}%`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true">
      {/* Phones & tablets */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 mix-blend-difference xl:hidden">
        <div ref={horizontal} className="h-full w-full origin-left scale-x-0 bg-white" />
      </div>

      {/* Desktop */}
      <div className="pointer-events-none fixed left-4 top-1/4 z-40 hidden h-1/2 items-center mix-blend-difference xl:flex">
        <div className="h-full w-4 border-2 border-white">
          <div ref={vertical} className="h-full w-full origin-top scale-y-0 bg-white" />
        </div>
        <span ref={percentage} className="ml-4 text-lg font-bold text-white">
          0%
        </span>
      </div>
    </div>
  );
};

export default ScrollProgressBar;
