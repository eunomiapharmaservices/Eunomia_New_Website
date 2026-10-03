"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "../data/i18n/locales";

type Turnstile = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
};
declare global { interface Window { turnstile?: Turnstile } }

const messages: Record<Locale, { label: string; unavailable: string; loadError: string; provider: string; privacy: string; terms: string }> = {
  en: { label: "Security check", unavailable: "Online enquiries are temporarily unavailable. Please use the contact details alongside.", loadError: "The security check could not load. Please reload the page to try again.", provider: "Security check provided by Cloudflare.", privacy: "Privacy", terms: "Terms" },
  es: { label: "Verificación de seguridad", unavailable: "El formulario de consulta no está disponible temporalmente. Utilice los datos de contacto que aparecen junto a él.", loadError: "No se pudo cargar la verificación de seguridad. Recargue la página e inténtelo de nuevo.", provider: "Verificación de seguridad proporcionada por Cloudflare.", privacy: "Privacidad", terms: "Condiciones" },
  fr: { label: "Vérification de sécurité", unavailable: "Le formulaire de contact est temporairement indisponible. Veuillez utiliser les coordonnées ci-contre.", loadError: "La vérification de sécurité n’a pas pu être chargée. Rechargez la page et réessayez.", provider: "Vérification de sécurité fournie par Cloudflare.", privacy: "Confidentialité", terms: "Conditions" },
  de: { label: "Sicherheitsprüfung", unavailable: "Anfragen über das Formular sind vorübergehend nicht möglich. Bitte nutzen Sie die danebenstehenden Kontaktdaten.", loadError: "Die Sicherheitsprüfung konnte nicht geladen werden. Bitte laden Sie die Seite neu und versuchen Sie es erneut.", provider: "Sicherheitsprüfung von Cloudflare.", privacy: "Datenschutz", terms: "Nutzungsbedingungen" },
  it: { label: "Controllo di sicurezza", unavailable: "Il modulo di richiesta non è momentaneamente disponibile. Utilizzate i recapiti indicati accanto.", loadError: "Impossibile caricare il controllo di sicurezza. Ricaricate la pagina e riprovate.", provider: "Controllo di sicurezza fornito da Cloudflare.", privacy: "Privacy", terms: "Termini" },
  pt: { label: "Verificação de segurança", unavailable: "O formulário de contacto está temporariamente indisponível. Utilize os dados de contacto ao lado.", loadError: "Não foi possível carregar a verificação de segurança. Atualize a página e tente novamente.", provider: "Verificação de segurança fornecida pela Cloudflare.", privacy: "Privacidade", terms: "Termos" },
  nl: { label: "Beveiligingscontrole", unavailable: "Aanvragen via het formulier zijn tijdelijk niet beschikbaar. Gebruik de contactgegevens hiernaast.", loadError: "De beveiligingscontrole kon niet worden geladen. Laad de pagina opnieuw en probeer het nog eens.", provider: "Beveiligingscontrole aangeboden door Cloudflare.", privacy: "Privacy", terms: "Voorwaarden" },
  ja: { label: "セキュリティ確認", unavailable: "お問い合わせフォームは一時的にご利用いただけません。隣に記載の連絡先をご利用ください。", loadError: "セキュリティ確認を読み込めませんでした。ページを再読み込みして、もう一度お試しください。", provider: "Cloudflare が提供するセキュリティ確認です。", privacy: "プライバシー", terms: "利用規約" },
  "zh-CN": { label: "安全验证", unavailable: "咨询表单暂时无法使用。请使用旁边的联系方式。", loadError: "无法加载安全验证。请刷新页面后重试。", provider: "安全验证由 Cloudflare 提供。", privacy: "隐私", terms: "条款" },
  ar: { label: "التحقق الأمني", unavailable: "نموذج الاستفسار غير متاح مؤقتاً. يرجى استخدام بيانات الاتصال بجانبه.", loadError: "تعذر تحميل التحقق الأمني. يرجى إعادة تحميل الصفحة والمحاولة مجدداً.", provider: "التحقق الأمني مقدم من Cloudflare.", privacy: "الخصوصية", terms: "الشروط" },
};

export function ContactCaptcha({ onToken, locale = "en" }: { onToken: (token: string) => void; locale?: Locale }) {
  const copy = messages[locale];
  const container = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!ready || !sitekey || !container.current || !window.turnstile) return;
    const api = window.turnstile;
    const id = api.render(container.current, {
      sitekey, action: "contact", theme: "light", size: "flexible",
      callback: (token: string) => { setError(""); onToken(token); },
      "expired-callback": () => onToken(""),
      "error-callback": () => { onToken(""); setError(copy.loadError); },
    });
    return () => { api.remove(id); onToken(""); };
  }, [ready, sitekey, onToken, copy.loadError]);

  if (!sitekey) return <p role="alert">{copy.unavailable}</p>;
  return <div aria-label={copy.label}>
    <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
      strategy="afterInteractive" onReady={() => setReady(true)}
      onError={() => { onToken(""); setError(copy.loadError); }} />
    <div ref={container} style={{ minHeight: 65 }} />
    {error && <p role="alert">{error}</p>}
    <p className="form-note">{copy.provider} <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer">{copy.privacy}</a> · <a href="https://www.cloudflare.com/website-terms/" target="_blank" rel="noreferrer">{copy.terms}</a></p>
  </div>;
}
