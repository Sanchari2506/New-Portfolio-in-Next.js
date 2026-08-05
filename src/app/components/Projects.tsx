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
    id: 4,
    tag: "CHECKOUT EXTENSION",
    title: "Flooret Commercial",
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
    id: 10,
    tag: "SHOPIFY THEME REVAMP",
    title: "Stuffieland",
    description:
      "Developed custom Shopify features and storefront enhancements for a global tea brand. Worked on product merchandising, subscription-related experiences, custom landing pages, collection page improvements, and performance optimization to improve customer engagement and conversions.",
    image: "https://cdn.shopify.com/s/files/1/0719/1937/0434/files/Desktop_-_1.png?v=1785081919",
    tech: ["Liquid", "HTML5", "CSS3", "Javascript", "Judgeme", "Klaviyo"],
    metrics: ["+75% conversion", "2.1s load time", "4.9★ client"],
    color: "#c383fb",
    liveUrl: "https://stuffieland.in/",
  },
  {
    id: 12,
    tag: "SHOPIFY THEME REVAMP",
    title: "Flooret Commercial",
    description:
      "Integrated a wide range of Shopify applications and external platforms including Klaviyo, Judge.me, ReCharge, Yotpo, Gorgias, Loop Returns, Shiprocket, Razorpay, and Google services. Implemented custom workflows, API integrations, event tracking, and automation solutions tailored to merchant requirements.",
    image: "https://cdn.shopify.com/s/files/1/0719/1937/0434/files/flooretcommercial.png?v=1782061029",
    tech: ["Checkout Extensions", "React", "Shopify Functions", "Klaviyo API"],
    metrics: ["+60% conversion", "300ms render", "Zero-friction UX"],
    color: "#c383fb",
    liveUrl: "https://flooretcommercial.com/",
  }
];

const filters = ["All", "SHOPIFY THEME REVAMP", "SHOPIFY APP", "CHECKOUT EXTENSION", "INTEGRATION"];

const brandCategories = [
  "Apparel & Fashion", "Footwear", "Jewellery", "Kids Toys",
  "Baby & Maternity", "Furniture", "Home Decor", "Home Fragrance & Candles", "Makeup & Cosmetics",
  "Skin Care", "Perfume & Fragrance", "Hair Care", "Health & Wellness", "Supplements & Nutrition",
  "Food & Beverage", "Pet Supplies", "Sports & Fitness", "Outdoor & Camping", "Electronics & Gadgets",
  "Watches", "Bags & Accessories", "Eyewear", "Luggage & Travel", "Art & Home Goods",
  "Books & Stationery", "Automotive Accessories",
];

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
              {"04 / PROJECTS"}
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
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by type">
            {["All", "Theme", "App", "Extension", "Integration"].map((label, i) => {
              const val = filters[i];
              return (
                <button
                  key={label}
                  onClick={() => setFilter(val)}
                  aria-pressed={filter === val}
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
            <article
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
                  alt={`${project.title} Shopify project preview`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    transform: hovered === project.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div
                  aria-hidden="true"
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
                  {project.liveUrl === "#" ? (
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.72rem",
                        letterSpacing: "0.06em",
                        color: "#7a7a85",
                      }}
                    >
                      PRIVATE APP
                    </span>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} live site`}
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
                      <ExternalLink size={12} aria-hidden="true" focusable="false" /> LIVE SITE
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Brand categories */}
        <div className="mt-14">
          <p
            className="mb-4"
            style={{ fontFamily: "'DM Mono', monospace", color: "#95bf47", fontSize: "0.72rem", letterSpacing: "0.1em" }}
          >
            SHOPIFY BRANDS I'VE WORKED WITH ACROSS
          </p>
          <div className="flex flex-wrap gap-2">
            {brandCategories.map((cat) => (
              <span
                key={cat}
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
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
