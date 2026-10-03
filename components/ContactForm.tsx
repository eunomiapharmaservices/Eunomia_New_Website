"use client";

import { FormEvent, useRef, useState } from "react";
import { trackConversion } from "../lib/conversion-tracking";
import { trackedResource } from "../lib/resource-attribution";
import { ContactCaptcha } from "./ContactCaptcha";
import type { Locale } from "../data/i18n/locales";

type FormCopy = {
  name: string; company: string; workEmail: string; phone: string; question: string;
  consentBefore: string; privacy: string; consentAfter: string; completeCheck: string;
  failure: string; uncertain: string; success: string; send: string; sending: string; note: string;
};
const formCopy: Record<Locale, FormCopy> = {
  en: { name: "Your name", company: "Company", workEmail: "Work email", phone: "Phone number", question: "The compliance question, and what exists today", consentBefore: "I am happy for Eunomia to use these details to respond to my enquiry, as set out in the", privacy: "privacy notice", consentAfter: ".", completeCheck: "Please complete the security check.", failure: "We could not send your enquiry. Please try again or email hello@eunomiapharmaservices.com.", uncertain: "We could not confirm whether your enquiry was sent. Please complete the security check and retry without changing your message.", success: "Thank you—your enquiry has been submitted. We’ll respond using the email address you provided.", send: "Send your note", sending: "Sending…", note: "We use your details to respond to your enquiry, as explained in our privacy notice. We will not add you to a mailing list from this form." },
  es: { name: "Nombre", company: "Empresa", workEmail: "Correo electrónico profesional", phone: "Teléfono", question: "Su consulta de cumplimiento y la situación actual", consentBefore: "Autorizo a Eunomia a utilizar estos datos para responder a mi consulta, según se explica en el", privacy: "aviso de privacidad", consentAfter: ".", completeCheck: "Complete la verificación de seguridad.", failure: "No hemos podido enviar su consulta. Inténtelo de nuevo o escriba a hello@eunomiapharmaservices.com.", uncertain: "No hemos podido confirmar si se envió su consulta. Complete la verificación e inténtelo de nuevo sin cambiar el mensaje.", success: "Gracias. Hemos recibido su consulta y responderemos a la dirección de correo electrónico indicada.", send: "Enviar consulta", sending: "Enviando…", note: "Utilizaremos sus datos para responder a su consulta, tal como se explica en el aviso de privacidad. No le añadiremos a una lista de correo a través de este formulario." },
  fr: { name: "Nom", company: "Entreprise", workEmail: "E-mail professionnel", phone: "Téléphone", question: "Votre question de conformité et la situation actuelle", consentBefore: "J’autorise Eunomia à utiliser ces informations pour répondre à ma demande, comme indiqué dans la", privacy: "notice de confidentialité", consentAfter: ".", completeCheck: "Veuillez effectuer la vérification de sécurité.", failure: "Nous n’avons pas pu envoyer votre demande. Réessayez ou écrivez à hello@eunomiapharmaservices.com.", uncertain: "Nous n’avons pas pu confirmer l’envoi de votre demande. Effectuez la vérification et réessayez sans modifier votre message.", success: "Merci. Votre demande a été envoyée. Nous répondrons à l’adresse e-mail indiquée.", send: "Envoyer votre message", sending: "Envoi en cours…", note: "Nous utilisons vos informations pour répondre à votre demande, comme indiqué dans la notice de confidentialité. Ce formulaire ne vous inscrit pas à une liste de diffusion." },
  de: { name: "Name", company: "Unternehmen", workEmail: "Geschäftliche E-Mail-Adresse", phone: "Telefonnummer", question: "Ihre Compliance-Frage und der aktuelle Stand", consentBefore: "Ich bin damit einverstanden, dass Eunomia diese Angaben zur Beantwortung meiner Anfrage verwendet, wie in der", privacy: "Datenschutzhinweis", consentAfter: " beschrieben.", completeCheck: "Bitte schließen Sie die Sicherheitsprüfung ab.", failure: "Ihre Anfrage konnte nicht gesendet werden. Versuchen Sie es erneut oder schreiben Sie an hello@eunomiapharmaservices.com.", uncertain: "Wir konnten nicht bestätigen, ob Ihre Anfrage gesendet wurde. Schließen Sie die Sicherheitsprüfung ab und versuchen Sie es erneut, ohne Ihre Nachricht zu ändern.", success: "Vielen Dank. Ihre Anfrage wurde übermittelt. Wir antworten an die angegebene E-Mail-Adresse.", send: "Nachricht senden", sending: "Wird gesendet…", note: "Wir verwenden Ihre Angaben zur Beantwortung Ihrer Anfrage, wie im Datenschutzhinweis beschrieben. Über dieses Formular nehmen wir Sie nicht in einen Verteiler auf." },
  it: { name: "Nome", company: "Azienda", workEmail: "E-mail di lavoro", phone: "Telefono", question: "La vostra richiesta di compliance e la situazione attuale", consentBefore: "Acconsento all’utilizzo di questi dati da parte di Eunomia per rispondere alla mia richiesta, come indicato nell’", privacy: "informativa sulla privacy", consentAfter: ".", completeCheck: "Completate il controllo di sicurezza.", failure: "Non è stato possibile inviare la richiesta. Riprovate o scrivete a hello@eunomiapharmaservices.com.", uncertain: "Non è stato possibile confermare l’invio della richiesta. Completate il controllo e riprovate senza modificare il messaggio.", success: "Grazie. La richiesta è stata inviata. Risponderemo all’indirizzo e-mail indicato.", send: "Invia il messaggio", sending: "Invio in corso…", note: "Utilizziamo i vostri dati per rispondere alla richiesta, come descritto nell’informativa sulla privacy. Questo modulo non vi iscrive a una mailing list." },
  pt: { name: "Nome", company: "Empresa", workEmail: "E-mail profissional", phone: "Telefone", question: "A sua questão de conformidade e a situação atual", consentBefore: "Autorizo a Eunomia a utilizar estes dados para responder ao meu pedido, conforme indicado no", privacy: "aviso de privacidade", consentAfter: ".", completeCheck: "Conclua a verificação de segurança.", failure: "Não foi possível enviar o seu pedido. Tente novamente ou escreva para hello@eunomiapharmaservices.com.", uncertain: "Não foi possível confirmar se o pedido foi enviado. Conclua a verificação e tente novamente sem alterar a mensagem.", success: "Obrigado. O seu pedido foi enviado. Responderemos para o endereço de e-mail indicado.", send: "Enviar mensagem", sending: "A enviar…", note: "Utilizamos os seus dados para responder ao pedido, conforme explicado no aviso de privacidade. Este formulário não o adiciona a uma lista de correio." },
  nl: { name: "Naam", company: "Bedrijf", workEmail: "Zakelijk e-mailadres", phone: "Telefoonnummer", question: "Uw compliancevraag en de huidige situatie", consentBefore: "Ik geef Eunomia toestemming deze gegevens te gebruiken om op mijn aanvraag te reageren, zoals beschreven in de", privacy: "privacyverklaring", consentAfter: ".", completeCheck: "Voltooi de beveiligingscontrole.", failure: "Uw aanvraag kon niet worden verzonden. Probeer het opnieuw of mail hello@eunomiapharmaservices.com.", uncertain: "We konden niet bevestigen of uw aanvraag is verzonden. Voltooi de controle en probeer het opnieuw zonder uw bericht te wijzigen.", success: "Dank u. Uw aanvraag is verzonden. We reageren via het opgegeven e-mailadres.", send: "Bericht verzenden", sending: "Verzenden…", note: "We gebruiken uw gegevens om op uw aanvraag te reageren, zoals uitgelegd in de privacyverklaring. Via dit formulier voegen we u niet toe aan een mailinglijst." },
  ja: { name: "お名前", company: "会社名", workEmail: "勤務先メールアドレス", phone: "電話番号", question: "コンプライアンスに関するご相談と現在の状況", consentBefore: "プライバシー通知に記載のとおり、問い合わせへの回答のために Eunomia がこれらの情報を使用することに同意します。", privacy: "プライバシー通知", consentAfter: "", completeCheck: "セキュリティ確認を完了してください。", failure: "お問い合わせを送信できませんでした。再度お試しいただくか、hello@eunomiapharmaservices.com までメールでご連絡ください。", uncertain: "お問い合わせが送信されたか確認できませんでした。メッセージを変更せず、セキュリティ確認を完了して再度お試しください。", success: "ありがとうございます。お問い合わせを受け付けました。ご入力のメールアドレスに返信いたします。", send: "送信する", sending: "送信中…", note: "プライバシー通知に記載のとおり、お問い合わせへの回答に情報を使用します。このフォームからメーリングリストに登録することはありません。" },
  "zh-CN": { name: "姓名", company: "公司", workEmail: "工作邮箱", phone: "电话号码", question: "您的合规问题及目前情况", consentBefore: "我同意 Eunomia 按照", privacy: "隐私声明", consentAfter: "中所述使用这些信息回复我的咨询。", completeCheck: "请完成安全验证。", failure: "无法发送您的咨询。请重试或发送邮件至 hello@eunomiapharmaservices.com。", uncertain: "无法确认您的咨询是否已发送。请完成安全验证并在不修改消息的情况下重试。", success: "谢谢，您的咨询已提交。我们会通过您提供的邮箱回复。", send: "发送消息", sending: "正在发送…", note: "我们会按照隐私声明中的说明使用您的信息回复咨询。我们不会通过此表单将您加入邮件列表。" },
  ar: { name: "الاسم", company: "الشركة", workEmail: "البريد الإلكتروني للعمل", phone: "رقم الهاتف", question: "سؤال الامتثال لديكم والوضع الحالي", consentBefore: "أوافق على استخدام Eunomia لهذه البيانات للرد على استفساري، كما هو موضح في", privacy: "إشعار الخصوصية", consentAfter: ".", completeCheck: "يرجى إكمال التحقق الأمني.", failure: "تعذر إرسال استفساركم. يرجى المحاولة مجدداً أو مراسلة hello@eunomiapharmaservices.com.", uncertain: "تعذر تأكيد إرسال استفساركم. أكملوا التحقق الأمني وحاولوا مجدداً من دون تغيير الرسالة.", success: "شكراً لكم. تم إرسال استفساركم وسنرد على عنوان البريد الإلكتروني الذي قدمتموه.", send: "إرسال الرسالة", sending: "جارٍ الإرسال…", note: "نستخدم بياناتكم للرد على استفساركم كما هو موضح في إشعار الخصوصية. لن نضيفكم إلى قائمة بريدية عبر هذا النموذج." },
};

