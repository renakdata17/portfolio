import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { caseStudies } from "../data/caseStudies";

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

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [direction, setDirection] = useState(0);

  const open = (i) => {
    setDirection(0);
    setActiveIndex(i);
  };
  const close = () => setActiveIndex(null);
  const step = (delta) => {
    setDirection(delta);
    setActiveIndex((i) => (i + delta + caseStudies.length) % caseStudies.length);
  };

  const active = activeIndex !== null ? caseStudies[activeIndex] : null;

  return (
    <section id="case-studies" className="mx-auto max-w-[1280px] px-5 py-[100px] sm:px-9 lg:px-[72px]">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mb-[42px]"
      >
        <p className="mb-[18px] inline-flex font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
          Selected technical stories
        </p>
        <h2 className="max-w-[860px] text-[32px] leading-none font-extrabold tracking-[-0.055em] sm:text-[44px] lg:text-[56px]">
          Case-study driven proof, not a generic portfolio.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
        {caseStudies.map((cs, i) => (
          <motion.button
            key={cs.id}
            onClick={() => open(i)}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -8 }}
            className={`rounded-card border p-7 text-left shadow-card backdrop-blur-xl transition-colors ${
              activeIndex === i
                ? "border-accent/60 bg-panel-strong"
                : "border-line bg-gradient-to-br from-white/[0.12] to-white/[0.045] hover:border-accent/45 hover:bg-panel-strong"
            }`}
          >
            <div className="mb-6 font-mono text-accent">{cs.index}</div>
            <h3 className="mb-2 text-[22px] font-semibold tracking-[-0.03em]">{cs.title}</h3>
            <p className="text-[17px] leading-[1.75] text-muted">{cs.summary}</p>
            <div className="mt-[22px] flex flex-wrap gap-2">
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent px-[10px] py-[7px] text-[12px] font-extrabold text-surface"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="mt-5 inline-block text-sm font-semibold text-accent-2">
              {activeIndex === i ? "Viewing details ↓" : "Read the full story →"}
            </span>
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
            <div className="relative rounded-card border border-accent/40 bg-panel-strong p-7 shadow-card backdrop-blur-xl sm:p-9">
              <button
                onClick={close}
                aria-label="Close case study detail"
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
                  <div className="mb-1 font-mono text-sm text-accent">{active.index}</div>
                  <h3 className="mb-4 text-[26px] font-bold tracking-[-0.03em]">{active.title}</h3>

                  <div className="mb-5">
                    <p className="mb-1 text-sm font-semibold text-accent-2">The challenge</p>
                    <p className="text-[16px] leading-[1.75] text-muted">{active.challenge}</p>
                  </div>

                  <div className="mb-5">
                    <p className="mb-2 text-sm font-semibold text-accent-2">The approach</p>
                    <ul className="list-disc space-y-2 pl-5 text-[16px] leading-[1.7] text-muted">
                      {active.approach.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-1 text-sm font-semibold text-accent-2">The outcome</p>
                    <p className="text-[16px] leading-[1.75] text-muted">{active.outcome}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
                <button
                  onClick={() => step(-1)}
                  className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-muted transition-colors hover:border-accent/50 hover:text-ink"
                >
                  ← Previous
                </button>
                <span className="font-mono text-xs text-muted">
                  {activeIndex + 1} / {caseStudies.length}
                </span>
                <button
                  onClick={() => step(1)}
                  className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-muted transition-colors hover:border-accent/50 hover:text-ink"
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
