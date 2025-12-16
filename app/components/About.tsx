"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
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

export default function About() {
  const { t } = useLanguage();

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
      },
    },
  };
  const skillsData = t("about.skills") as string[];
  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto">
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>
          {t("about.title")}
        </h2>
        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div variants={itemVariants} className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed" suppressHydrationWarning>
            {t("about.description")}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          {/* Skills */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>
              {t("about.skillsTitle")}
            </h3>
            <div className="flex flex-wrap gap-2" suppressHydrationWarning>
              {skillsData.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                  suppressHydrationWarning
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow mt-6"
            suppressHydrationWarning
          >
            <Download size={20} />
            {t("about.downloadCV")}
          </motion.a>
        </motion.div>
      </div>
      {/* Technologies */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-10 border border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>
          {t("about.technologiesTitle")}
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <IconComponent size={32} className="text-gray-700 dark:text-gray-300 mb-1" />
                <span className="text-xs text-gray-700 dark:text-gray-300 text-center font-medium">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
