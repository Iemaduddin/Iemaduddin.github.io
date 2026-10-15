"use client";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const wordVariant = {
  hidden: { y: "110%" },
  visible: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function SectionHeading({ title, subtitle, className = "" }: { title: string; subtitle?: string; className?: string }) {
  const words = title.split(" ");

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`text-center mb-12 sm:mb-16 ${className}`}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex flex-wrap justify-center gap-x-[0.28em]" suppressHydrationWarning>
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden pb-1 -mb-1">
            <motion.span variants={wordVariant} className="inline-block" suppressHydrationWarning>
              {word}
            </motion.span>
          </span>
        ))}
      </h2>
      <motion.div
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.7, delay: 0.35, ease: "easeOut" } } }}
        className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"
      />
      {subtitle && (
        <motion.p
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { delay: 0.45, duration: 0.5 } } }}
          className="mt-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4"
          suppressHydrationWarning
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
