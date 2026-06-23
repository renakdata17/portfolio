import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { timeline } from "../data/timeline";

const getDisplayYear = (period) => {
  if (period.includes("Present")) return "NOW";
  if (period.includes("—")) return period.split("—")[0].trim();
  return period;
};

export default function Timeline() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="mx-auto max-w-[1100px] px-5 py-[100px] sm:px-9 lg:px-[72px]">
      <motion.h2
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mb-16 bg-gradient-to-b from-ink to-accent bg-clip-text text-center text-[40px] font-bold leading-[1.05] text-transparent sm:text-[56px] lg:text-[64px]"
      >
        My career <span className="text-accent-2">&amp;</span>
        <br /> experience
      </motion.h2>

      <div className="relative ml-3 border-l border-line pb-2">
        <span className="absolute -bottom-1.5 -left-[7px] h-3 w-3 animate-[pulse-glow_2s_ease-in-out_infinite] rounded-full bg-accent" />

        {timeline.map((entry, i) => {
          const isOpen = openId === entry.id;
          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-12 pl-10"
            >
              <button onClick={() => setOpenId(isOpen ? null : entry.id)} className="w-full text-left">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="text-[22px] font-semibold tracking-[-0.03em]">{entry.role}</h3>
                    <p className="mt-1 max-w-[520px] text-[16px] leading-[1.7] text-muted">{entry.summary}</p>
                  </div>
                  <span className="font-mono text-[40px] font-bold leading-none text-accent sm:text-[48px]">
                    {getDisplayYear(entry.period)}
                  </span>
                </div>
                <span className="mt-3 inline-block text-sm font-semibold text-accent-2">
                  {isOpen ? "Hide details ↑" : "Show details ↓"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-[1.7] text-muted">
                      {entry.details.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
