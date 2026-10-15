"use client";
import React, { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";
import { translations, TranslationKey } from "../locales/translations";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey | string) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

let currentLanguage: Language = "en";
const listeners = new Set<() => void>();

function emitChange() {
  listeners.forEach((listener) => listener());
}

function subscribeLanguage(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getLanguageSnapshot(): Language {
  return currentLanguage;
}

function getLanguageServerSnapshot(): Language {
  return "en";
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const language = useSyncExternalStore(subscribeLanguage, getLanguageSnapshot, getLanguageServerSnapshot);

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && (saved === "en" || saved === "id") && saved !== currentLanguage) {
      currentLanguage = saved;
      emitChange();
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    currentLanguage = lang;
    localStorage.setItem("language", lang);
    emitChange();
  }, []);

  const t = useCallback(
    (key: TranslationKey | string): string | string[] => {
      const value = translations[language][key as TranslationKey];
      return value || key;
    },
    [language],
  );

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
