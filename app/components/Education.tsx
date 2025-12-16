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

export default function Education() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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
      <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>
          {t("education.title")}
        </h2>
        <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4" suppressHydrationWarning>
          {t("education.subtitle")}
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line with gradient */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-blue-500 dark:blue-400 transform md:-translate-x-1/2 rounded-full"></div>

        <div className="space-y-16" suppressHydrationWarning>
          {educationData.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} className={`relative flex items-start gap-6 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`} suppressHydrationWarning>
              {/* Timeline Dot with pulse effect */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.6 }} className="relative w-16 h-16 md:w-24 md:h-24">
                  <div className="relative w-full h-full bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/50">
                    <GraduationCap className="text-white" size={28} />
                  </div>
                </motion.div>
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="group flex-1  rounded-2xl bg-white dark:bg-gray-800 shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-600 md:w-[calc(50%-60px)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl -z-0 group-hover:scale-50 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight flex-1" suppressHydrationWarning>
                      {edu.degree}
                    </h3>
                    <span
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold whitespace-nowrap"
                      suppressHydrationWarning
                    >
                      <GraduationCap size={16} />
                      {edu.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-6">
                    <University size={18} className="text-blue-600 dark:text-blue-500 flex-shrink-0" />
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-base sm:text-lg" suppressHydrationWarning>
                      {edu.institution}
                    </p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <ul className="space-y-3" suppressHydrationWarning>
                      {edu.description.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="text-gray-600 dark:text-gray-300 flex items-start gap-3 text-sm sm:text-base leading-relaxed"
                          suppressHydrationWarning
                        >
                          <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-600 dark:bg-blue-500"></span>
                          <span suppressHydrationWarning>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
