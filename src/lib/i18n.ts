import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./i18nResources";

i18n
  .use(initReactI18next)
  .init({
    resources,
    // Try to read saved language from localStorage (key: selectedLng).
    // Fallback to 'en' if not set.
    lng: (typeof window !== 'undefined' && localStorage.getItem('selectedLng')) || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
