import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { TeamProfile, type TeamPerson } from "../../components/TeamProfiles";
import { compliancePartners } from "../../data/compliancePartners";

export const metadata: Metadata = {
  title: "Our team | Eunomia Pharma Services",
  description: "Meet Eunomia's global compliance business partners and healthcare compliance operations specialists.",
};

const agyat: TeamPerson = {
  name: "Agyat Suri",
  role: "Healthcare Compliance Operations Lead",
  image: "/team-agyat.jpeg",
  bio: "Agyat Suri is a healthcare compliance professional with global experience supporting pharmaceutical and biotech companies, with expertise in the EFPIA/ABPI Code of Practice, anti-bribery and anti-corruption (ABAC), compliance governance, policy and process development. He leads complex compliance projects and global shared services supporting material review, HCP/HCO activity and engagement review, and transparency disclosure across multiple markets. Agyat develops practical compliance guidance and training, working closely with compliance business partners and stakeholders globally to deliver consistent, scalable and locally appropriate solutions.\n\nHe has a particular interest in using technology to make compliance more efficient and accessible, with expertise in SharePoint and the development of simple, practical compliance tools and workflows. He also supports the adoption of AI and other emerging technologies to enhance compliance operations, streamline processes and improve the user experience, while maintaining appropriate governance and oversight.",
};

const partners: TeamPerson[] = compliancePartners;

const operations: TeamPerson[] = [
  { name: "Sulabh Mahant", role: "IT & Systems Lead", image: "/team-sulabh.jpg", bio: "Sulabh leads IT and systems, supporting the technology, automation and operational infrastructure behind Eunomia's services." },
  { name: "Kaveri Thukral", role: "Compliance Operations Manager & Analyst", image: "/team-kaveri.jpeg", bio: "Kaveri coordinates compliance operations and analysis, helping turn requirements into organised workflows, records and reporting." },
  { name: "Kaja Lubińska", role: "SSC Compliance Support", image: "/team-kaja.jpg", bio: "Kaja provides shared-service compliance support across recurring operational activities and documented review processes." },
  { name: "Himani Bhagwati", role: "SSC Compliance Support", image: "/team-himani.jpg", bio: "Himani supports shared-service compliance delivery, helping teams maintain consistent processes, records and follow-through." },
];

export default function Team() {
  return (
    <main className="team-page">
      <SiteHeader />
      <section className="team-hero section-pad">
        <div><p className="section-kicker">The people behind Eunomia</p><h1>Specialists who stay close to the work.</h1></div>
        <p>Our compliance experts provide strategic guidance and operational support at European, global and local-country level. You work with named people who understand both the rule and the day-to-day decision.</p>
      </section>

      <section className="team-leadership section-pad" aria-label="Rashmi Papneja biography">
        <article className="founder-profile founder-profile-static">
          <img src="/team-rashmi.jpeg" alt="Rashmi Papneja" />
          <div>
            <h3>Rashmi Papneja</h3>
            <p className="founder-role">Founder and Managing Director</p>
            <p>Rashmi Papneja is the founder and Managing Director of Eunomia Pharma Services and a healthcare compliance leader with over fifteen years in the pharmaceutical industry. She has worked her way to the most senior levels of the compliance function inside small and mid-sized pharma, and has led the set-up of compliance functions for emerging biotechs.</p>
            <p>A PRINCE2-qualified project manager, she has delivered transformation programmes across due diligence, transparency, investigations, monitoring, HCP engagement and AI-enabled compliance operations. She holds a Master&apos;s in International Healthcare Management and is INSEAD-qualified.</p>
          </div>
        </article>
      </section>

      <section className="team-group team-operations-lead section-pad">
        <div className="team-section-heading operations-section-heading"><h2>Healthcare Compliance Operations and Automation Enablement</h2></div>
        <div className="operations-lead-profile"><TeamProfile person={agyat} featured /></div>
        <div className="operations-team-heading"><span>Operations Team</span></div>
        <div className="team-profile-grid operations-team-grid">{operations.map((person) => <TeamProfile key={person.name} person={person} bioEnabled={false} />)}</div>
      </section>

      <section className="team-group section-pad">
        <div className="team-section-heading business-partners-heading"><h2>Global Compliance Business Partners</h2><p>Local context. Connected judgement.</p></div>
        <div className="team-profile-grid team-profile-grid-partners" id="global-compliance-business-partners">{partners.map((person) => <TeamProfile key={person.name} person={person} />)}</div>
      </section>

      <section className="team-cta section-pad">
        <p className="section-kicker">Work with us</p><h2>A senior team, shaped around your need.</h2>
        <a className="primary-button" href="/contact">Start a conversation <ArrowUpRight /></a>
      </section>
      <SiteFooter />
    </main>
  );
}
