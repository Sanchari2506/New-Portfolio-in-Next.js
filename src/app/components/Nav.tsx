import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
    setActive(id);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(13,13,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span
          className="cursor-pointer select-none"
          style={{ fontFamily: "'DM Mono', monospace", color: "#95bf47", fontSize: "0.85rem", letterSpacing: "0.08em" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {"// sanchari.shopify"}
        </span>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="transition-colors duration-200 cursor-pointer"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.78rem",
                  letterSpacing: "0.06em",
                  color: active === l ? "#95bf47" : "#7a7a85",
                  background: "none",
                  border: "none",
                }}
                onMouseEnter={(e) => { if (active !== l) (e.target as HTMLElement).style.color = "#f0eeea"; }}
                onMouseLeave={(e) => { if (active !== l) (e.target as HTMLElement).style.color = "#7a7a85"; }}
              >
                {l.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1"
          style={{ color: "#f0eeea", background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#141417", borderTop: "1px solid rgba(255,255,255,0.06)" }} className="md:hidden px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", letterSpacing: "0.06em", color: "#f0eeea", background: "none", border: "none", textAlign: "left", cursor: "pointer" }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
