"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface OrgExperience {
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
}

export default function ExperienceOrg() {
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
      <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>
          {t("org.title")}
        </h2>
        <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4" suppressHydrationWarning>
          {t("org.subtitle")}
        </p>
      </motion.div>

      <div className="space-y-8">
        {orgData.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.01, y: -5 }}
            className="group relative bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 overflow-hidden"
          >
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl -z-0 group-hover:scale-150 transition-transform duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 sm:gap-6 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 p-3 sm:p-4 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-xl shadow-lg group-hover:shadow-blue-500/50 transition-shadow"
                >
                  <Users className="text-white" size={28} />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-tight" suppressHydrationWarning>
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-base sm:text-lg" suppressHydrationWarning>
                    {exp.organization}
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
