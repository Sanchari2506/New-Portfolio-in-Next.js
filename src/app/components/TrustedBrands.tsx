const brands = [
  { id: 1, name: "Dot & Key" },
  { id: 2, name: "TeaBox" },
  { id: 3, name: "Nestasia" },
  { id: 4, name: "Snitch" },
  { id: 5, name: "Salty Accessories" },
  { id: 6, name: "Flooret Commercial" },
  { id: 7, name: "Shumee" },
  { id: 8, name: "Flooret" },
  { id: 9, name: "The Skin Spot" },
];

const marqueeBrands = [...brands, ...brands];

export function TrustedBrands() {
  return (
    <section
      aria-labelledby="trusted-brands-heading"
      style={{
        padding: "4rem 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <style>
        {`
          @keyframes trustedBrandsMarquee {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <p
            className="mb-3"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#95bf47",
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
            }}
          >
            {"01 / BRANDS"}
          </p>
          <h2
            id="trusted-brands-heading"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "#f0eeea",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Brands I've Worked With
          </h2>
          <p
            style={{
              marginTop: "0.9rem",
              maxWidth: "720px",
              color: "rgba(240,238,234,0.72)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            I've contributed to Shopify projects for these brands while working
            with{" "}
            <span style={{ color: "#95bf47", fontWeight: 600 }}>
              Techwishes Solutions
            </span>
            ,{" "}
            <span style={{ color: "#95bf47", fontWeight: 600 }}>
              Optiphoenix
            </span>
            , and{" "}
            <span style={{ color: "#95bf47", fontWeight: 600 }}>
              Allure Commerce
            </span>
            .
          </p>
        </div>

        <ul className="sr-only">
          {brands.map((brand) => (
            <li key={brand.id}>{brand.name}</li>
          ))}
        </ul>

        <div
          aria-hidden="true"
          style={{
            overflow: "hidden",
            width: "100%",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "#141417",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "max-content",
              animation: "trustedBrandsMarquee 28s linear infinite",
              willChange: "transform",
            }}
          >
            {marqueeBrands.map((brand, index) => (
              <span
                key={`${brand.id}-${index}`}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(1rem, 2vw, 1.4rem)",
                  fontWeight: 600,
                  color: "#f0eeea",
                  letterSpacing: "0.02em",
                  whiteSpace: "nowrap",
                  padding: "1.4rem 2rem",
                  borderRight: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
