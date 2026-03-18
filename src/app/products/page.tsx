import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Welding Flanges",
  description: "Explore our comprehensive range of welding flange products including Weld Neck, Slip-On, Socket Weld, and more. ASME B16.5 & B16.47 certified. Pressure classes 150# to 2500#.",
  openGraph: {
    title: "Products | Welding Flanges",
    description: "Comprehensive range of welding flange products for high-pressure piping systems.",
    url: "https://weldingflanges.com/products",
    type: "website",
  },
  alternates: { canonical: "https://weldingflanges.com/products" },
};

export default function Products() {
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
                name: "Products",
                item: "https://weldingflanges.com/products"
              }
            ]
          }),
        }}
      />

      {/* Hero Section */}
      <section style={{ background: "#0c1829", color: "#fff", padding: "4rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>
            Welding Flange Products
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
            Complete Range of High-Quality Welding Flanges for Industrial Piping Systems
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#0c1829", marginBottom: "2rem" }}>
          Our Product Line
        </h2>

        {/* Weld Neck Flanges */}
        <div style={{ marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid #e5e7eb" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.5rem" }}>
            Weld Neck Flanges
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563", marginBottom: "1rem" }}>
            The most popular welding flange type for severe service conditions. Features a tapered hub that provides excellent stress distribution and maintains flange integrity under high pressure and temperature. Ideal for critical applications where reliability is non-negotiable.
          </p>
          <div style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: 1.8 }}>
            <p><strong>Available Sizes:</strong> 1/2" through 72"+</p>
            <p><strong>Pressure Classes:</strong> 150#, 300#, 600#, 900#, 1500#, 2500#</p>
            <p><strong>Materials:</strong> ASTM A105 Carbon Steel, A182 F304/F316 Stainless Steel, A182 Alloy Steel</p>
            <p><strong>Standards:</strong> ASME B16.5 (NPS 1/2" - 24"), ASME B16.47 (NPS 26" - 60"+)</p>
          </div>
        </div>

        {/* Slip-On Welding Flanges */}
        <div style={{ marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid #e5e7eb" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.5rem" }}>
            Slip-On Welding Flanges
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563", marginBottom: "1rem" }}>
            Cost-effective flanges that slide over the pipe before welding. Popular for lower pressure applications and situations where flange alignment is critical. Easy installation with both inside and outside fillet welds provides secure attachment.
          </p>
          <div style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: 1.8 }}>
            <p><strong>Available Sizes:</strong> 1/2" through 72"+</p>
            <p><strong>Pressure Classes:</strong> 150#, 300#, 600#, 900#, 1500#, 2500#</p>
            <p><strong>Materials:</strong> ASTM A105 Carbon Steel, A182 F304/F316 Stainless Steel, A182 Alloy Steel</p>
            <p><strong>Standards:</strong> ASME B16.5, ASME B16.47</p>
          </div>
        </div>

        {/* Socket Weld Flanges */}
        <div style={{ marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid #e5e7eb" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.5rem" }}>
            Socket Weld Flanges
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563", marginBottom: "1rem" }}>
            Designed for small diameter, high-pressure applications. The pipe fits into a socket in the flange bore, then is welded. Compact design and excellent for tight spaces. Commonly used in instrument and sampling lines.
          </p>
          <div style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: 1.8 }}>
            <p><strong>Available Sizes:</strong> 1/2" through 72"+</p>
            <p><strong>Pressure Classes:</strong> 150#, 300#, 600#, 900#, 1500#, 2500#</p>
            <p><strong>Materials:</strong> ASTM A105 Carbon Steel, A182 F304/F316 Stainless Steel, A182 Alloy Steel</p>
            <p><strong>Standards:</strong> ASME B16.5</p>
          </div>
        </div>

        {/* Long Weld Neck Flanges */}
        <div style={{ marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid #e5e7eb" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.5rem" }}>
            Long Weld Neck Flanges
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563", marginBottom: "1rem" }}>
            Extended hub version of weld neck flanges ideal for thick-walled pipes and challenging field conditions. The longer hub provides additional reinforcement and stress distribution for demanding applications.
          </p>
          <div style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: 1.8 }}>
            <p><strong>Available Sizes:</strong> 1/2" through 60"+</p>
            <p><strong>Pressure Classes:</strong> 150#, 300#, 600#, 900#, 1500#, 2500#</p>
            <p><strong>Materials:</strong> ASTM A105 Carbon Steel, A182 F304/F316 Stainless Steel, A182 Alloy Steel</p>
            <p><strong>Standards:</strong> ASME B16.47 Series A & B</p>
          </div>
        </div>

        {/* Lap Joint Flanges */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.5rem" }}>
            Lap Joint Flanges
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563", marginBottom: "1rem" }}>
            Economical choice where the flange can rotate freely around the pipe. Requires a stub end for installation. Popular in low-pressure applications and systems where ease of maintenance is important.
          </p>
          <div style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: 1.8 }}>
            <p><strong>Available Sizes:</strong> 1/2" through 60"+</p>
            <p><strong>Pressure Classes:</strong> 150#, 300#, 600#, 900#, 1500#, 2500#</p>
            <p><strong>Materials:</strong> Carbon Steel, Stainless Steel options</p>
            <p><strong>Standards:</strong> ASME B16.5, ASME B16.47</p>
          </div>
        </div>

        {/* Why Choose These Flanges */}
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#0c1829", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Why Choose Welding Flanges?
        </h2>
        <ul style={{ fontSize: "1rem", lineHeight: 1.9, color: "#4b5563", marginLeft: "1.5rem", marginBottom: "2rem" }}>
          <li>Full compliance with ASME B16.5 and ASME B16.47 standards</li>
          <li>Wide range of sizes from 1/2" to 72"+ OD</li>
          <li>All pressure classes from 150# to 2500#</li>
          <li>Multiple material options for diverse applications</li>
          <li>Certified mill test reports available</li>
          <li>Expert guidance on specification selection</li>
          <li>Rapid fulfillment through our partner Texas Flange</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section style={{ background: "#f3f4f6", padding: "3rem 2rem", textAlign: "center", marginTop: "2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem" }}>
            Ready to Source Your Flanges?
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#4b5563", marginBottom: "1.5rem" }}>
            Contact our partner Texas Flange for specifications, pricing, and rapid delivery on all welding flange products.
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
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
