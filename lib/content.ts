import { defaultLocale, type Locale } from "../data/i18n/locales";
import { translationFiles } from "../data/i18n/content";
import { mergeTranslation } from "./i18n";

/** Translated overlay for a dataset, or undefined when none exists yet. */
export function translationFor(dataset: string, locale: Locale | undefined): unknown {
  if (!locale || locale === defaultLocale) return undefined;
  return translationFiles[dataset]?.[locale];
}

/** English source data with the locale's translation laid over it. */
export function localized<T>(dataset: string, locale: Locale | undefined, source: T): T {
  return mergeTranslation(source, translationFor(dataset, locale));
}
