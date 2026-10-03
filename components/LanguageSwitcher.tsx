import { locales } from "../data/i18n/locales";

type PilotLocale = "en" | "es";

export function LanguageSwitcher({ locale }: { locale: PilotLocale }) {
  const label = locale === "es" ? "Idioma" : "Language";
  const options = [
    { locale: "en" as const, href: "/", label: locales.en.label },
    { locale: "es" as const, href: "/es", label: locales.es.label },
  ];
  return (
    <details className="language-menu">
      <summary aria-label={label}>{label}: {locales[locale].label}</summary>
      <div className="language-dropdown">
        {options.map((option) => (
          <a
            key={option.locale}
            href={option.href}
            lang={option.locale}
            aria-current={option.locale === locale ? "page" : undefined}
          >
            {option.label}
          </a>
        ))}
      </div>
    </details>
  );
}
