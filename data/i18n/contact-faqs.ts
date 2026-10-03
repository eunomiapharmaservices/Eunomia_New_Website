import type { Locale } from "./locales";
import type { Faq } from "../../components/PageFaqs";

export type ContactFaqCopy = { kicker: string; title: string; faqs: Faq[] };
export const contactFaqs: Record<Exclude<Locale, "en">, ContactFaqCopy> = {
  es: { kicker: "Preguntas y respuestas", title: "Preguntas frecuentes", faqs: [
    { question: "¿Cuándo recibiré una respuesta?", answer: "Procuramos responder a todas las consultas en un plazo de 24 horas durante los días laborables." },
    { question: "¿Qué debo incluir en el mensaje?", answer: "Indique su empresa, los mercados implicados y la consulta de cumplimiento que tiene pendiente. Con eso podremos hacerle las preguntas de seguimiento adecuadas." },
    { question: "¿Supone algún compromiso?", answer: "No. Le escucharemos, haremos algunas preguntas y compartiremos nuestra opinión, sin compromiso ni presión." },
    { question: "¿Cuáles son los datos registrales de Eunomia?", answer: "Eunomia Pharma Services es el nombre comercial de Mivigilance Limited, número de sociedad 12912269, con domicilio social en Rough Way, Heath House Road, Woking, GU22 0QU." },
  ] },
  fr: { kicker: "Questions et réponses", title: "Questions fréquentes", faqs: [
    { question: "Dans quel délai répondrez-vous ?", answer: "Nous nous efforçons de répondre à toutes les demandes sous 24 heures les jours ouvrés." },
    { question: "Que dois-je inclure dans mon message ?", answer: "Indiquez votre entreprise, les marchés concernés et la question de conformité à traiter. Cela nous permettra de poser les bonnes questions de suivi." },
    { question: "Y a-t-il un engagement ?", answer: "Non. Nous vous écouterons, poserons quelques questions et partagerons notre point de vue, sans engagement ni pression." },
    { question: "Quelles sont les coordonnées légales d’Eunomia ?", answer: "Eunomia Pharma Services est le nom commercial de Mivigilance Limited, société numéro 12912269, dont le siège social est situé à Rough Way, Heath House Road, Woking, GU22 0QU." },
  ] },
  de: { kicker: "Fragen und Antworten", title: "Häufige Fragen", faqs: [
    { question: "Wie schnell erhalten Sie eine Antwort?", answer: "Wir bemühen uns, alle Anfragen innerhalb von 24 Stunden an Werktagen zu beantworten." },
    { question: "Was sollte ich in meine Nachricht aufnehmen?", answer: "Nennen Sie Ihr Unternehmen, die betroffenen Märkte und Ihre Compliance-Frage. So können wir die passenden Rückfragen stellen." },
    { question: "Gehen Sie damit eine Verpflichtung ein?", answer: "Nein. Wir hören zu, stellen einige Fragen und teilen unsere Einschätzung – unverbindlich und ohne Druck." },
    { question: "Wie lauten die Unternehmensangaben von Eunomia?", answer: "Eunomia Pharma Services ist ein Handelsname der Mivigilance Limited, Unternehmensnummer 12912269. Der eingetragene Sitz ist Rough Way, Heath House Road, Woking, GU22 0QU." },
  ] },
  it: { kicker: "Domande e risposte", title: "Domande frequenti", faqs: [
    { question: "Quanto tempo occorre per ricevere una risposta?", answer: "Ci impegniamo a rispondere a tutte le richieste entro 24 ore nei giorni lavorativi." },
    { question: "Cosa devo includere nel messaggio?", answer: "Indicate la vostra azienda, i mercati interessati e la questione di compliance da affrontare. Questo ci aiuterà a porre le domande di approfondimento più utili." },
    { question: "La richiesta comporta un impegno?", answer: "No. Vi ascolteremo, faremo alcune domande e condivideremo il nostro punto di vista, senza impegno né pressioni." },
    { question: "Quali sono i dati societari di Eunomia?", answer: "Eunomia Pharma Services è un nome commerciale di Mivigilance Limited, numero di società 12912269, con sede legale a Rough Way, Heath House Road, Woking, GU22 0QU." },
  ] },
  pt: { kicker: "Perguntas e respostas", title: "Perguntas frequentes", faqs: [
    { question: "Quando receberei uma resposta?", answer: "Procuramos responder a todos os pedidos no prazo de 24 horas em dias úteis." },
    { question: "O que devo incluir na mensagem?", answer: "Indique a sua empresa, os mercados envolvidos e a questão de conformidade que pretende colocar. Assim, poderemos fazer as perguntas de seguimento adequadas." },
    { question: "A consulta implica algum compromisso?", answer: "Não. Vamos ouvir, fazer algumas perguntas e partilhar a nossa perspetiva, sem compromisso e sem pressão." },
    { question: "Quais são os dados de registo da Eunomia?", answer: "Eunomia Pharma Services é um nome comercial da Mivigilance Limited, número de sociedade 12912269, com sede registada em Rough Way, Heath House Road, Woking, GU22 0QU." },
  ] },
  nl: { kicker: "Vragen en antwoorden", title: "Veelgestelde vragen", faqs: [
    { question: "Hoe snel krijg ik antwoord?", answer: "We streven ernaar alle vragen binnen 24 uur op werkdagen te beantwoorden." },
    { question: "Wat moet ik in mijn bericht zetten?", answer: "Vermeld uw bedrijf, de betrokken markten en de compliancevraag die u wilt bespreken. Dan kunnen we de juiste vervolgvragen stellen." },
    { question: "Zit ik ergens aan vast?", answer: "Nee. We luisteren, stellen enkele vragen en delen onze kijk op de zaak, vrijblijvend en zonder druk." },
    { question: "Wat zijn de geregistreerde gegevens van Eunomia?", answer: "Eunomia Pharma Services is een handelsnaam van Mivigilance Limited, bedrijfsnummer 12912269, met statutaire zetel aan Rough Way, Heath House Road, Woking, GU22 0QU." },
  ] },
  ja: { kicker: "よくあるご質問", title: "お問い合わせに関するご質問", faqs: [
    { question: "どのくらいで返信がありますか？", answer: "営業日の24時間以内にすべてのお問い合わせへ返信できるよう努めています。" },
    { question: "メッセージには何を書けばよいですか？", answer: "会社名、対象となる市場、相談したいコンプライアンス上の課題をご記入ください。適切な確認事項をお尋ねできます。" },
    { question: "問い合わせに何か義務が生じますか？", answer: "いいえ。お話を伺い、いくつか質問をしたうえで、義務や勧誘を伴わずに見解をお伝えします。" },
    { question: "Eunomiaの登記情報を教えてください。", answer: "Eunomia Pharma ServicesはMivigilance Limitedの事業名です。会社番号は12912269、登記住所はRough Way, Heath House Road, Woking, GU22 0QUです。" },
  ] },
  "zh-CN": { kicker: "常见问题", title: "联系 Eunomia 常见问题", faqs: [
    { question: "多久会收到回复？", answer: "我们力争在工作日的 24 小时内回复所有咨询。" },
    { question: "留言中应包含哪些信息？", answer: "请说明您的公司、涉及的市场以及您希望讨论的合规问题。这样我们就能提出合适的后续问题。" },
    { question: "咨询是否会产生任何义务？", answer: "不会。我们会倾听、询问一些情况并分享看法，不会要求您作出承诺，也不会施加压力。" },
    { question: "Eunomia 的注册信息是什么？", answer: "Eunomia Pharma Services 是 Mivigilance Limited 的商业名称，公司编号 12912269，注册地址为 Rough Way, Heath House Road, Woking, GU22 0QU。" },
  ] },
  ar: { kicker: "أسئلة وأجوبة", title: "الأسئلة الشائعة", faqs: [
    { question: "متى ستتلقون رداً؟", answer: "نسعى للرد على جميع الاستفسارات خلال 24 ساعة في أيام العمل." },
    { question: "ما المعلومات التي ينبغي أن أذكرها في رسالتي؟", answer: "اذكروا اسم الشركة والأسواق المعنية وسؤال الامتثال الذي تريدون مناقشته. سيساعدنا ذلك على طرح أسئلة المتابعة المناسبة." },
    { question: "هل يترتب على الاستفسار أي التزام؟", answer: "لا. سنستمع إليكم ونطرح بعض الأسئلة ونشارككم وجهة نظرنا، من دون التزام أو ضغط." },
    { question: "ما بيانات تسجيل Eunomia؟", answer: "Eunomia Pharma Services هو اسم تجاري لشركة Mivigilance Limited، رقم الشركة 12912269، وعنوان المكتب المسجل Rough Way, Heath House Road, Woking, GU22 0QU." },
  ] },
};
