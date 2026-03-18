import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Welding Flanges Technical Resource",
  description: "Explore the technical services and resources offered by Welding Flanges for welding flange specifications, selection guidance, and industrial piping expertise.",
  openGraph: {
    title: "Services | Welding Flanges",
    description: "Explore the technical services and resources offered by Welding Flanges for welding flange specifications and selection guidance.",
    url: "https://weldingflanges.com/services",
    type: "website",
  },
  alternates: { canonical: "https://weldingflanges.com/services" },
};

export default function Services() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://weldingflanges.com"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://weldingflanges.com/services"
              }
            ]
          }),
        }}
      />

      {/* Hero Section */}
      <section style={{ background: "#0c1829", color: "#fff", padding: "4rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>
            Our Services
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
            Comprehensive Technical Resources for Welding Flange Selection & Specifications
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#0c1829", marginBottom: "2rem" }}>
          Technical Resources
        </h2>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.5rem" }}>
            Flange Type Specifications
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563" }}>
            Access comprehensive technical data on Weld Neck flanges, Slip-On flanges, and Socket Weld flanges. Our specifications include dimensional charts, pressure ratings, and application guidelines for ASME and ANSI standards.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.5rem" }}>
            Material Selection Guide
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563" }}>
            Learn about different material grades including carbon steel, stainless steel, and alloy options. We provide guidance on selecting the right material for your specific application, temperature range, and chemical compatibility requirements.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.5rem" }}>
            Design & Engineering Support
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563" }}>
            Get expert guidance on flange selection for your high-pressure piping systems. We help engineers understand pressure classes, facing types (Raised Face vs. Flat Face), and critical specifications for code compliance.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.5rem" }}>
            FAQ & Technical Blog
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563" }}>
            Explore our extensive FAQ section and technical blog covering common questions, best practices, and industry insights on welding flanges and piping systems.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.5rem" }}>
            Sourcing & Procurement
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563" }}>
            Once you've identified the right specifications, our partner Texas Flange handles sourcing, custom manufacturing, and rapid delivery of certified welding flanges to your site.
          </p>
        </div>

        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem", marginTop: "3rem" }}>
          Standards & Compliance
        </h2>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#4b5563", marginBottom: "1rem" }}>
          All our technical information aligns with:
        </p>
        <ul style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563", marginLeft: "1.5rem" }}>
          <li>ASME B16.5 - Pipe Flanges and Flanged Fittings</li>
          <li>ANSI/ASME Pressure Equipment Standards</li>
          <li>ASTM Material Specifications</li>
          <li>Industry Best Practices for High-Pressure Applications</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section style={{ background: "#f3f4f6", padding: "3rem 2rem", textAlign: "center", marginTop: "2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem" }}>
            Need Help Selecting Your Flanges?
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#4b5563", marginBottom: "1.5rem" }}>
            Contact our partner Texas Flange for expert guidance and custom sourcing solutions.
          </p>
          <a
            href="https://texasflange.com/contact-us/?ref=weldingflanges"
            style={{
              display: "inline-block",
              background: "#e8590c",
              color: "#fff",
              padding: "0.8rem 2rem",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Contact Texas Flange
          </a>
        </div>
      </section>
    </div>
  );
}
