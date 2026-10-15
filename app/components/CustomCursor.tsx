"use client";
import React, { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function subscribe(callback: () => void) {
  const fineMq = window.matchMedia("(pointer: fine)");
  const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
  fineMq.addEventListener("change", callback);
  reduceMq.addEventListener("change", callback);
  return () => {
    fineMq.removeEventListener("change", callback);
    reduceMq.removeEventListener("change", callback);
  };
}

function getSnapshot() {
  return window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

export default function CustomCursor() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const outerX = useSpring(mouseX, { stiffness: 320, damping: 28, mass: 0.5 });
  const outerY = useSpring(mouseY, { stiffness: 320, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        setHovering(!!e.target.closest("a, button, [role='button'], input, textarea, select, label"));
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: outerX, y: outerY }}
        animate={{ scale: hovering ? 1.7 : 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed top-0 left-0 z-[150] w-9 h-9 -ml-[18px] -mt-[18px] rounded-full border border-blue-500/60 pointer-events-none"
      >
        {hovering && <div className="absolute inset-1 rounded-full bg-blue-500/10" />}
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: mouseX, y: mouseY }}
        className="fixed top-0 left-0 z-[151] w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-blue-600 dark:bg-blue-400 pointer-events-none"
      />
    </>
  );
}
