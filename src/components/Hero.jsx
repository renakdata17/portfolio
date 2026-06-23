import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion, useIsCoarsePointer } from "../hooks/useDeviceCapability";
import { useTilt } from "../hooks/useTilt";

const HeroScene = lazy(() => import("./HeroScene"));

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
  const reducedMotion = usePrefersReducedMotion();
  const coarsePointer = useIsCoarsePointer();
  const show3D = !reducedMotion && !coarsePointer;
  const tilt = useTilt(10);
  const avatarTilt = useTilt(8);

  return (
    <section
      id="top"
      className="relative mx-auto grid min-h-[92vh] max-w-[1280px] grid-cols-1 items-center gap-12 overflow-hidden px-5 py-[100px] sm:px-9 lg:grid-cols-2 lg:px-[72px]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-[2]"
      >
        <motion.div
          variants={itemVariants}
          className="mb-5 flex items-center gap-4"
        >
          <motion.div
            onMouseMove={avatarTilt.onMouseMove}
            onMouseLeave={avatarTilt.onMouseLeave}
            whileHover={{ scale: 1.06 }}
            style={{
              rotateX: avatarTilt.rotateX,
              rotateY: avatarTilt.rotateY,
              transformPerspective: 600,
            }}
            className="relative h-[84px] w-[84px] shrink-0 overflow-hidden rounded-full shadow-card ring-2 ring-accent/40 sm:h-[104px] sm:w-[104px]"
          >
            <img
              src="/profil.png"
              alt="Ondrej Renak"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <span className="font-mono text-[15px] text-muted">Hello, I'm</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-6 text-[15vw] leading-[0.92] font-extrabold tracking-[-0.04em] sm:text-[64px] lg:text-[78px]"
        >
          Ondrej
          <br />
          <span className="text-accent">Renak</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-[520px] text-[16px] leading-[1.75] text-muted sm:text-[18px]"
        >
          I build production Django/Python backends, REST APIs, PostgreSQL
          schemas, Celery workflows, and data pipelines for B2B products. I
          use AI coding tools daily, but keep architecture, review, security,
          and production judgment human-led.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap gap-[14px]"
        >
          <a
            href="#work"
            data-cursor="disable"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-accent px-[22px] font-extrabold text-[#031016] transition-transform hover:-translate-y-[3px]"
          >
            View Technical Work
          </a>
          <a
            href="/Ondrej_Renak_Resume.pdf"
            download
            data-cursor="disable"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-line bg-white/5 px-[22px] font-extrabold transition-transform hover:-translate-y-[3px]"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      <div className="relative z-[1] min-h-[420px] lg:min-h-[560px]" aria-hidden="true">
        {show3D && (
          <Suspense fallback={null}>
            <div className="absolute inset-0">
              <HeroScene />
            </div>
          </Suspense>
        )}

        <div className="pointer-events-none absolute inset-x-0 top-0 select-none text-right leading-[0.85]">
          <div className="font-extrabold text-[14vw] tracking-[-0.05em] text-transparent [-webkit-text-stroke:1.5px_var(--color-line)] sm:text-[58px] lg:text-[70px]">
            BACKEND
          </div>
          <div className="-mt-2 font-extrabold text-[14vw] tracking-[-0.05em] text-accent-2/70 sm:text-[58px] lg:text-[70px]">
            ENGINEER
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onMouseMove={tilt.onMouseMove}
          onMouseLeave={tilt.onMouseLeave}
          whileHover={{ scale: 1.03 }}
          style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformPerspective: 1000, rotateZ: -2 }}
          className="absolute bottom-10 left-0 z-[2] w-[min(380px,90%)] overflow-hidden rounded-card border border-line bg-gradient-to-br from-white/[0.12] to-white/[0.045] shadow-card backdrop-blur-xl"
        >
          <div className="flex gap-2 border-b border-line p-3">
            <span className="h-3 w-3 rounded-full bg-muted opacity-70" />
            <span className="h-3 w-3 rounded-full bg-muted opacity-70" />
            <span className="h-3 w-3 rounded-full bg-muted opacity-70" />
          </div>
          <pre className="m-0 overflow-auto p-5 text-[13px]">
            <code className="font-mono leading-[1.7] text-[#dffdf4]">
{`class SaaSBackend:
    stack = ["Django", "DRF", "PostgreSQL"]

    def ship(self, feature):
        enqueue_async_jobs(feature.events)
        return "production-ready"`}
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
