import { Mail, MapPin, Phone, Download, ExternalLink, FolderGit2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons/SocialIcons";

const RESUME_URL = "/Sanchari-Rakshit-Resume.pdf";

export function Contact() {
  const contactItems = [
    { icon: Mail, label: "EMAIL", value: "sanchari.shopify@gmail.com", href: "mailto:sanchari.shopify@gmail.com" },
    { icon: Phone, label: "PHONE", value: "+91 62903 98828", href: "tel:+916290398828" },
    { icon: MapPin, label: "LOCATION", value: "Kolkata, India — remote worldwide" },
  ];

  const evaluateLinks = [
    { icon: Download, label: "Download Resume (PDF)", href: RESUME_URL, download: "Sanchari-Rakshit-Resume.pdf" },
    { icon: LinkedInIcon, label: "View LinkedIn", href: "https://www.linkedin.com/in/sanchari-rakshit-524a82192" },
    { icon: GitHubIcon, label: "GitHub", href: "https://github.com/sanchari2506" },
    { icon: FolderGit2, label: "Portfolio Projects", href: "#projects" },
  ];

  return (
    <section id="contact" style={{ padding: "7rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p
            className="mb-3"
            style={{ fontFamily: "'DM Mono', monospace", color: "#95bf47", fontSize: "0.75rem", letterSpacing: "0.14em" }}
          >
            {"11 / CONTACT"}
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
            Let's Build Together
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Left */}
          <div>
            <p
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.75, color: "#7a7a85", marginBottom: "2rem" }}
            >
              I'm currently taking on new Shopify projects — themes, custom apps, B2B, agentic commerce and integrations.
              If you have a project in mind, I'd love to hear about it.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "#141417",
                      border: "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={15} style={{ color: "#95bf47" }} aria-hidden="true" focusable="false" />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "#7a7a85", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>
                      {label}
                    </p>
                    {href ? (
                      <a href={href} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#f0eeea", textDecoration: "none" }}>
                        {value}
                      </a>
                    ) : (
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#f0eeea" }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — evaluate my experience */}
          <div>
            <div style={{ background: "#141417", border: "1px solid rgba(255,255,255,0.06)", padding: "1.75rem" }}>
              <p
                className="mb-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#f0eeea" }}
              >
                Prefer reviewing my experience first?
              </p>
              <p
                className="mb-5"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#7a7a85", lineHeight: 1.6 }}
              >
                Here are a few ways to evaluate my work before reaching out.
              </p>

              <div className="flex flex-col gap-3">
                {evaluateLinks.map(({ icon: Icon, label, href, download }) => (
                  <a
                    key={label}
                    href={href}
                    download={download}
                    target={href.startsWith("#") ? undefined : "_blank"}
                    rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
                    className="flex items-center justify-between"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.78rem",
                      letterSpacing: "0.04em",
                      color: "#f0eeea",
                      textDecoration: "none",
                      padding: "0.75rem 1rem",
                      background: "#0d0d0f",
                      border: "1px solid rgba(255,255,255,0.06)",
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#95bf47";
                      e.currentTarget.style.color = "#95bf47";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.color = "#f0eeea";
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={15} aria-hidden="true" focusable="false" />
                      {label}
                    </span>
                    <ExternalLink size={12} aria-hidden="true" focusable="false" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
