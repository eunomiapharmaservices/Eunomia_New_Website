import "server-only";
import type { Locale } from "./locales";
import en from "./home.en.json";
import es from "./home.es.json";
import fr from "./home.fr.json";
import de from "./home.de.json";
import it from "./home.it.json";
import pt from "./home.pt.json";
import nl from "./home.nl.json";
import ja from "./home.ja.json";
import zhCN from "./home.zh-CN.json";
import ar from "./home.ar.json";
const copies: Record<Locale, string[]> = {"en":en,"es":es,"fr":fr,"de":de,"it":it,"pt":pt,"nl":nl,"ja":ja,"zh-CN":zhCN,"ar":ar};
const indexes = new Map(en.map((text, index) => [text, index]));
export function homeTranslator(locale: Locale) {
  const copy = copies[locale];
  if (copy.length !== en.length) throw new Error(`Incomplete homepage translation: ${locale}`);
  return (source: string): string => {
    const index = indexes.get(source);
    if (index === undefined || !copy[index]?.trim()) throw new Error(`Missing homepage translation (${locale}): ${source}`);
    return copy[index];
  };
}
