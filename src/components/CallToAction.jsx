import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 sm:px-9 lg:px-[72px]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center gap-4 rounded-card border border-line bg-gradient-to-br from-accent/10 to-accent-2/10 p-10 text-center sm:flex-row sm:gap-6"
      >
        <a
          href="#work"
          data-cursor="disable"
          className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-accent px-8 text-base font-extrabold text-surface transition-transform hover:-translate-y-[3px]"
        >
          View My Work →
        </a>
        <a
          href="https://github.com/renakdata17"
          target="_blank"
          rel="noreferrer"
          data-cursor="disable"
          className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-line bg-white/5 px-8 text-base font-extrabold transition-transform hover:-translate-y-[3px]"
        >
          View GitHub →
        </a>
      </motion.div>
    </section>
  );
}
