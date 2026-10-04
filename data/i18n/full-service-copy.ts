import "server-only";
import type { Locale } from "./locales";
import en from "./services-full.en.json";
import es from "./services-full.es.json";
import fr from "./services-full.fr.json";
import de from "./services-full.de.json";
import it from "./services-full.it.json";
import pt from "./services-full.pt.json";
import nl from "./services-full.nl.json";
import ja from "./services-full.ja.json";
import zhCN from "./services-full.zh-CN.json";
import ar from "./services-full.ar.json";
const copies: Record<Locale, string[]> = {"en":en,"es":es,"fr":fr,"de":de,"it":it,"pt":pt,"nl":nl,"ja":ja,"zh-CN":zhCN,"ar":ar};
const indexes = new Map(en.map((text, index) => [text, index]));
export function serviceTranslator(locale: Locale) {
  const copy = copies[locale];
  if (copy.length !== en.length) throw new Error(`Incomplete service translation: ${locale}`);
  return (source: string): string => {
    const index = indexes.get(source);
    if (index === undefined || !copy[index]?.trim()) throw new Error(`Missing service translation (${locale}): ${source}`);
    return copy[index];
  };
}
