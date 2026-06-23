import { useRef } from "react";

export default function HorizontalRail({ children }) {
  const railRef = useRef(null);

  const scrollByAmount = (dir) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: dir * rail.clientWidth * 0.7, behavior: "smooth" });
  };

  const handleWheel = (e) => {
    const rail = railRef.current;
    if (!rail) return;
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    e.preventDefault();
    rail.scrollLeft += e.deltaY;
  };

  return (
    <div className="relative">
      <div
        ref={railRef}
        onWheel={handleWheel}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3"
      >
        {children}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-surface to-transparent sm:w-14" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-surface to-transparent sm:w-14" />

      <div className="mt-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          aria-label="Scroll left"
          data-cursor="disable"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/5 text-ink transition-colors hover:border-accent/50 hover:text-accent"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          aria-label="Scroll right"
          data-cursor="disable"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/5 text-ink transition-colors hover:border-accent/50 hover:text-accent"
        >
          →
        </button>
      </div>
    </div>
  );
}
