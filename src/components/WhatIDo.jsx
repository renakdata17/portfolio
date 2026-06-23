import { useState } from "react";
import { motion } from "framer-motion";
import { whatIDo } from "../data/stack";

export default function WhatIDo() {
  const [activeId, setActiveId] = useState(whatIDo[0].id);

  return (
    <section className="mx-auto max-w-[1280px] px-5 py-[100px] sm:px-9 lg:px-[72px]">
      <motion.h2
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mb-12 text-[40px] font-bold leading-[0.95] tracking-[-0.04em] sm:text-[56px] lg:text-[72px]"
      >
        W<span className="italic">HAT</span> I{" "}
        <span className="text-accent">DO</span>
      </motion.h2>

      <div className="flex flex-col gap-4 sm:flex-row">
        {whatIDo.map((item) => {
          const isActive = activeId === item.id;
          return (
            <motion.button
              key={item.id}
              onMouseEnter={() => setActiveId(item.id)}
              onClick={() => setActiveId(item.id)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={`relative overflow-hidden rounded-card border p-7 text-left shadow-card backdrop-blur-xl transition-all duration-500 sm:p-9 ${
                isActive
                  ? "flex-[1.6] border-accent/50 bg-panel-strong"
                  : "flex-1 border-line bg-panel"
              }`}
            >
              <h3 className="text-[26px] font-bold tracking-[-0.03em]">{item.title}</h3>
              <h4 className="mt-1 text-sm font-medium text-accent-2">{item.description}</h4>

              <motion.div
                animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-[15px] leading-[1.75] text-muted">{item.details}</p>
                <h5 className="mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-muted/70">
                  Skillset &amp; tools
                </h5>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-line bg-white/[0.06] px-3 py-1 text-xs font-medium text-ink"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
