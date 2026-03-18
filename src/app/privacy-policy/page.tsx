import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Welding Flanges",
  description: "Read the privacy policy for Welding Flanges to understand how we protect your information.",
  openGraph: {
    title: "Privacy Policy | Welding Flanges",
    description: "Privacy Policy for Welding Flanges",
    url: "https://weldingflanges.com/privacy-policy",
    type: "website",
  },
  alternates: { canonical: "https://weldingflanges.com/privacy-policy" },
};

export default function PrivacyPolicy() {
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
                name: "Privacy Policy",
                item: "https://weldingflanges.com/privacy-policy"
              }
            ]
          }),
        }}
      />

      {/* Hero Section */}
      <section style={{ background: "#0c1829", color: "#fff", padding: "4rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
            Last Updated: January 2025
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem", marginTop: "2rem" }}>
            1. Introduction
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Welding Flanges ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (https://weldingflanges.com).
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem", marginTop: "2rem" }}>
            2. Information We Collect
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
            <li>Personal identification information (name, email address, phone number) when voluntarily submitted</li>
            <li>Device information and usage data through cookies and analytics</li>
            <li>Information about your interactions with our website content</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem", marginTop: "2rem" }}>
            3. Use of Your Information
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
            <li>Improve our website and optimize user experience</li>
            <li>Respond to your inquiries and provide technical support</li>
            <li>Generate analytics to understand how our website is used</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem", marginTop: "2rem" }}>
            4. Disclosure of Your Information
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and affiliates for the purposes outlined above.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem", marginTop: "2rem" }}>
            5. Third-Party Links
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Our website may contain links to third-party websites, including our partner Texas Flange (https://texasflange.com). This Privacy Policy applies only to Welding Flanges. We are not responsible for the privacy practices of other websites. We encourage you to review the privacy statements of any other service providers before providing your personal information to them.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem", marginTop: "2rem" }}>
            6. Security of Your Information
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem", marginTop: "2rem" }}>
            7. Contact Us
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <div style={{ background: "#f3f4f6", padding: "1rem", borderRadius: "6px", marginTop: "1rem" }}>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Welding Flanges</strong>
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              Email: sales@texasflange.com
            </p>
            <p>
              Phone: +1 281 484-8325
            </p>
          </div>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem", marginTop: "2rem" }}>
            8. Changes to This Privacy Policy
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            Welding Flanges reserves the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ background: "#f3f4f6", padding: "3rem 2rem", textAlign: "center", marginTop: "2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem" }}>
            Questions About Our Privacy Practices?
          </h2>
          <a
            href="/contact"
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
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
