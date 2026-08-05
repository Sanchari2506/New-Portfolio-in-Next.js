import { PhoneCall, ClipboardList, PenTool, Code2, FlaskConical, Rocket, LifeBuoy, ArrowDown } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: PhoneCall,
    title: "Discovery Call",
    description: "We talk through your goals, current setup, and what success looks like for the project.",
  },
  {
    id: 2,
    icon: ClipboardList,
    title: "Planning & Proposal",
    description: "You get a clear scope, timeline, and pricing — so there's no ambiguity before work begins.",
  },
  {
    id: 3,
    icon: PenTool,
    title: "Design & Prototyping",
    description: "Wireframes and visual direction are locked in early, so the build matches the vision.",
  },
  {
    id: 4,
    icon: Code2,
    title: "Development",
    description: "I build in focused milestones with regular updates, so you always know where things stand.",
  },
  {
    id: 5,
    icon: FlaskConical,
    title: "Testing & QA",
    description: "Thorough QA across devices and browsers catches issues before they ever reach you.",
  },
  {
    id: 6,
    icon: Rocket,
    title: "Launch",
    description: "A smooth, low-risk deployment gets the project live with everything double-checked.",
  },
  {
    id: 7,
    icon: LifeBuoy,
    title: "Post-Launch Support",
    description: "I stick around after launch to fix, tune, and support as real-world usage comes in.",
  },
];

// Literal Tailwind arbitrary-value classes (must appear verbatim for the JIT scanner to pick them up).
// Cascade only kicks in at md+ — on mobile every step sits flush left as a plain vertical stack.
const INDENT_CLASSES = [
  "",
  "md:ml-[3.5rem]",
  "md:ml-[7rem]",
  "md:ml-[10.5rem]",
  "md:ml-[14rem]",
  "md:ml-[17.5rem]",
  "md:ml-[21rem]",
];

export function WorkProcess() {
  return (
    <section id="process" style={{ padding: "7rem 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p
            className="mb-3"
            style={{ fontFamily: "'DM Mono', monospace", color: "#95bf47", fontSize: "0.75rem", letterSpacing: "0.14em" }}
          >
            {"09 / WORK PROCESS"}
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
            What Happens After You Reach Out
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "#7a7a85", lineHeight: 1.7 }}>
            A step-by-step waterfall — each phase flows into the next, in order, with nothing skipped.
          </p>
        </div>

        {/* Waterfall steps */}
        <div className="flex flex-col">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;

            return (
              <div
                key={step.id}
                className={`flex items-stretch gap-5 md:gap-6 ${INDENT_CLASSES[i] ?? INDENT_CLASSES[INDENT_CLASSES.length - 1]}`}
                style={{ marginBottom: isLast ? 0 : "1.25rem" }}
              >
                {/* Number + icon rail — stretches to the card's height so the
                    connector always terminates right at the next (indented) step */}
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: "3rem" }}>
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
                    <Icon size={19} style={{ color: "#95bf47" }} focusable="false" />
                  </div>
                  {!isLast && (
                    <>
                      <div
                        aria-hidden="true"
                        style={{
                          width: "1px",
                          flex: 1,
                          minHeight: "1rem",
                          background:
                            "linear-gradient(to bottom, rgba(149,191,71,0.35), rgba(149,191,71,0.12))",
                          marginTop: "0.4rem",
                        }}
                      />
                      <ArrowDown size={14} style={{ color: "rgba(149,191,71,0.5)", flexShrink: 0 }} focusable="false" />
                    </>
                  )}
                </div>

                {/* Card */}
                <div
                  className="flex-1 min-w-0"
                  style={{
                    background: "#141417",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderLeft: "2px solid rgba(149,191,71,0.4)",
                    borderRadius: "0.25rem",
                    padding: "1.5rem 1.75rem",
                    position: "relative",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1.25rem",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.05)",
                      lineHeight: 1,
                    }}
                  >
                    {String(step.id).padStart(2, "0")}
                  </div>

                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#f0eeea",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {step.title}
                  </h3>

                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.87rem", color: "#7a7a85", lineHeight: 1.65, maxWidth: "34rem" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
