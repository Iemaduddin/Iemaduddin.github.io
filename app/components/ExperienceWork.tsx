"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface WorkExperience {
  position: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
}

export default function ExperienceWork() {
  const { t } = useLanguage();
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const workData: WorkExperience[] = [
    {
      position: t("work.experience1.position") as string,
      company: t("work.experience1.company") as string,
      period: t("work.experience1.period") as string,
      location: t("work.experience1.location") as string,
      type: t("work.experience1.type") as string,
      description: t("work.experience1.description") as string[],
    },
    {
      position: t("work.experience2.position") as string,
      company: t("work.experience2.company") as string,
      period: t("work.experience2.period") as string,
      location: t("work.experience2.location") as string,
      type: t("work.experience2.type") as string,
      description: t("work.experience2.description") as string[],
    },
    {
      position: t("work.experience3.position") as string,
      company: t("work.experience3.company") as string,
      period: t("work.experience3.period") as string,
      location: t("work.experience1.location") as string,
      type: t("work.experience3.type") as string,
      description: t("work.experience3.description") as string[],
    },
  ];
  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto px-4">
      <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>
          {t("work.title")}
        </h2>
        <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4" suppressHydrationWarning>
          {t("work.subtitle")}
        </p>
      </motion.div>

      <div className="relative">
        {/* Continuous dashed vertical line behind circles */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-blue-600/30 dark:border-blue-400/30 -translate-x-1/2 hidden md:block"></div>

        {workData.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative grid grid-cols-[auto_1fr] md:grid-cols-[1fr_48px_1fr] gap-4 md:gap-0 pb-12 last:pb-0"
          >
            {/* Middle column: circle with dashed border (1st on mobile) */}
            <div className="flex flex-col items-center md:order-2">
              <div className="relative flex items-center justify-center w-12 h-12">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="22" fill="white" className="dark:fill-gray-900" />
                  <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" className="text-blue-600 dark:text-blue-400" />
                </svg>
                <div className="w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 z-10"></div>
              </div>
            </div>

            {/* Mobile content (all in one column) */}
            <div className="md:hidden">
              <div className="flex items-center gap-2 mb-1">
                <Briefcase size={16} className="text-blue-600 dark:text-blue-400 shrink-0" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white" suppressHydrationWarning>{exp.position}</h3>
              </div>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm" suppressHydrationWarning>{exp.company}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400" suppressHydrationWarning>
                  <Calendar size={12} className="text-blue-600 dark:text-blue-400" />{exp.period}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400" suppressHydrationWarning>
                  <MapPin size={12} className="text-blue-600 dark:text-blue-400" />{exp.location}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-blue-100 to-blue-100 dark:from-blue-900/40 dark:to-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold mt-1" suppressHydrationWarning>
                <Building2 size={12} />{exp.type}
              </span>
              <ul className="space-y-2 mt-3" suppressHydrationWarning>
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start gap-2 text-xs leading-relaxed" suppressHydrationWarning>
                    <span className="shrink-0 w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-600 dark:bg-blue-500"></span>
                    <span suppressHydrationWarning>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop left column: position, company, date */}
            <div className="hidden md:block text-right order-1">
              <div className="pr-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight" suppressHydrationWarning>
                  {exp.position}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-base sm:text-lg" suppressHydrationWarning>
                  {exp.company}
                </p>
                <div className="flex flex-wrap gap-2 mt-2 justify-end">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/60 dark:bg-gray-700/60 rounded-lg text-sm text-gray-700 dark:text-gray-300" suppressHydrationWarning>
                    <Calendar size={14} className="text-blue-600 dark:text-blue-400" />
                    {exp.period}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/60 dark:bg-gray-700/60 rounded-lg text-sm text-gray-700 dark:text-gray-300" suppressHydrationWarning>
                    <MapPin size={14} className="text-blue-600 dark:text-blue-400" />
                    {exp.location}
                  </div>
                </div>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-100 dark:from-blue-900/40 dark:to-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold mt-2"
                  suppressHydrationWarning
                >
                  <Building2 size={14} />
                  {exp.type}
                </motion.span>
              </div>
            </div>

            {/* Desktop right column: job description */}
            <div className="hidden md:block order-3">
              <div className="pl-8">
                <ul className="space-y-3" suppressHydrationWarning>
                  {exp.description.map((item, idx) => (
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
        ))}
      </div>
    </motion.div>
  );
}
