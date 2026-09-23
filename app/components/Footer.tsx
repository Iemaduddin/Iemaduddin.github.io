"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const footerLinks = [
  { key: "nav.about", href: "#about" },
  { key: "nav.work", href: "#work" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.education", href: "#education" },
  { key: "nav.org", href: "#org" },
  { key: "nav.contact", href: "#contact" },
] as const;

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Iemaduddin", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/iemaduddin", label: "LinkedIn" },
    { icon: Mail, href: "mailto:iemaduddin17@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Iemaduddin</h3>
            <p className="text-sm text-gray-400 mb-4" suppressHydrationWarning>
              {t("footer.build")}
            </p>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors"
              suppressHydrationWarning
            >
              <Download size={16} />
              {t("about.downloadCV")}
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4" suppressHydrationWarning>
              {t("footer.quickLinks")}
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors" suppressHydrationWarning>
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4" suppressHydrationWarning>
              {t("footer.connect")}
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="p-2.5 border border-gray-700 rounded-lg text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">Iemaduddin © {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
