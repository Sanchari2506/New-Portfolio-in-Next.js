import { Award } from "lucide-react";

const achievements = [
  {
    title: "Lead Client Communicator Award",
    company: "Techwishes",
    year: "2023",
  },
  {
    title: "Best Employee of the Year",
    company: "Techwishes",
    year: "2024",
  },
];

export function Achievements() {
  return (
    <section id="achievements" style={{ padding: "7rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p
            className="mb-3"
            style={{ fontFamily: "'DM Mono', monospace", color: "#95bf47", fontSize: "0.75rem", letterSpacing: "0.14em" }}
          >
            {"07 / ACHIEVEMENTS"}
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
            Recognition Along the Way
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "#7a7a85", lineHeight: 1.7 }}>
            Awards recognizing consistent delivery, communication, and impact.
          </p>
        </div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievements.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#141417",
                border: "1px solid rgba(255,255,255,0.06)",
                borderLeft: "2px solid #95bf47",
                borderRadius: "0.25rem",
                padding: "1.75rem",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  aria-hidden="true"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(149,191,71,0.1)",
                    border: "1px solid rgba(149,191,71,0.25)",
                    borderRadius: "0.5rem",
                    flexShrink: 0,
                  }}
                >
                  <Award size={20} style={{ color: "#95bf47" }} focusable="false" />
                </div>
                <div>
                  <h3
                    className="mb-1.5"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#f0eeea",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "#95bf47", letterSpacing: "0.04em" }}>
                    @ {item.company}
                  </p>
                  <p className="mt-1" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "#7a7a85" }}>
                    {item.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
