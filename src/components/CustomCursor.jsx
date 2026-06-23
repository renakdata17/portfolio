import { useEffect, useRef } from "react";
import { useIsCoarsePointer } from "../hooks/useDeviceCapability";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const isCoarsePointer = useIsCoarsePointer();

  useEffect(() => {
    if (isCoarsePointer) return;

    const cursor = cursorRef.current;
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...mouse };
    let rafId;

    const handleMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("pointermove", handleMove);

    const loop = () => {
      pos.x += (mouse.x - pos.x) / 6;
      pos.y += (mouse.y - pos.y) / 6;
      cursor.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    const interactiveEls = document.querySelectorAll("[data-cursor]");
    const handlers = [];
    interactiveEls.forEach((el) => {
      const onOver = () => cursor.classList.add(`cursor-${el.dataset.cursor}`);
      const onOut = () => cursor.classList.remove(`cursor-${el.dataset.cursor}`);
      el.addEventListener("mouseover", onOver);
      el.addEventListener("mouseout", onOut);
      handlers.push([el, onOver, onOut]);
    });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(rafId);
      handlers.forEach(([el, onOver, onOut]) => {
        el.removeEventListener("mouseover", onOver);
        el.removeEventListener("mouseout", onOut);
      });
    };
  }, [isCoarsePointer]);

  if (isCoarsePointer) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-50 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent mix-blend-difference transition-[width,height,opacity] duration-200 [&.cursor-disable]:h-0 [&.cursor-disable]:w-0 [&.cursor-disable]:opacity-0 [&.cursor-icons]:h-14 [&.cursor-icons]:w-14 [&.cursor-icons]:bg-accent/30"
      aria-hidden="true"
    />
  );
}
