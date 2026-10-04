import { CoverageMap } from "./CoverageMap";
import type { Locale } from "../data/i18n/locales";
import { mapCopy } from "../data/i18n/map-copy";
import { localizeTeamPerson } from "../data/i18n/team-content";
import { compliancePartners } from "../data/compliancePartners";
export function LocalizedCoverageMap({ locale }: { locale: Locale }) {
  const people = compliancePartners.map((person) => {
    const { name, country, role, image } = localizeTeamPerson(person, locale);
    return { name, country, role, image };
  });
  return <CoverageMap locale={locale} labels={mapCopy[locale]} people={people} />;
}
