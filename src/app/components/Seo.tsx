import { useEffect } from "react";

type JsonLd = Record<string, unknown>;

type SeoProps = {
  title?: string;
  description?: string;
  canonicalPath?: string;
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  tags?: string[];
  jsonLd?: JsonLd | JsonLd[];
};

export const defaultSeo = {
  title: "Sanchari Rakshit | Shopify Developer & Liquid Architect",
  description:
    "Shopify developer with 5+ years building high-converting stores, custom Liquid themes, Shopify apps, checkout extensions, and full-stack commerce solutions for DTC brands.",
  image: "https://cdn.shopify.com/s/files/1/0789/8523/2583/files/profile-pic.png?v=1781689343",
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }

  element.href = href;
}

function getCanonicalUrl(path = "/") {
  const origin = window.location.origin;
  return new URL(path, origin).toString();
}

export function Seo({
  title = defaultSeo.title,
  description = defaultSeo.description,
  canonicalPath,
  type = "website",
  image = defaultSeo.image,
  publishedTime,
  tags = [],
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    const canonicalUrl = getCanonicalUrl(canonicalPath ?? window.location.pathname);

    document.title = title;
    upsertLink("canonical", canonicalUrl);

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: "index, follow" });
    upsertMeta('meta[name="author"]', { name: "author", content: "Sanchari Rakshit" });

    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "Sanchari Rakshit" });

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });

    if (publishedTime) {
      upsertMeta('meta[property="article:published_time"]', {
        property: "article:published_time",
        content: publishedTime,
      });
    }

    document.head.querySelectorAll('meta[property="article:tag"]').forEach((tag) => tag.remove());
    tags.forEach((tag) => {
      const element = document.createElement("meta");
      element.setAttribute("property", "article:tag");
      element.setAttribute("content", tag);
      document.head.appendChild(element);
    });

    document.getElementById("page-json-ld")?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.id = "page-json-ld";
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [canonicalPath, description, image, jsonLd, publishedTime, tags, title, type]);

  return null;
}
