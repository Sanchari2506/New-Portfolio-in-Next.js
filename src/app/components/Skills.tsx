import { useState } from "react";

const categories = [
  {
    label: "Shopify Core",
    skills: [
      { name: "Liquid Templating", desc: "Building custom, high-performance Shopify themes from scratch." },
      { name: "Shopify CLI & Theme Kit", desc: "Streamlining theme development with local dev servers and hot reload." },
      { name: "Online Store 2.0", desc: "Building modular, section-based templates with JSON layouts." },
      { name: "Metafields & Metaobjects", desc: "Modeling custom structured data across products, pages, and themes." },
      { name: "Shopify Checkout & Other Extensions", desc: "Extending checkout and post-purchase flows with UI extensions." },
      { name: "Shopify Functions", desc: "Writing custom discount, shipping, and payment logic at checkout." },
      { name: "Shopify B2B", desc: "Configuring wholesale storefronts with company accounts and pricing." },
      { name: "Shopify Markets", desc: "Setting up multi-currency, multi-region storefronts for global sales." },
      { name: "Shopify Flow & Automations", desc: "Automating store operations with triggers, conditions, and actions." },
      { name: "Shopify Admin", desc: "Configuring stores, apps, and settings across the merchant admin." },
    ],
  },
  {
    label: "App Development",
    skills: [
      { name: "Shopify App Bridge", desc: "Embedding apps seamlessly into the Shopify admin experience." },
      { name: "Polaris Design System", desc: "Crafting consistent, native-feeling admin UIs with Polaris components." },
      { name: "GraphQL Admin API", desc: "Querying and mutating store data through Shopify's Admin API." },
      { name: "REST Storefront API", desc: "Powering custom storefront experiences with REST endpoints." },
      { name: "Webhooks & Event Handling", desc: "Reacting to store events in real time with reliable webhook handlers." },
      { name: "OAuth & Session Tokens", desc: "Securing embedded apps with OAuth flows and session token auth." },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React / Next.js", desc: "Building fast, SEO-friendly web apps with modern React patterns." },
      { name: "TypeScript", desc: "Writing type-safe, maintainable code across large codebases." },
      { name: "Tailwind CSS", desc: "Rapidly building responsive, utility-first UI layouts." },
      { name: "SCSS / CSS Architecture", desc: "Structuring scalable, maintainable stylesheets for large projects." },
      { name: "Performance Optimization", desc: "Improving load times, Core Web Vitals, and rendering efficiency." },
      { name: "Accessibility (WCAG)", desc: "Designing inclusive interfaces that meet WCAG accessibility standards." },
    ],
  },
  {
    label: "Backend & Tools",
    skills: [
      { name: "Node.js / Express", desc: "Building lightweight APIs and backend services for web apps." },
      { name: "Prisma & PostgreSQL", desc: "Modeling and querying relational data with type-safe ORM tooling." },
      { name: "Redis & Caching", desc: "Speeding up applications with in-memory caching strategies." },
      { name: "Git & CI/CD", desc: "Managing version control and automating build and deploy pipelines." },
      { name: "AWS / Vercel", desc: "Deploying and scaling applications on modern cloud platforms." },
      { name: "AI Automations", desc: "Integrating AI-driven workflows to automate repetitive tasks." },
    ],
  },
];

const techTags = [
  "Shopify", "Liquid", "React", "Node.js", "GraphQL API", "REST API", "TypeScript",
  "Tailwind", "Polaris", "Hydrogen", "Oxygen", "Remix", "Next.js", "Prisma",
  "PostgreSQL", "Vercel"
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
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Skill categories">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              id={`skills-tab-${i}`}
              role="tab"
              aria-selected={activeTab === i}
              aria-controls={`skills-panel-${i}`}
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
        <div
          id={`skills-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`skills-tab-${activeTab}`}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14"
        >
          {categories[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              style={{
                borderLeft: "2px solid #95bf47",
                paddingLeft: "1rem",
              }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#f0eeea", marginBottom: "0.35rem" }}>
                {skill.name}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#7a7a85", lineHeight: 1.5 }}>
                {skill.desc}
              </p>
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
