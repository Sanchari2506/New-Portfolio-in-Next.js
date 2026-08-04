import { useState } from "react";
import { CheckCircle } from "lucide-react";

const caseStudies = [

  {
    id: 1,
    brand: "Flooret Commercial",
    categories: ["Checkout", "B2B"],
    useCase:
      "Show \"Pay By Invoice\" as a payment method only for customers with a \"pay_by_invoice_only\" tag, along with an information banner above the shipping section. Other customers see all payment methods except \"Pay By Invoice\".",
    implementation:
      "Implemented using Shopify Payment Functions within a custom app.",
    benefits: ["AOV increased"],
  },
  {
    id: 3,
    brand: "Ashley Furniture (Chile)",
    categories: ["Checkout"],
    useCase:
      "Reduce fake orders and fake addresses by adding RUT validation and address validation on the checkout page.",
    implementation:
      "Implemented using a Shopify custom app. Added a RUT input field with validation as the customer fills in other fields, along with address validation. The checkout flow is restricted if the RUT number is invalid.",
    benefits: ["RTO optimized", "Authentic orders"],
  },
  {
    id: 4,
    brand: "Salty Accessories",
    categories: ["Volume Discount"],
    useCase:
      "Custom volume discounts for charms and pendants. Merchants can create multiple volume discounts across different product lists, each with its own threshold volumes and discount percentage/fixed amount, targeted to specific customers or customer segments, with an automatic discount code generated for each.",
    implementation:
      "Built as a custom Shopify app using Shopify Functions, the Discount and Product Admin GraphQL APIs, and the Cart Transform API.",
    benefits: ["Flexible merchandising", "Automated discount codes"],
  },
];

export function CaseStudies() {
  const [active, setActive] = useState(1);
  const current = caseStudies.find((c) => c.id === active)!;

  return (
    <section id="case-studies" style={{ padding: "7rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p
            className="mb-3"
            style={{ fontFamily: "'DM Mono', monospace", color: "#95bf47", fontSize: "0.75rem", letterSpacing: "0.14em" }}
          >
            {"06 / CASE STUDIES"}
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
            Problem, Solution, Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Sidebar */}
          <div role="tablist" aria-label="Case studies" style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
            {caseStudies.map((item) => (
              <button
                key={item.id}
                id={`case-study-tab-${item.id}`}
                role="tab"
                aria-selected={active === item.id}
                aria-controls="case-study-panel"
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
                    marginBottom: "0.35rem",
                  }}
                >
                  {item.brand}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.68rem",
                    color: active === item.id ? "#95bf47" : "#3a3a42",
                    letterSpacing: "0.06em",
                  }}
                >
                  {item.categories.join(" · ").toUpperCase()}
                </p>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div
            id="case-study-panel"
            role="tabpanel"
            aria-labelledby={`case-study-tab-${current.id}`}
            className="md:col-span-2"
            style={{ padding: "2rem 2rem 2rem 2.5rem" }}
          >
            <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#f0eeea",
                  letterSpacing: "-0.01em",
                }}
              >
                {current.brand}
              </h3>
              <div className="flex flex-wrap gap-2">
                {current.categories.map((c) => (
                  <span
                    key={c}
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
                    {c.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p
                className="mb-2"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "#95bf47", letterSpacing: "0.1em" }}
              >
                USE CASE
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.75, color: "#f0eeea" }}>
                {current.useCase}
              </p>
            </div>

            <div className="mb-6">
              <p
                className="mb-2"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "#95bf47", letterSpacing: "0.1em" }}
              >
                IMPLEMENTATION
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.75, color: "#7a7a85" }}>
                {current.implementation}
              </p>
            </div>

            <div>
              <p
                className="mb-3"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "#95bf47", letterSpacing: "0.1em" }}
              >
                BENEFITS
              </p>
              <ul className="flex flex-col gap-3">
                {current.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle size={15} style={{ color: "#95bf47", flexShrink: 0, marginTop: "0.15rem" }} aria-hidden="true" focusable="false" />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#f0eeea", lineHeight: 1.6 }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
