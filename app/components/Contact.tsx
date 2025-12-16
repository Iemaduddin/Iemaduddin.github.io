"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { AlbumGallery } from "./Gallery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
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

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "iemaduddin17@gmail.com",
      href: "mailto:iemaduddin17@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+62 823-3131-1947",
      href: "https://wa.me/6282331311947",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: "Kab. Bangkalan, Jawa Timur",
      href: "https://maps.app.goo.gl/1234567890",
    },
  ];

  const screenshots = [
    { title: "Full Stack Web Dev", description: "Magang PT. Surabaya Autocomp Indonesia", src: "/documentation/sai.jpeg" },
    { title: "Pimpinan Organisasi Kemahasiswaan Intra", description: "Pelantikan Pimpinan OKI", src: "/documentation/pelantikan-pimoki.jpg" },
    { title: "Pimpinan Organisasi Kemahasiswaan Intra", description: "Pelantikan Komite Pertimbangan", src: "/documentation/pelantikan-komper.jpg" },
  ];
  const [openGallery, setOpenGallery] = useState(false);

  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto">
      <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4" suppressHydrationWarning>
          {t("contact.title")}
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-3 sm:mt-4 px-4" suppressHydrationWarning>
          {t("contact.subtitle")}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* Contact Info */}
        <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4" suppressHydrationWarning>
              {t("contact.info")}
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                >
                  <div className="p-2 sm:p-3 bg-blue-600 dark:bg-blue-500 rounded-lg shrink-0">
                    <info.icon className="text-white" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400" suppressHydrationWarning>
                      {info.label}
                    </p>
                    <p className="text-sm sm:text-base text-gray-900 dark:text-white font-medium truncate" suppressHydrationWarning>
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4" suppressHydrationWarning>
              {t("contact.social")}
            </h3>
            <div className="flex gap-3 sm:gap-4">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Iemaduddin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <Github className="text-gray-700 dark:text-gray-300" size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/iemaduddin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <Linkedin className="text-gray-700 dark:text-gray-300" size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="relative w-full py-2 sm:py-4 overflow-hidden">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4" suppressHydrationWarning>
            {t("contact.documentation")}
          </h3>
          <button className="contact-swiper-prev hidden sm:flex absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 dark:bg-black/20 text-white items-center justify-center shadow-lg hover:bg-zinc-700 dark:hover:bg-zinc-600 transition">
            <ChevronLeft size={20} className="sm:w-7 sm:h-7" />
          </button>
          <button className="contact-swiper-next hidden sm:flex absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 dark:bg-black/20 text-white items-center justify-center shadow-lg hover:bg-zinc-700 dark:hover:bg-zinc-600 transition">
            <ChevronRight size={20} className="sm:w-7 sm:h-7" />
          </button>
          <Swiper modules={[Pagination, Navigation]} pagination={{ clickable: true }} navigation={{ nextEl: ".contact-swiper-next", prevEl: ".contact-swiper-prev" }} spaceBetween={16} slidesPerView={1} className="w-full !pb-10">
            {screenshots.map((img, i) => (
              <SwiperSlide key={i}>
                <div onClick={() => setOpenGallery(true)} className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden cursor-pointer group">
                  <Image src={img.src} alt={img.title || `screenshot-${i}`} fill className="object-cover" priority={i === 0} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <AnimatePresence>{openGallery && <AlbumGallery images={screenshots} onClose={() => setOpenGallery(false)} />}</AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
