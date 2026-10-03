"use client";

import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Locale } from "../data/i18n/locales";

const labels: Record<Locale, { section: string; title: string; hint: string; placeholder: string; clear: string; one: string; many: string }> = {
  en: { section: "Search resources", title: "Search resources", hint: "Search articles, webinars, case studies and working resources.", placeholder: "Search by topic or title", clear: "Clear search", one: "1 matching resource", many: "matching resources" },
  es: { section: "Buscar recursos", title: "Buscar recursos", hint: "Busque artículos, seminarios web, casos prácticos y materiales de trabajo.", placeholder: "Buscar por tema o título", clear: "Borrar búsqueda", one: "1 recurso coincide", many: "recursos coinciden" },
  fr: { section: "Rechercher des ressources", title: "Rechercher des ressources", hint: "Recherchez des articles, webinaires, études de cas et ressources pratiques.", placeholder: "Rechercher par sujet ou titre", clear: "Effacer la recherche", one: "1 ressource correspondante", many: "ressources correspondantes" },
  de: { section: "Ressourcen durchsuchen", title: "Ressourcen durchsuchen", hint: "Suchen Sie nach Artikeln, Webinaren, Fallstudien und praktischen Materialien.", placeholder: "Nach Thema oder Titel suchen", clear: "Suche löschen", one: "1 passende Ressource", many: "passende Ressourcen" },
  it: { section: "Cerca risorse", title: "Cerca risorse", hint: "Cerca articoli, webinar, casi di studio e risorse operative.", placeholder: "Cerca per argomento o titolo", clear: "Cancella ricerca", one: "1 risorsa corrispondente", many: "risorse corrispondenti" },
  pt: { section: "Pesquisar recursos", title: "Pesquisar recursos", hint: "Pesquise artigos, webinars, estudos de caso e materiais de trabalho.", placeholder: "Pesquisar por tema ou título", clear: "Limpar pesquisa", one: "1 recurso correspondente", many: "recursos correspondentes" },
  nl: { section: "Bronnen zoeken", title: "Bronnen zoeken", hint: "Zoek artikelen, webinars, casestudy’s en praktische hulpmiddelen.", placeholder: "Zoek op onderwerp of titel", clear: "Zoekopdracht wissen", one: "1 overeenkomende bron", many: "overeenkomende bronnen" },
  ja: { section: "リソースを検索", title: "リソースを検索", hint: "記事、ウェビナー、事例、実務資料を検索できます。", placeholder: "トピックまたはタイトルで検索", clear: "検索をクリア", one: "1 件が一致", many: "件が一致" },
  "zh-CN": { section: "搜索资源", title: "搜索资源", hint: "搜索文章、网络研讨会、案例研究和实用资料。", placeholder: "按主题或标题搜索", clear: "清除搜索", one: "1 项匹配", many: "项匹配" },
  ar: { section: "البحث في الموارد", title: "البحث في الموارد", hint: "ابحثوا عن المقالات والندوات عبر الإنترنت ودراسات الحالة والمواد العملية.", placeholder: "البحث حسب الموضوع أو العنوان", clear: "مسح البحث", one: "مورد واحد مطابق", many: "موارد مطابقة" },
};

export function ResourceSearch({ locale = "en" }: { locale?: Locale }) {
  const copy = labels[locale];
  const [query, setQuery] = useState("");
  const [matches, setMatches] = useState<number | null>(null);

  useEffect(() => {
    const term = query.trim().toLowerCase();
    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-resource-search]"));
    let visible = 0;
    cards.forEach((card) => {
      const isMatch = !term || (card.dataset.resourceSearch ?? "").toLowerCase().includes(term);
      card.hidden = !isMatch;
      if (isMatch) visible += 1;
    });
    setMatches(visible);
  }, [query]);

  return (
    <section className="resource-search section-pad" aria-label={copy.section}>
      <div>
        <label htmlFor="resource-search">{copy.title}</label>
        <p>{copy.hint}</p>
      </div>
      <div className="resource-search-field">
        <Search aria-hidden="true" />
        <input id="resource-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.placeholder} />
        {query && <button type="button" onClick={() => setQuery("")} aria-label={copy.clear}><X aria-hidden="true" /></button>}
      </div>
      {query && <p className="resource-search-count" aria-live="polite">{matches === 1 ? copy.one : `${matches ?? 0} ${copy.many}`}</p>}
    </section>
  );
}
