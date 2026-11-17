/**
 * Locale foundations for the multilingual site.
 *
 * An explicit visitor choice takes precedence. Mapped countries use their
 * default supported language; countries with multiple common languages use
 * the visitor's supported browser language.
 */
// `region` is the primary target country each language serves (UK for English,
// one EU country per EU language). It sets <html lang>, the extra country
// hreflang alongside the generic language code, and og:locale. Non-EU
// languages have no target country, so they keep their generic tags.
export const locales = {
  en: { label: "English", dir: "ltr", region: "en-GB", og: "en_GB" },
  es: { label: "Español", dir: "ltr", region: "es-ES", og: "es_ES" },
  fr: { label: "Français", dir: "ltr", region: "fr-FR", og: "fr_FR" },
  de: { label: "Deutsch", dir: "ltr", region: "de-DE", og: "de_DE" },
  it: { label: "Italiano", dir: "ltr", region: "it-IT", og: "it_IT" },
  pt: { label: "Português", dir: "ltr", region: "pt-PT", og: "pt_PT" },
  nl: { label: "Nederlands", dir: "ltr", region: "nl-NL", og: "nl_NL" },
  ja: { label: "日本語", dir: "ltr", region: null, og: "ja_JP" },
  "zh-CN": { label: "简体中文", dir: "ltr", region: null, og: "zh_CN" },
  ar: { label: "العربية", dir: "rtl", region: null, og: "ar_AR" },
} as const;

/** Value for <html lang>: the target-country tag where there is one. */
export function htmlLang(locale: Locale): string {
  return locales[locale].region ?? locale;
}

export type Locale = keyof typeof locales;

export const defaultLocale: Locale = "en";

/**
 * ISO 3166-1 alpha-2 country defaults for languages supported by this release.
 * Countries with multiple common languages are not mapped; those visitors use
 * their supported Accept-Language preference instead.
 */
export const countryLocaleHints: Readonly<Record<string, Locale>> = {
  // English defaults: keep UK and US visitors on the English site even if
  // their browser also lists another supported language.
  GB: "en",
  US: "en",

  // Spanish
  ES: "es",
  MX: "es",
  AR: "es",
  BO: "es",
  CL: "es",
  CO: "es",
  CR: "es",
  CU: "es",
  DO: "es",
  EC: "es",
  GT: "es",
  HN: "es",
  NI: "es",
  PA: "es",
  PE: "es",
  PY: "es",
  SV: "es",
  UY: "es",
  VE: "es",

  // French
  FR: "fr",
  MC: "fr",
  SN: "fr",
  CI: "fr",
  CM: "fr",
  CD: "fr",
  CG: "fr",
  GA: "fr",
  GN: "fr",
  ML: "fr",
  NE: "fr",
  BF: "fr",
  BJ: "fr",
  TG: "fr",
  MG: "fr",
  HT: "fr",

  // German
  DE: "de",
  AT: "de",
  LI: "de",

  // Italian
  IT: "it",
  SM: "it",
  VA: "it",

  // Portuguese
  PT: "pt",
  BR: "pt",
  AO: "pt",
  MZ: "pt",
  CV: "pt",
  GW: "pt",
  ST: "pt",
  TL: "pt",

  // Dutch
  NL: "nl",
  SR: "nl",

  // Japanese and Simplified Chinese
  JP: "ja",
  CN: "zh-CN",

  // Arabic
  SA: "ar",
  AE: "ar",
  QA: "ar",
  KW: "ar",
  BH: "ar",
  OM: "ar",
  YE: "ar",
  JO: "ar",
  LB: "ar",
  SY: "ar",
  IQ: "ar",
  EG: "ar",
  LY: "ar",
  TN: "ar",
  DZ: "ar",
  MA: "ar",
  SD: "ar",
  MR: "ar",
  PS: "ar",
  SO: "ar",
  DJ: "ar",
  KM: "ar",
};

const SITE = "https://www.eunomiapharmaservices.com";

/**
 * hreflang alternates for a page that exists in every locale. `path` is the
 * English path ("" for the homepage, "/services" etc.). English is also the
 * x-default for visitors whose language isn't supported.
 */
export function languageAlternates(path: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (const code of Object.keys(locales) as Locale[]) {
    const url = code === defaultLocale ? `${SITE}${path || "/"}` : `${SITE}/${code}${path}`;
    map[code] = url;
    // List the page under its target country too (es and es-ES, en and en-GB).
    const region = locales[code].region;
    if (region) map[region] = url;
  }
  map["x-default"] = map[defaultLocale];
  return map;
}

export function isLocale(value: string): value is Locale {
  return Object.prototype.hasOwnProperty.call(locales, value);
}

export function localeHintForCountry(countryCode: string | null | undefined): Locale {
  return (countryCode && countryLocaleHints[countryCode.toUpperCase()]) || defaultLocale;
}
