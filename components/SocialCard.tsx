export function SocialCard({ title, article }: { title: string; article: boolean }) {
  const heading = title.replace(/\s*\|\s*Eunomia(?: Pharma Services)?$/, "");
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: "#f4f6f1", color: "#16382a", padding: "56px 70px", borderTop: "16px solid #8bb83f", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", fontSize: 27, fontWeight: 700, letterSpacing: 2 }}>EUNOMIA PHARMA SERVICES</div>
      <div style={{ display: "flex", marginTop: 34, fontSize: 19, color: "#52733c", letterSpacing: 3 }}>{article ? "INSIGHTS & PERSPECTIVES" : "GLOBAL HEALTHCARE COMPLIANCE"}</div>
      <div style={{ display: "flex", alignItems: "center", flexGrow: 1, fontSize: heading.length > 125 ? 44 : heading.length > 85 ? 50 : 62, fontWeight: 700, lineHeight: 1.12, letterSpacing: -1 }}>{heading}</div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #bcccb0", paddingTop: 22, fontSize: 20 }}>
        <span>Expertise. Integrity. Practical compliance.</span>
        <span>eunomiapharmaservices.com</span>
      </div>
    </div>
  );
}
