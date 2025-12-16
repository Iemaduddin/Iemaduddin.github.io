"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

export default function Jumbotron() {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-white dark:bg-gray-900 px-4 py-20 relative overflow-hidden">
      {/* SVG Decoration with grid pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-100 dark:text-blue-900/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Circular decorations */}
        <svg className="hidden md:block absolute top-0 right-0 w-96 h-96 text-blue-100 dark:text-blue-900/20" fill="currentColor" viewBox="0 0 200 200">
          <path d="M100,0 C44.8,0 0,44.8 0,100 C0,155.2 44.8,200 100,200 C155.2,200 200,155.2 200,100 C200,44.8 155.2,0 100,0 Z" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-80 h-80 text-blue-100 dark:text-blue-900/20" fill="currentColor" viewBox="0 0 200 200">
          <path d="M100,0 C44.8,0 0,44.8 0,100 C0,155.2 44.8,200 100,200 C155.2,200 200,155.2 200,100 C200,44.8 155.2,0 100,0 Z" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 flex-1 flex flex-col justify-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Right Image - Show first on mobile */}
          <motion.div variants={imageVariants} className="flex justify-center md:justify-end order-1 md:order-2 -mt-10 md:-mt-0">
            <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-200 dark:ring-blue-900">
              <Image src="/_foto_didin.png" alt="Iemaduddin" fill className="object-cover" priority sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px" />
            </motion.div>
          </motion.div>

          {/* Left Content - Show second on mobile */}
          <motion.div variants={itemVariants} className="space-y-6 order-2 md:order-1">
            <motion.div variants={itemVariants} className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium" suppressHydrationWarning>
              {t("jumbotron.welcome")}
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight" suppressHydrationWarning>
              {t("jumbotron.greeting")} <span className="text-blue-600 dark:text-blue-400">Iemaduddin</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed" suppressHydrationWarning>
              {t("jumbotron.description")}
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
                suppressHydrationWarning
              >
                <Mail size={20} />
                {t("jumbotron.getInTouch")}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                suppressHydrationWarning
              >
                {t("jumbotron.viewProjects")}
              </motion.a>
            </motion.div>
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Iemaduddin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/iemaduddin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator - Fixed at bottom */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 right-1/2 mt-2 md:left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 cursor-pointer group z-20"
        onClick={() => {
          const aboutSection = document.querySelector("#about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center">
          {/* Mouse Icon */}
          <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-200 font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors text-nowrap mb-3">Scroll Down</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 dark:border-gray-200 rounded-full relative group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 dark:bg-gray-200 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 rounded-full absolute left-1/2 -translate-x-1/2 top-1.5 sm:top-2"
            />
          </div>
          <ChevronDown size={18} className="mt-1 sm:mt-2 text-gray-400 dark:text-gray-200 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors sm:w-5 sm:h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
