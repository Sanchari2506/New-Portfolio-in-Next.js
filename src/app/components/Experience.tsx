import { useState } from "react";
import { CheckCircle } from "lucide-react";

const timeline = [
  {
    id: 1,
    role: "Shopify Developer",
    company: "Tech Wishes Solutions",
    period: "2020 — 2022",
    type: "Full-Time",
    description:
      "Built and maintained Shopify themes and custom features for multiple eCommerce brands. Worked on theme customization, app integrations, store performance improvements, and client support.",
    highlights: [
      "Developed custom Shopify themes and reusable Liquid components",
      "Integrated third-party apps, payment gateways, and marketing tools",
      "Implemented CRO, SEO, and page speed optimization strategies",
    ],
  },
  {
    id: 2,
    role: "Senior Shopify Developer",
    company: "Tech Wishes Solutions",
    period: "2022 — 2025",
    type: "Full-Time",
    description:
      "Led Shopify development projects, mentored junior developers, managed client communication, and delivered Shopify Plus solutions for growing brands.",
    highlights: [
      "Developed custom Shopify apps and Shopify Plus solutions",
      "Led store revamps focused on CRO, SEO, and performance optimization",
      "Managed project delivery, stakeholder communication, and customer support",
    ],
  },
  {
    id: 3,
    role: "Freelance Shopify Developer",
    company: "Self-Employed",
    period: "2025 — Present",
    type: "Freelance",
    description:
      "Working with global Shopify merchants on custom theme development, Shopify Plus implementations, app integrations, and conversion-focused store optimization.",
    highlights: [
      "Delivered custom Shopify solutions for brands across multiple industries",
      "Built high-converting landing pages and custom storefront experiences",
      "Provided ongoing maintenance, technical consulting, and growth support",
    ],
  },
  {
    id: 4,
    role: "Shopify Consultant",
    company: "OptiPhoenix",
    period: "2026 — Present",
    type: "Consulting",
    description:
      "Providing strategic Shopify consulting, technical architecture guidance, and growth-focused recommendations for eCommerce brands. Supporting merchants with platform optimization, custom solutions, and scalable Shopify implementations.",
    highlights: [
      "Provided strategic guidance on Shopify Plus architecture and enterprise-scale commerce solutions",
      "Implemented Agentic Commerce experiences leveraging AI-powered shopping and automation workflows",
      "Designed and configured Shopify B2B ecosystems, including custom catalogs, company accounts, and wholesale purchasing flows",
    ],
  },
];

export function Experience() {
  const [active, setActive] = useState(1);
  const current = timeline.find((t) => t.id === active)!;

  return (
    <section id="experience" style={{ padding: "7rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p
            className="mb-3"
            style={{ fontFamily: "'DM Mono', monospace", color: "#95bf47", fontSize: "0.75rem", letterSpacing: "0.14em" }}
          >
            {"04 / EXPERIENCE"}
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#f0eeea",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Where I've Worked
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Sidebar */}
          <div style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
            {timeline.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "1.25rem 1.5rem",
                  background: active === item.id ? "#141417" : "transparent",
                  borderLeft: active === item.id ? "2px solid #95bf47" : "2px solid transparent",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: active === item.id ? "#f0eeea" : "#7a7a85",
                    marginBottom: "0.2rem",
                  }}
                >
                  {item.company}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.68rem",
                    color: active === item.id ? "#95bf47" : "#3a3a42",
                    letterSpacing: "0.06em",
                  }}
                >
                  {item.period}
                </p>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="md:col-span-2" style={{ padding: "2rem 2rem 2rem 2.5rem" }}>
            <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#f0eeea",
                  letterSpacing: "-0.01em",
                }}
              >
                {current.role}
              </h3>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.08em",
                  padding: "0.2rem 0.6rem",
                  background: "rgba(149,191,71,0.1)",
                  color: "#95bf47",
                  border: "1px solid rgba(149,191,71,0.2)",
                }}
              >
                {current.type.toUpperCase()}
              </span>
            </div>

            <p
              className="mb-1"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: "#95bf47", letterSpacing: "0.04em" }}
            >
              @ {current.company}
            </p>

            <p
              className="mb-2"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "#7a7a85" }}
            >
              {current.period}
            </p>

            <p
              className="mb-6 mt-4"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.75, color: "#7a7a85" }}
            >
              {current.description}
            </p>

            <ul className="flex flex-col gap-3">
              {current.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle size={15} style={{ color: "#95bf47", flexShrink: 0, marginTop: "0.15rem" }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#f0eeea", lineHeight: 1.6 }}>
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
