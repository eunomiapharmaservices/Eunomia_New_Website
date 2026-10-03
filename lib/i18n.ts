import { defaultLocale, isLocale, type Locale } from "../data/i18n/locales";
import uiStrings from "../data/i18n/ui.json";

/**
 * Routes that exist in every language. A link only gets a language prefix if
 * its target is listed here, so pages can be translated in stages without
 * leaving visitors on 404s. Add a pattern when a localised page ships.
 */
const localizedRoutes: RegExp[] = [
  /^\/$/,
  /^\/services$/,
  /^\/services\/(governance-assurance|automation-of-compliance-operations|local-legal-mandates|shared-services)$/,
  /^\/contact$/,\n  /^\/privacy$/,
  /^\/team$/,
  /^\/resources$/,
  /^\/markets\/(ireland|sweden|germany|france|portugal|spain|italy|netherlands)$/,
];

export function isLocalizedRoute(path: string): boolean {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  return localizedRoutes.some((pattern) => pattern.test(clean));
}

/** Prefix an English path with the locale when that page is translated. */
export function localHref(locale: Locale | undefined, href: string): string {
  if (!locale || locale === defaultLocale) return href;
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (!isLocalizedRoute(href)) return href;
  const rest = href === "/" ? "" : href;
  return `/${locale}${rest}`;
}

/** Remove a leading locale segment from a pathname ("/de/team" -> "/team"). */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  const [, first, ...rest] = pathname.split("/");
  if (first && isLocale(first) && first !== defaultLocale) {
    return { locale: first, path: "/" + rest.join("/") };
  }
  return { locale: defaultLocale, path: pathname || "/" };
}

type Ui = Record<string, string>;
const ui = uiStrings as unknown as Record<string, Ui>;

/** Interface strings for a locale, falling back to English per key. */
export function getUi(locale: Locale | undefined): (key: string, vars?: Record<string, string>) => string {
  const table = ui[locale ?? defaultLocale] ?? {};
  const fallback = ui[defaultLocale];
  return (key, vars) => {
    let value = table[key] ?? fallback[key];
    if (value === undefined) throw new Error(`Missing UI string: ${key}`);
    if (vars) for (const [name, replacement] of Object.entries(vars)) value = value.split(`{${name}}`).join(replacement);
    return value;
  };
}

/**
 * Overlay translated content onto the English source. Objects merge by key,
 * arrays merge by position (so non-translatable fields such as links and
 * images are kept from the English source), and strings are replaced. Keys the
 * translation leaves out fall back to English.
 */
export function mergeTranslation<T>(base: T, translation: unknown): T {
  if (translation === undefined || translation === null) return base;
  if (Array.isArray(base)) {
    if (!Array.isArray(translation)) return base;
    return base.map((item, index) => mergeTranslation(item, translation[index])) as unknown as T;
  }
  if (base && typeof base === "object") {
    if (typeof translation !== "object") return base;
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const [key, value] of Object.entries(translation as Record<string, unknown>)) {
      out[key] = key in out ? mergeTranslation(out[key], value) : value;
    }
    return out as T;
  }
  return (typeof translation === typeof base ? translation : base) as T;
}

/**
 * Check a translation file against its English source: no unknown keys, same
 * array lengths, same value types, and unchanged URLs/ids. Returns a list of
 * problems (empty when the file is sound).
 */
export function checkTranslation(base: unknown, translation: unknown, path = "$"): string[] {
  if (translation === undefined) return [];
  if (Array.isArray(base)) {
    if (!Array.isArray(translation)) return [`${path}: expected array`];
    if (base.length !== translation.length) return [`${path}: length ${translation.length}, expected ${base.length}`];
    return base.flatMap((item, i) => checkTranslation(item, translation[i], `${path}[${i}]`));
  }
  if (base && typeof base === "object") {
    if (!translation || typeof translation !== "object" || Array.isArray(translation)) return [`${path}: expected object`];
    return Object.entries(translation as Record<string, unknown>).flatMap(([key, value]) =>
      key in (base as object)
        ? checkTranslation((base as Record<string, unknown>)[key], value, `${path}.${key}`)
        : [`${path}.${key}: unknown key`],
    );
  }
  if (typeof base !== typeof translation) return [`${path}: type ${typeof translation}, expected ${typeof base}`];
  if (typeof base === "string") {
    const keepVerbatim = /^(https?:\/\/|\/)/.test(base) || /\.(png|jpe?g|webp|svg|pdf|xlsx|vtt|mp4)$/i.test(base);
    if (keepVerbatim && base !== translation) return [`${path}: link/asset must stay unchanged`];
    if (!base.trim() !== !(translation as string).trim()) return [`${path}: empty/non-empty mismatch`];
  }
  return [];
}
