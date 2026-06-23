import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const node = glowRef.current;
    if (!node) return;

    const handlePointerMove = (event) => {
      node.style.left = `${event.clientX}px`;
      node.style.top = `${event.clientY}px`;
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(82,245,196,0.16), transparent 62%)",
      }}
      aria-hidden="true"
    />
  );
}
