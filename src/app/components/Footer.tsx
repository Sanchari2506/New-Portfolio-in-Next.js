import { GitHubIcon, LinkedInIcon } from "./icons/SocialIcons";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "2rem 0",
        background: "#0d0d0f",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span
          style={{ fontFamily: "'DM Mono', monospace", color: "#3a3a42", fontSize: "0.75rem", letterSpacing: "0.06em" }}
        >
          {"// sanchari.shopify — shopify developer · Kolkata, India · 2020"}
        </span>

        <div className="flex items-center gap-5">
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
    </footer>
  );
}
