import { useState } from "react";

const categories = [
  {
    label: "Shopify Core",
    skills: [
      { name: "Liquid Templating", level: 98 },
      { name: "Shopify CLI & Theme Kit", level: 95 },
      { name: "Online Store 2.0", level: 96 },
      { name: "Metafields & Metaobjects", level: 92 },
      { name: "Shopify Checkout Extensions", level: 88 },
      { name: "Shopify Functions", level: 82 },
    ],
  },
  {
    label: "App Development",
    skills: [
      { name: "Shopify App Bridge", level: 90 },
      { name: "Polaris Design System", level: 93 },
      { name: "GraphQL Admin API", level: 89 },
      { name: "REST Storefront API", level: 91 },
      { name: "Webhooks & Event Handling", level: 87 },
      { name: "OAuth & Session Tokens", level: 85 },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React / Next.js", level: 88 },
      { name: "TypeScript", level: 84 },
      { name: "Tailwind CSS", level: 92 },
      { name: "SCSS / CSS Architecture", level: 90 },
      { name: "Performance Optimization", level: 86 },
      { name: "Accessibility (WCAG)", level: 80 },
    ],
  },
  {
    label: "Backend & Tools",
    skills: [
      { name: "Node.js / Express", level: 82 },
      { name: "Prisma & PostgreSQL", level: 78 },
      { name: "Redis & Caching", level: 75 },
      { name: "Git & CI/CD", level: 88 },
      { name: "AWS / Vercel", level: 80 },
      { name: "Algolia Search", level: 83 },
    ],
  },
];

const techTags = [
  "Shopify", "Liquid", "React", "Node.js", "GraphQL", "REST", "TypeScript",
  "Tailwind", "Polaris", "Hydrogen", "Oxygen", "Remix", "Next.js", "Prisma",
  "PostgreSQL", "Redis", "Vercel", "AWS", "Algolia", "Klaviyo", "ReCharge",
];

export function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" style={{ padding: "7rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p
            className="mb-3"
            style={{ fontFamily: "'DM Mono', monospace", color: "#95bf47", fontSize: "0.75rem", letterSpacing: "0.14em" }}
          >
            {"02 / SKILLS"}
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
            Technical Expertise
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(i)}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                padding: "0.5rem 1rem",
                background: activeTab === i ? "#95bf47" : "transparent",
                color: activeTab === i ? "#0d0d0f" : "#7a7a85",
                border: activeTab === i ? "1px solid #95bf47" : "1px solid rgba(255,255,255,0.08)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {categories[activeTab].skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#f0eeea" }}>
                  {skill.name}
                </span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "#95bf47" }}>
                  {skill.level}%
                </span>
              </div>
              <div style={{ height: "3px", background: "rgba(255,255,255,0.06)", position: "relative" }}>
                <div
                  style={{
                    height: "100%",
                    width: `${skill.level}%`,
                    background: "linear-gradient(90deg, #95bf47, #c8e87a)",
                    transition: "width 0.8s ease",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div>
          <p
            className="mb-4"
            style={{ fontFamily: "'DM Mono', monospace", color: "#7a7a85", fontSize: "0.72rem", letterSpacing: "0.1em" }}
          >
            FULL STACK
          </p>
          <div className="flex flex-wrap gap-2">
            {techTags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.72rem",
                  padding: "0.3rem 0.75rem",
                  background: "#141417",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#7a7a85",
                  letterSpacing: "0.06em",
                  cursor: "default",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#95bf47";
                  (e.currentTarget as HTMLElement).style.color = "#95bf47";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.color = "#7a7a85";
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
