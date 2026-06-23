import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { TbFileText } from "react-icons/tb";

function MagneticIcon({ href, label, children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 18 });
  const springY = useSpring(y, { stiffness: 250, damping: 18 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.4);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.4);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      data-cursor="icons"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/5 text-lg text-muted transition-colors hover:border-accent/50 hover:text-ink"
    >
      <motion.span style={{ x: springX, y: springY }} className="flex">
        {children}
      </motion.span>
    </a>
  );
}

export default function SocialSidebar() {
  return (
    <div className="fixed inset-y-0 left-0 z-10 hidden w-[88px] flex-col items-center justify-between py-9 lg:flex">
      <div className="flex flex-col gap-4">
        <MagneticIcon href="https://github.com/renakdata17" label="GitHub profile">
          <FaGithub />
        </MagneticIcon>
      </div>

      <a
        href="/Ondrej_Renak_Resume.pdf"
        download
        data-cursor="disable"
        className="flex flex-col items-center gap-2 text-[11px] font-mono uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
        style={{ writingMode: "vertical-rl" }}
      >
        <TbFileText className="text-lg" style={{ writingMode: "horizontal-tb" }} />
        Resume
      </a>
    </div>
  );
}
