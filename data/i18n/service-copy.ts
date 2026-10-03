import type { Locale } from "./locales";
import positiones from "./content/service-positioning.es.json";
import frameworkes from "./content/service-frameworks.es.json";
import positionfr from "./content/service-positioning.fr.json";
import frameworkfr from "./content/service-frameworks.fr.json";
import positionde from "./content/service-positioning.de.json";
import frameworkde from "./content/service-frameworks.de.json";
import positionit from "./content/service-positioning.it.json";
import frameworkit from "./content/service-frameworks.it.json";
import positionpt from "./content/service-positioning.pt.json";
import frameworkpt from "./content/service-frameworks.pt.json";
import positionnl from "./content/service-positioning.nl.json";
import frameworknl from "./content/service-frameworks.nl.json";
import positionja from "./content/service-positioning.ja.json";
import frameworkja from "./content/service-frameworks.ja.json";
import positionzhCN from "./content/service-positioning.zh-CN.json";
import frameworkzhCN from "./content/service-frameworks.zh-CN.json";
import positionar from "./content/service-positioning.ar.json";
import frameworkar from "./content/service-frameworks.ar.json";

export type ServicePath = "/services/governance-assurance" | "/services/automation-of-compliance-operations" | "/services/local-legal-mandates" | "/services/shared-services";
export type ServicePosition = { problemTitle: string; problem: string; audience: string; delivery: string; difference: string; evidenceLabel: string; evidenceTitle: string; evidence: string };
export type ServiceFramework = { title: string; body: string; href: string; label: string };
export type ServiceStep = { title: string; body: string };
export type ServiceResource = { label: string; href: string };
export type ServiceFrameworkCopy = { intro: string; frameworks: ServiceFramework[]; steps: ServiceStep[]; resources: ServiceResource[] };
type ServicePositionMap = Record<ServicePath, ServicePosition>;
type ServiceFrameworkMap = Record<ServicePath, ServiceFrameworkCopy>;

export const servicePositioning: Record<Exclude<Locale, "en">, ServicePositionMap> = {
  "es": positiones as ServicePositionMap,
  "fr": positionfr as ServicePositionMap,
  "de": positionde as ServicePositionMap,
  "it": positionit as ServicePositionMap,
  "pt": positionpt as ServicePositionMap,
  "nl": positionnl as ServicePositionMap,
  "ja": positionja as ServicePositionMap,
  "zh-CN": positionzhCN as ServicePositionMap,
  "ar": positionar as ServicePositionMap,
};
export const serviceFrameworks: Record<Exclude<Locale, "en">, ServiceFrameworkMap> = {
  "es": frameworkes as ServiceFrameworkMap,
  "fr": frameworkfr as ServiceFrameworkMap,
  "de": frameworkde as ServiceFrameworkMap,
  "it": frameworkit as ServiceFrameworkMap,
  "pt": frameworkpt as ServiceFrameworkMap,
  "nl": frameworknl as ServiceFrameworkMap,
  "ja": frameworkja as ServiceFrameworkMap,
  "zh-CN": frameworkzhCN as ServiceFrameworkMap,
  "ar": frameworkar as ServiceFrameworkMap,
};

export const serviceDetailLabels: Record<Exclude<Locale, "en">, { audience: string; delivery: string; difference: string; frameworks: string; steps: string }> = {
  es: { audience: "A quién va dirigido", delivery: "Cómo trabajamos", difference: "Cómo aporta valor Eunomia", frameworks: "Marcos regulatorios relacionados", steps: "Cómo se desarrolla el trabajo" },
  fr: { audience: "À qui s’adresse ce service", delivery: "Notre méthode", difference: "L’apport d’Eunomia", frameworks: "Référentiels associés", steps: "Déroulement de la mission" },
  de: { audience: "Für wen diese Leistung gedacht ist", delivery: "So arbeiten wir", difference: "Der Beitrag von Eunomia", frameworks: "Zugehörige Regelwerke", steps: "Ablauf der Zusammenarbeit" },
  it: { audience: "A chi si rivolge", delivery: "Come lavoriamo", difference: "Il valore aggiunto di Eunomia", frameworks: "Riferimenti normativi pertinenti", steps: "Come si svolge il lavoro" },
  pt: { audience: "A quem se destina", delivery: "Como trabalhamos", difference: "O contributo da Eunomia", frameworks: "Referenciais relacionados", steps: "Como decorre o trabalho" },
  nl: { audience: "Voor wie deze dienst bedoeld is", delivery: "Onze werkwijze", difference: "De bijdrage van Eunomia", frameworks: "Relevante kaders", steps: "Zo verloopt het werk" },
  ja: { audience: "対象となる方", delivery: "支援の進め方", difference: "Eunomiaが提供する価値", frameworks: "関連する規範・枠組み", steps: "業務の進め方" },
  "zh-CN": { audience: "适用对象", delivery: "我们的工作方式", difference: "Eunomia 的优势", frameworks: "相关法规与行业准则", steps: "工作流程" },
  ar: { audience: "الجهات التي تناسبها الخدمة", delivery: "منهجية عملنا", difference: "القيمة التي تقدمها Eunomia", frameworks: "الأطر ذات الصلة", steps: "مراحل العمل" },
};
