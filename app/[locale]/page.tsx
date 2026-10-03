import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter } from "../../components/SiteChrome";
import { locales } from "../../data/i18n/locales";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "es") return {};
  return {
    title: "Servicios globales de cumplimiento sanitario | Eunomia",
    description:
      "Apoyo en cumplimiento normativo para empresas farmacéuticas y biotecnológicas: diseño de programas, operaciones, experiencia local y automatización.",
    alternates: {
      canonical: "https://www.eunomiapharmaservices.com/es",
      languages: {
        en: "https://www.eunomiapharmaservices.com/",
        es: "https://www.eunomiapharmaservices.com/es",
      },
    },
  };
}

const services = [
  {
    title: "Diseño e implementación de programas de cumplimiento sanitario",
    description: "Políticas prácticas, responsabilidades claras y controles que sus equipos pueden aplicar.",
    href: "/services/governance-assurance",
  },
  {
    title: "Automatización de las operaciones de cumplimiento",
    description: "Flujos de trabajo, informes y evidencias con supervisión humana responsable.",
    href: "/services/automation-of-compliance-operations",
  },
  {
    title: "Mandatos legales y representación local",
    description: "Conectamos los requisitos de cada país con su modelo operativo global.",
    href: "/services/local-legal-mandates",
  },
  {
    title: "Servicios compartidos / GBS / GCC",
    description: "Capacidad especializada para revisiones, interacciones con profesionales sanitarios y divulgaciones.",
    href: "/services/shared-services",
  },
];

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "es" || !locales.es) notFound();

  return (
    <main lang="es">
      <SiteHeader locale="es" />
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="home-location-line">Con sede en el Reino Unido y cobertura global</p>
          <h1>
            <span className="hero-title-green">Cumplimiento sanitario global</span>{" "}
            <span className="hero-title-orange">impulsado por automatización</span>
          </h1>
          <p className="hero-lede">
            No solo creamos el marco de cumplimiento comercial: <strong>lo ponemos en práctica para usted.</strong>
          </p>
          <p className="home-hero-description">
            Apoyamos a empresas farmacéuticas y biotecnológicas con el diseño de programas, las operaciones diarias de cumplimiento, la experiencia en mercados locales y la automatización. Combinamos conocimiento de los códigos ABPI y EFPIA con procesos prácticos, responsabilidades claras y criterio humano experto.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="/contact">Hable con nuestro equipo</a>
            <a className="secondary-button" href="/services">Explore nuestros servicios</a>
          </div>
          <p className="home-location-line">30+ países · 20+ clientes · Valoración de 4,9 en Clutch</p>
        </div>
      </section>

      <section aria-labelledby="es-services-title" style={{ maxWidth: 1180, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <p className="home-location-line">Servicios globales de cumplimiento de principio a fin</p>
        <h2 id="es-services-title">Cómo podemos ayudarle</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1rem" }}>
          {services.map((service) => (
            <article key={service.href} style={{ border: "1px solid #d9e3dc", borderRadius: 12, padding: "1.25rem" }}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.href}>Más información →</a>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter locale="es" />
    </main>
  );
}
