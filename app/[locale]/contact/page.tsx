import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteHeader, SiteFooter } from "../../../components/SiteChrome";
import { ContactForm } from "../../../components/ContactForm";
import { PageFaqs } from "../../../components/PageFaqs";
import { contactFaqs } from "../../../data/i18n/contact-faqs";
import { languageAlternates, locales, type Locale } from "../../../data/i18n/locales";

const copy = {
  es: { kicker: "Inicie una conversación", title: "Cuéntenos qué tiene entre manos.", intro: "Le escucharemos, haremos algunas preguntas y compartiremos nuestra opinión. Sin compromiso ni presión.", contact: "Póngase en contacto", response: "Llámenos o escríbanos. Procuramos responder a todas las consultas en un día laborable y estaremos encantados de ayudarle.", location: "Reino Unido", registered: "Datos registrales", company: "Eunomia Pharma Services es el nombre comercial de Mivigilance Limited.", number: "Número de registro en Companies House: 12912269" },
  fr: { kicker: "Entamons la conversation", title: "Parlez-nous de vos priorités.", intro: "Nous vous écouterons, poserons quelques questions et partagerons notre point de vue. Sans engagement ni pression.", contact: "Nous contacter", response: "Appelez-nous ou écrivez-nous. Nous nous efforçons de répondre à chaque demande sous un jour ouvré et serons heureux de répondre à vos questions.", location: "Royaume-Uni", registered: "Informations légales", company: "Eunomia Pharma Services est le nom commercial de Mivigilance Limited.", number: "Numéro d’immatriculation (Companies House) : 12912269" },
  de: { kicker: "Lassen Sie uns sprechen", title: "Erzählen Sie uns, was Sie beschäftigt.", intro: "Wir hören zu, stellen einige Fragen und teilen unsere Einschätzung. Unverbindlich und ohne Druck.", contact: "Kontakt aufnehmen", response: "Rufen Sie uns an oder schreiben Sie uns. Wir bemühen uns, alle Anfragen innerhalb eines Werktags zu beantworten.", location: "Vereinigtes Königreich", registered: "Unternehmensangaben", company: "Eunomia Pharma Services ist ein Handelsname der Mivigilance Limited.", number: "Registernummer (Companies House) 12912269" },
  it: { kicker: "Avviamo una conversazione", title: "Raccontateci di cosa vi state occupando.", intro: "Vi ascolteremo, faremo alcune domande e condivideremo il nostro punto di vista. Senza impegno né pressioni.", contact: "Contattateci", response: "Chiamateci o scriveteci. Ci impegniamo a rispondere a tutte le richieste entro un giorno lavorativo e saremo lieti di rispondere alle vostre domande.", location: "Regno Unito", registered: "Dati societari", company: "Eunomia Pharma Services è un nome commerciale di Mivigilance Limited.", number: "Numero di registrazione (Companies House) 12912269" },
  pt: { kicker: "Vamos conversar", title: "Conte-nos o que tem em mãos.", intro: "Vamos ouvir, fazer algumas perguntas e partilhar a nossa perspetiva. Sem compromisso e sem pressão.", contact: "Entre em contacto", response: "Ligue-nos ou envie-nos uma mensagem. Procuramos responder a todos os pedidos no prazo de um dia útil e teremos todo o gosto em ajudar.", location: "Reino Unido", registered: "Dados de registo", company: "Eunomia Pharma Services é um nome comercial da Mivigilance Limited.", number: "Número de registo na Companies House: 12912269" },
  nl: { kicker: "Laten we kennismaken", title: "Vertel ons waar u aan werkt.", intro: "We luisteren, stellen enkele vragen en delen onze kijk op de zaak. Vrijblijvend en zonder druk.", contact: "Neem contact op", response: "Bel of mail ons. We streven ernaar alle vragen binnen één werkdag te beantwoorden en helpen u graag verder.", location: "Verenigd Koninkrijk", registered: "Bedrijfsgegevens", company: "Eunomia Pharma Services is een handelsnaam van Mivigilance Limited.", number: "Registratienummer (Companies House) 12912269" },
  ja: { kicker: "まずはご相談ください", title: "現在の課題をお聞かせください。", intro: "お話を伺い、いくつか質問をしたうえで、私たちの見解をお伝えします。ご相談は義務を伴うものではなく、無理な勧誘もいたしません。", contact: "お問い合わせ", response: "お電話またはメールでご連絡ください。1営業日以内のご返信を心がけています。", location: "英国", registered: "登記情報", company: "Eunomia Pharma Services は Mivigilance Limited の事業名です。", number: "会社番号 12912269" },
  "zh-CN": { kicker: "开始沟通", title: "请告诉我们您正在处理的问题。", intro: "我们会认真倾听、了解情况，并分享我们的看法。无需承诺，也没有压力。", contact: "联系我们", response: "欢迎致电或发送邮件。我们力争在一个工作日内回复所有咨询，并乐意解答您的问题。", location: "英国", registered: "注册信息", company: "Eunomia Pharma Services 是 Mivigilance Limited 的商业名称。", number: "公司编号 12912269" },
  ar: { kicker: "لنبدأ الحوار", title: "أخبرونا بما تعملون عليه.", intro: "سنستمع إليكم ونطرح بعض الأسئلة ونشارككم وجهة نظرنا، من دون أي التزام أو ضغط.", contact: "تواصلوا معنا", response: "اتصلوا بنا أو راسلونا. نسعى للرد على جميع الاستفسارات خلال يوم عمل واحد، ويسعدنا الإجابة عن أسئلتكم.", location: "المملكة المتحدة", registered: "بيانات التسجيل", company: "Eunomia Pharma Services هو اسم تجاري لشركة Mivigilance Limited.", number: "رقم الشركة 12912269" },
} satisfies Partial<Record<Locale, Record<string, string>>>;

