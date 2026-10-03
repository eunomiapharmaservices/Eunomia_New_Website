"use client";

import { useState } from "react";
import { locales, type Locale } from "../data/i18n/locales";

const messages: Record<Exclude<Locale, "en">, { offer: string; switch: string; stay: string }> = {
  es: { offer: "¿Prefiere ver el sitio en español?", switch: "Cambiar a español", stay: "Mantener inglés" },
  fr: { offer: "Préférez-vous consulter le site en français ?", switch: "Passer en français", stay: "Garder l’anglais" },
  de: { offer: "Möchten Sie die Website auf Deutsch ansehen?", switch: "Zu Deutsch wechseln", stay: "Englisch beibehalten" },
  it: { offer: "Preferisce visualizzare il sito in italiano?", switch: "Passa all’italiano", stay: "Mantieni l’inglese" },
  pt: { offer: "Prefere consultar o site em português?", switch: "Mudar para português", stay: "Manter inglês" },
  nl: { offer: "Wilt u de website in het Nederlands bekijken?", switch: "Overschakelen naar Nederlands", stay: "Engels behouden" },
  ja: { offer: "日本語でウェブサイトをご覧になりますか？", switch: "日本語に切り替える", stay: "英語のままにする" },
  "zh-CN": { offer: "您希望使用简体中文浏览本网站吗？", switch: "切换到简体中文", stay: "继续使用英语" },
  ar: { offer: "هل تفضّلون عرض الموقع باللغة العربية؟", switch: "التبديل إلى العربية", stay: "متابعة باللغة الإنجليزية" },
};

function saveChoice(locale: Locale) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `eps-locale=${locale}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
}

export function LanguageSuggestion({ locale }: { locale: Exclude<Locale, "en"> | null }) {
  const [visible, setVisible] = useState(true);
  if (!locale || !visible) return null;
  const message = messages[locale];
  return (
    <aside
      role="status"
      lang={locale}
      dir={locales[locale].dir}
      style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1.25rem", background: "#eef5ef", color: "#183b2c" }}
    >
      <span>{message.offer}</span>
      <a href={`/${locale}`} onClick={() => saveChoice(locale)}>{message.switch}</a>
      <button type="button" onClick={() => { saveChoice("en"); setVisible(false); }}>{message.stay}</button>
    </aside>
  );
}
