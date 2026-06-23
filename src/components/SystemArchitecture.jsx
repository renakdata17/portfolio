import { motion } from "framer-motion";

const nodeVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

function Node({ children, accent = false }) {
  return (
    <motion.div
      variants={nodeVariants}
      className={`min-w-[210px] rounded-[20px] border p-[18px] text-center font-extrabold ${
        accent
          ? "border-accent/55 bg-white/[0.075] shadow-[0_0_50px_rgba(82,245,196,0.12)]"
          : "border-line bg-white/[0.075]"
      }`}
    >
      {children}
    </motion.div>
  );
}

function HLine() {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="h-[2px] w-20 bg-gradient-to-r from-transparent via-accent to-transparent"
    />
  );
}

function VLine() {
  return (
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="h-10 w-[2px] bg-gradient-to-b from-transparent via-accent to-transparent"
    />
  );
}

export default function SystemArchitecture() {
  return (
    <section id="systems" className="mx-auto max-w-[1120px] px-5 py-[100px] sm:px-9 lg:px-[72px]">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mb-[42px]"
      >
        <p className="mb-[18px] inline-flex font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
          Architecture style
        </p>
        <h2 className="max-w-[860px] text-[32px] leading-none font-extrabold tracking-[-0.055em] sm:text-[44px] lg:text-[56px]">
          I think in systems: API boundaries, queues, data flow, and
          operational safety.
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
        className="grid justify-items-center gap-5 rounded-card border border-line bg-gradient-to-br from-white/[0.12] to-white/[0.045] p-[34px] shadow-card backdrop-blur-xl"
      >
        <Node>
          Client App
          <br />
          <small className="font-normal text-muted">React / Vue</small>
        </Node>
        <HLine />
        <Node accent>
          Django API
          <br />
          <small className="font-normal text-muted">DRF / Auth / RBAC</small>
        </Node>

        <div className="grid w-full grid-cols-1 gap-[22px] sm:grid-cols-2">
          <div className="flex justify-center sm:hidden">
            <VLine />
          </div>
          <div className="grid justify-items-center gap-4">
            <Node>
              PostgreSQL
              <br />
              <small className="font-normal text-muted">Schema · Queries</small>
            </Node>
            <Node>
              Redis / RabbitMQ
              <br />
              <small className="font-normal text-muted">Queue Broker</small>
            </Node>
            <Node>
              Celery Workers
              <br />
              <small className="font-normal text-muted">Async Jobs</small>
            </Node>
          </div>
          <div className="grid justify-items-center gap-4">
            <Node>
              Third-Party APIs
              <br />
              <small className="font-normal text-muted">OAuth · Webhooks</small>
            </Node>
            <Node>
              Airflow ETL
              <br />
              <small className="font-normal text-muted">Data Pipelines</small>
            </Node>
            <Node>
              BI Layer
              <br />
              <small className="font-normal text-muted">Looker · Tableau</small>
            </Node>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
