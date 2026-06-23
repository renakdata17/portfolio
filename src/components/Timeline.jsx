import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { timeline } from "../data/timeline";

export default function Timeline() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="mx-auto max-w-[1280px] px-5 py-[100px] sm:px-9 lg:px-[72px]">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mb-[42px]"
      >
        <p className="mb-[18px] inline-flex font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
          Experience
        </p>
        <h2 className="max-w-[860px] text-[32px] leading-none font-extrabold tracking-[-0.055em] sm:text-[44px] lg:text-[56px]">
          From data accuracy to production backend ownership.
        </h2>
      </motion.div>

      <div className="ml-3 border-l border-line">
        {timeline.map((entry, i) => {
          const isOpen = openId === entry.id;
          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-[34px] pl-[34px]"
            >
              <span className="absolute -left-[8px] top-1 h-[14px] w-[14px] rounded-full bg-accent" />
              <button
                onClick={() => setOpenId(isOpen ? null : entry.id)}
                className="text-left"
              >
                <span className="font-mono text-[13px] text-accent">{entry.period}</span>
                <h3 className="mt-1 text-[22px] font-semibold tracking-[-0.03em]">{entry.role}</h3>
                <p className="mt-1 text-[17px] leading-[1.75] text-muted">{entry.summary}</p>
                <span className="mt-2 inline-block text-sm font-semibold text-accent-2">
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
