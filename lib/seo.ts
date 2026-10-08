import localizedSeo from "../data/localized-seo.json";
import type { Metadata } from "next";

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
  const override = localizedSeo[path as keyof typeof localizedSeo];
  meta = { ...meta, ...override };
  const title = typeof meta.title === "string" ? meta.title : undefined;
  const description = meta.description ?? undefined;
  const url = SITE_URL + path;
  const language = path.split("/")[1];
  const socialLocales: Record<string, string> = { en: "en_GB", es: "es_ES", fr: "fr_FR", de: "de_DE", it: "it_IT", pt: "pt_PT", nl: "nl_NL", ja: "ja_JP", "zh-CN": "zh_CN", ar: "ar_AR" };
  return {
    ...meta,
    openGraph: {
      type,
      siteName: SITE_NAME,
      locale: socialLocales[language] ?? "en_GB",
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
