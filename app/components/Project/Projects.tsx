"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code, ChevronLeft, ChevronRight, X, Images, CheckCircle2, Github, Maximize2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { AlbumGallery } from "../Gallery";
import { Project, projectsData } from "./Project-Data";
import { useLanguage } from "../../contexts/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function ProjectRow({
  project,
  index,
  title,
  description,
  readMore,
  onOpen,
}: {
  project: Project;
  index: number;
  title: string;
  description: string;
  readMore: string;
  onOpen: (index: number) => void;
}) {
  const isEven = index % 2 === 0;
  const totalImages = project.images?.length ?? 0;

  return (
    <motion.div variants={rowVariants} className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center py-10 lg:py-14 border-b border-gray-200 dark:border-gray-800 last:border-b-0">
      {/* Image — first in DOM so mobile shows image on top */}
      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
        <div
          className="group relative w-full overflow-hidden rounded-2xl bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[16/10]"
          onClick={() => onOpen(index)}
        >
          {totalImages > 0 ? (
            <Image src={project.images![0].src} alt={project.images![0].title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Code className="text-gray-600" size={64} />
            </div>
          )}

          {totalImages > 1 && (
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1.5 rounded-full">
              <Images size={14} />
              <span>1 / {totalImages}</span>
            </div>
          )}

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
        <span className="block text-5xl lg:text-6xl font-bold text-blue-600/10 dark:text-blue-400/15 leading-none mb-3 select-none">{String(index + 1).padStart(2, "0")}</span>

        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-zinc-100 mb-4" suppressHydrationWarning>
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3 mb-5" suppressHydrationWarning>
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full text-xs sm:text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onOpen(index)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 dark:bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            suppressHydrationWarning
          >
            {readMore}
          </button>
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Github size={16} />
              <span>Repository</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const [openProjectIndex, setOpenProjectIndex] = useState<number | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const project = openProjectIndex !== null ? projectsData[openProjectIndex] : null;
  const images = project?.images ?? [];

  useEffect(() => {
    if (openProjectIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openProjectIndex, fullscreen]);

  useEffect(() => {
    if (openProjectIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !fullscreen) {
        setOpenProjectIndex(null);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [openProjectIndex, fullscreen]);

  const openProject = (index: number) => {
    setOpenProjectIndex(index);
    setActiveSlide(0);
    setFullscreen(false);
  };

  const closeProject = () => {
    setOpenProjectIndex(null);
    setFullscreen(false);
  };

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

        {/* Case-study rows */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectRow
              key={index}
              project={project}
              index={index}
              title={t(`projects.project${index + 1}.title`) as string}
              description={t(`projects.project${index + 1}.description`) as string}
              readMore={t("projects.readMore") as string}
              onOpen={openProject}
            />
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {openProjectIndex !== null && project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeProject}
                aria-label="Close"
                className="fixed top-6 right-6 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              >
                <X size={22} />
              </button>

              {/* Image Carousel — fixed header, outside scroll */}
              <div className="relative w-full shrink-0 p-4 sm:p-6">
                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900">
                  {images.length > 1 ? (
                    <Swiper
                      key={`modal-${openProjectIndex}`}
                      modules={[Navigation, Pagination]}
                      spaceBetween={0}
                      slidesPerView={1}
                      navigation={{
                        nextEl: ".modal-next-btn",
                        prevEl: ".modal-prev-btn",
                      }}
                      pagination={{
                        clickable: true,
                        el: ".modal-pagination",
                      }}
                      onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                      }}
                      onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                      className="w-full h-full"
                    >
                      {images.map((img, i) => (
                        <SwiperSlide key={i} className="bg-gray-100 dark:bg-gray-900 h-full">
                          <div className="relative w-full h-full">
                            <Image src={img.src} alt={`${img.title}-${i}`} fill className="object-contain" />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : images.length === 1 ? (
                    <div className="relative w-full h-full">
                      <Image src={images[0].src} alt={images[0].title} fill className="object-contain" />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Code className="text-gray-400 dark:text-gray-600" size={64} />
                    </div>
                  )}
                </div>

                {/* Counter */}
                {images.length > 1 && (
                  <div className="absolute top-7 left-7 z-20 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                    {activeSlide + 1} / {images.length}
                  </div>
                )}

                {/* Fullscreen button */}
                {images.length > 0 && (
                  <button
                    onClick={() => setFullscreen(true)}
                    aria-label="View fullscreen"
                    className="absolute bottom-7 right-7 z-20 bg-black/50 hover:bg-black/70 text-white p-2.5 rounded-full transition-all"
                  >
                    <Maximize2 size={18} />
                  </button>
                )}

                {/* Arrow Buttons */}
                {images.length > 1 && (
                  <>
                    <button className="modal-prev-btn absolute left-7 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2.5 sm:p-3 rounded-full hover:bg-black/70 transition-all">
                      <ChevronLeft size={22} />
                    </button>
                    <button className="modal-next-btn absolute right-7 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2.5 sm:p-3 rounded-full hover:bg-black/70 transition-all">
                      <ChevronRight size={22} />
                    </button>
                    <div className="modal-pagination absolute bottom-7 left-0 right-0 mx-auto z-20 flex justify-center gap-1 w-fit" />
                  </>
                )}
              </div>

              {/* Scrollable area — starts below the image */}
              <div className="overflow-y-auto flex-1 min-h-0">
                {/* Thumbnail Strip */}
                {images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto px-4 sm:px-6 py-3 border-b border-gray-200 dark:border-gray-700">
                    {images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          swiperRef.current?.slideTo(i);
                          setActiveSlide(i);
                        }}
                        className={`relative w-20 h-12 shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                          i === activeSlide
                            ? "border-blue-600 dark:border-blue-500 opacity-100"
                            : "border-transparent opacity-50 hover:opacity-80"
                        }`}
                      >
                        <Image src={img.src} alt={img.title} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Content */}
                <div className="p-5 sm:p-8">
                  <h2 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4" suppressHydrationWarning>
                    {t(`projects.project${openProjectIndex + 1}.title`)}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6" suppressHydrationWarning>
                    {t(`projects.project${openProjectIndex + 1}.description`)}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2" suppressHydrationWarning>
                      <CheckCircle2 className="text-blue-600 dark:text-blue-500" size={22} />
                      {t("projects.features")}
                    </h3>
                    <ul className="space-y-2">
                      {Array.isArray(t(`projects.project${openProjectIndex + 1}.features`)) &&
                        (t(`projects.project${openProjectIndex + 1}.features`) as string[]).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                            <span className="text-blue-600 dark:text-blue-500 mt-1">•</span>
                            <span suppressHydrationWarning>{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Repository */}
                  {project.repository && (
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 dark:bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                    >
                      <Github size={16} />
                      <span>View Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Gallery */}
      <AnimatePresence>
        {fullscreen && openProjectIndex !== null && (
          <AlbumGallery
            images={images.map((img) => ({
              src: img.src,
              title: img.title,
              description: t(`projects.project${openProjectIndex + 1}.description`) as string,
            }))}
            onClose={() => setFullscreen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
