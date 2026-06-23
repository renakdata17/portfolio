import { motion } from "framer-motion";

const ITEMS = [
  "Django REST Framework",
  "PostgreSQL",
  "Celery",
  "Airflow",
  "Claude Code",
  "LangChain",
];

export default function TrustStrip() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-10 max-w-[1180px] overflow-hidden rounded-full border border-line bg-white/[0.045] px-5 py-[18px]"
    >
      <motion.div
        className="flex w-max gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap font-mono text-[13px] text-muted"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
