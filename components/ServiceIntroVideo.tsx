import { ServicesOverviewVideo } from "./ServicesOverviewVideo";
import { StructuredData } from "./StructuredData";

type Props = { media: string; title: string; description: string; seconds: number };
export function ServiceIntroVideo({ media, title, description, seconds }: Props) {
  const src = `/videos/eunomia-${media}.mp4`;
  const poster = `/videos/eunomia-${media}-poster.jpg`;
  return <>
    <StructuredData data={{
      "@context": "https://schema.org", "@type": "VideoObject", name: title, description,
      thumbnailUrl: `https://www.eunomiapharmaservices.com${poster}`,
      contentUrl: `https://www.eunomiapharmaservices.com${src}`,
      uploadDate: "2026-11-21T12:00:00Z", duration: `PT${seconds}S`, inLanguage: "en",
    }} />
    <ServicesOverviewVideo src={src} poster={poster} title={title}
      label={`${title} In English with embedded captions.`}
      caption={`${Math.round(seconds)}-second introduction · English · Captions included`} />
  </>;
}
