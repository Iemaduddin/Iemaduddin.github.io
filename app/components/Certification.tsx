"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuAward as Award, LuCalendar as Calendar, LuBuilding2 as Building2, LuHash as Hash, LuZoomIn as ZoomIn, LuCopyright as Copyright, LuTrophy as Trophy, LuUsers as Users } from "react-icons/lu";
import type { IconType } from "react-icons";
import Image from "next/image";
import { AlbumGallery } from "./Gallery";
import { useLanguage } from "../contexts/LanguageContext";

interface CertificateItem {
  name: string;
  issuer: string;
  date: string;
  credential: string;
  category: string;
  image: string;
  orientation: "landscape" | "portrait";
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

const CATEGORY_CONFIG: Record<string, { icon: IconType; badge: string }> = {
  certification: { icon: Award, badge: "bg-blue-600" },
  copyright: { icon: Copyright, badge: "bg-purple-600" },
  award: { icon: Trophy, badge: "bg-amber-500" },
  organization: { icon: Users, badge: "bg-emerald-600" },
};

const CATEGORY_ORDER = ["certification", "copyright", "award", "organization"];

const certificateImages: { src: string; orientation: "landscape" | "portrait" }[] = [
  { src: "/documentation/certificates/seritifikat-kompetensi-computer-software-programming.webp", orientation: "portrait" },
  { src: "/documentation/certificates/hak-cipta-simeva.webp", orientation: "portrait" },
  { src: "/documentation/certificates/magang-lasbon.webp", orientation: "landscape" },
  { src: "/documentation/certificates/magang-sai.webp", orientation: "portrait" },
  { src: "/documentation/certificates/sertifikat-ketua-umum.webp", orientation: "landscape" },
  { src: "/documentation/certificates/sertifikat-kapel-prastudi.webp", orientation: "landscape" },
  { src: "/documentation/certificates/penghargaan-puskasnas.webp", orientation: "landscape" },
  { src: "/documentation/certificates/penghargaan-film.webp", orientation: "landscape" },
];

const PAGE_SIZE = 6;

export default function Certification() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const certificates: CertificateItem[] = Array.from({ length: certificateImages.length }, (_, i) => ({
    name: t(`certificates.item${i + 1}.name`) as string,
    issuer: t(`certificates.item${i + 1}.issuer`) as string,
    date: t(`certificates.item${i + 1}.date`) as string,
    credential: t(`certificates.item${i + 1}.credential`) as string,
    category: t(`certificates.item${i + 1}.category`) as string,
    image: certificateImages[i].src,
    orientation: certificateImages[i].orientation,
  }));

  const presentCategories = CATEGORY_ORDER.filter((cat) => certificates.some((c) => c.category === cat));
  const filtered = filter === "all" ? certificates : certificates.filter((c) => c.category === filter);
  const shown = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const changeFilter = (value: string) => {
    setFilter(value);
    setOpenIndex(null);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <>
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>
            {t("certificates.title")}
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4" suppressHydrationWarning>
            {t("certificates.subtitle")}
          </p>
        </motion.div>

        {/* Filter chips */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12" suppressHydrationWarning>
          {[{ key: "all", label: t("certificates.filter.all") as string }, ...presentCategories.map((cat) => ({ key: cat, label: t(`certificates.category.${cat}`) as string }))].map(
            (chip) => {
              const active = filter === chip.key;
              const Icon = chip.key !== "all" ? CATEGORY_CONFIG[chip.key].icon : null;
              return (
                <button
                  key={chip.key}
                  type="button"
                  onClick={() => changeFilter(chip.key)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    active
                      ? "bg-blue-600 dark:bg-blue-500 border-blue-600 dark:border-blue-500 text-white shadow-md shadow-blue-600/20"
                      : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  suppressHydrationWarning
                >
                  {Icon && <Icon size={14} />}
                  {chip.label}
                </button>
              );
            },
          )}
        </motion.div>

        {/* Card grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch" suppressHydrationWarning>
          <AnimatePresence mode="popLayout">
            {shown.map((cert, index) => {
              const config = CATEGORY_CONFIG[cert.category] ?? CATEGORY_CONFIG.certification;
              const Icon = config.icon;
              return (
                <motion.article
                  key={cert.credential}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="group flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700/80 bg-white dark:bg-gray-800/70 p-6 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600/60 transition-all duration-300"
                  suppressHydrationWarning
                >
                  {/* Certificate image — click to preview */}
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    aria-label={cert.name}
                    className="relative block w-full aspect-[16/11] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 mb-4 bg-gray-100 dark:bg-gray-900 cursor-pointer group/img"
                    suppressHydrationWarning
                  >
                    <Image src={cert.image} alt={cert.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className={`${cert.orientation === "portrait" ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-105`} />

                    {/* Category badge */}
                    <span className={`absolute top-3 left-3 inline-flex items-center gap-1.5 ${config.badge} text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-lg`} suppressHydrationWarning>
                      <Icon size={12} />
                      {t(`certificates.category.${cert.category}`)}
                    </span>

                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/img:bg-black/20 transition-colors">
                      <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm text-white p-2.5 rounded-full">
                        <ZoomIn size={18} />
                      </span>
                    </span>
                  </button>

                  {/* Icon + issuer */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors shrink-0">
                      <Icon size={20} />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                        <Building2 size={13} className="shrink-0" />
                        <span className="text-xs sm:text-sm font-medium truncate" suppressHydrationWarning>
                          {cert.issuer}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500 mt-0.5">
                        <Calendar size={13} className="shrink-0" />
                        <span className="text-xs truncate" suppressHydrationWarning>
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug mb-4 flex-1" suppressHydrationWarning>
                    {cert.name}
                  </h3>

                  {/* Credential ID */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Hash size={12} className="text-blue-600 dark:text-blue-400 shrink-0" />
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500" suppressHydrationWarning>
                        {t("certificates.credential")}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-mono break-all" suppressHydrationWarning>
                      {cert.credential}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="flex justify-center mt-10 sm:mt-12">
            <motion.button
              type="button"
              onClick={() => setVisibleCount((count) => Math.min(count + PAGE_SIZE, filtered.length))}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              suppressHydrationWarning
            >
              {t("certificates.showMore")}
            </motion.button>
          </div>
        )}
      </motion.div>

      {/* Fullscreen preview */}
      <AnimatePresence>
        {openIndex !== null && (
          <AlbumGallery
            images={shown.map((cert) => ({
              src: cert.image,
              title: cert.name,
              description: `${cert.issuer} — ${cert.date} | ${t("certificates.credential")}: ${cert.credential}`,
            }))}
            initialIndex={openIndex}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
