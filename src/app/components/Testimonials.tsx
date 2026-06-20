import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Ketterman",
    role: "Founder, Lumière Beauty",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&auto=format",
    text: "Alex rebuilt our entire Shopify theme from scratch. The result was stunning — conversion rate jumped 38% in the first month and page speed went from 54 to 96 on mobile. He proactively flagged issues we hadn't even thought of.",
    stars: 5,
  },
  {
    name: "Marcus Chen",
    role: "CEO, Terrain Outdoor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format",
    text: "We needed a headless Hydrogen build that could handle massive catalog complexity. Alex delivered in 8 weeks, way under budget. The 3D product viewer was his own idea — customers love it. Will hire again without hesitation.",
    stars: 5,
  },
  {
    name: "Priya Nair",
    role: "Head of Ecommerce, Forge Menswear",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&auto=format",
    text: "We've worked with three Shopify developers before Alex. None of them came close to his level of Liquid expertise. The size finder quiz alone added 18% to our basket rate. He understands commerce, not just code.",
    stars: 5,
  },
  {
    name: "Tom Holloway",
    role: "VP Engineering, Stride Digital",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
    text: "Alex was a standout engineer on our team. He reduced average client page load by 42% and built internal tooling that everyone now depends on. If you're building anything serious on Shopify, he's the person you want.",
    stars: 5,
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section style={{ padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.06)", background: "#141417" }}>
      <div className="max-w-4xl mx-auto px-6">
        <p
          className="text-center mb-10"
          style={{ fontFamily: "'DM Mono', monospace", color: "#95bf47", fontSize: "0.75rem", letterSpacing: "0.14em" }}
        >
          {"// CLIENT TESTIMONIALS"}
        </p>

        <div
          key={idx}
          style={{
            background: "#0d0d0f",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "2.5rem",
            position: "relative",
          }}
        >
          {/* Stars */}
          <div className="flex gap-1 mb-5">
            {Array.from({ length: t.stars }).map((_, i) => (
              <Star key={i} size={14} style={{ color: "#95bf47", fill: "#95bf47" }} />
            ))}
          </div>

          <blockquote
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "#f0eeea",
              marginBottom: "2rem",
            }}
          >
            "{t.text}"
          </blockquote>

          <div className="flex items-center gap-3">
            <img
              src={t.avatar}
              alt={t.name}
              style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover" }}
            />
            <div>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#f0eeea", fontSize: "0.9rem" }}>
                {t.name}
              </p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "#7a7a85" }}>
                {t.role}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                style={{
                  width: i === idx ? "24px" : "8px",
                  height: "3px",
                  background: i === idx ? "#95bf47" : "rgba(255,255,255,0.15)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  padding: 0,
                }}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
              style={{
                width: "36px",
                height: "36px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#7a7a85",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#95bf47";
                (e.currentTarget as HTMLElement).style.color = "#95bf47";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.color = "#7a7a85";
              }}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
              style={{
                width: "36px",
                height: "36px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#7a7a85",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#95bf47";
                (e.currentTarget as HTMLElement).style.color = "#95bf47";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.color = "#7a7a85";
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
