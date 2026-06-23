import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/projects";

const slideVariants = {
  enter: (direction) => ({
    x: direction === 0 ? 0 : direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? -60 : direction < 0 ? 60 : 0,
    opacity: 0,
  }),
};

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [direction, setDirection] = useState(0);

  const open = (i) => {
    setDirection(0);
    setActiveIndex(i);
  };
  const close = () => setActiveIndex(null);
  const step = (delta) => {
    setDirection(delta);
    setActiveIndex((i) => (i + delta + projects.length) % projects.length);
  };

  const active = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <section id="projects" className="mx-auto max-w-[1280px] px-5 py-[100px] sm:px-9 lg:px-[72px]">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mb-[42px]"
      >
        <p className="mb-[18px] inline-flex font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
          From github.com/renakdata17
        </p>
        <h2 className="max-w-[860px] text-[32px] leading-none font-extrabold tracking-[-0.055em] sm:text-[44px] lg:text-[56px]">
          Side projects where I dig into the internals myself.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.button
            key={p.id}
            onClick={() => open(i)}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className={`rounded-[22px] border p-6 text-left backdrop-blur-xl transition-colors ${
              activeIndex === i
                ? "border-accent-2/60 bg-panel-strong"
                : "border-line bg-panel hover:border-accent-2/45 hover:bg-panel-strong"
            }`}
          >
            <h3 className="mb-2 font-mono text-[17px] font-semibold tracking-[-0.02em] text-ink">
              {p.name}
            </h3>
            <p className="text-sm leading-[1.6] text-muted">{p.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-white/[0.06] px-[10px] py-1 font-mono text-[11px] text-accent-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mt-7 overflow-hidden"
          >
            <div className="relative rounded-card border border-accent-2/40 bg-panel-strong p-7 shadow-card backdrop-blur-xl sm:p-9">
              <button
                onClick={close}
                aria-label="Close project detail"
                className="absolute right-6 top-6 text-muted transition-colors hover:text-ink"
              >
                ✕
              </button>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <h3 className="mb-3 font-mono text-[22px] font-bold tracking-[-0.02em]">
                    {active.name}
                  </h3>
                  <p className="mb-5 max-w-[640px] text-[16px] leading-[1.75] text-muted">
                    {active.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {active.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-white/[0.06] px-3 py-1 font-mono text-xs text-accent-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-2 px-5 py-3 text-sm font-extrabold text-[#031016] transition-transform hover:-translate-y-0.5"
                  >
                    View on GitHub ↗
                  </a>
                </motion.div>
              </AnimatePresence>

              <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
                <button
                  onClick={() => step(-1)}
                  className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-muted transition-colors hover:border-accent-2/50 hover:text-ink"
                >
                  ← Previous
                </button>
                <span className="font-mono text-xs text-muted">
                  {activeIndex + 1} / {projects.length}
                </span>
                <button
                  onClick={() => step(1)}
                  className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-muted transition-colors hover:border-accent-2/50 hover:text-ink"
                >
                  Next →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
