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
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto">
      <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>
          {t("work.title")}
        </h2>
        <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4" suppressHydrationWarning>
          {t("work.subtitle")}
        </p>
      </motion.div>

      <div className="space-y-8">
        {workData.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.01, y: -5 }}
            className="group relative bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 overflow-hidden"
          >
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-blue-500/5 dark:from-blue-500/10 dark:to-blue-500/10 rounded-full blur-3xl -z-0 group-hover:scale-150 transition-transform duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 sm:gap-6 mb-6">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="flex-shrink-0 p-3 sm:p-4 bg-blue-600 dark:bg-blue-500 rounded-xl shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                  <Briefcase className="text-white" size={28} />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight" suppressHydrationWarning>
                      {exp.position}
                    </h3>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-100 dark:from-blue-900/40 dark:to-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold whitespace-nowrap shadow-sm"
                      suppressHydrationWarning
                    >
                      <Building2 size={16} />
                      {exp.type}
                    </motion.span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-base sm:text-lg" suppressHydrationWarning>
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-sm">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-gray-700/60 rounded-lg backdrop-blur-sm">
                      <Calendar size={16} className="text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium" suppressHydrationWarning>
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-gray-700/60 rounded-lg backdrop-blur-sm">
                      <MapPin size={16} className="text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium" suppressHydrationWarning>
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
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
