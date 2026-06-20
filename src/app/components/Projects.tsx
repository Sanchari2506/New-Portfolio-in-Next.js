import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./icons/SocialIcons";

const projects = [
  {
    id: 1,
    tag: "SHOPIFY THEME",
    title: "Lumière Beauty",
    description:
      "Full custom OS2.0 theme for a luxury DTC beauty brand. Built modular sections, advanced filtering with predictive search, cart drawer with upsell logic, and subscription integration via ReCharge.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=500&fit=crop&auto=format",
    tech: ["Liquid", "SCSS", "Alpine.js", "ReCharge", "Klaviyo"],
    metrics: ["+38% conversion", "2.1s load time", "4.9★ client"],
    color: "#95bf47",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    tag: "SHOPIFY APP",
    title: "BundleBuilder Pro",
    description:
      "Custom Shopify app enabling merchants to create dynamic product bundles with conditional pricing. Polaris UI, GraphQL Admin API, Shopify Functions for discount logic, embedded in admin.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&auto=format",
    tech: ["React", "Polaris", "GraphQL", "Shopify Functions", "Prisma"],
    metrics: ["120+ merchants", "$400K GMV/mo", "4.8★ app store"],
    color: "#5e9eff",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    tag: "HEADLESS STOREFRONT",
    title: "Terrain Outdoor",
    description:
      "Hydrogen + Remix headless storefront for an outdoor gear brand with 3,000+ SKUs. Custom faceted filtering, real-time inventory, multi-currency, and a custom 3D product viewer.",
    image: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800&h=500&fit=crop&auto=format",
    tech: ["Hydrogen", "Remix", "TypeScript", "Tailwind", "Three.js"],
    metrics: ["+52% page speed", "3K+ SKUs", "Multi-currency"],
    color: "#e07b39",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 4,
    tag: "CHECKOUT EXTENSION",
    title: "SmartUpsell at Checkout",
    description:
      "Shopify Checkout UI Extension adding AI-driven product recommendations at checkout. Built with Checkout Extensions API, integrated with Klaviyo purchase data for personalization.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&auto=format",
    tech: ["Checkout Extensions", "React", "Shopify Functions", "Klaviyo API"],
    metrics: ["+22% AOV", "300ms render", "Zero-friction UX"],
    color: "#b47fe0",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 5,
    tag: "SHOPIFY THEME",
    title: "Forge Menswear",
    description:
      "Performance-first theme for a mid-market menswear brand. Custom lookbook feature, size finder quiz, Shopify Markets multi-region with auto locale routing, and 100 Lighthouse score.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=500&fit=crop&auto=format",
    tech: ["Liquid", "Vanilla JS", "SCSS", "Shopify Markets"],
    metrics: ["100 Lighthouse", "+29% sessions", "4 locales"],
    color: "#95bf47",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 6,
    tag: "INTEGRATION",
    title: "ERP Sync Middleware",
    description:
      "Middleware service syncing inventory and orders between Shopify and a legacy ERP (NetSuite). Webhook-driven, Redis queue, idempotent write logic, handles 10K+ orders/day with zero data loss.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&auto=format",
    tech: ["Node.js", "Redis", "PostgreSQL", "Shopify Webhooks", "NetSuite"],
    metrics: ["10K+ orders/day", "99.99% uptime", "< 500ms sync"],
    color: "#5e9eff",
    liveUrl: "#",
    codeUrl: "#",
  },
];

const filters = ["All", "SHOPIFY THEME", "SHOPIFY APP", "HEADLESS STOREFRONT", "CHECKOUT EXTENSION", "INTEGRATION"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const visible = filter === "All" ? projects : projects.filter((p) => p.tag === filter);

  return (
    <section id="projects" style={{ padding: "7rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p
              className="mb-3"
              style={{ fontFamily: "'DM Mono', monospace", color: "#95bf47", fontSize: "0.75rem", letterSpacing: "0.14em" }}
            >
              {"03 / PROJECTS"}
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
              Selected Work
            </h2>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2">
            {["All", "Theme", "App", "Headless", "Extension", "Integration"].map((label, i) => {
              const val = filters[i];
              return (
                <button
                  key={label}
                  onClick={() => setFilter(val)}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.06em",
                    padding: "0.3rem 0.7rem",
                    background: filter === val ? "#95bf47" : "transparent",
                    color: filter === val ? "#0d0d0f" : "#7a7a85",
                    border: filter === val ? "1px solid #95bf47" : "1px solid rgba(255,255,255,0.06)",
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  {label.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#141417",
                border: `1px solid ${hovered === project.id ? project.color : "rgba(255,255,255,0.06)"}`,
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.25s, transform 0.25s",
                transform: hovered === project.id ? "translateY(-4px)" : "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", overflow: "hidden", height: "200px", background: "#1c1c20" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    transform: hovered === project.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(13,13,15,0.85) 0%, transparent 60%)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    padding: "0.2rem 0.5rem",
                    background: project.color,
                    color: "#0d0d0f",
                  }}
                >
                  {project.tag}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#f0eeea",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: "#7a7a85",
                    lineHeight: 1.65,
                    marginBottom: "1rem",
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.65rem",
                        letterSpacing: "0.06em",
                        padding: "0.2rem 0.5rem",
                        background: "rgba(149,191,71,0.1)",
                        border: "1px solid rgba(149,191,71,0.2)",
                        color: "#95bf47",
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.65rem",
                        padding: "0.15rem 0.4rem",
                        background: "#1c1c20",
                        color: "#7a7a85",
                        border: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      letterSpacing: "0.06em",
                      color: "#95bf47",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      textDecoration: "none",
                    }}
                  >
                    <ExternalLink size={12} /> LIVE SITE
                  </a>
                  <a
                    href={project.codeUrl}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      letterSpacing: "0.06em",
                      color: "#7a7a85",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      textDecoration: "none",
                    }}
                  >
                    <GitHubIcon size={12} /> SOURCE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
