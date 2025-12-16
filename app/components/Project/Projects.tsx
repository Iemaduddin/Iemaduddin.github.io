"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code, ChevronLeft, ChevronRight, X, ImageIcon, CheckCircle2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { AlbumGallery } from "../Gallery";
import { Project, projectsData } from "./Project-Data";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [showDetailDialog, setShowDetailDialog] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <div
      className="bg-white dark:bg-gray-800/70 
      backdrop-blur-sm 
      rounded-2xl shadow-md
      border border-gray-200 dark:border-gray-700/80 
      hover:shadow-2xl transition-all duration-300
      flex flex-col h-full"
    >
      {/* Image Section - Aspect Ratio 16:10 (Laptop Style) */}
      <div
        className="w-full relative overflow-hidden flex items-center justify-center rounded-t-2xl bg-gray-900 cursor-pointer group aspect-[16/10]"
        onClick={() => {
          setSelectedProjectIndex(index);
          setShowGallery(true);
        }}
      >
        {project.images && project.images.length > 1 ? (
          <Swiper
            key={`${refreshKey}-${index}`}
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: `.next-btn-${index}`,
              prevEl: `.prev-btn-${index}`,
            }}
            pagination={{
              clickable: true,
              el: `.pagination-${index}`,
            }}
            className="w-full h-full"
          >
            {project.images.map((img, i) => (
              <SwiperSlide key={i} className="bg-gray-900 h-full">
                <div className="relative w-full h-full">
                  <Image src={img.src} alt={`${img.title}-${i}`} fill className="object-cover group-hover:opacity-75 transition-opacity" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : project.images?.length === 1 ? (
          <div className="relative w-full h-full">
            <Image src={project.images[0].src} alt={project.images[0].title} fill className="object-cover group-hover:opacity-75 transition-opacity" />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-900 group-hover:bg-gray-800 transition-colors">
            <Code className="text-gray-600" size={64} />
          </div>
        )}

        {/* Arrow Buttons */}
        {project.images && project.images.length > 1 && (
          <>
            <button className={`prev-btn-${index} absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition-all`} onClick={(e) => e.stopPropagation()}>
              <ChevronLeft size={20} />
            </button>

            <button className={`next-btn-${index} absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition-all`} onClick={(e) => e.stopPropagation()}>
              <ChevronRight size={20} />
            </button>

            <div className={`pagination-${index} absolute bottom-3 left-0 right-0 mx-auto z-20 flex justify-center gap-1`} onClick={(e) => e.stopPropagation()} />
          </>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 min-h-[200px]">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-3" suppressHydrationWarning>
          {t(`projects.project${index + 1}.title`)}
        </h3>
        <div className="mb-5 sm:mb-6 flex-1">
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3 mb-2" suppressHydrationWarning>
            {t(`projects.project${index + 1}.description`)}
          </p>
          <button
            onClick={() => {
              setSelectedProjectIndex(index);
              setShowDetailDialog(true);
            }}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium hover:underline transition-colors"
            suppressHydrationWarning
          >
            {t("projects.readMore")} →
          </button>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/60 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>
            {t("projects.title")}
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            className="swiper-button-prev-custom 
            hidden lg:flex
            absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 
            z-10 items-center justify-center w-12 h-12 rounded-full
            bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 
            transition-all hover:scale-110 shadow-lg"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            className="swiper-button-next-custom
            hidden lg:flex
            absolute right-0 top-1/2 -translate-y-1/2 translate-x-6
            z-10 items-center justify-center w-12 h-12 rounded-full
            bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 
            transition-all hover:scale-110 shadow-lg"
          >
            <ChevronRight size={28} />
          </button>

          {/* Swiper Container */}
          <Swiper
            key={refreshKey}
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1.3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.8,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 32,
              },
            }}
            className="projects-swiper !pb-12"
          >
            {projectsData.map((project, index) => (
              <SwiperSlide key={index} className="py-8" style={{ height: "auto" }}>
                <div className="h-full">
                  <ProjectCard project={project} index={index} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence mode="wait">
        {selectedProjectIndex !== null && showGallery && (
          <AlbumGallery
            images={
              projectsData[selectedProjectIndex].images?.map((img) => ({
                src: img.src,
                title: img.title,
                description: t(`projects.project${selectedProjectIndex + 1}.description`) as string,
              })) || []
            }
            onClose={() => {
              setShowGallery(false);
              setSelectedProjectIndex(null);
              setRefreshKey((k) => k + 1);
            }}
          />
        )}
      </AnimatePresence>

      {/* Project Detail Dialog */}
      <AnimatePresence mode="wait">
        {selectedProjectIndex !== null && showDetailDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => {
              setShowDetailDialog(false);
              setSelectedProjectIndex(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => {
                    setShowDetailDialog(false);
                    setSelectedProjectIndex(null);
                  }}
                  className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                >
                  <X size={24} />
                </button>

                {/* Image Carousel */}
                <div className="w-full relative overflow-hidden flex items-center justify-center bg-gray-900 aspect-[16/9]">
                  {projectsData[selectedProjectIndex].images && projectsData[selectedProjectIndex].images!.length > 1 ? (
                    <Swiper
                      key={`dialog-${refreshKey}-${selectedProjectIndex}`}
                      modules={[Navigation, Pagination]}
                      spaceBetween={0}
                      slidesPerView={1}
                      navigation={{
                        nextEl: `.dialog-next-btn`,
                        prevEl: `.dialog-prev-btn`,
                      }}
                      pagination={{
                        clickable: true,
                        el: `.dialog-pagination`,
                      }}
                      className="w-full h-full"
                    >
                      {projectsData[selectedProjectIndex].images!.map((img, i) => (
                        <SwiperSlide key={i} className="bg-gray-900 h-full">
                          <div className="relative w-full h-full">
                            <Image src={img.src} alt={`${img.title}-${i}`} fill className="object-cover" />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : projectsData[selectedProjectIndex].images?.length === 1 ? (
                    <div className="relative w-full h-full">
                      <Image src={projectsData[selectedProjectIndex].images![0].src} alt={projectsData[selectedProjectIndex].images![0].title} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-900">
                      <Code className="text-gray-600" size={64} />
                    </div>
                  )}

                  {/* Arrow Buttons */}
                  {projectsData[selectedProjectIndex].images && projectsData[selectedProjectIndex].images!.length > 1 && (
                    <>
                      <button className="dialog-prev-btn absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all">
                        <ChevronLeft size={24} />
                      </button>

                      <button className="dialog-next-btn absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all">
                        <ChevronRight size={24} />
                      </button>

                      <div className="dialog-pagination absolute bottom-3 left-0 right-0 mx-auto z-20 flex justify-center gap-1" />
                    </>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-60vh)]">
                <h2 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>
                  {t(`projects.project${selectedProjectIndex + 1}.title`)}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6" suppressHydrationWarning>
                  {t(`projects.project${selectedProjectIndex + 1}.description`)}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2" suppressHydrationWarning>
                    <CheckCircle2 className="text-blue-600 dark:text-blue-500" size={24} />
                    {t("projects.features")}
                  </h3>
                  <ul className="space-y-2">
                    {Array.isArray(t(`projects.project${selectedProjectIndex + 1}.features`)) &&
                      (t(`projects.project${selectedProjectIndex + 1}.features`) as string[]).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                          <span className="text-blue-600 dark:text-blue-500 mt-1">•</span>
                          <span suppressHydrationWarning>{feature}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {projectsData[selectedProjectIndex].technologies.map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
