import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ITEMS = [
  {
    id: "ai-handles",
    title: "Where AI accelerates delivery",
    body: "I use Claude Code and AI assistants daily for implementation speed, refactoring, debugging, test scaffolding, and documentation. They let me move from spec to working code faster without cutting corners on the parts that matter.",
  },
  {
    id: "human-led",
    title: "What stays human-led",
    body: "Database design, architecture decisions, security-sensitive code, and production review stay under careful manual control. AI output is treated like any other untrusted input until a human has checked it.",
  },
];

export default function AIApproach() {
  const [openId, setOpenId] = useState(ITEMS[0].id);

  return (
    <section className="mx-auto max-w-[1280px] px-5 py-[100px] sm:px-9 lg:px-[72px]">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="rounded-card border border-line bg-gradient-to-br from-white/[0.12] to-white/[0.045] p-7 shadow-card backdrop-blur-xl sm:p-9"
      >
        <p className="mb-[18px] inline-flex font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
          How I use AI coding tools
        </p>
        <h2 className="mb-7 max-w-[860px] text-[32px] leading-none font-extrabold tracking-[-0.055em] sm:text-[40px]">
          Fast delivery without blind automation.
        </h2>

        <div className="space-y-3">
          {ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="rounded-2xl border border-line bg-white/[0.04]">
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-semibold text-ink">{item.title}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-xl text-accent"
                  >
                    +
                  </motion.span>
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
                      <p className="px-5 pb-5 text-[16px] leading-[1.75] text-muted">
                        {item.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