export function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const copy = formCopy[locale];
  const [token, setToken] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  const submitting = useRef(false);
  const requestIdentity = useRef({ fingerprint: "", id: "" });
  const [sent, setSent] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    if (!token) { setError(copy.completeCheck); return; }
    const form = event.currentTarget;
    const data = new FormData(form);
    const fields = {
      name: String(data.get("name") || ""), company: String(data.get("company") || ""),
      email: String(data.get("email") || ""), phone: String(data.get("phone") || ""),
      question: String(data.get("question") || ""), consent: data.get("consent") === "on",
    };
    const fingerprint = JSON.stringify(fields);
    if (requestIdentity.current.fingerprint !== fingerprint) {
      requestIdentity.current = { fingerprint, id: crypto.randomUUID() };
    }
    setSent(false);
    submitting.current = true;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, token, requestId: requestIdentity.current.id }),
        signal: AbortSignal.timeout(30000),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error(copy.failure);
      form.reset();
      requestIdentity.current = { fingerprint: "", id: "" };
      setSent(true);
      trackConversion("enquiry_submitted", trackedResource(new URLSearchParams(window.location.search).get("resource")));
    } catch (failure) {
      setError(failure instanceof Error && failure.name !== "TimeoutError" && failure.name !== "TypeError" ? copy.failure : copy.uncertain);
    } finally {
      setToken("");
      setAttempt((value) => value + 1);
      submitting.current = false;
      setBusy(false);
    }
  }

  return (
    <form className="enquiry-form" onSubmit={submit} lang={locale} dir={localesDir[locale]}>
      <div className="form-row">
        <label><span className="field-label">{copy.name} <b aria-hidden="true">*</b></span><input disabled={busy} name="name" required maxLength={120} autoComplete="name" /></label>
        <label><span className="field-label">{copy.company} <b aria-hidden="true">*</b></span><input disabled={busy} name="company" required maxLength={160} autoComplete="organization" /></label>
      </div>
      <div className="form-row">
        <label><span className="field-label">{copy.workEmail} <b aria-hidden="true">*</b></span><input disabled={busy} name="email" type="email" required maxLength={254} autoComplete="email" /></label>
        <label><span className="field-label">{copy.phone}</span><input disabled={busy} name="phone" type="tel" maxLength={60} autoComplete="tel" /></label>
      </div>
      <label><span className="field-label">{copy.question} <b aria-hidden="true">*</b></span><textarea disabled={busy} name="question" rows={7} required maxLength={5000} /></label>
      <label className="consent">
        <input disabled={busy} type="checkbox" name="consent" required />
        <span>{copy.consentBefore} <a href={locale === "en" ? "/privacy" : `/${locale}/privacy`}>{copy.privacy}</a>{copy.consentAfter}</span>
      </label>
      <ContactCaptcha key={attempt} onToken={setToken} locale={locale} />
      {error && <p role="alert">{error}</p>}
      {sent && <p role="status">{copy.success}</p>}
      <button className="primary-button" type="submit" disabled={!token || busy} aria-busy={busy}>{busy ? copy.sending : copy.send}</button>
      <p className="form-note">{copy.note}</p>
    </form>
  );
}

import { locales as localeMetadata } from "../data/i18n/locales";
const localesDir = Object.fromEntries(Object.entries(localeMetadata).map(([key, value]) => [key, value.dir])) as Record<Locale, "ltr" | "rtl">;
