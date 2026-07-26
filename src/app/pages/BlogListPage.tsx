import { Link } from "react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import { getPostsSorted } from "../data/blog-posts";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogListPage() {
  const posts = getPostsSorted();

  return (
    <>
      <Seo
        title="Shopify Development Blog | Sanchari Rakshit"
        description="Practical Shopify development notes on Liquid, Online Store 2.0, apps, checkout extensions, Admin API changes, and storefront performance."
        canonicalPath="/blog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Shopify Development Blog",
          description:
            "Practical Shopify development notes on Liquid, apps, checkout extensions, and storefront performance.",
          url: `${window.location.origin}/blog`,
          author: {
            "@type": "Person",
            name: "Sanchari Rakshit",
          },
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            url: `${window.location.origin}/blog/${post.slug}`,
          })),
        }}
      />
      <Nav />
      <main id="main-content" style={{ paddingTop: "100px", paddingBottom: "5rem" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p
              className="mb-3"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#95bf47",
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
              }}
            >
              {"// BLOG"}
            </p>
            <h1
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#f0eeea",
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Notes on Shopify development
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "#7a7a85",
                maxWidth: "36rem",
              }}
            >
              Practical write-ups on Liquid, apps, checkout extensions, and storefront performance.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block transition-colors duration-200"
                style={{
                  background: "#141417",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "2rem",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(149,191,71,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                }}
                aria-label={`Read ${post.title}`}
              >
                <article>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span
                    className="flex items-center gap-1.5"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      color: "#7a7a85",
                      letterSpacing: "0.04em",
                    }}
                  >
                    <Calendar size={13} aria-hidden="true" focusable="false" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </span>
                  <span
                    className="flex items-center gap-1.5"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      color: "#7a7a85",
                      letterSpacing: "0.04em",
                    }}
                  >
                    <Clock size={13} aria-hidden="true" focusable="false" />
                    {post.readTime}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#f0eeea",
                    marginBottom: "0.75rem",
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: "#7a7a85",
                    marginBottom: "1.25rem",
                    maxWidth: "42rem",
                  }}
                >
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.68rem",
                          letterSpacing: "0.06em",
                          color: "#95bf47",
                          background: "rgba(149,191,71,0.08)",
                          border: "1px solid rgba(149,191,71,0.2)",
                          padding: "0.25rem 0.6rem",
                          borderRadius: "4px",
                        }}
                      >
                        {tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                  <span
                    className="flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.75rem",
                      letterSpacing: "0.08em",
                      color: "#95bf47",
                    }}
                  >
                    READ POST
                    <ArrowRight size={14} aria-hidden="true" focusable="false" />
                  </span>
                </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
