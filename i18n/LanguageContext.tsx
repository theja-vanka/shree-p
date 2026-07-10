"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { en } from "@/data/en";
import { fr } from "@/data/fr";
import type { SiteContent } from "@/data/types";

export type Lang = "en" | "fr";

const dictionaries: Record<Lang, SiteContent> = { en, fr };
const STORAGE_KEY = "shree-portfolio-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  content: SiteContent;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "fr") {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const toggle = () => setLang(lang === "en" ? "fr" : "en");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, content: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
