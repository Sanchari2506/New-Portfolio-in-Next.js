import { Star } from "lucide-react";

const featuredTech = [
  "Shopify Plus",
  "Checkout UI Extensions",
  "Shopify Functions",
  "GraphQL",
  "Polaris",
  "Hydrogen",
  "Klaviyo",
  "Recharge",
  "Shopify Markets",
  "Shopify Flow",
];

export function FeaturedTech() {
  return (
    <section id="featured-tech" style={{ padding: "7rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p
            className="mb-3"
            style={{ fontFamily: "'DM Mono', monospace", color: "#95bf47", fontSize: "0.75rem", letterSpacing: "0.14em" }}
          >
            {"04 / FEATURED TECHNOLOGIES"}
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
            The Tools You're Already Looking For
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "#7a7a85", lineHeight: 1.7 }}>
            The platforms and tools that come up most in client briefs — front and center, so you don't have to dig for them.
          </p>
        </div>

        {/* Strip */}
        <div className="flex flex-wrap gap-3" role="list">
          {featuredTech.map((tech) => (
            <div
              key={tech}
              role="listitem"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.92rem",
                fontWeight: 600,
                padding: "0.7rem 1.15rem",
                background: "#141417",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "999px",
                color: "#f0eeea",
                cursor: "default",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#95bf47";
                (e.currentTarget as HTMLElement).style.background = "rgba(149,191,71,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.background = "#141417";
              }}
            >
              <Star size={13} style={{ color: "#95bf47" }} aria-hidden="true" focusable="false" />
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
