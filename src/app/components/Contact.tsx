import { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

type FormData = { name: string; email: string; budget: string; message: string };

export function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1400);
  };

  return (
    <section id="contact" style={{ padding: "7rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p
            className="mb-3"
            style={{ fontFamily: "'DM Mono', monospace", color: "#95bf47", fontSize: "0.75rem", letterSpacing: "0.14em" }}
          >
            {"05 / CONTACT"}
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
              I'm currently taking on new Shopify projects — themes, custom apps, headless builds, and integrations.
              If you have a project in mind, I'd love to hear about it.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {[
                { icon: Mail, label: "EMAIL", value: "sanchari.shopify@gmail.com" },
                { icon: MapPin, label: "LOCATION", value: "Kolkata, India — remote worldwide" }
              ].map(({ icon: Icon, label, value }) => (
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
                    <Icon size={15} style={{ color: "#95bf47" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "#7a7a85", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>
                      {label}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#f0eeea" }}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Services */}
            <div style={{ background: "#141417", border: "1px solid rgba(255,255,255,0.06)", padding: "1.5rem" }}>
              <p
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", color: "#7a7a85", marginBottom: "1rem" }}
              >
                SERVICES OFFERED
              </p>
              {[
                "Custom Shopify Theme Development",
                "Shopify App Development",
                "Headless Commerce (Hydrogen)",
                "Shopify Migrations & Audits",
                "Third-party Integrations",
                "Checkout Extension Development",
              ].map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-2 py-2"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                >
                  <div style={{ width: "5px", height: "5px", background: "#95bf47", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#f0eeea" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
