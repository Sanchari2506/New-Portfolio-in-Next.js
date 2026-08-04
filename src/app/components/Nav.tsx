import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";

const sectionLinks = ["About", "Services", "Skills", "Projects", "Case Studies", "Experience", "Process", "Contact"];
const RESUME_URL = "/Sanchari-Rakshit-Resume.pdf";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isBlog = location.pathname.startsWith("/blog");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    if (isBlog) setActive("Blog");
    else setActive("");
  }, [location.pathname, isBlog]);

  const scrollToSection = (id: string) => {
    setOpen(false);
    setActive(id);
    const slug = id.toLowerCase().replace(/\s+/g, "-");

    if (location.pathname !== "/") {
      navigate(`/#${slug}`);
      return;
    }

    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth" });
  };

  const navButtonStyle = (label: string) => ({
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.78rem",
    letterSpacing: "0.06em",
    color: active === label ? "#95bf47" : "#7a7a85",
    background: "none",
    border: "none",
    cursor: "pointer" as const,
    textDecoration: "none" as const,
  });

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || isBlog ? "rgba(13,13,15,0.92)" : "transparent",
        backdropFilter: scrolled || isBlog ? "blur(12px)" : "none",
        borderBottom: scrolled || isBlog ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="select-none"
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "#95bf47",
            fontSize: "0.85rem",
            letterSpacing: "0.08em",
            textDecoration: "none",
          }}
          aria-label="Sanchari Rakshit home"
          onClick={() => {
            setOpen(false);
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          {"// sanchari.shopify"}
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {sectionLinks.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollToSection(l)}
                className="transition-colors duration-200 cursor-pointer"
                style={navButtonStyle(l)}
                aria-current={active === l ? "location" : undefined}
                onMouseEnter={(e) => {
                  if (active !== l) (e.target as HTMLElement).style.color = "#f0eeea";
                }}
                onMouseLeave={(e) => {
                  if (active !== l) (e.target as HTMLElement).style.color = "#7a7a85";
                }}
              >
                {l.toUpperCase()}
              </button>
            </li>
          ))}
          <li>
            <Link
              to="/blog"
              className="transition-colors duration-200"
              style={navButtonStyle("Blog")}
              aria-current={active === "Blog" ? "page" : undefined}
              onMouseEnter={(e) => {
                if (active !== "Blog") e.currentTarget.style.color = "#f0eeea";
              }}
              onMouseLeave={(e) => {
                if (active !== "Blog") e.currentTarget.style.color = "#7a7a85";
              }}
            >
              BLOGS
            </Link>
          </li>
          <li>
            <a
              href={RESUME_URL}
              download="Sanchari-Rakshit-Resume.pdf"
              className="transition-colors duration-200"
              style={navButtonStyle("Resume")}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f0eeea")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7a7a85")}
            >
              RESUME
            </a>
          </li>
        </ul>

        <button
          className="md:hidden p-1"
          style={{ color: "#f0eeea", background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={20} aria-hidden="true" focusable="false" /> : <Menu size={20} aria-hidden="true" focusable="false" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          style={{ background: "#141417", borderTop: "1px solid rgba(255,255,255,0.06)" }}
          className="md:hidden px-6 py-4 flex flex-col gap-4"
        >
          {sectionLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollToSection(l)}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.85rem",
                letterSpacing: "0.06em",
                color: "#f0eeea",
                background: "none",
                border: "none",
              textAlign: "left",
                cursor: "pointer",
              }}
              aria-current={active === l ? "location" : undefined}
            >
              {l.toUpperCase()}
            </button>
          ))}
          <Link
            to="/blog"
            onClick={() => setOpen(false)}
            aria-current={active === "Blog" ? "page" : undefined}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.85rem",
              letterSpacing: "0.06em",
              color: active === "Blog" ? "#95bf47" : "#f0eeea",
              textDecoration: "none",
            }}
          >
            BLOG
          </Link>
          <a
            href={RESUME_URL}
            download="Sanchari-Rakshit-Resume.pdf"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.85rem",
              letterSpacing: "0.06em",
              color: "#f0eeea",
              textDecoration: "none",
            }}
          >
            RESUME
          </a>
        </div>
      )}
    </nav>
  );
}
