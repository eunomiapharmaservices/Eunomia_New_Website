export type CompliancePartner = {
  name: string;
  country: string;
  role: string;
  image?: string;
  bio: string;
};

export const compliancePartners: CompliancePartner[] = [
  { name: "Rashmi Papneja", country: "United Kingdom", role: "United Kingdom Compliance Lead", image: "/team-rashmi.jpeg", bio: "Rashmi Papneja is the founder and Managing Director of Eunomia Pharma Services and a healthcare compliance leader with over fifteen years in the pharmaceutical industry. She has worked at the most senior levels of the compliance function inside small and mid-sized pharmaceutical companies and has led the set-up of compliance functions for emerging biotechs.\n\nA PRINCE2-qualified project manager, Rashmi has delivered transformation programmes across due diligence, transparency, investigations, monitoring, HCP engagement and AI-enabled compliance operations. She holds a Master’s in International Healthcare Management and is INSEAD-qualified." },
  { name: "Xavier Lopez", country: "Spain", role: "Global Compliance Business Partner", bio: "Biography coming soon." },
  { name: "Dr. Hans Joachim Hutt", country: "Germany", role: "Global Compliance Business Partner — DACH", image: "/team-hans.jpeg", bio: "Hans provides compliance business-partner support across DACH, bringing local context into global governance and operating models." },
  { name: "Alexandre Guillaume", country: "France", role: "Global Compliance Business Partner — Global & France", image: "/team-alexandre.jpg", bio: "Alexandre is a senior Ethics & Compliance professional with over 25 years of experience with pharmaceutical and life sciences companies, as well as leading audit and consulting firms. He previously served as Head of Global Compliance at Servier for nearly three years and was a member of key industry ethics committees at IFPMA and EFPIA.\n\nAlexandre has extensive experience in ethics and compliance, risk management, anti-corruption, due diligence, audit, investigation, change management and organisational transformation, combining leadership, vision, technical expertise and business partnership.\n\nHis achievements include implementing and evaluating comprehensive ethics and compliance strategies, programmes and culture to protect company interests while enabling operational and corporate objectives." },
  { name: "Jalmira Mulchande", country: "Portugal", role: "Global Compliance Business Partner", image: "/team-jalmira-mulchande.png", bio: "Jalmira Mulchande is a healthcare consultant based in Portugal and the Co-founder and General Manager of Xtrategical Pharma Consulting. A pharmacist and global health advocate with a PhD, she brings over 15 years of experience spanning health policy, regulatory and medical affairs, ethical and legal compliance, health technology assessment, and patient access to innovative health technologies. She also serves as Chair of the Women in Global Health Lusophone Community, championing women's leadership and gender-transformative approaches across Portuguese-speaking countries." },
  { name: "Karen Glade", country: "United States & Canada", role: "Global Compliance Business Partner", bio: "Biography coming soon." },
  { name: "Ilaria Franchini", country: "Italy", role: "Global Compliance Business Partner", bio: "Biography coming soon." },
  { name: "Dunja Hu", country: "Austria", role: "Global Compliance Business Partner", bio: "Biography coming soon." },
  { name: "Eduordo Nogueira", country: "Brazil & South America", role: "Global Compliance Business Partner", bio: "Biography coming soon." },
  { name: "Nishant Chaturvedi", country: "APAC", role: "Global Compliance Business Partner", image: "/team-nishant-chaturvedi.png", bio: "Nishant Chaturvedi is a Legal, Ethics & Compliance professional with over 13 years of experience, including with Novartis and Sandoz. During his corporate career, he worked on legal, ethics, compliance, enterprise risk management and digital compliance initiatives. At Novartis, he played a key role in one of the company's largest global compliance transformation programmes, helping implement modern, risk-based compliance practices across the R&D organisation. He currently advises life sciences organisations and healthtech start-ups on digital compliance, AI governance and regulatory strategy, while contributing to thought leadership on the future of ethics and governance." },
  { name: "Miroslaw Zapala", country: "Poland, Ukraine & Russia", role: "Global Compliance Business Partner", bio: "Biography coming soon." },
  { name: "Rohit Kumar", country: "APAC", role: "Global Compliance Business Partner", bio: "Biography coming soon." },
  { name: "Maria Diaz", country: "Spain", role: "Global Compliance Business Partner", bio: "Biography coming soon." },
  { name: "Mohamed Afir", country: "MENA", role: "Global Compliance Business Partner", image: "/team-mohamed-afir.png", bio: "Mohamed brings more than 20 years of MENA-market expertise across pharmaceutical, medical-device and FMCG industries, gained through magic-circle law firms and multinational companies. He leads Afir&Co, providing tailored legal, ethics and compliance strategies across the Middle East and North Africa. As an ISO-certified compliance expert, he specialises in data privacy, ethics, anti-corruption and risk mitigation. Multilingual in English, French and Arabic, he develops robust legal frameworks and governance strategies for rapidly evolving markets." },
];

export function partnerId(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
