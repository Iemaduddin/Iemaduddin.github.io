"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Jumbotron() {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-white dark:bg-gray-900 px-4 py-20 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-60 dark:opacity-40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-100 dark:text-blue-900/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 flex-1 flex flex-col justify-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6 order-2 md:order-1">
            {/* Status */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm w-fit" suppressHydrationWarning>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {t("jumbotron.welcome")}
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1]" suppressHydrationWarning>
              {t("jumbotron.greeting")}
              <br />
              <span className="text-blue-600 dark:text-blue-400">Iemaduddin</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl" suppressHydrationWarning>
              {t("jumbotron.description")}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-xl transition-all"
                suppressHydrationWarning
              >
                <Mail size={18} />
                {t("jumbotron.getInTouch")}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                suppressHydrationWarning
              >
                {t("jumbotron.viewProjects")}
              </a>
            </motion.div>

            {/* Socials + CV */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://github.com/Iemaduddin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/iemaduddin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-1.5 ml-1 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                suppressHydrationWarning
              >
                <Download size={16} />
                {t("about.downloadCV")}
              </a>
            </motion.div>
          </motion.div>

          {/* Photo — tetap lingkaran */}
          <motion.div variants={imageVariants} className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-blue-300 dark:hover:ring-blue-600 transition-all duration-300">
              <Image
                src="/_foto_didin.png"
                alt="Iemaduddin"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 384px"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — mouse icon, always centered */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center z-20 pointer-events-none">
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          type="button"
          aria-label={t("jumbotron.scrollDown") as string}
          onClick={() => {
            const aboutSection = document.querySelector("#about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="pointer-events-auto flex flex-col items-center gap-1 cursor-pointer group text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
          suppressHydrationWarning
        >
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center">
            <span className="text-[10px] sm:text-xs font-medium mb-2 sm:mb-3" suppressHydrationWarning>
              {t("jumbotron.scrollDown")}
            </span>
            {/* Mouse — desktop only */}
            <span className="hidden sm:block w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 dark:border-gray-200 rounded-full relative group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors">
              <motion.span
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 dark:bg-gray-200 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 rounded-full absolute left-1/2 -translate-x-1/2 top-1.5 sm:top-2"
              />
            </span>
            <ChevronDown size={18} className="mt-1 sm:mt-2 text-gray-400 dark:text-gray-200 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}
