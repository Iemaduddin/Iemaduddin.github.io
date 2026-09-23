"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, University } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string[];
}

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
      ease: "easeOut" as const,
    },
  },
};

export default function Education() {
  const { t } = useLanguage();

  const educationData: EducationItem[] = [
    {
      degree: t("education.experience1.degree") as string,
      institution: t("education.experience1.institution") as string,
      period: t("education.experience1.period") as string,
      description: t("education.experience1.description") as string[],
    },
    {
      degree: t("education.experience2.degree") as string,
      institution: t("education.experience2.institution") as string,
      period: t("education.experience2.period") as string,
      description: t("education.experience2.description") as string[],
    },
  ];

  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>
          {t("education.title")}
        </h2>
        <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4" suppressHydrationWarning>
          {t("education.subtitle")}
        </p>
      </motion.div>

      {/* 2-column grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch" suppressHydrationWarning>
        {educationData.map((edu, index) => (
          <motion.article
            key={index}
            variants={itemVariants}
            className="group flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-gray-800/70 p-6 sm:p-8 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600/60 transition-all duration-300"
            suppressHydrationWarning
          >
            {/* Period */}
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={16} className="text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400" suppressHydrationWarning>
                {edu.period}
              </span>
            </div>

            {/* Degree */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-2" suppressHydrationWarning>
              {edu.degree}
            </h3>

            {/* Institution */}
            <div className="flex items-center gap-2 mb-5">
              <University size={16} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <p className="text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base" suppressHydrationWarning>
                {edu.institution}
              </p>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex-1">
              <ul className="space-y-2" suppressHydrationWarning>
                {edu.description.map((item, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start gap-3 text-sm sm:text-base leading-relaxed">
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-600 dark:bg-blue-500" />
                    <span suppressHydrationWarning>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
