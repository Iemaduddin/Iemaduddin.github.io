"use client";

import React, { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

interface ScrollToTopButtonProps {
  offset?: number;
}

export default function ScrollToTopButton({ offset = 200 }: ScrollToTopButtonProps) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > offset);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);
  useEffect(() => {
    setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);
  const handleClick = () => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (isMobile) setHovered(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ opacity: 0, scale: 0.8, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 30 }} transition={{ duration: 0.25 }} className="fixed bottom-5 right-5 z-50">
          <motion.button
            onClick={handleClick}
            aria-label="Kembali ke atas"
            title="Kembali ke atas"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group flex items-center gap-2 bg-blue-700 text-zinc-200  dark:text-white 
                       border border-zinc-200 dark:border-zinc-700 rounded-full shadow-lg p-3
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none"
          >
            <RiArrowUpLine className="w-6 h-6" />
            <AnimatePresence>
              {!isMobile && hovered && (
                <motion.span initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "auto" }} exit={{ opacity: 0, width: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden whitespace-nowrap text-sm font-medium">
                  Kembali ke atas
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
