import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[960px] px-5 py-[100px] text-center sm:px-9 lg:px-[72px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="rounded-card border border-line bg-gradient-to-br from-white/[0.12] to-white/[0.045] p-7 shadow-card backdrop-blur-xl sm:p-[42px]"
      >
        <p className="mb-[18px] inline-flex font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
          Available for remote work
        </p>
        <h2 className="mx-auto max-w-[860px] text-[32px] leading-none font-extrabold tracking-[-0.055em] sm:text-[44px] lg:text-[56px]">
          Need a backend engineer who can own the data, API, and async
          workflow?
        </h2>
        <p className="mx-auto mt-6 max-w-[640px] text-[17px] leading-[1.75] text-muted">
          Based in Strani, Czech Republic · CET / GMT+1 · EU citizen · English
          professional working proficiency.
        </p>
        <div className="mt-[34px] flex flex-wrap justify-center gap-[14px]">
          <a
            href="https://github.com/renakdata17"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-accent px-[22px] font-extrabold text-[#031016] transition-transform hover:-translate-y-[3px]"
          >
            View GitHub Profile
          </a>
          <a
            href="/Ondrej_Renak_Resume.pdf"
            download
            className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-line bg-white/5 px-[22px] font-extrabold transition-transform hover:-translate-y-[3px]"
          >
            Download Resume
          </a>
          <a
            href="#top"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-line bg-white/5 px-[22px] font-extrabold transition-transform hover:-translate-y-[3px]"
          >
            Back to Top
          </a>
        </div>
      </motion.div>
    </section>
  );
}
