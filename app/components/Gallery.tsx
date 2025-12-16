"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { ZoomIn, ZoomOut, RotateCcw, RotateCw, FlipHorizontal, FlipVertical } from "lucide-react";
import { createPortal } from "react-dom";

interface GalleryImage {
  src: string;
  title?: string;
  description?: string;
}

export const AlbumGallery = ({ images, onClose }: { images: GalleryImage[]; onClose: () => void }) => {
  const [index, setIndex] = useState<number>(0);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);

  React.useEffect(() => {
    // Disable scroll when gallery is open
    document.body.style.overflow = "hidden";

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = ""; // Re-enable scroll when gallery closes
    };
  }, [index, onClose]);

  const nextImage = () => {
    setIndex((index + 1) % images.length);
    resetTransform();
  };

  const prevImage = () => {
    setIndex((index - 1 + images.length) % images.length);
    resetTransform();
  };

  const resetTransform = () => {
    setZoom(1);
    setRotation(0);
    setFlipX(false);
    setFlipY(false);
  };

  const modal = (
    <>
      <motion.div className="fixed inset-0 z-[9998] bg-black" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />

      <motion.div className="fixed inset-0 z-[9999] flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
        {/* HEADER */}
        <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-b border-white/10" onClick={(e) => e.stopPropagation()}>
          {/* Left Section - Image Info */}
          <div className="text-white flex-1">
            <p className="text-xs sm:text-sm opacity-70">
              {index + 1} / {images.length}
            </p>
            {images[index].title && <p className="text-base sm:text-lg font-semibold">{images[index].title}</p>}
          </div>

          {/* Center Section - Toolbar */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 absolute left-1/2 -translate-x-1/2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                resetTransform();
              }}
              className="p-2 sm:p-2.5 md:p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 text-white transition group relative"
              title="Reset"
            >
              <RotateCcw size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="hidden md:block absolute bottom-full mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Reset</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoom((z) => Math.max(0.5, z - 0.2));
              }}
              className="p-2 sm:p-2.5 md:p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 text-white transition group relative"
              title="Zoom Out"
            >
              <ZoomOut size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="hidden md:block absolute bottom-full mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Zoom Out</span>
            </button>

            <div className="text-white text-xs sm:text-sm opacity-70 px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-lg">{Math.round(zoom * 100)}%</div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoom((z) => z + 0.2);
              }}
              className="p-2 sm:p-2.5 md:p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 text-white transition group relative"
              title="Zoom In"
            >
              <ZoomIn size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="hidden md:block absolute bottom-full mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Zoom In</span>
            </button>

            <div className="w-px h-6 sm:h-8 bg-white/20"></div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setRotation((r) => r + 90);
              }}
              className="p-2 sm:p-2.5 md:p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 text-white transition group relative"
              title="Rotate Right"
            >
              <RotateCw size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="hidden md:block absolute bottom-full mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Rotate Right</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setRotation((r) => r - 90);
              }}
              className="p-2 sm:p-2.5 md:p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 text-white transition group relative"
              title="Rotate Left"
            >
              <RotateCcw size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="hidden md:block absolute bottom-full mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Rotate Left</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setFlipX(!flipX);
              }}
              className={`p-2 sm:p-2.5 md:p-3 backdrop-blur-sm rounded-lg transition group relative ${flipX ? "bg-white/20 text-white" : "bg-white/10 hover:bg-white/20 text-white"}`}
              title="Flip Horizontal"
            >
              <FlipHorizontal size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="hidden md:block absolute bottom-full mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Flip H</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setFlipY(!flipY);
              }}
              className={`p-2 sm:p-2.5 md:p-3 backdrop-blur-sm rounded-lg transition group relative ${flipY ? "bg-white/20 text-white" : "bg-white/10 hover:bg-white/20 text-white"}`}
              title="Flip Vertical"
            >
              <FlipVertical size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="hidden md:block absolute bottom-full mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Flip V</span>
            </button>
          </div>

          {/* Right Section - Close Button */}
          <div className="flex-1 flex justify-end">
            <button onClick={onClose} className="p-1.5 sm:p-2 text-white hover:bg-white/10 rounded-lg transition">
              <X size={24} className="sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>
        {/* KEYBOARD HINT */}
        <div className="hidden sm:block text-center text-white/50 text-xs pb-3 sm:pb-4">← Prev | → Next | ESC Close</div>

        {/* MAIN IMAGE CONTAINER */}
        <div className="flex-1 flex items-center justify-center overflow-hidden relative bg-black px-2 sm:px-0" onClick={(e) => e.stopPropagation()}>
          <div className="relative w-full h-full flex items-center justify-center max-h-[60vh] sm:max-h-[70vh] md:max-h-none">
            <motion.div animate={{ scale: zoom, rotate: rotation, scaleX: flipX ? -1 : 1, scaleY: flipY ? -1 : 1 }} transition={{ duration: 0.3 }} className="relative w-full h-full flex items-center justify-center px-2 sm:px-0">
              {images[index]?.src ? <Image src={images[index].src} alt="Preview" fill className="object-contain select-none pointer-events-none" priority /> : null}
            </motion.div>
          </div>

          {/* SIDE NAVIGATION BUTTONS */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-zinc-500/50 md:bg-white/10 backdrop-blur-sm rounded-full hover:bg-zinc-500/50 md:hover:bg-white/20 text-white transition z-10"
              >
                <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-zinc-500/50 md:bg-white/10 backdrop-blur-sm rounded-full hover:bg-zinc-500/50 md:hover:bg-white/20 text-white transition z-10"
              >
                <ChevronRight size={24} className="sm:w-8 sm:h-8" />
              </button>
            </>
          )}
        </div>
        {/* Desc */}
        {images[index].description ? <p className="text-xs sm:text-sm md:text-base text-white text-center mt-3 sm:mt-5 p-4 sm:p-6 mx-auto">{images[index].description}</p> : <div className="mt-3 sm:mt-5 pb-4 sm:pb-6"></div>}
      </motion.div>
    </>
  );

  if (typeof window === "undefined") return null;
  return createPortal(modal, document.body);
};
