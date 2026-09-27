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
  const title = typeof meta.title === "string" ? meta.title : undefined;
  const description = meta.description ?? undefined;
  const url = SITE_URL + path;
  return {
    ...meta,
    openGraph: {
      type,
      siteName: SITE_NAME,
      locale: "en_GB",
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
