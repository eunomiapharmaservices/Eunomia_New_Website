import "server-only";
import type { Metadata } from "next";
import type { Locale } from "./locales";
import { languageAlternates } from "./locales";
import { withSocial, SITE_URL } from "../../lib/seo";
import { localHref } from "../../lib/i18n";
import en from "./promotional-review.en.json";
import es from "./promotional-review.es.json";
import fr from "./promotional-review.fr.json";
import de from "./promotional-review.de.json";
import it from "./promotional-review.it.json";
import pt from "./promotional-review.pt.json";
import nl from "./promotional-review.nl.json";
import ja from "./promotional-review.ja.json";
import zhCN from "./promotional-review.zh-CN.json";
import ar from "./promotional-review.ar.json";
const copies: Record<Locale, string[]> = { en, es, fr, de, it, pt, nl, ja, "zh-CN": zhCN, ar };
const indexes = new Map(en.map((value, index) => [value, index]));
export function promotionalReviewTranslator(locale: Locale) {
  const copy = copies[locale];
  if (copy.length !== en.length) throw new Error(`Incomplete promotional review translation: ${locale}`);
  return (source: string): string => {
    const index = indexes.get(source);
    if (index === undefined || !copy[index]?.trim()) throw new Error(`Missing promotional review translation (${locale}): ${source}`);
    return copy[index];
  };
}
export function promotionalReviewMetadata(locale: Locale = "en"): Metadata {
  const path = "/services/promotional-materials-review";
  const copy = copies[locale];
  return withSocial(localHref(locale, path), {
    title: copy[0], description: copy[1],
    alternates: { canonical: SITE_URL + localHref(locale, path), languages: languageAlternates(path) },
  });
}
