import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welding Flanges Technical Data & Specs | Weld Flange Dimensions",
  description:
    "Your comprehensive digital resource for welding flange technical data, dimensions, and specifications. Weld Neck, Slip-On, Socket Weld flanges for high-pressure piping systems.",
  keywords:
    "welding flanges, weld flange, pipe flange, weld neck flange, slip-on flange, socket weld flange, flange supplier, flange specifications, ASME flanges, ASTM flanges",
  openGraph: {
    title: "Welding Flanges Technical Data & Specs",
    description:
      "Your comprehensive digital resource for welding flange technical data, dimensions, and specifications.",
    url: "https://weldingflanges.com",
    siteName: "Welding Flanges Technical Data & Specs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welding Flanges Technical Data & Specs",
    description:
      "Your comprehensive digital resource for welding flange technical data, dimensions, and specifications.",
  },
  alternates: { canonical: "https://weldingflanges.com" },
};

export default function Home() {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body > header.border-gray-200 { display: none !important; }
            .rv { opacity: 1; transform: none; }
          `,
        }}
      />

      {/* Navigation */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "#ffffff",
          borderBottom: "1px solid #d1d5db",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="/"
          style={{
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#0c1829",
            textDecoration: "none",
          }}
        >
          Welding Flanges Technical Data &amp; Specs
        </a>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a href="/" style={{ color: "#0c1829", textDecoration: "none", fontWeight: 500 }}>
            Home
          </a>
          <a href="/products" style={{ color: "#0c1829", textDecoration: "none", fontWeight: 500 }}>
            Products
          </a>
          <a href="/technical-data" style={{ color: "#0c1829", textDecoration: "none", fontWeight: 500 }}>
            Technical Data
          </a>
          <a
            href="https://texasflange.com/contact-us/?ref=weldingflanges"
            style={{
              background: "#e8590c",
              color: "#fff",
              padding: "0.6rem 1.4rem",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Request a Quote
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="rv"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,24,41,0.72), rgba(12,24,41,0.72)), url(/TF-HEADER.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          padding: "5rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              marginBottom: "1rem",
              lineHeight: 1.1,
            }}
          >
            Welding Flanges
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              opacity: 0.95,
              marginBottom: "2rem",
              lineHeight: 1.6,
            }}
          >
            Your comprehensive digital resource for welding flange technical
            data, dimensions, specifications, and custom configuration
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://texasflange.com/contact-us/?ref=weldingflanges"
              style={{
                background: "#fff",
                color: "#0c1829",
                padding: "0.8rem 2rem",
                borderRadius: "30px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Request a Quote
            </a>
            <a
              href="https://texasflange.com?ref=weldingflanges"
              style={{
                border: "2px solid #fff",
                color: "#fff",
                padding: "0.8rem 2rem",
                borderRadius: "30px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Visit Texas Flange
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section
        className="rv"
        style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem" }}
      >
        <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#4b5563", marginBottom: "1rem" }}>
          Welding Flanges is your go-to resource for technical data, dimensions, and specs on industrial piping components. We're here to help engineers and procurement specialists cut through the complexity of choosing the right weld flange for basic structural and high-pressure applications — because getting that decision right matters.
        </p>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#4b5563" }}>
          We'll give you the data you need to feel confident in your selection. When it's time to actually source the parts, reach out to{" "}
          <a
            href="https://texasflange.com?ref=weldingflanges"
            style={{ color: "#0c1829", fontWeight: 600 }}
          >
            Texas Flange
          </a>
          {" "}— a trusted supplier with a wide inventory and fast turnaround. Whether you need a specific pipe flange or something custom-fabricated, get in touch and receive a quote today.
        </p>
      </section>

      {/* Material Grades Section */}
      <section
        className="rv"
        style={{ background: "#f3f4f6", padding: "3rem 2rem" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "#0c1829",
              marginBottom: "1.5rem",
            }}
          >
            Material Grades &amp; Specifications
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#4b5563" }}>
            Welding flanges are critical piping components designed to be
            permanently attached to a pipe system via a welding connection,
            ensuring superior joint integrity and leak prevention. Unlike
            threaded options, a weld flange&#8212;such as a Weld Neck, Slip-On,
            or Socket Weld&#8212;is engineered for high-pressure and
            high-temperature applications where safety is paramount. Selecting
            the correct pipe flange specification is essential for maintaining
            flow efficiency and structural stability. For extensive inventories
            and immediate procurement needs, we direct all users to{" "}
            <a
              href="https://texasflange.com?ref=weldingflanges"
              style={{ color: "#0c1829", fontWeight: 600 }}
            >
              Texas Flange
            </a>
            , a premier flange supplier capable of meeting complex industrial
            requirements. They have a wide selection of carbon, stainless, and nickel alloys to meet various application requirements. All items can be selected to adhere to ASME and ANSI B16.5 and B16.47 specifications, as well as some AWWA and API.
          </p>
        </div>
      </section>

      {/* Your Welding Flange Guide */}
      <section
        className="rv"
        style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem" }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#0c1829",
            marginBottom: "1.5rem",
          }}
        >
          Your Welding Flange Guide
        </h2>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#4b5563" }}>
          The longevity of any piping system depends heavily on the material
          composition of its components. Whether your project requires a standard
          carbon steel pipe flange for general utility or a stainless steel weld
          flange for corrosive environments, adhering to strict ASME and ASTM
          standards is non-negotiable. Using the wrong material grade can lead to
          critical failure under high pressure. For fully certified materials and
          complete mill test reports, we recommend partnering with a trusted
          flange supplier. Visit{" "}
          <a
            href="https://texasflange.com?ref=weldingflanges"
            style={{ color: "#0c1829", fontWeight: 600 }}
          >
            Texas Flange
          </a>{" "}
          to browse their comprehensive catalog of verified welding flanges and
          ensure your project meets all safety codes.
        </p>
      </section>

      {/* FAQ Section */}
      <section
        className="rv"
        style={{ background: "#f3f4f6", padding: "3rem 2rem" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "#0c1829",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </h2>

          {[
            {
              q: "What is the main advantage of using a welding flange over a threaded flange?",
              a: "A welding flange provides a much stronger and more reliable connection than threaded alternatives, making it the standard for high-pressure and high-temperature applications. By permanently fusing the pipe flange to the piping system, you eliminate potential leak paths and increase structural integrity. For critical industrial projects, we always recommend consulting with a qualified flange supplier like Texas Flange to ensure you select the right pressure class.",
            },
            {
              q: "Can I order custom dimensions or non-standard welding flanges?",
              a: "Yes. While standard ANSI/ASME dimensions cover most needs, many industrial projects require custom machining. Finding a flange supplier with in-house machining capabilities is crucial for these requests. We recommend contacting Texas Flange, as they specialize in custom manufacturing and can provide a rapid quote for non-standard pipe flange dimensions.",
            },
            {
              q: "What are the most common types of welding flanges?",
              a: "The three most prevalent types are the Weld Neck, Slip-On, and Socket Weld flanges. A Weld Neck weld flange is ideal for severe service conditions due to its tapered hub, while Slip-On flanges are popular for lower pressure applications due to ease of alignment. You can view detailed specification sheets for all these types on the Texas Flange website before you buy.",
            },
            {
              q: "How do I request a quote for a bulk order?",
              a: 'Sourcing for large projects requires a partner who can handle logistics and volume pricing. To get the most accurate and competitive pricing, you should submit a bill of materials directly to a distributor. You can submit your list directly through the Texas Flange "Request a Quote" portal to get immediate pricing on welding flanges and other pipe fittings.',
            },
            {
              q: "How do I know which material grade to choose for my pipe flange?",
              a: "Material selection depends entirely on the fluid being transported and the operating environment. Common materials include carbon steel for general use and stainless steel or alloys for corrosive environments. To ensure safety compliance, your welding flanges should meet ASTM and ASME standards. Texas Flange offers a vast inventory of certified materials and can help match your requirements to the correct stock.",
            },
            {
              q: "What is the difference between Raised Face (RF) and Flat Face (FF) flanges?",
              a: "The facing determines how the gasket seals the connection. A Raised Face weld flange is standard for most high-pressure applications as it concentrates pressure on a smaller surface area. Flat Face designs are typically used when mating to brittle materials like cast iron valves. Using the wrong facing on a pipe flange can cause damage, so we recommend checking the technical datasheets available at Texas Flange, your trusted flange supplier, to ensure you select the correct configuration.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "8px",
                padding: "1.5rem",
                marginBottom: "1rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#0c1829",
                  marginBottom: "0.75rem",
                }}
              >
                {faq.q}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "#4b5563",
                }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="rv"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,24,41,0.85), rgba(12,24,41,0.85)), url(/TF-HEADER.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          padding: "3rem 2rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem" }}>
          Ready to Source Your Welding Flanges?
        </h2>
        <p style={{ marginBottom: "1.5rem", opacity: 0.9 }}>
          Contact Texas Flange for competitive pricing and rapid delivery on all
          welding flange types.
        </p>
        <a
          href="https://texasflange.com/contact-us/?ref=weldingflanges"
          style={{
            background: "#fff",
            color: "#0c1829",
            padding: "0.8rem 2.5rem",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: 600,
            display: "inline-block",
          }}
        >
          Request a Quote
        </a>
      </section>

      {/* Contact Section */}
      <section
        className="rv"
        style={{ padding: "3rem 2rem", textAlign: "center" }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#0c1829",
            marginBottom: "1rem",
          }}
        >
          Contact Us
        </h2>
        <p style={{ fontSize: "1.05rem", color: "#4b5563" }}>
          Phone:{" "}
          <a href="tel:+12814848325" style={{ color: "#0c1829", fontWeight: 600 }}>
            +1 281 484-8325
          </a>
        </p>
        <p style={{ fontSize: "1.05rem", color: "#4b5563" }}>
          Email:{" "}
          <a
            href="mailto:sales@texasflange.com"
            style={{ color: "#0c1829", fontWeight: 600 }}
          >
            sales@texasflange.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#0c1829",
          color: "#9ca3af",
          padding: "2.5rem 2rem",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "1.2rem",
            marginBottom: "0.5rem",
          }}
        >
          Welding Flanges Technical Data &amp; Specs
        </h3>
        <p style={{ marginBottom: "0.5rem", fontSize: "0.95rem" }}>
          Your comprehensive digital resource for welding flange technical data
        </p>
        <p style={{ fontSize: "0.95rem" }}>
          Phone:{" "}
          <a href="tel:+12814848325" style={{ color: "#93c5fd" }}>
             281-484-8325
          </a>{" "}
          | Fax: 281-484-8730
        </p>
        <p style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>
          Email:{" "}
          <a href="mailto:sales@texasflange.com" style={{ color: "#93c5fd" }}>
            sales@texasflange.com
          </a>
        </p>
        <p style={{ fontSize: "0.95rem", marginBottom: "1rem" }}>
          Hours: Mon–Fri, 8 AM – 5 PM CST
        </p>
        <p style={{ fontSize: "0.95rem" }}>
          <a href="https://texasflange.com?ref=weldingflanges" style={{ color: "#93c5fd" }}>
            Texas Flange
          </a>{" "}
          |{" "}
          <a
            href="https://texasflange.com/contact-us/?ref=weldingflanges"
            style={{ color: "#93c5fd" }}
          >
            Request a Quote
          </a>
        </p>
        <p style={{ fontSize: "0.95rem" }}>
          <a href="/privacy-policy" style={{ color: "#93c5fd" }}>
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/services" style={{ color: "#93c5fd" }}>
            Services
          </a>
        </p>
        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "0.85rem",
            color: "#6b7280",
          }}
        >
          &copy; 2025 Welding Flanges Technical Data &amp; Specs. All rights
          reserved.
        </p>
      </footer>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Welding Flanges Technical Data & Specs",
            url: "https://weldingflanges.com",
            description:
              "Your comprehensive digital resource for welding flange technical data, dimensions, and specifications.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-281-484-8325",
              contactType: "sales",
              email: "sales@texasflange.com",
            },
            parentOrganization: {
              "@type": "Organization",
              name: "Texas Flange",
              url: "https://texasflange.com",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the main advantage of using a welding flange over a threaded flange?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A welding flange provides a much stronger and more reliable connection than threaded alternatives, making it the standard for high-pressure and high-temperature applications.",
                },
              },
              {
                "@type": "Question",
                name: "Can I order custom dimensions or non-standard welding flanges?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. While standard ANSI/ASME dimensions cover most needs, many industrial projects require custom machining. We recommend contacting Texas Flange for custom manufacturing.",
                },
              },
              {
                "@type": "Question",
                name: "What are the most common types of welding flanges?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The three most prevalent types are the Weld Neck, Slip-On, and Socket Weld flanges.",
                },
              },
              {
                "@type": "Question",
                name: "How do I request a quote for a bulk order?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can submit your bill of materials directly through the Texas Flange Request a Quote portal to get immediate pricing on welding flanges and other pipe fittings.",
                },
              },
              {
                "@type": "Question",
                name: "How do I know which material grade to choose for my pipe flange?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Material selection depends on the fluid being transported and operating environment. Common materials include carbon steel for general use and stainless steel or alloys for corrosive environments.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between Raised Face (RF) and Flat Face (FF) flanges?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The facing determines how the gasket seals the connection. A Raised Face weld flange is standard for most high-pressure applications as it concentrates pressure on a smaller surface area.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
