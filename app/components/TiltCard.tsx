"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({ children, className = "", max = 6 }: { children: React.ReactNode; className?: string; max?: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 200, damping: 20 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className={className}>
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
