import Image, { type ImageProps } from "next/image";
import dimensions from "../data/image-dimensions.json";

// Reserve the original aspect ratio and serve appropriately sized modern images.
export function SiteImage({ src, ...props }: ImageProps) {
  const size = typeof src === "string" ? dimensions[src as keyof typeof dimensions] : undefined;
  return <Image {...(props.fill ? {} : size)} src={src} {...props} />;
}
