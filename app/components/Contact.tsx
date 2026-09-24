"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ChevronLeft, ChevronRight, Copy, Check } from "lucide-react";
import Image from "next/image";
import { AlbumGallery } from "./Gallery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useLanguage } from "../contexts/LanguageContext";

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

const EMAIL = "iemaduddin17@gmail.com";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Bangkalan%2C%20Jawa%20Timur";

export default function Contact() {
  const { t } = useLanguage();
  const [openGallery, setOpenGallery] = useState(false);
  const [copied, setCopied] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: "Kab. Bangkalan, Jawa Timur",
      href: MAPS_URL,
    },
  ];

  const screenshots = [
    { title: "Full Stack Web Dev", description: "Wahana Global Immedia", src: "/documentation/wgi.jpg" },
    { title: "Full Stack Web Dev", description: "Magang PT. Surabaya Autocomp Indonesia", src: "/documentation/sai.webp" },
    { title: "Pimpinan Organisasi Kemahasiswaan Intra", description: "Pelantikan Pimpinan OKI", src: "/documentation/pelantikan-pimoki.webp" },
    { title: "Pimpinan Organisasi Kemahasiswaan Intra", description: "Pelantikan Komite Pertimbangan", src: "/documentation/pelantikan-komper.webp" },
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>
          {t("contact.title")}
        </h2>
        <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4" suppressHydrationWarning>
          {t("contact.subtitle")}
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-14 items-start [&>*]:min-w-0">
        {/* Contact info — baris ringkas tanpa kartu tebal */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4" suppressHydrationWarning>
              {t("contact.info")}
            </h3>
            <div className="space-y-1">
              {contactInfo.map((info, index) => {
                const isEmail = info.href.startsWith("mailto:");
                const rowClass = "flex items-center gap-4 px-3 py-3 -mx-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group";

                const content = (
                  <>
                    <span className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                      <info.icon size={18} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-gray-500 dark:text-gray-400" suppressHydrationWarning>
                        {info.label}
                      </span>
                      <span className="block text-sm sm:text-base text-gray-900 dark:text-white font-medium truncate" suppressHydrationWarning>
                        {info.value}
                      </span>
                    </span>
                  </>
                );

                if (isEmail) {
                  return (
                    <div key={index} className={rowClass}>
                      <a href={info.href} className="flex items-center gap-4 min-w-0 flex-1">
                        {content}
                      </a>
                      <button
                        type="button"
                        onClick={copyEmail}
                        aria-label={copied ? (t("contact.copied") as string) : (t("contact.copyEmail") as string)}
                        title={copied ? (t("contact.copied") as string) : (t("contact.copyEmail") as string)}
                        className="shrink-0 p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                        suppressHydrationWarning
                      >
                        {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                      </button>
                    </div>
                  );
                }

                return (
                  <a key={index} href={info.href} target="_blank" rel="noopener noreferrer" className={rowClass}>
                    {content}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4" suppressHydrationWarning>
              {t("contact.social")}
            </h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/Iemaduddin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/iemaduddin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Documentation */}
        <motion.div variants={itemVariants} className="relative w-full min-w-0 overflow-hidden">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4" suppressHydrationWarning>
            {t("contact.documentation")}
          </h3>
          <div className="relative w-full max-w-full overflow-hidden">
            <button
              aria-label="Previous"
              className="contact-swiper-prev hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 text-white items-center justify-center hover:bg-black/70 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Next"
              className="contact-swiper-next hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 text-white items-center justify-center hover:bg-black/70 transition"
            >
              <ChevronRight size={20} />
            </button>
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation={{ nextEl: ".contact-swiper-next", prevEl: ".contact-swiper-prev" }}
              spaceBetween={16}
              slidesPerView={1}
              className="w-full max-w-full overflow-hidden !pb-10"
            >
              {screenshots.map((img, i) => (
                <SwiperSlide key={i} className="!w-full">
                  <button
                    type="button"
                    onClick={() => setOpenGallery(true)}
                    className="relative w-full h-56 sm:h-72 md:h-80 rounded-xl overflow-hidden cursor-pointer group border border-gray-200 dark:border-gray-700"
                    aria-label={img.title}
                  >
                    <Image src={img.src} alt={img.title || `screenshot-${i}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" priority={i === 0} />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <AnimatePresence>{openGallery && <AlbumGallery images={screenshots} onClose={() => setOpenGallery(false)} />}</AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
