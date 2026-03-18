import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Welding Flanges Technical Insights",
  description: "Read technical articles and insights on welding flanges, piping systems, material selection, and industrial standards.",
  openGraph: {
    title: "Blog | Welding Flanges",
    description: "Technical articles and insights on welding flanges, piping systems, and industrial standards.",
    url: "https://weldingflanges.com/blog",
    type: "website",
  },
  alternates: { canonical: "https://weldingflanges.com/blog" },
};

const blogPosts = [
  {
    id: 1,
    title: "Understanding Weld Neck Flanges: Design and Applications",
    excerpt: "Learn about the design features and optimal applications of Weld Neck flanges for high-pressure piping systems.",
    date: "2024-01-15",
    category: "Technical Guide",
  },
  {
    id: 2,
    title: "Material Selection for Corrosive Environments",
    excerpt: "Explore stainless steel and alloy options for welding flanges in corrosive chemical and marine applications.",
    date: "2024-01-08",
    category: "Materials",
  },
  {
    id: 3,
    title: "ASME B16.5 Compliance: What You Need to Know",
    excerpt: "A comprehensive guide to understanding ASME B16.5 standards for pipe flanges and how to ensure compliance.",
    date: "2024-01-01",
    category: "Standards",
  },
  {
    id: 4,
    title: "Raised Face vs. Flat Face Flanges",
    excerpt: "Understand the differences between raised face and flat face flange designs and when to use each type.",
    date: "2023-12-18",
    category: "Technical Guide",
  },
];

export default function Blog() {
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
                name: "Blog",
                item: "https://weldingflanges.com/blog"
              }
            ]
          }),
        }}
      />

      {/* Hero Section */}
      <section style={{ background: "#0c1829", color: "#fff", padding: "4rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>
            Technical Blog
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
            Industry Insights, Standards, and Welding Flange Best Practices
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ display: "grid", gap: "2rem" }}>
          {blogPosts.map((post) => (
            <article
              key={post.id}
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "2rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "1rem" }}>
                <span
                  style={{
                    background: "#e8590c",
                    color: "#fff",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  {post.category}
                </span>
                <time style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#0c1829",
                  marginBottom: "0.75rem",
                }}
              >
                {post.title}
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "#4b5563",
                  marginBottom: "1rem",
                }}
              >
                {post.excerpt}
              </p>
              <a
                href="#"
                style={{
                  color: "#e8590c",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                Read More →
              </a>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <p style={{ fontSize: "1.05rem", color: "#4b5563", marginBottom: "1.5rem" }}>
            More articles coming soon. Check back regularly for updates on welding flange standards, applications, and industry insights.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: "#f3f4f6", padding: "3rem 2rem", textAlign: "center", marginTop: "2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#0c1829", marginBottom: "1rem" }}>
            Ready to Source Quality Flanges?
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#4b5563", marginBottom: "1.5rem" }}>
            Browse our technical resources and contact Texas Flange for sourcing and custom manufacturing.
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
