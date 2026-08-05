import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "5+ Years Focused on Shopify",
    description: "Not a generalist — Shopify is the only platform I build for, day in and day out.",
  },
  {
    title: "120+ Successful Shopify Projects",
    description: "A proven track record across themes, apps, and full store builds.",
  },
  {
    title: "Shopify Plus Experience",
    description: "Comfortable with enterprise-scale stores, B2B setups, and multi-market storefronts.",
  },
  {
    title: "Theme & App Development",
    description: "End-to-end capability — from custom themes to full custom app builds.",
  },
  {
    title: "Direct Communication",
    description: "You talk to the person actually writing the code, not an account manager relay.",
  },
  {
    title: "Long-Term Maintenance",
    description: "I stick around after launch for fixes, updates, and ongoing support.",
  },
];

export function WhyHireMe() {
  return (
    <section id="why-hire-me" style={{ padding: "7rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p
            className="mb-3"
            style={{ fontFamily: "'DM Mono', monospace", color: "#95bf47", fontSize: "0.75rem", letterSpacing: "0.14em" }}
          >
            {"10 / WHY HIRE ME"}
          </p>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#f0eeea",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Why Brands Choose Me
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "#7a7a85", lineHeight: 1.7 }}>
            Not just a project showcase — here's what you actually get when you hire me.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              style={{
                background: "#141417",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "0.25rem",
                padding: "1.5rem 1.5rem",
              }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 size={19} style={{ color: "#95bf47", flexShrink: 0, marginTop: "0.1rem" }} aria-hidden="true" focusable="false" />
                <div>
                  <h3
                    className="mb-1.5"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.98rem",
                      fontWeight: 700,
                      color: "#f0eeea",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {reason.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#7a7a85", lineHeight: 1.6 }}>
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
