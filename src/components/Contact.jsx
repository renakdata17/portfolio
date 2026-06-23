import { motion } from "framer-motion";
import { useTilt } from "../hooks/useTilt";

function ContactColumn({ children }) {
  const tilt = useTilt(6);

  return (
    <motion.div
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      whileHover={{ y: -4 }}
      style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformPerspective: 900 }}
      className="rounded-2xl border border-line bg-panel p-6"
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1100px] px-5 py-[100px] sm:px-9 lg:px-[72px]">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="mb-12 text-center text-[34px] font-extrabold tracking-[-0.04em] sm:text-[48px] lg:text-[56px]">
          Ondrej Renak
        </h2>

        <div className="grid grid-cols-1 gap-6 border-t border-line pt-10 sm:grid-cols-3">
          <ContactColumn>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted/70">Location</h4>
            <p className="text-[17px] text-ink">Strani, Czech Republic</p>
            <p className="text-[15px] text-muted">CET / GMT+1 · EU citizen</p>
          </ContactColumn>

          <ContactColumn>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted/70">Social</h4>
            <a
              href="https://github.com/renakdata17"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="inline-flex items-center gap-1 text-[17px] text-ink transition-colors hover:text-accent"
            >
              GitHub ↗
            </a>
          </ContactColumn>

          <ContactColumn>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted/70">
              Designed &amp; developed by
            </h4>
            <p className="text-[17px] text-ink">Ondrej Renak</p>
            <p className="text-[15px] text-muted">© {new Date().getFullYear()}</p>
          </ContactColumn>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/Ondrej_Renak_Resume.pdf"
            download
            data-cursor="disable"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-accent px-[22px] font-extrabold text-surface transition-transform hover:-translate-y-[3px]"
          >
            Download Resume
          </a>
          <a
            href="#top"
            data-cursor="disable"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-line bg-white/5 px-[22px] font-extrabold transition-transform hover:-translate-y-[3px]"
          >
            Back to Top
          </a>
        </div>
      </motion.div>
    </section>
  );
}
