import { motion } from "framer-motion";

const METRICS = [
  ["5+", "Years remote engineering"],
  ["30+", "Backend/data features shipped"],
  ["CET", "EU timezone, async-first"],
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[860px] px-5 py-[80px] text-center sm:px-9 lg:px-[72px]">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-[18px] inline-flex font-mono text-[13px] uppercase tracking-[0.08em] text-accent"
      >
        About Me
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-[18px] leading-[1.8] text-muted sm:text-[20px]"
      >
        Results-driven backend engineer with 5+ years of professional
        experience shipping production Django/Python applications and
        building scalable data pipelines. Deep expertise in PostgreSQL schema
        design, REST API architecture, Celery async task queues, and
        third-party integrations — with a proven track record of owning
        features end to end in async-first, fully remote teams across
        multiple time zones.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3"
      >
        {METRICS.map(([value, label]) => (
          <div key={label} className="rounded-[22px] border border-line bg-panel p-[18px]">
            <strong className="block text-[26px] text-ink">{value}</strong>
            <span className="text-[13px] text-muted">{label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
