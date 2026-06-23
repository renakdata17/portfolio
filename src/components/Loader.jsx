import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface"
        >
          <motion.span
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid h-[64px] w-[64px] place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 font-mono text-lg text-[#041016] shadow-[0_12px_30px_rgba(82,245,196,0.3)]"
          >
            OR
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
