import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Welding Flanges | Technical Resource",
  description: "Learn about Welding Flanges, a comprehensive digital resource for welding flange technical data, specifications, and industry expertise.",
  openGraph: {
    title: "About Welding Flanges",
    description: "Learn about Welding Flanges, a comprehensive digital resource for welding flange technical data, specifications, and industry expertise.",
    url: "https://weldingflanges.com/about",
    type: "website",
  },
  alternates: { canonical: "https://weldingflanges.com/about" },
};

export default function About() {
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
                name: "About",
                item: "https://weldingflanges.com/about"
              }
            ]
          }),
        }}
      />

      {/* Hero Section */}
      <section style={{ background: "#0c1829", color: "#fff", padding: "4rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>
            About Welding Flanges
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
            Your Trusted Digital Resource for Welding Flange Technical Data & Specifications
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem" }}>
          Our Mission
        </h2>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#4b5563", marginBottom: "2rem" }}>
          Welding Flanges is dedicated to providing engineers, procurement specialists, and industrial professionals with accurate, comprehensive technical data on welding flange specifications, dimensions, and material grades. We serve as a bridge between technical knowledge and practical sourcing, helping you make informed decisions for high-pressure piping systems.
        </p>

        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem", marginTop: "2rem" }}>
          What We Provide
        </h2>
        <ul style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#4b5563" }}>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Technical Specifications:</strong> Detailed data on Weld Neck, Slip-On, and Socket Weld flanges
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Material Guidance:</strong> Carbon steel, stainless steel, and alloy flange options
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>ASME & ASTM Compliance:</strong> Industry standard certifications and requirements
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>Application Support:</strong> Help selecting the right flange for your project
          </li>
        </ul>

        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem", marginTop: "2rem" }}>
          Our Partnership
        </h2>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#4b5563" }}>
          While Welding Flanges provides comprehensive technical resources, we partner with <strong>Texas Flange</strong> for sourcing and procurement. Texas Flange offers extensive inventory, rapid delivery, and custom manufacturing capabilities to bring your projects to life. Together, we combine technical expertise with industrial fulfillment.
        </p>
      </section>

      {/* CTA Section */}
      <section style={{ background: "#f3f4f6", padding: "3rem 2rem", textAlign: "center", marginTop: "2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem" }}>
            Ready to Learn More?
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#4b5563", marginBottom: "1.5rem" }}>
            Explore our technical resources or contact our partner Texas Flange for sourcing support.
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
              marginRight: "1rem",
            }}
          >
            Request a Quote
          </a>
          <a
            href="/"
            style={{
              display: "inline-block",
              background: "#0c1829",
              color: "#fff",
              padding: "0.8rem 2rem",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Back to Home
          </a>
        </div>
      </section>
    </div>
  );
}
