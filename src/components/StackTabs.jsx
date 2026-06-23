import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { stack } from "../data/stack";

export default function StackTabs() {
  const [activeId, setActiveId] = useState(stack[0].id);
  const active = stack.find((s) => s.id === activeId);

  return (
    <section id="stack" className="mx-auto max-w-[1280px] px-5 py-[100px] sm:px-9 lg:px-[72px]">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mb-[42px]"
      >
        <p className="mb-[18px] inline-flex font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
          Technical stack
        </p>
        <h2 className="max-w-[860px] text-[32px] leading-none font-extrabold tracking-[-0.055em] sm:text-[44px] lg:text-[56px]">
          Click a category to see the tools behind it.
        </h2>
      </motion.div>

      <div className="mb-7 flex flex-wrap gap-2">
        {stack.map((category) => {
          const isActive = category.id === activeId;
          return (
            <button
              key={category.id}
              onClick={() => setActiveId(category.id)}
              className={`relative rounded-full px-5 py-[10px] text-sm font-semibold transition-colors ${
                isActive ? "text-surface" : "text-muted hover:text-ink"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="stack-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-[1]">{category.label}</span>
            </button>
          );
        })}
      </div>

      <div className="rounded-card border border-line bg-panel p-7 shadow-card backdrop-blur-xl sm:p-9">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {active.tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                className="rounded-full border border-line bg-white/[0.06] px-4 py-2 text-sm font-medium text-ink"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
