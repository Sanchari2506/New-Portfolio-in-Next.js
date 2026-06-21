import { useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    tag: "SHOPIFY THEME REVAMP",
    title: "Salty Accessories",
    description:
    "Complete Shopify OS 2.0 theme revamp for a premium fashion accessories brand. Developed custom sections, collection filtering, predictive search, cart drawer enhancements, mobile-first UI improvements, and performance optimizations to create a faster and more engaging shopping experience.",
    image: "https://cdn.shopify.com/s/files/1/0719/1937/0434/files/salty-hero.png?v=1782058774",
    tech: ["Liquid", "CSS", "Javascript", "Judgeme", "Klaviyo"],
    metrics: ["+38% conversion", "2.1s load time", "4.9★ client"],
    color: "#c383fb",
    liveUrl: "https://salty.co.in/"
  },
  {
    id: 2,
    tag: "SHOPIFY APP",
    title: "Glow Videos - Shoppable Video App",
    description:
      "Built a Shopify app that enables merchants to showcase shoppable videos across product pages, collections, and homepages. Developed the merchant dashboard using Polaris and React, integrated Shopify APIs, video management features, analytics tracking, and seamless product tagging for higher engagement and conversions.",
    image: "https://cdn.shopify.com/s/files/1/0719/1937/0434/files/glow-videos.png?v=1782059947",
    tech: ["React", "Polaris", "GraphQL", "Shopify Functions", "Prisma"],
    metrics: ["120+ merchants", "$400K GMV/mo", "4.8★ app store"],
    color: "#5e9eff",
    liveUrl: "https://apps.shopify.com/glow-videos"
  },
  {
    id: 3,
    tag: "SHOPIFY APP",
    title: "Boost My Cart - Shopify App",
    description:
      "Developed a Shopify cart optimization app focused on increasing AOV through cart upsells, free gift campaigns, shipping protection, cart goals, and promotional offers. Built embedded admin experiences with Polaris and integrated Shopify APIs for real-time cart interactions.",
    image: "https://cdn.shopify.com/s/files/1/0719/1937/0434/files/boost-my-cart.png?v=1782059804",
    tech: ["React", "Polaris", "GraphQL", "Shopify Functions", "Prisma"],
    metrics: ["120+ merchants", "$400K GMV/mo", "4.8★ app store"],
    color: "#5e9eff",
    liveUrl: "https://apps.shopify.com/glow-videos"
  },
  {
    id: 4,
    tag: "CHECKOUT EXTENSION",
    title: "Custom Fields at Checkout",
    description:
      "Built Shopify Checkout UI Extensions for Shopify Plus merchants, enabling custom checkout fields, order personalization, delivery instructions, and additional customer inputs. Integrated data capture directly into checkout while maintaining a seamless user experience.",
    image: "https://cdn.shopify.com/s/files/1/0719/1937/0434/files/flooretcommercial.png?v=1782061029",
    tech: ["Checkout Extensions", "React", "Shopify Functions", "Klaviyo API"],
    metrics: ["+22% AOV", "300ms render", "Zero-friction UX"],
    color: "#b47fe0",
    liveUrl: "https://flooretcommercial.com/"
  },
  {
    id: 5,
    tag: "SHOPIFY THEME REVAMP",
    title: "Jungle Merigold",
    description:
      "Enhanced and customized the Shopify storefront for a luxury fashion and lifestyle brand. Developed custom landing pages, collection experiences, advanced product merchandising features, responsive UI improvements, and optimized storefront performance across devices.",
    image: "https://cdn.shopify.com/s/files/1/0719/1937/0434/files/jungle-merigold.png?v=1782059805",
    tech: ["Liquid", "Vanilla JS", "SCSS", "Shopify Markets"],
    metrics: ["100 Lighthouse", "+29% sessions", "4 locales"],
    color: "#c383fb",
    liveUrl: "https://junglemarigold.com/"
  },
  {
    id: 6,
    tag: "SHOPIFY APP",
    title: "Shopify Public Apps",
    description:
      "Designed and developed multiple Shopify public apps serving merchants across different use cases, including video commerce, cart optimization, checkout customization, and customer engagement. Built scalable architectures using Shopify APIs, Polaris, React, Node.js, and GraphQL.",
    image: "https://cdn.shopify.com/s/files/1/0719/1937/0434/files/other-apps.png?v=1782059804",
    tech: ["Node.js", "Redis", "PostgreSQL", "Shopify Webhooks", "NetSuite"],
    metrics: ["10K+ orders/day", "99.99% uptime", "< 500ms sync"],
    color: "#5e9eff",
    liveUrl: "#",
  },
  {
    id: 7,
    tag: "INTEGRATION",
    title: "Many third-party app integrations",
    description:
      "Integrated a wide range of Shopify applications and external platforms including Klaviyo, Judge.me, ReCharge, Yotpo, Gorgias, Loop Returns, Shiprocket, Razorpay, and Google services. Implemented custom workflows, API integrations, event tracking, and automation solutions tailored to merchant requirements.",
    image: "https://cdn.shopify.com/s/files/1/0719/1937/0434/files/flooretcommercial.png?v=1782061029",
    tech: ["Checkout Extensions", "React", "Shopify Functions", "Klaviyo API"],
    metrics: ["+22% AOV", "300ms render", "Zero-friction UX"],
    color: "#95bf47",
    liveUrl: "https://flooretcommercial.com/",
  },
  {
    id: 8,
    tag: "SHOPIFY THEME REVAMP",
    title: "Neemans",
    description:
      "Contributed to storefront enhancements and custom Shopify development for one of India's leading footwear brands. Built custom sections, collection page improvements, performance optimizations, mobile responsiveness enhancements, and conversion-focused user experiences.",
    image: "https://cdn.shopify.com/s/files/1/0719/1937/0434/files/neemans.png?v=1782062116",
    tech: ["Liquid", "HTML5", "CSS3", "Javascript", "Judgeme", "Klaviyo"],
    metrics: ["+38% conversion", "2.1s load time", "4.9★ client"],
    color: "#c383fb",
    liveUrl: "https://neemans.com/",
  },
  {
    id: 9,
    tag: "SHOPIFY THEME REVAMP",
    title: "Teabox",
    description:
      "Developed custom Shopify features and storefront enhancements for a global tea brand. Worked on product merchandising, subscription-related experiences, custom landing pages, collection page improvements, and performance optimization to improve customer engagement and conversions.",
    image: "https://cdn.shopify.com/s/files/1/0719/1937/0434/files/teabox.png?v=1782062376",
    tech: ["Liquid", "HTML5", "CSS3", "Javascript", "Judgeme", "Klaviyo"],
    metrics: ["+38% conversion", "2.1s load time", "4.9★ client"],
    color: "#c383fb",
    liveUrl: "https://in.teabox.com/",
  }
];

const filters = ["All", "SHOPIFY THEME REVAMP", "SHOPIFY APP", "CHECKOUT EXTENSION", "INTEGRATION"];

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
            {["All", "Theme", "App", "Extension", "Integration"].map((label, i) => {
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
