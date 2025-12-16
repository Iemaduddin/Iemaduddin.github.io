"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "./Providers";
import { useLanguage } from "../contexts/LanguageContext";
import { Moon, Sun, Menu, X, Languages, Maximize } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { language, setLanguage, t } = useLanguage();
  const isDark = theme == "dark";

  const navItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.education"), href: "#education" },
    { name: t("nav.experience"), href: "#org" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const jumbotron = document.getElementById("home");
      if (jumbotron) {
        const jumbotronHeight = jumbotron.offsetHeight;
        setIsScrolled(window.scrollY > jumbotronHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);

    // Tunggu sedikit untuk menutup menu terlebih dahulu
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = 80; // Approximate navbar height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const fullScreen = () => {
    const doc = document as Document & { fullscreenElement?: Element | null; exitFullscreen?: () => Promise<void> };
    const element = doc.documentElement as HTMLElement & { requestFullscreen?: () => Promise<void> };
    // Toggle fullscreen: enter if not fullscreen, otherwise exit
    if (!doc.fullscreenElement && element.requestFullscreen) {
      element.requestFullscreen();
    } else if (doc.exitFullscreen) {
      doc.exitFullscreen();
    }
  };

  return (
    <>
      {isScrolled && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-lg"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="container mx-auto max-w-7xl px-3 sm:px-4">
            <div className="flex items-center justify-between h-14 sm:h-16">
              <motion.div whileHover={{ scale: 1.05 }} className="shrink-0">
                {isDark ? <Image src="/navbrand_didin.png" alt="Didin Icon" width={120} height={50} className="w-[100px]" /> : <Image src="/navbrand_didin_light.png" alt="Didin Icon" width={120} height={50} className="w-[100px]" />}
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                <div className="flex items-center gap-6">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.name as string}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection(item.href)}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={fullScreen}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Toggle fullscreen"
                    title="Toggle fullscreen"
                  >
                    <Maximize size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setLanguage(language === "en" ? "id" : "en")}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                    title={language === "en" ? "Switch to Indonesian" : "Ganti ke English"}
                  >
                    <Languages size={18} />
                    <span className="text-xs font-semibold uppercase">{language}</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                  </motion.button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-1.5 sm:gap-2">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setLanguage(language === "en" ? "id" : "en")}
                  className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  title={language === "en" ? "ID" : "EN"}
                >
                  <span className="text-[10px] sm:text-xs font-bold">{language.toUpperCase()}</span>
                </motion.button>
                <motion.button whileTap={{ scale: 0.9 }} onClick={toggleTheme} className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  {theme === "light" ? <Moon size={18} className="sm:w-5 sm:h-5" /> : <Sun size={18} className="sm:w-5 sm:h-5" />}
                </motion.button>
                <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-hidden">
                  <div className="py-4 space-y-2">
                    {navItems.map((item) => (
                      <motion.button
                        key={item.name as string}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection(item.href)}
                        className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </>
  );
}
