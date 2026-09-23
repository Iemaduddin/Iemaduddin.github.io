"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface OrgExperience {
  title: string;
  organization: string;
  period: string;
  location: string;
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

export default function ExperienceOrg() {
  const { t } = useLanguage();

  const orgData: OrgExperience[] = [
    {
      title: t("org.experience1.title") as string,
      organization: t("org.experience1.organization") as string,
      period: t("org.experience1.period") as string,
      location: t("org.experience1.location") as string,
      description: t("org.experience1.description") as string[],
    },
    {
      title: t("org.experience2.title") as string,
      organization: t("org.experience2.organization") as string,
      period: t("org.experience2.period") as string,
      location: t("org.experience2.location") as string,
      description: t("org.experience2.description") as string[],
    },
  ];

  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>
          {t("org.title")}
        </h2>
        <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4" suppressHydrationWarning>
          {t("org.subtitle")}
        </p>
      </motion.div>

      {/* Two columns separated by a vertical divider */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch" suppressHydrationWarning>
        {orgData.map((exp, index) => (
          <motion.article
            key={index}
            variants={itemVariants}
            className={`py-2 md:py-4 ${index === 0 ? "md:pr-10 lg:pr-14" : "md:border-l md:border-gray-200 dark:md:border-gray-700 md:pl-10 lg:pl-14"}`}
            suppressHydrationWarning
          >
            {/* Period + location meta */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3 text-sm">
              <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold" suppressHydrationWarning>
                <Calendar size={14} className="shrink-0" />
                <span suppressHydrationWarning>{exp.period}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400" suppressHydrationWarning>
                <MapPin size={14} className="text-blue-600 dark:text-blue-400 shrink-0" />
                <span suppressHydrationWarning>{exp.location}</span>
              </span>
            </div>

            {/* Title + organization */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-1.5" suppressHydrationWarning>
              {exp.title}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base mb-5" suppressHydrationWarning>
              {exp.organization}
            </p>

            {/* Separator under header */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4" />

            {/* Description bullets */}
            <ul className="space-y-2" suppressHydrationWarning>
              {exp.description.map((item, idx) => (
                <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start gap-3 text-sm sm:text-base leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-600 dark:bg-blue-500" />
                  <span suppressHydrationWarning>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
