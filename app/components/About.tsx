"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiNextdotjs, SiLaravel, SiPhp, SiNodedotjs, SiTypescript, SiReact, SiMysql, SiSqlite, SiPostgresql, SiExpress, SiPython, SiAdonisjs } from "react-icons/si";
import { useLanguage } from "../contexts/LanguageContext";

interface Technology {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const technologies: Technology[] = [
  { name: "Laravel", icon: SiLaravel },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Adonis.js", icon: SiAdonisjs },
  { name: "PHP", icon: SiPhp },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "React.js", icon: SiReact },
  { name: "Python", icon: SiPython },
  { name: "TypeScript", icon: SiTypescript },
  { name: "MySQL", icon: SiMysql },
  { name: "SQLite", icon: SiSqlite },
  { name: "PostgreSQL", icon: SiPostgresql },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function About() {
  const { t } = useLanguage();
  const skillsData = t("about.skills") as string[];

  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>
          {t("about.title")}
        </h2>
        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Description */}
      <motion.div variants={itemVariants} className="max-w-5xl mx-auto mb-12">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg" suppressHydrationWarning>
          {t("about.description")}
        </p>
      </motion.div>

      {/* Skills — chips tanpa kartu */}
      <motion.div variants={itemVariants} className="max-w-5xl mx-auto mb-12">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4" suppressHydrationWarning>
          {t("about.skillsTitle")}
        </h3>
        <div className="flex flex-wrap gap-2.5" suppressHydrationWarning>
          {skillsData.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800/50 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
              suppressHydrationWarning
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack — tanpa kartu wrapper */}
      <motion.div variants={itemVariants} className="max-w-5xl mx-auto">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6" suppressHydrationWarning>
          {t("about.technologiesTitle")}
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4" suppressHydrationWarning>
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.35, ease: "easeOut" }}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-800/40 hover:border-blue-300 dark:hover:border-blue-600/60 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <IconComponent size={30} className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                <span className="text-xs text-gray-600 dark:text-gray-400 text-center font-medium leading-tight">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
