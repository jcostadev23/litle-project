"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { translations } from "../../translations";

type Translations = typeof translations;
export type Language = keyof Translations;
type TransLationKeys = keyof Translations["pt"];

interface TranslationContextProps {
  t: (key: TransLationKeys) => string;
  language: Language;
  switchLanguage: (lang: Language) => void;
}

export const TranslationContext = createContext<
  TranslationContextProps | undefined
>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    setLanguage((localStorage.getItem("app-language") as "pt" | "en") || "pt");
  }, []);

  useEffect(() => {
    localStorage.setItem("app-language", language);
  }, [language]);

  const switchLanguage = (lang: Language) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  const t = (key: TransLationKeys) => translations[language]?.[key] || key;

  return (
    <TranslationContext.Provider value={{ t, language, switchLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw Error("useTranslation must be used within a TranslationProvider");
  }

  return context;
};
