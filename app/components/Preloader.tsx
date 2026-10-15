"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const LETTERS = ["L", "o", "a", "d", "i", "n", "g"];
const STORAGE_KEY = "portfolio-preloader-done";

export default function Preloader() {
  const { t } = useLanguage();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const done = sessionStorage.getItem(STORAGE_KEY);
    const timer = setTimeout(
      () => {
        setShow(false);
        sessionStorage.setItem(STORAGE_KEY, "1");
      },
      reduce || done ? 0 : 2200,
    );
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-105%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-gray-950 flex flex-col items-center justify-center gap-6"
          aria-hidden
        >
          <div className="flex items-baseline" suppressHydrationWarning>
            {LETTERS.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: -160, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                  delay: 0.2 + index * 0.08,
                }}
                className="inline-block text-6xl sm:text-8xl font-bold text-white"
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 14, delay: 0.9 }}
              className="inline-block w-3 h-3 sm:w-4 sm:h-4 ml-2 rounded-full bg-blue-500"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="text-sm tracking-[0.35em] uppercase text-gray-300"
            suppressHydrationWarning
          >
            {t("preloader.loading")}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
