import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const mono = "'DM Mono', monospace";
const sans = "'Inter', sans-serif";
const heading = "'Plus Jakarta Sans', sans-serif";

const components: Components = {
  h2: ({ children }) => (
    <h2
      style={{
        fontFamily: heading,
        fontSize: "1.5rem",
        fontWeight: 700,
        color: "#f0eeea",
        marginTop: "2.5rem",
        marginBottom: "1rem",
      }}
    >
      {children}
    </h2>
  ),
  p: ({ children }) => (
    <p
      style={{
        fontFamily: sans,
        fontSize: "1.05rem",
        lineHeight: 1.8,
        color: "#9a9aa5",
        marginBottom: "1.25rem",
      }}
    >
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong style={{ color: "#f0eeea", fontWeight: 600 }}>{children}</strong>
  ),
  ul: ({ children }) => (
    <ul style={{ marginBottom: "1.25rem", paddingLeft: "1.25rem", color: "#9a9aa5" }}>{children}</ul>
  ),
  ol: ({ children }) => (
    <ol style={{ marginBottom: "1.25rem", paddingLeft: "1.25rem", color: "#9a9aa5" }}>{children}</ol>
  ),
  li: ({ children }) => (
    <li style={{ fontFamily: sans, fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "0.5rem" }}>{children}</li>
  ),
  table: ({ children }) => (
    <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: sans,
          fontSize: "0.9rem",
        }}
      >
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th
      style={{
        textAlign: "left",
        padding: "0.75rem 1rem",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        color: "#f0eeea",
        fontFamily: mono,
        fontSize: "0.75rem",
        letterSpacing: "0.06em",
      }}
    >
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td
      style={{
        padding: "0.75rem 1rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        color: "#9a9aa5",
      }}
    >
      {children}
    </td>
  ),
  code: ({ className, children }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code
          style={{
            fontFamily: mono,
            fontSize: "0.82rem",
            color: "#95bf47",
          }}
        >
          {children}
        </code>
      );
    }
    return (
      <code
        style={{
          fontFamily: mono,
          fontSize: "0.85em",
          background: "rgba(149,191,71,0.1)",
          color: "#95bf47",
          padding: "0.15em 0.4em",
          borderRadius: "4px",
        }}
      >
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre
      style={{
        background: "#141417",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "8px",
        padding: "1.25rem",
        overflowX: "auto",
        marginBottom: "1.5rem",
        marginTop: "0.5rem",
      }}
    >
      {children}
    </pre>
  ),
};

type MarkdownContentProps = {
  content: string;
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
