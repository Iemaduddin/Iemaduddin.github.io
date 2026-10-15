"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "./Providers";
import { useLanguage } from "../contexts/LanguageContext";
import { LuMoon as Moon, LuSun as Sun, LuMenu as Menu, LuX as X, LuLanguages as Languages } from "react-icons/lu";
import Image from "next/image";
import { scrollToSection as lenisScrollToSection } from "../lib/lenis";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { language, setLanguage, t } = useLanguage();
  const isDark = theme == "dark";

  const navItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.work"), href: "#work" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.education"), href: "#education" },
    { name: t("nav.org"), href: "#org" },
    { name: t("nav.certificates"), href: "#certificates" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const sectionIds = ["home", "about", "work", "projects", "education", "org", "contact"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const handleScroll = () => {
      const jumbotron = document.getElementById("home");
      if (jumbotron) {
        const jumbotronHeight = jumbotron.offsetHeight;
        setIsScrolled(window.scrollY > jumbotronHeight - 100);
      }

      // Active section highlight
      const scrollPos = window.scrollY + 120;
      let current = "home";
      for (const section of sections) {
        if (section.offsetTop <= scrollPos) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => lenisScrollToSection(href, 80), 100);
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
              <div className="hidden md:flex items-center gap-4 lg:gap-6">
                <div className="flex items-center gap-2 lg:gap-4 xl:gap-5">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href.slice(1);
                    return (
                      <motion.button
                        key={item.name as string}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection(item.href)}
                        className={`text-sm font-medium transition-colors ${isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}
                      >
                        {item.name}
                      </motion.button>
                    );
                  })}
                </div>
                <div className="flex items-center gap-2">
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
          </div>
        </motion.nav>
      )}

      {/* Offcanvas Mobile Menu — di luar motion.nav agar fixed positioning bebas */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              key="menu-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="md:hidden fixed top-0 right-0 bottom-0 z-[56] w-72 max-w-[85vw] bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400" suppressHydrationWarning>
                  {t("nav.menu")}
                </span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300" aria-label="Close menu">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto py-4">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <motion.button
                      key={item.name as string}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + index * 0.05, duration: 0.3 }}
                      onClick={() => scrollToSection(item.href)}
                      className={`flex items-center gap-3 w-full text-left px-5 py-3.5 text-base font-medium transition-colors ${
                        isActive ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20" : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      <span className="text-xs font-mono text-blue-600/60 dark:text-blue-400/60">{String(index + 1).padStart(2, "0")}</span>
                      <span suppressHydrationWarning>{item.name}</span>
                    </motion.button>
                  );
                })}
              </nav>
              <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center gap-2">
                <button
                  onClick={() => setLanguage(language === "en" ? "id" : "en")}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold"
                >
                  <Languages size={16} />
                  {language.toUpperCase()}
                </button>
                <button onClick={toggleTheme} className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold">
                  {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
                  {theme === "light" ? "Dark" : "Light"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
