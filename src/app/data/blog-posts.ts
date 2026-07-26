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
    slug: "shopify-graphql-metafield-filter-errors",
    title: "Shopify's GraphQL Admin API Will No Longer Ignore Invalid Metafield Filters",
    excerpt:
      "Starting with API version 2026-10, invalid metafield filters will throw GraphQL errors instead of silently returning incorrect results. Here's what every Shopify app developer needs to know before upgrading.",
    date: "2026-07-24",
    readTime: "6 min read",
    tags: ["GraphQL", "Admin API", "Metafields", "Breaking Change"],
    content: `One of the most frustrating bugs in software isn't the one that crashes your application—it's the one that quietly returns the wrong data.
  
  That's exactly what Shopify is addressing in **Admin GraphQL API version 2026-10**.
  
  Previously, if your GraphQL query filtered resources using an invalid metafield, Shopify often ignored the invalid filter and returned results anyway. Your application wouldn't fail, but the data could be incomplete, misleading, or entirely incorrect.
  
  Starting with **API version 2026-10**, that behaviour changes.
  
  Instead of silently ignoring invalid metafield filters, Shopify will return a GraphQL error explaining exactly what's wrong.
  
  For developers building Shopify apps and integrations, this is a breaking change—but ultimately, it's a very welcome one.
  
  ## The problem with silent failures
  
  Imagine filtering products using a custom metafield.
  
  Your query looks perfectly valid, and Shopify responds successfully.
  
  The only problem?
  
  The metafield you're filtering by isn't actually configured for filtering.
  
  Until now, Shopify simply ignored that part of the query.
  
  The request succeeded.
  
  No warning.
  
  No error.
  
  Just incorrect results.
  
  These kinds of silent failures are notoriously difficult to debug because nothing appears broken until merchants begin reporting missing products, incorrect orders, or unexpected search results.
  
  ## What's changing in API version 2026-10?
  
  Beginning with **GraphQL Admin API version 2026-10**, Shopify validates metafield filters before executing the query.
  
  If a metafield can't be used for filtering, the API immediately returns an error instead of continuing with an invalid query.
  
  This means developers discover configuration problems during development rather than after deployment.
  
  It's a small change with a significant impact on application reliability.
  
  ## When will a metafield filter fail?
  
  A GraphQL query may now return an error if:
  
  - The metafield doesn't have a definition.
  - The metafield definition isn't configured to allow filtering.
  - The metafield type doesn't support the comparison operator being used.
  
  Rather than guessing why a query returned unexpected data, developers receive clear feedback about what needs to be fixed.
  
  ## Why this is actually good news
  
  Breaking changes usually sound intimidating, but this one improves developer experience.
  
  Returning incorrect data is almost always worse than returning an error.
  
  Errors are visible.
  
  They appear in logs.
  
  They fail tests.
  
  They get fixed.
  
  Incorrect data, on the other hand, often survives unnoticed until it causes business problems.
  
  By validating metafield filters up front, Shopify makes applications more predictable and easier to maintain.
  
  ## Who needs to pay attention?
  
  This update primarily affects developers who build:
  
  - Shopify apps
  - Custom Admin API integrations
  - ERP or CRM integrations
  - Product synchronisation tools
  - Inventory management systems
  - Reporting dashboards
  
  If your application filters products, customers, orders, or other resources using metafields, it's worth reviewing those queries before upgrading to API version 2026-10.
  
  Apps that don't filter using metafields won't be affected.
  
  Likewise, existing applications running on API version **2026-07** or earlier continue to behave exactly as they do today until they're upgraded.
  
  ## Preparing your app for the upgrade
  
  Before switching to API version 2026-10, it's worth performing a quick audit of your GraphQL queries.
  
  Start by identifying every query that filters resources using metafields.
  
  Then verify that:
  
  - The metafield has a valid definition.
  - Filtering is enabled on that definition.
  - The comparison operator is supported for that metafield type.
  
  Finally, test every query against API version 2026-10 to ensure it executes successfully without returning validation errors.
  
  Finding these issues before deployment is far easier than diagnosing incorrect production data later.
  
  ## Why this improves long-term app quality
  
  As Shopify continues evolving its platform, the APIs are becoming increasingly strict about validating developer input.
  
  Rather than accepting invalid requests and attempting to guess developer intent, Shopify is choosing explicit validation and predictable behaviour.
  
  That aligns with modern API design principles:
  
  - Fail early.
  - Return clear errors.
  - Prevent incorrect data from propagating through applications.
  
  For teams maintaining multiple Shopify apps, this leads to more reliable integrations and easier debugging.
  
  ## Final thoughts
  
  Although this update is classified as a **breaking API change**, it represents an important improvement for developers.
  
  Silent failures are some of the hardest bugs to detect because applications appear to work while quietly producing incorrect results.
  
  By enforcing metafield validation before executing GraphQL queries, Shopify is making the Admin API safer, more predictable, and easier to debug.
  
  If your app relies on metafield filtering, now is the ideal time to review those queries, update any invalid filters, and test against API version **2026-10** before the October release.
  
  A failed query during development is far preferable to incorrect business data in production—and that's exactly the problem this update is designed to solve.`,
  },
  {
    slug: "shopify-liquid-block-partial-tags",
    title: "Shopify's New Liquid {% block %} and {% partial %} Tags Could Change How We Build Themes",
    excerpt:
      "A closer look at Shopify's new Liquid-first composition model and why {% block %} and {% partial %} could make themes easier to build, maintain, and scale.",
    date: "2026-07-21",
    readTime: "7 min read",
    tags: ["Liquid", "Themes", "Developer Preview"],
    content: `For years, Shopify theme development has followed a familiar structure: JSON templates, sections, snippets, and plenty of \`{% render %}\` calls. It works well, but as themes become more dynamic and feature-rich, maintaining that structure often becomes harder than building it.
  
  With the **Liquid July 2026 Developer Preview**, Shopify introduced two new Liquid tags: **\`{% block %}\`** and **\`{% partial %}\`**. While they may look like small additions, they represent a significant shift in how Shopify themes can be composed and maintained.
  
  ## The challenge with large Shopify themes
  
  If you've maintained a Shopify store for several years, you've probably encountered templates spread across multiple JSON files, sections, snippets, app blocks, and custom JavaScript.
  
  Finding where a single piece of UI originates can quickly become frustrating, especially on enterprise stores with years of customisations.
  
  As themes grow, developers spend more time navigating files than actually building features.
  
  ## Meet \`{% block %}\`
  
  The new **\`{% block %}\`** tag allows developers to render reusable theme blocks directly inside a Liquid template.
  
  Instead of scattering page structure across multiple files, developers can compose an entire page in one place while still keeping components reusable.
  
  Imagine opening a product template and immediately seeing:
  
  - Hero section
  - Product gallery
  - Product information
  - Recommendations
  - Reviews
  
  without jumping between several snippets and sections.
  
  This makes templates much easier to read, debug, and maintain.
  
  ## How is it different from \`{% render %}\`?
  
  Although it may appear similar to \`{% render %}\`, the purpose is different.
  
  \`{% render %}\` simply includes a snippet.
  
  \`{% block %}\` works with reusable theme blocks that define structured inputs and schemas, giving Shopify much better visibility into how components are composed.
  
  That opens the door for improved validation, tooling, and long-term maintainability.
  
  ## Introducing \`{% partial %}\`
  
  The second addition could have an even bigger impact.
  
  The new **\`{% partial %}\`** tag defines named regions of server-rendered HTML that JavaScript can refresh without reloading the entire page.
  
  Today, dynamic storefront features like:
  
  - Shopping carts
  - Product recommendations
  - Inventory updates
  - Dynamic pricing
  - Recently viewed products
  
  often require custom AJAX endpoints, JSON responses, DOM manipulation, and additional JavaScript.
  
  With partials, Shopify allows the server to re-render only the necessary HTML, keeping rendering logic inside Liquid instead of moving it into client-side frameworks.
  
  ## Why this matters
  
  Modern Shopify stores don't always need to become full React applications.
  
  Client-side rendering introduces additional complexity through hydration, bundle sizes, state management, and more JavaScript to maintain.
  
  This update reinforces Shopify's growing preference for a **Liquid-first architecture**, where the server renders the interface and JavaScript enhances interactions only when needed.
  
  For many storefronts, that's both simpler and faster.
  
  ## Better developer experience
  
  Keeping page composition inside Liquid templates provides several practical benefits:
  
  - Easier onboarding for new developers
  - Faster debugging
  - More readable templates
  - Better support for AI coding assistants
  - Clearer separation of reusable components
  
  Instead of tracing multiple nested snippets, developers can understand an entire page at a glance.
  
  ## Theme Check gets smarter
  
  Alongside these new tags, Shopify has expanded **Theme Check** with additional validation rules.
  
  The updated tooling can now detect:
  
  - Syntax errors
  - Excessive template complexity
  - Oversized files
  - Invalid schema structures
  - Mismatched block arguments
  - Documentation inconsistencies
  
  These checks help teams catch problems before deployment and encourage cleaner, more maintainable themes.
  
  ## Existing themes continue to work
  
  The good news is that nothing is being deprecated.
  
  Existing Shopify themes built with:
  
  - JSON templates
  - Sections
  - Snippets
  - Theme settings
  
  continue to function exactly as before.
  
  The new Liquid composition model exists alongside the current architecture, allowing developers to adopt it gradually rather than rewriting existing themes.
  
  ## What this means for Shopify developers
  
  For developers and agencies maintaining multiple Shopify stores, readability and maintainability become increasingly important over time.
  
  Cleaner page composition means:
  
  - Faster code reviews
  - Easier onboarding
  - More consistent architecture
  - Reduced maintenance costs
  - Better compatibility with AI-assisted development
  
  As themes continue to evolve, writing code that's easier to understand becomes just as valuable as writing code that works.
  
  ## Final thoughts
  
  The introduction of **\`{% block %}\`** and **\`{% partial %}\`** isn't just another Liquid update—it's Shopify signalling a stronger commitment to server-rendered, modular theme development.
  
  Rather than encouraging developers to move everything into client-side frameworks, Shopify is making Liquid more capable, more structured, and easier to maintain.
  
  If these features mature beyond the developer preview, they could become one of the most significant improvements to Shopify theme development since Online Store 2.0.`,
  },
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
