import type { Metadata } from "next";
import { defaultLocale, isLocale, locales, type Locale } from "../data/i18n/locales";
import { isLocalizedRoute } from "./i18n";
import en from "../data/i18n/seo/en.json";
import es from "../data/i18n/seo/es.json";
import fr from "../data/i18n/seo/fr.json";
import de from "../data/i18n/seo/de.json";
import it from "../data/i18n/seo/it.json";
import pt from "../data/i18n/seo/pt.json";
import nl from "../data/i18n/seo/nl.json";
import ja from "../data/i18n/seo/ja.json";
import zhCN from "../data/i18n/seo/zh-CN.json";
import ar from "../data/i18n/seo/ar.json";

type PageSeo = { title?: string; description?: string };

// Title and meta description per language, keyed by the English path ("/" for
// the homepage). Edit them in data/i18n/seo/<locale>.json; a page without an
// entry keeps the title and description its own metadata provides.
const pageSeo: Record<Locale, Record<string, PageSeo>> = { en, es, fr, de, it, pt, nl, ja, "zh-CN": zhCN, ar };

/** "/de/services" -> { locale: "de", page: "/services" }; "/team" -> { locale: "en", page: "/team" } */
function splitPath(path: string): { locale: Locale; page: string } {
  const [, first, ...rest] = path.split("/");
  if (first && isLocale(first) && first !== defaultLocale) return { locale: first, page: "/" + rest.join("/") };
  return { locale: defaultLocale, page: path || "/" };
}

export const SITE_URL = "https://www.eunomiapharmaservices.com";
export const SITE_NAME = "Eunomia Pharma Services";

export const DEFAULT_OG_IMAGE = {
  url: "/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Eunomia Pharma Services: global healthcare compliance, powered by automation",
};

/**
 * Adds Open Graph and Twitter card tags to a page's metadata, reusing its
 * title and description, so shares on LinkedIn and elsewhere show the right
 * title, summary and image.
 */
export function withSocial(path: string, meta: Metadata, type: "website" | "article" = "website"): Metadata {
  const { locale, page } = splitPath(path);
  meta = { ...meta, ...pageSeo[locale][page] };
  const title = typeof meta.title === "string" ? meta.title : undefined;
  const description = meta.description ?? undefined;
  const url = SITE_URL + path;
  // Pages that exist in every language list the other language versions.
  const alternateLocale = isLocalizedRoute(page)
    ? (Object.keys(locales) as Locale[]).filter((code) => code !== locale).map((code) => locales[code].og)
    : undefined;
  return {
    ...meta,
    openGraph: {
      type,
      siteName: SITE_NAME,
      locale: locales[locale].og,
      ...(alternateLocale ? { alternateLocale } : {}),
      url,
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
      ...(meta.openGraph ?? {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
      ...(meta.twitter ?? {}),
    },
  };
}