const languages = Object.keys(locales).filter((code) => code !== "en");
export function generateStaticParams() { return languages.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!Object.prototype.hasOwnProperty.call(copy, locale)) return {};
  const path = `/${locale}/contact`;
  const hrefs = languageAlternates("/contact");
  const content = copy[locale as keyof typeof copy]!;
  return { title: `${content.contact} | Eunomia Pharma Services`, description: content.intro, alternates: { canonical: `https://www.eunomiapharmaservices.com${path}`, languages: hrefs } };
}

export default async function LocalizedContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!Object.prototype.hasOwnProperty.call(copy, locale)) notFound();
  const selected = locale as Exclude<Locale, "en">;
  const text = copy[selected];
  const direction = locales[selected].dir;
  return (
    <main lang={selected} dir={direction}>
      <SiteHeader locale={selected} />
      <section className="contact-intro section-pad">
        <p className="section-kicker">{text.kicker}</p>
        <h1>{text.title}</h1>
        <p>{text.intro}</p>
      </section>
      <section className="contact-form-layout section-pad">
        <ContactForm locale={selected} />
        <aside className="contact-side">
          <p className="section-kicker">{text.contact}</p>
          <p className="contact-response-note">{text.response}</p>
          <div className="contact-lines">
            <a href="tel:+447584567018"><Phone />+44 7584 567018</a>
            <a href="mailto:hello@eunomiapharmaservices.com"><Mail />hello@eunomiapharmaservices.com</a>
            <span><MapPin />{text.location}</span>
            <a href="https://uk.linkedin.com/company/eunomia-pharma-services" target="_blank" rel="noreferrer"><b className="linkedin-mark" aria-hidden="true">in</b> LinkedIn</a>
          </div>
          <div className="registered-details">
            <b>{text.registered}</b>
            <p>{text.company}</p>
            <p>{text.number}<br />Rough Way, Heath House Road<br />Woking, GU22 0QU</p>
          </div>
        </aside>
      </section>
      <PageFaqs faqs={contactFaqs[selected].faqs} kicker={contactFaqs[selected].kicker} title={contactFaqs[selected].title} />
      <SiteFooter locale={selected} />
    </main>
  );
}
