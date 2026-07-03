export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "shopify-os2-theme-sections-guide",
    title: "Building Reusable Sections in Shopify OS 2.0",
    excerpt:
      "How to structure Liquid sections for merchant-friendly themes — schema design, presets, and performance tips from real client projects.",
    date: "2026-02-18",
    readTime: "6 min read",
    tags: ["Liquid", "OS 2.0", "Themes"],
    content: `Shopify OS 2.0 changed how merchants customize storefronts. Instead of editing code, they drag sections onto any template. As developers, that means every section we ship needs to be **self-contained, configurable, and performant**.

## Start with the schema

Every section lives or dies by its \`{% schema %}\` block. I always define:

- Clear \`name\` and \`tag\` values for the theme editor
- Sensible \`settings\` grouped with \`header\` blocks
- At least one \`preset\` so merchants can add the section in one click

\`\`\`liquid
{% schema %}
{
  "name": "Featured collection",
  "tag": "section",
  "class": "featured-collection",
  "settings": [
    { "type": "collection", "id": "collection", "label": "Collection" },
    { "type": "range", "id": "products_to_show", "min": 2, "max": 12, "default": 4, "label": "Products to show" }
  ],
  "presets": [{ "name": "Featured collection" }]
}
{% endschema %}
\`\`\`

## Keep Liquid logic thin

Move heavy filtering or sorting into snippets only when reused across sections. For one-off logic, inline is fine — but avoid nested \`for\` loops over large collections without \`limit\`.

## Performance checklist

- Lazy-load below-the-fold images with \`loading="lazy"\`
- Use \`{% render %}\` instead of \`{% include %}\`
- Prefer CSS over JavaScript for layout toggles
- Test with Theme Check before every deploy

Sections that merchants can configure without touching code are the ones that get reused across pages — and that's what separates a good theme from a great one.`,
  },
  {
    slug: "shopify-checkout-ui-extensions",
    title: "Checkout UI Extensions: What Actually Works in Production",
    excerpt:
      "Lessons from building custom checkout fields for Shopify Plus brands — validation, metafields, and keeping the UX frictionless.",
    date: "2026-01-09",
    readTime: "5 min read",
    tags: ["Checkout", "React", "Plus"],
    content: `Checkout UI Extensions run in Shopify's sandboxed checkout — no arbitrary DOM access, no third-party scripts. That constraint is actually a feature: you get a consistent, fast checkout surface.

## When to use an extension vs. a line item property

| Use case | Best approach |
|----------|---------------|
| Gift message on a product | Line item property |
| Delivery instructions at checkout | Checkout UI Extension |
| Post-purchase survey | Thank-you page extension |

Extensions shine when the data belongs to the **order**, not a single line item.

## Saving data with metafields

Use the Checkout API to write order metafields on submit. Always validate on the client *and* in your backend webhook — never trust checkout input alone.

\`\`\`tsx
// Simplified: capture a delivery note
<TextField
  label="Delivery instructions"
  value={note}
  onChange={setNote}
/>
\`\`\`

## UX rules I follow

1. One extension = one job. Don't cram upsells and custom fields into the same block.
2. Match Shopify's typography — don't fight the design system.
3. Keep fields optional unless legally required.

Done right, extensions feel native. Done wrong, they add friction at the worst possible moment — payment.`,
  },
  {
    slug: "liquid-performance-patterns",
    title: "Liquid Performance Patterns for High-Traffic Stores",
    excerpt:
      "Practical techniques to keep theme render times low during flash sales and collection browsing at scale.",
    date: "2025-11-22",
    readTime: "4 min read",
    tags: ["Liquid", "Performance"],
    content: `When a DTC brand runs a drop, Liquid render time matters as much as JavaScript bundle size. Here are patterns I reach for on high-traffic Shopify stores.

## Paginate aggressively

Never render more than 50 products on a collection page without pagination or "load more." Use \`{% paginate collection.products by 24 %}\` and stick to it.

## Cache expensive lookups

If you're building custom navigation from \`linklists\`, assign once:

\`\`\`liquid
{%- assign main_menu = linklists[section.settings.menu] -%}
{%- for link in main_menu.links -%}
  ...
{%- endfor -%}
\`\`\`

Don't re-fetch the same linklist inside nested loops.

## Defer non-critical JS

Alpine.js and vanilla JS are fine for cart drawers and accordions. Load them with \`defer\` and initialize only after \`DOMContentLoaded\`. Avoid jQuery on new builds entirely.

## Measure before optimizing

Use Shopify's Theme Inspector and Lighthouse on **collection**, **product**, and **cart** templates — not just the homepage. That's where render cost shows up during sales.

Small Liquid wins compound. A 200ms improvement on collection pages is meaningful when thousands of shoppers hit the site at once.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsSorted(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
