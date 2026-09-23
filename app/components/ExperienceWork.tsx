"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface WorkExperience {
  position: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
}

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

export default function ExperienceWork() {
  const { t } = useLanguage();

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
      location: t("work.experience3.location") as string,
      type: t("work.experience3.type") as string,
      description: t("work.experience3.description") as string[],
    },
  ];

  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>
          {t("work.title")}
        </h2>
        <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4" suppressHydrationWarning>
          {t("work.subtitle")}
        </p>
      </motion.div>

      {/* Work list — meta kiri, konten kanan */}
      <div className="max-w-5xl mx-auto" suppressHydrationWarning>
        {workData.map((exp, index) => (
          <motion.article
            key={index}
            variants={itemVariants}
            className="grid md:grid-cols-[200px_1fr] gap-x-10 gap-y-3 py-8 border-b border-gray-200 dark:border-gray-800 last:border-b-0 group hover:bg-gray-50/60 dark:hover:bg-gray-800/30 transition-colors rounded-lg"
            suppressHydrationWarning
          >
            {/* Meta — left column */}
            <div className="flex flex-wrap md:flex-col gap-x-4 gap-y-1.5 md:text-right md:items-end">
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400" suppressHydrationWarning>
                <Calendar size={14} className="shrink-0" />
                <span suppressHydrationWarning>{exp.period}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400" suppressHydrationWarning>
                <MapPin size={13} className="text-blue-600/70 dark:text-blue-400/70 shrink-0" />
                <span suppressHydrationWarning>{exp.location}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full px-2.5 py-0.5" suppressHydrationWarning>
                <Building2 size={12} className="text-blue-600/70 dark:text-blue-400/70 shrink-0" />
                <span suppressHydrationWarning>{exp.type}</span>
              </span>
            </div>

            {/* Content — right column */}
            <div className="min-w-0">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-1" suppressHydrationWarning>
                {exp.position}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base mb-4" suppressHydrationWarning>
                {exp.company}
              </p>

              <ul className="space-y-2" suppressHydrationWarning>
                {exp.description.map((item, idx) => (
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
