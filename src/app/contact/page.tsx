import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Welding Flanges",
  description: "Get in touch with Welding Flanges for technical questions about welding flanges or contact our partner Texas Flange for sourcing and quotes.",
  openGraph: {
    title: "Contact Us | Welding Flanges",
    description: "Contact Welding Flanges for technical support or reach our sourcing partner Texas Flange.",
    url: "https://weldingflanges.com/contact",
    type: "website",
  },
  alternates: { canonical: "https://weldingflanges.com/contact" },
};

export default function Contact() {
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
                name: "Contact",
                item: "https://weldingflanges.com/contact"
              }
            ]
          }),
        }}
      />

      {/* Hero Section */}
      <section style={{ background: "#0c1829", color: "#fff", padding: "4rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>
            Get in Touch
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
            Technical Questions or Ready to Request a Quote?
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
          {/* Technical Support */}
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem" }}>
              Technical Questions
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563", marginBottom: "1.5rem" }}>
              Have questions about welding flange specifications, materials, or selection? We're here to help.
            </p>
            <div style={{ marginBottom: "1rem" }}>
              <p style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: "0.25rem" }}>
                Phone
              </p>
              <a
                href="tel:+12814848325"
                style={{ fontSize: "1.1rem", fontWeight: 600, color: "#e8590c", textDecoration: "none" }}
              >
                +1 281 484-8325
              </a>
            </div>
            <div>
              <p style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: "0.25rem" }}>
                Email
              </p>
              <a
                href="mailto:sales@texasflange.com"
                style={{ fontSize: "1.1rem", fontWeight: 600, color: "#e8590c", textDecoration: "none" }}
              >
                sales@texasflange.com
              </a>
            </div>
          </div>

          {/* Sourcing & Quotes */}
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem" }}>
              Sourcing & Quotes
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563", marginBottom: "1.5rem" }}>
              Ready to source quality welding flanges? Our partner Texas Flange handles all procurement and custom orders.
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
                marginBottom: "1rem",
              }}
            >
              Request a Quote
            </a>
            <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
              Hours: Mon–Fri, 8 AM – 5 PM CST
            </p>
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "2rem 0" }} />

        {/* FAQ Reference */}
        <div style={{ background: "#f3f4f6", padding: "2rem", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem" }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563", marginBottom: "1.5rem" }}>
            Check out our comprehensive FAQ section for answers to common questions about welding flanges, material selection, and specifications.
          </p>
          <a
            href="/#faq"
            style={{
              color: "#e8590c",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            View FAQ →
          </a>
        </div>
      </section>

      {/* Contact Information Card */}
      <section style={{ background: "#0c1829", color: "#fff", padding: "3rem 2rem", textAlign: "center", marginTop: "2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "2rem" }}>
            Contact Information
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div>
              <p style={{ fontSize: "0.9rem", color: "#9ca3af", marginBottom: "0.5rem" }}>
                Phone
              </p>
              <p style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                281-484-8325
              </p>
            </div>
            <div>
              <p style={{ fontSize: "0.9rem", color: "#9ca3af", marginBottom: "0.5rem" }}>
                Email
              </p>
              <p style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                sales@texasflange.com
              </p>
            </div>
          </div>
          <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#9ca3af" }}>
            Available Mon–Fri, 8 AM – 5 PM CST
          </p>
        </div>
      </section>
    </div>
  );
}
