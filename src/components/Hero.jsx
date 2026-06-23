import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid min-h-[88vh] max-w-[1280px] grid-cols-1 items-center gap-16 px-5 py-[100px] sm:px-9 lg:grid-cols-[1.05fr_0.95fr] lg:px-[72px]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-[1]"
      >
        <motion.div
          variants={itemVariants}
          className="mb-[18px] inline-flex font-mono text-[13px] uppercase tracking-[0.08em] text-accent"
        >
          Python / Django · Data Engineering · Remote SaaS Teams
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-7 text-[44px] leading-[0.94] font-extrabold tracking-[-0.07em] sm:text-[64px] lg:text-[86px]"
        >
          Backend engineer for SaaS systems that need to be reliable, scalable,
          and clean.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-[690px] text-[17px] leading-[1.75] text-muted sm:text-[19px]"
        >
          I build production Django/Python backends, REST APIs, PostgreSQL
          schemas, Celery workflows, and data pipelines for B2B products. I
          use AI coding tools daily, but keep architecture, review, security,
          and production judgment human-led.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="my-[34px] flex flex-wrap gap-[14px]"
        >
          <a
            href="#case-studies"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-accent px-[22px] font-extrabold text-[#031016] transition-transform hover:-translate-y-[3px]"
          >
            View Technical Work
          </a>
          <a
            href="/Ondrej_Renak_Resume.pdf"
            download
            className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-line bg-white/5 px-[22px] font-extrabold transition-transform hover:-translate-y-[3px]"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid max-w-[720px] grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {[
            ["5+", "Years remote engineering"],
            ["30+", "Backend/data features shipped"],
            ["CET", "EU timezone, async-first"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-[22px] border border-line bg-panel p-[18px]"
            >
              <strong className="block text-[26px] text-ink">{value}</strong>
              <span className="text-[13px] text-muted">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        className="relative z-[1] min-h-[480px] lg:min-h-[560px]"
        aria-label="Backend architecture illustration"
      >
        <motion.div
          animate={{ y: [0, -22, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[70px] top-[30px] h-[160px] w-[160px] rounded-full bg-accent opacity-85 blur-[1px]"
        />
        <motion.div
          animate={{ y: [0, 22, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[130px] left-5 h-[90px] w-[90px] rounded-full bg-accent-2 opacity-85 blur-[1px]"
        />

        <motion.div
          initial={{ rotate: -2 }}
          animate={{ rotate: [-2, -0.5, -2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-0 left-5 top-[72px] overflow-hidden rounded-card border border-line bg-gradient-to-br from-white/[0.12] to-white/[0.045] shadow-card backdrop-blur-xl"
        >
          <div className="flex gap-2 border-b border-line p-4">
            <span className="h-3 w-3 rounded-full bg-muted opacity-70" />
            <span className="h-3 w-3 rounded-full bg-muted opacity-70" />
            <span className="h-3 w-3 rounded-full bg-muted opacity-70" />
          </div>
          <pre className="m-0 overflow-auto p-[30px]">
            <code className="font-mono leading-[1.8] text-[#dffdf4]">
{`class SaaSBackend:
    stack = ["Django", "DRF", "PostgreSQL"]

    def ship(self, feature):
        validate_schema(feature.data)
        enqueue_async_jobs(feature.events)
        publish_api(version="v1")
        return "production-ready"`}
            </code>
          </pre>
        </motion.div>

        <motion.div
          animate={{ y: [0, -14, 0], rotate: [1.5, -1, 1.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-7 right-2 grid w-[min(420px,92%)] gap-[10px] rounded-[24px] border border-line bg-gradient-to-br from-white/[0.12] to-white/[0.045] p-5 font-mono shadow-card backdrop-blur-xl"
        >
          {["Webhook", "Celery", "PostgreSQL", "BI Report"].map((step, i) => (
            <div key={step}>
              <span className="block rounded-2xl border border-line bg-white/[0.08] p-3">
                {step}
              </span>
              {i < 3 && <i className="ml-6 block h-4 w-[2px] bg-accent" />}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
