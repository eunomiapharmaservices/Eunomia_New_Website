import type { Metadata } from "next";

export const siteUrl = "https://www.eunomiapharmaservices.com";

/** Keep page titles, canonical URLs and both sharing formats in sync. */
export function withSocialMetadata(metadata: Metadata): Metadata {
  const title = typeof metadata.title === "string" ? metadata.title : "Eunomia Pharma Services";
  const description = metadata.description ?? "";
  const canonical = String(metadata.alternates?.canonical ?? "/");
  const url = new URL(canonical, siteUrl);
  const imagePath = url.pathname === "/" ? "/social/home" : `/social${url.pathname}`;
  const image = {
    url: new URL(imagePath, siteUrl).href,
    width: 1200,
    height: 627,
    alt: title,
    type: "image/png",
  };
  return {
    ...metadata,
    openGraph: {
      type: "website",
      title,
      description,
      url: url.href,
      siteName: "Eunomia Pharma Services",
      ...metadata.openGraph,
      images: [image],
    },
    twitter: {
      ...metadata.twitter,
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image.url, alt: title }],
    },
  };
}
