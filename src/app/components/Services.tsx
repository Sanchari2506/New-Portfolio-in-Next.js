import { useState } from "react";
import {
  Store,
  Palette,
  LayoutGrid,
  CreditCard,
  Plug,
  Gauge,
  TrendingUp,
  Globe,
  Users,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Store,
    title: "Custom Shopify Store Development",
    description:
      "Build a Shopify store from scratch with a custom design, scalable architecture, and conversion-focused experience.",
    tags: ["Shopify Plus", "Online Store 2.0", "Performance optimized", "SEO-ready"],
    color: "#95bf47",
  },
  {
    id: 2,
    icon: Palette,
    title: "Shopify Theme Customization",
    description:
      "Need new sections, landing pages, product templates, or advanced Liquid functionality? I customize Shopify themes without bloating your codebase.",
    tags: ["Liquid", "Custom Sections", "Landing Pages", "Clean Code"],
    color: "#c383fb",
  },
  {
    id: 3,
    icon: LayoutGrid,
    title: "Shopify App Development",
    description:
      "Develop public or private Shopify apps with embedded admin experiences and scalable backends.",
    tags: ["React", "Polaris", "GraphQL", "Node.js", "Prisma", "Shopify Functions"],
    color: "#5e9eff",
  },
  {
    id: 4,
    icon: CreditCard,
    title: "Checkout & Customer Account Extensions",
    description:
      "For Shopify Plus merchants — extend checkout and post-purchase flows with custom logic and fields.",
    tags: ["Checkout UI Extensions", "Customer Account Extensions", "Shopify Functions", "Validation", "Custom Fields", "Discounts"],
    color: "#b47fe0",
  },
  {
    id: 5,
    icon: Plug,
    title: "Third-party Integrations",
    description:
      "Connect Shopify with the tools that run your business — marketing, support, fulfillment, and back office.",
    tags: ["Klaviyo", "Judge.me", "Yotpo", "Recharge", "Gorgias", "ERP", "CRM", "Shipping", "Custom APIs"],
    color: "#95bf47",
  },
  {
    id: 6,
    icon: Gauge,
    title: "Store Speed Optimization",
    description:
      "Faster stores convert better. I diagnose and fix what's slowing your storefront down.",
    tags: ["Lighthouse Score", "Core Web Vitals", "CLS", "LCP", "JS Performance", "Image Optimization"],
    color: "#5e9eff",
  },
  {
    id: 7,
    icon: TrendingUp,
    title: "CRO & UX Improvements",
    description:
      "Turn more visitors into customers by improving the experience across every key page.",
    tags: ["Product Pages", "Cart", "Collections", "Navigation", "Mobile UX"],
    color: "#c383fb",
  },
  {
    id: 8,
    icon: Globe,
    title: "Shopify B2B & Markets",
    description:
      "Sell wholesale and go global with company accounts, custom catalogs, and localized storefronts.",
    tags: ["Shopify Markets", "Multi-currency", "Localization", "B2B Catalogs", "Company Accounts"],
    color: "#b47fe0",
  },
];

const whoIWorkWith = ["DTC Brands", "Shopify Plus Stores", "Startups", "Growing Brands", "Agencies (white-label development)"];

const typicalEngagements = [
  "Launch a new Shopify store",
  "Redesign an existing Shopify store",
  "Build a custom Shopify app",
  "Improve conversion rate",
  "Integrate ERP or CRM systems",
  "Add custom checkout functionality",
  "Ongoing monthly Shopify development",
  "Emergency bug fixes",
];

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" style={{ padding: "7rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p
            className="mb-3"
            style={{ fontFamily: "'DM Mono', monospace", color: "#95bf47", fontSize: "0.75rem", letterSpacing: "0.14em" }}
          >
            {"02 / SERVICES"}
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
            How I Help Shopify Brands
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "#5e9eff", lineHeight: 1.7 }}>
            From first launch to scaling a Shopify Plus store — here's exactly how I can help.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            const isHovered = hovered === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: "#141417",
                  border: `1px solid ${isHovered ? service.color : "rgba(255,255,255,0.06)"}`,
                  padding: "1.5rem",
                  transition: "border-color 0.25s, transform 0.25s",
                  transform: isHovered ? "translateY(-4px)" : "none",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${service.color}1a`,
                    border: `1px solid ${service.color}33`,
                    marginBottom: "1.1rem",
                  }}
                >
                  <Icon size={18} style={{ color: service.color }} focusable="false" />
                </div>

                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#f0eeea",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="mb-4"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.83rem", color: "#7a7a85", lineHeight: 1.65, flex: 1 }}
                >
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {service.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.62rem",
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

                <button
                  onClick={scrollToContact}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.06em",
                    color: service.color,
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    alignSelf: "flex-start",
                  }}
                >
                  LET&apos;S DISCUSS <ArrowRight size={12} aria-hidden="true" focusable="false" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Who I work with + Typical engagements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p
              className="mb-4 flex items-center gap-2"
              style={{ fontFamily: "'DM Mono', monospace", color: "#7a7a85", fontSize: "0.72rem", letterSpacing: "0.1em" }}
            >
              <Users size={14} style={{ color: "#95bf47" }} aria-hidden="true" focusable="false" />
              WHO I WORK WITH
            </p>
            <ul className="flex flex-col gap-3">
              {whoIWorkWith.map((w) => (
                <li key={w} className="flex items-start gap-3">
                  <CheckCircle2 size={15} style={{ color: "#95bf47", flexShrink: 0, marginTop: "0.15rem" }} aria-hidden="true" focusable="false" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#f0eeea", lineHeight: 1.6 }}>
                    {w}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="mb-4 flex items-center gap-2"
              style={{ fontFamily: "'DM Mono', monospace", color: "#7a7a85", fontSize: "0.72rem", letterSpacing: "0.1em" }}
            >
              <Briefcase size={14} style={{ color: "#95bf47" }} aria-hidden="true" focusable="false" />
              TYPICAL ENGAGEMENTS
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {typicalEngagements.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <CheckCircle2 size={15} style={{ color: "#95bf47", flexShrink: 0, marginTop: "0.15rem" }} aria-hidden="true" focusable="false" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#f0eeea", lineHeight: 1.6 }}>
                    {e}
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
