import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ro"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ro: "Română",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  ro: "🇷🇴",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeCookie: {
    name: "NEXORA_LOCALE",
    maxAge: 60 * 60 * 24 * 365,
  },
});
