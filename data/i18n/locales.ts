/**
 * Locale foundations for the multilingual site.
 *
 * Browser language and an explicit visitor choice must take precedence over
 * these country defaults. Country is only a suggestion signal: it does not
 * uniquely determine a person's language.
 */
export const locales = {
  en: { label: "English", dir: "ltr" },
  es: { label: "Español", dir: "ltr" },
  fr: { label: "Français", dir: "ltr" },
  de: { label: "Deutsch", dir: "ltr" },
  it: { label: "Italiano", dir: "ltr" },
  pt: { label: "Português", dir: "ltr" },
  nl: { label: "Nederlands", dir: "ltr" },
  ja: { label: "日本語", dir: "ltr" },
  "zh-CN": { label: "简体中文", dir: "ltr" },
  ar: { label: "العربية", dir: "rtl" },
} as const;

export type Locale = keyof typeof locales;

export const defaultLocale: Locale = "en";

/**
 * ISO 3166-1 alpha-2 country hints for languages supported by the first
 * translation release. Countries with multiple common languages are not
 * assigned here; use Accept-Language or ask the visitor instead.
 */
export const countryLocaleHints: Readonly<Record<string, Locale>> = {
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

export function isLocale(value: string): value is Locale {
  return Object.prototype.hasOwnProperty.call(locales, value);
}

export function localeHintForCountry(countryCode: string | null | undefined): Locale {
  return (countryCode && countryLocaleHints[countryCode.toUpperCase()]) || defaultLocale;
}
