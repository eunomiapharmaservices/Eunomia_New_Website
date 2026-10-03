"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "../data/i18n/locales";
import { isLocalizedRoute, localHref, stripLocale } from "../lib/i18n";

function rememberLocale(locale: Locale) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `eps-locale=${locale}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const currentPath = stripLocale(pathname || "/").path;
  const hasLocalizedPath = isLocalizedRoute(currentPath);
  const label = locale === "es" ? "Idioma" : locale === "fr" ? "Langue" : locale === "de" ? "Sprache" : locale === "it" ? "Lingua" : locale === "pt" ? "Idioma" : locale === "nl" ? "Taal" : locale === "ja" ? "言語" : locale === "zh-CN" ? "语言" : locale === "ar" ? "اللغة" : "Language";
  return (
    <details className="language-menu">
      <summary aria-label={label}>{label}: {locales[locale].label}</summary>
      <div className="language-dropdown">
        {Object.entries(locales).map(([code, info]) => {
          const option = code as Locale;
          const href = hasLocalizedPath ? localHref(option, currentPath) : option === "en" ? currentPath : `/${option}`;
          return (
            <a
              key={option}
              href={href}
              lang={option}
              aria-current={option === locale ? "page" : undefined}
              onClick={() => rememberLocale(option)}
            >
              {info.label}
            </a>
          );
        })}
      </div>
    </details>
  );
}
