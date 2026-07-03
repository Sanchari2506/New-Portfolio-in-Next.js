import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { MarkdownContent } from "../components/MarkdownContent";
import { getPostBySlug } from "../data/blog-posts";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Sanchari Rakshit`;
    }
    return () => {
      document.title = "Sanchari Rakshit | Shopify Developer & Liquid Architect";
    };
  }, [post]);

  if (!post) {
    return (
      <>
        <Nav />
        <main
          className="max-w-6xl mx-auto px-6"
          style={{ paddingTop: "120px", paddingBottom: "5rem", textAlign: "center" }}
        >
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "2rem",
              fontWeight: 800,
              color: "#f0eeea",
              marginBottom: "1rem",
            }}
          >
            Post not found
          </h1>
          <p style={{ color: "#7a7a85", marginBottom: "2rem" }}>
            This article doesn&apos;t exist or may have been moved.
          </p>
          <Link
            to="/blog"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              color: "#95bf47",
              textDecoration: "none",
            }}
          >
            ← BACK TO BLOG
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main style={{ paddingTop: "100px", paddingBottom: "5rem" }}>
        <article className="max-w-3xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 mb-10 transition-colors"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              color: "#7a7a85",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#95bf47";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#7a7a85";
            }}
          >
            <ArrowLeft size={14} />
            ALL POSTS
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span
              className="flex items-center gap-1.5"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                color: "#7a7a85",
              }}
            >
              <Calendar size={13} />
              {formatDate(post.date)}
            </span>
            <span
              className="flex items-center gap-1.5"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                color: "#7a7a85",
              }}
            >
              <Clock size={13} />
              {post.readTime}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#f0eeea",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-10 pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
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

          <MarkdownContent content={post.content} />
        </article>
      </main>
      <Footer />
    </>
  );
}
