import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons/SocialIcons";

const roles = ["Shopify Developer", "Liquid Architect", "Theme Specialist", "App Developer"];

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIdx];
    if (typing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 65);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [charIdx, typing, roleIdx]);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(149,191,71,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p
              className="mb-4"
              style={{ fontFamily: "'DM Mono', monospace", color: "#95bf47", fontSize: "0.8rem", letterSpacing: "0.12em" }}
            >
              {"AVAILABLE FOR NEW PROJECTS"}
            </p>

            <h1
              className="mb-4"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(2.8rem, 6vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: "#f0eeea",
                letterSpacing: "-0.02em",
              }}
            >
              Sanchari Rakshit
            </h1>

            <div
              className="mb-6 flex items-center gap-2"
              style={{ minHeight: "2rem" }}
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: 600,
                  color: "#95bf47",
                }}
              >
                {displayed}
              </span>
              <span
                className="animate-pulse"
                style={{ width: "2px", height: "1.4em", background: "#95bf47", display: "inline-block" }}
              />
            </div>

            <p
              className="mb-10 max-w-md"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "#7a7a85",
              }}
            >
              5+ years crafting high-converting Shopify stores and custom apps.
              I work with DTC brands to build scalable e-commerce experiences
              — from bespoke Liquid themes to full-stack Shopify apps.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  background: "#95bf47",
                  color: "#0d0d0f",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  cursor: "pointer",
                  fontWeight: 500,
                  borderRadius: "6px",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
              >
                VIEW WORK
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  background: "transparent",
                  color: "#f0eeea",
                  border: "1px solid rgba(255,255,255,0.15)",
                  padding: "0.75rem 1.5rem",
                  cursor: "pointer",
                  borderRadius: "6px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.borderColor = "#95bf47")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)")}
              >
                GET IN TOUCH
              </button>
            </div>

            <div className="flex items-center gap-5 mt-10">
              {[
                { icon: GitHubIcon, label: "GitHub", link: "https://github.com/sanchari2506" },
                { icon: LinkedInIcon, label: "LinkedIn", link: "https://www.linkedin.com/in/sanchari-rakshit-524a82192" }
              ].map(({ icon: Icon, label, link }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ color: "#3a3a42", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#95bf47")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#3a3a42")}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — profile + stats */}
          <div className="flex flex-col gap-6">
            {/* Profile picture */}
            <div className="flex justify-center md:justify-start">
              <div style={{ position: "relative", display: "inline-block" }}>
                {/* Green accent border */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-4px",
                    background: "linear-gradient(135deg, #95bf47 0%, transparent 60%)",
                    borderRadius: "12px",
                    zIndex: 0,
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    width: "160px",
                    height: "160px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    background: "#1c1c20",
                    border: "2px solid #0d0d0f",
                  }}
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/0789/8523/2583/files/profile-pic.png?v=1781689343"
                    alt="Sanchari Rakshit — Shopify Developer"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  />
                </div>
                {/* Available badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    right: "-10px",
                    background: "#0d0d0f",
                    border: "1px solid rgba(149,191,71,0.3)",
                    borderRadius: "20px",
                    padding: "0.3rem 0.7rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    zIndex: 2,
                  }}
                >
                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#95bf47", flexShrink: 0, boxShadow: "0 0 6px #95bf47" }} />
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "#95bf47", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
                    OPEN TO WORK
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "5+", label: "Years Experience", sub: "Shopify ecosystem" },
                { number: "120+", label: "Projects Shipped", sub: "Stores & custom apps" },
                { number: "$20M+", label: "Revenue Influenced", sub: "All types of Shopify projects" },
                { number: "4.9★", label: "Client Rating", sub: "For Shopify Development & Support" },
              ].map(({ number, label, sub }) => (
                <div
                  key={label}
                  style={{
                    background: "#141417",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "1.5rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "3px",
                      height: "100%",
                      background: "#95bf47",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "#f0eeea",
                      lineHeight: 1,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {number}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#f0eeea", fontWeight: 500 }}>
                    {label}
                  </p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#7a7a85", marginTop: "0.25rem" }}>
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <ArrowDown size={16} style={{ color: "#7a7a85" }} />
        </div>
      </div>
    </section>
  );
}
