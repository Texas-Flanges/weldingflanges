import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Data & Specifications | Welding Flanges",
  description: "Complete technical specifications for welding flanges including pressure-temperature ratings, material specs, dimensions per ASME B16.5 and B16.47, and best practices.",
  openGraph: {
    title: "Technical Data & Specifications | Welding Flanges",
    description: "Technical specifications and dimensional data for welding flanges and piping components.",
    url: "https://weldingflanges.com/technical-data",
    type: "website",
  },
  alternates: { canonical: "https://weldingflanges.com/technical-data" },
};

export default function TechnicalData() {
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
                name: "Technical Data",
                item: "https://weldingflanges.com/technical-data"
              }
            ]
          }),
        }}
      />

      {/* Hero Section */}
      <section style={{ background: "#0c1829", color: "#fff", padding: "4rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>
            Technical Data & Specifications
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
            Comprehensive Engineering Reference for Welding Flange Selection & Design
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem" }}>

        {/* Flange Dimensions */}
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#0c1829", marginBottom: "1.5rem" }}>
          Flange Dimensions
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563", marginBottom: "1.5rem" }}>
          Welding flange dimensions are strictly governed by ASME standards to ensure interchangeability and compatibility across the industry. All dimensions, including bolt hole patterns, bolt hole diameters, and face types are standardized.
        </p>
        <div style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: 1.8, marginBottom: "2rem", paddingLeft: "1.5rem" }}>
          <p><strong>ASME B16.5:</strong> Covers flanges and flanged fittings for NPS 1/2 through 24 (12.7 mm through 610 mm)</p>
          <p><strong>ASME B16.47:</strong> Covers large diameter steel flanges for NPS 26 through 60 (660 mm through 1524 mm)</p>
          <p style={{ marginTop: "1rem" }}>Flange OD, ID, thickness, hub dimensions, and bolt circles are precisely defined for each size and pressure class combination. Complete dimensional tables are available in the official ASME standards publications.</p>
        </div>

        {/* Pressure-Temperature Ratings */}
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#0c1829", marginBottom: "1.5rem" }}>
          Pressure-Temperature Ratings
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563", marginBottom: "1.5rem" }}>
          Flange pressure ratings define the maximum allowable working pressure (MAWP) at a given temperature. Ratings decrease as temperature increases due to reduced material strength.
        </p>

        {/* Pressure Class Overview Table */}
        <div style={{ marginBottom: "2rem", overflowX: "auto" }}>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #d1d5db",
            fontSize: "0.9rem",
          }}>
            <thead>
              <tr style={{ background: "#0c1829", color: "#fff" }}>
                <th style={{ padding: "0.75rem", textAlign: "left", borderRight: "1px solid #d1d5db" }}>Pressure Class</th>
                <th style={{ padding: "0.75rem", textAlign: "left", borderRight: "1px solid #d1d5db" }}>Rating @ 100°F</th>
                <th style={{ padding: "0.75rem", textAlign: "left", borderRight: "1px solid #d1d5db" }}>Rating @ 200°F</th>
                <th style={{ padding: "0.75rem", textAlign: "left", borderRight: "1px solid #d1d5db" }}>Rating @ 400°F</th>
                <th style={{ padding: "0.75rem", textAlign: "left" }}>Rating @ 600°F</th>
              </tr>
            </thead>
            <tbody>
              {[
                { class: "150#", r100: "150 psi", r200: "150 psi", r400: "145 psi", r600: "100 psi" },
                { class: "300#", r100: "300 psi", r200: "300 psi", r400: "260 psi", r600: "185 psi" },
                { class: "600#", r100: "600 psi", r200: "600 psi", r400: "515 psi", r600: "340 psi" },
                { class: "900#", r100: "900 psi", r200: "900 psi", r400: "770 psi", r600: "500 psi" },
                { class: "1500#", r100: "1500 psi", r200: "1500 psi", r400: "1280 psi", r600: "840 psi" },
                { class: "2500#", r100: "2500 psi", r200: "2500 psi", r400: "2130 psi", r600: "1400 psi" },
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#f9fafb" : "#fff" }}>
                  <td style={{ padding: "0.75rem", borderRight: "1px solid #d1d5db", borderBottom: "1px solid #d1d5db", fontWeight: 600, color: "#0c1829" }}>{row.class}</td>
                  <td style={{ padding: "0.75rem", borderRight: "1px solid #d1d5db", borderBottom: "1px solid #d1d5db" }}>{row.r100}</td>
                  <td style={{ padding: "0.75rem", borderRight: "1px solid #d1d5db", borderBottom: "1px solid #d1d5db" }}>{row.r200}</td>
                  <td style={{ padding: "0.75rem", borderRight: "1px solid #d1d5db", borderBottom: "1px solid #d1d5db" }}>{row.r400}</td>
                  <td style={{ padding: "0.75rem", borderBottom: "1px solid #d1d5db" }}>{row.r600}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#4b5563", marginBottom: "2rem", fontStyle: "italic" }}>
          Note: Pressure ratings shown are for ASTM A105 carbon steel. Stainless steel and alloy ratings vary. Consult ASME B16.5/B16.47 for complete ratings at all temperatures.
        </p>

        {/* Material Specifications */}
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#0c1829", marginBottom: "1.5rem" }}>
          Material Specifications
        </h2>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.75rem" }}>
            Carbon Steel (ASTM A105)
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563" }}>
            The most widely used material for welding flanges. Suitable for general service, fossil fuels, and many industrial applications up to moderate pressures and temperatures. Excellent weldability and cost-effective. Typical yield strength: 36 ksi minimum. Best for temperatures -20°F to 800°F.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.75rem" }}>
            Stainless Steel (A182 F304/F316)
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563" }}>
            Superior corrosion resistance for chemical, pharmaceutical, and food processing applications. F304 is the standard austenitic grade for general corrosive service. F316 provides enhanced molybdenum content for superior pitting resistance in chloride environments. Typical yield strength: 30 ksi minimum. Excellent high-temperature capability to 1500°F+.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.75rem" }}>
            Alloy Steel (A182 F11, F22)
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563" }}>
            Chromium-molybdenum alloys designed for elevated temperature service in fossil fuel and petrochemical applications. F11 (1.25Cr - 0.5Mo) and F22 (2.25Cr - 1Mo) maintain strength at high temperatures while resisting creep. F22 is preferred for temperatures above 900°F. Both require post-weld heat treatment (PWHT) per ASME Section VIII.
          </p>
        </div>

        {/* Flange Face Types */}
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#0c1829", marginBottom: "1.5rem" }}>
          Flange Face Types
        </h2>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.75rem" }}>
            Raised Face (RF)
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563" }}>
            The most common flange face type. Features a raised surface in the center that concentrates gasket pressure on a smaller area, improving seal effectiveness under high pressure. Standard for ASME B16.5 flanges 150# through 2500#. Typical raised portion: 1/16" height above the flange face.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.75rem" }}>
            Flat Face (FF)
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563" }}>
            Completely flat face with no raised surface. Used when connecting to equipment with flat faces (such as cast iron valves or pumps) to prevent gasket distortion. Also used for low-pressure applications or when the mating component requires a flat surface.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.75rem" }}>
            Ring Type Joint (RTJ)
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563" }}>
            Features a specialized groove designed for octagonal or wedge-shaped metal sealing rings. Provides the highest pressure and temperature capability, particularly critical for offshore applications and extreme service conditions. Requires matching ring material and geometry.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.75rem" }}>
            Tongue & Groove (T&G)
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563" }}>
            One flange features a raised tongue; the mating flange has a recessed groove. Commonly used for larger diameters and high-pressure applications. Helps locate and align gaskets during assembly and provides improved sealing performance.
          </p>
        </div>

        {/* Bolt Pattern Information */}
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#0c1829", marginBottom: "1.5rem" }}>
          Bolt Pattern Information
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563", marginBottom: "1.5rem" }}>
          The bolt circle diameter (BCD), number of bolts, and bolt hole sizes are precisely defined for each flange size and pressure class. These standardized patterns ensure that flanges of the same size and class can be bolted together interchangeably, regardless of manufacturer.
        </p>
        <div style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: 1.8, marginBottom: "2rem", paddingLeft: "1.5rem" }}>
          <p><strong>Number of Bolts:</strong> Ranges from 4 bolts for small diameter 150# flanges up to 60+ bolts for large diameter 2500# flanges</p>
          <p><strong>Bolt Hole Diameter:</strong> Typically 1/2", 5/8", 3/4", 7/8", 1", 1 1/8", or 1 1/4" depending on flange class and size</p>
          <p><strong>Bolt Grade:</strong> Typically ASTM A307 Grade B (low carbon) for 150#/300# or ASTM A193 Grade B7 (alloy steel) for higher classes</p>
          <p style={{ marginTop: "1rem" }}>Complete bolt pattern tables are available in ASME B16.5 and B16.47. Always verify current tables before purchasing bolts and gaskets.</p>
        </div>

        {/* Welding Procedures */}
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#0c1829", marginBottom: "1.5rem" }}>
          Welding Procedures & Best Practices
        </h2>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.75rem" }}>
            Preparation & Fit-Up
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563" }}>
            Proper preparation is critical for high-quality flange welds. Bevels must match the procedure specification. Ensure pipes and flanges are clean, free from mill scale and contaminants. Preheat per procedure requirements, especially for carbon steel in cold climates. Maintain proper gap and alignment before tacking.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.75rem" }}>
            Heat Input Control
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563" }}>
            Control heat input to prevent excessive grain growth and hardness development. Follow qualified WPS (Welding Procedure Specification) parameters for current, voltage, and travel speed. Interpass temperature control is especially important for alloy and stainless materials to prevent sensitization and cracking.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.75rem" }}>
            Post-Weld Heat Treatment (PWHT)
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563" }}>
            PWHT is typically required for carbon steel and alloy steel flanges to relieve residual stresses and restore mechanical properties. Furnace cooling after soaking is mandatory. Temperature and soak time depend on material thickness and specification. Austenitic stainless steel typically does not require PWHT except under specific codes.
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0c1829", marginBottom: "0.75rem" }}>
            Inspection & Testing
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563" }}>
            Visual inspection should verify smooth, uniform welds with no undercut, cracks, or porosity. Radiographic testing (RT) or ultrasonic testing (UT) may be required per Code or specification. Hydrostatic or pneumatic pressure testing confirms integrity. All welds must meet ASME Section VIII Division 1 or applicable Code requirements.
          </p>
        </div>

        {/* Surface Finish Requirements */}
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#0c1829", marginBottom: "1.5rem" }}>
          Surface Finish Requirements
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4b5563", marginBottom: "1.5rem" }}>
          Surface finish affects both appearance and function. Flange faces must be clean and free from rust, scale, or contaminants to ensure proper gasket sealing. The gasket sealing surface should typically achieve Ra 63 microinches (1.6 µm) or better for high-pressure applications.
        </p>
        <div style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: 1.8, marginBottom: "2rem", paddingLeft: "1.5rem" }}>
          <p><strong>Passivation:</strong> Recommended for stainless steel flanges to enhance corrosion resistance. Per ASTM A967.</p>
          <p><strong>Blast Cleaning:</strong> Can be used for carbon steel prep prior to coating or painting.</p>
          <p><strong>Chemical Cleaning:</strong> Preferred for stainless steel to avoid embedded iron particles that could cause future corrosion.</p>
          <p style={{ marginTop: "1rem" }}>Always store finished flanges in protective wrapping to prevent weather damage and corrosion before installation.</p>
        </div>

        {/* Standards & References */}
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#0c1829", marginBottom: "1.5rem" }}>
          Applicable Standards & References
        </h2>
        <ul style={{ fontSize: "1rem", lineHeight: 1.9, color: "#4b5563", marginLeft: "1.5rem", marginBottom: "2rem" }}>
          <li><strong>ASME B16.5:</strong> Pipe Flanges and Flanged Fittings (Classes 150 - 2500#)</li>
          <li><strong>ASME B16.47 Series A & B:</strong> Large Diameter Steel Flanges (26" - 60"+)</li>
          <li><strong>ASTM A105:</strong> Carbon Steel Forgings for Piping Applications</li>
          <li><strong>ASTM A182:</strong> Alloy Steel Forged Fittings, Flanges, and Valves</li>
          <li><strong>ASME Section VIII Division 1:</strong> Pressure Vessel Code</li>
          <li><strong>ASME B16.5 Appendix II:</strong> Gasket Selection & Installation Guidelines</li>
          <li><strong>API 6A:</strong> Wellhead and Christmas Tree Equipment (Offshore Applications)</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section style={{ background: "#f3f4f6", padding: "3rem 2rem", textAlign: "center", marginTop: "2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem" }}>
            Need Technical Assistance?
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#4b5563", marginBottom: "1.5rem" }}>
            Contact our partner Texas Flange for detailed specification sheets, dimensional data, and expert engineering support.
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
            Contact Technical Support
          </a>
        </div>
      </section>
    </div>
  );
}
