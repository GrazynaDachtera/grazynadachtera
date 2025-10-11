"use client";

import Image from "next/image";
import { Poppins } from "next/font/google";
import type { CSSProperties, ReactNode } from "react";
import "./Portfolio.scss";

export type Project = {
  title: string;
  siteUrl: string;
  summary: string;
  role: string;
  period: string;
  tags: readonly string[];
  highlights: readonly string[];
  featured: boolean; // kept in data model but not rendered
  repoUrl?: string;
  order: number;
  wide?: boolean;
  logo?: { src: string; alt?: string; bg?: string };
};

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/* ---------- Data ---------- */

const PROJECTS = [
  {
    title: "Sąsiedzki Łazarz",
    siteUrl: "https://www.sasiedzkilazarz.pl/",
    summary:
      "Neighborhood association site for Poznań’s Łazarz district: who they are, how to get involved, and current community projects.",
    role: "Web Developer",
    period: "2025",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "SCSS",
      "Vercel",
      "EmailJS",
      "Accessibility",
    ],
    highlights: [
      "Shipped MVP in 3 weeks.",
      "Next.js App Router (TS): file-based routing & shared layouts.",
      "GDPR-compliant contact form with explicit consent (EmailJS/serverless).",
      "Legal & a11y pages: Privacy, Terms, Accessibility, RODO.",
      "Mobile-first SCSS with image/loading optimizations.",
    ],
    featured: true,
    repoUrl: "https://github.com/GrazynaDachtera/SasiedzkiLazarz.git",
    order: 1,
    wide: true,
    logo: { src: "/logo1.png", alt: "Sąsiedzki Łazarz logo" },
  },
  {
    title: "Kuzi Sport",
    siteUrl: "https://kuzisportreact-mxhw.vercel.app/",
    summary:
      "Fast multi-sport club website featuring GDPR-compliant trial sign-up and contact forms, an up-to-date schedule, clear pricing, news/blog, and social integrations.",
    role: "Web Developer",
    period: "2025",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "SCSS",
      "Vercel",
      "EmailJS",
      "Accessibility",
    ],
    highlights: [
      "Owned design → deploy on Vercel with preview envs & secrets.",
      "Production-ready forms (Trial Sign-Up, Contact): validation, loading/disabled, GDPR consent (EmailJS).",
      "Mobile-first performance: responsive SCSS, next/image, lazy loading.",
      "Dynamic schedule 2025/26 with search & filters by location/discipline.",
      "Pricing, news/blog, social integrations, and prominent CTAs.",
    ],
    featured: true,
    repoUrl: "https://github.com/GrazynaDachtera/kuzisportreact",
    order: 2,
    wide: true,
    logo: { src: "/logo2.png", alt: "Kuzi Sport logo" },
  },
  {
    title: "Kongwell",
    siteUrl: "https://kongwell.com/",
    summary:
      "Next.js landing with a clean ‘What we do / Who we are / Why it matters / How we operate’ flow, highlighting proprietary-capital trading and REMIT-aligned transparency.",
    role: "Web Developer",
    period: "2025",
    tags: ["Next.js", "React", "TypeScript", "SCSS", "Accessibility"],
    highlights: [
      "Single-page landing with clear section flow.",
      "Responsive layout with strong type/contrast.",
      "Fast first paint and distraction-free hierarchy.",
    ],
    featured: false,
    repoUrl: "https://github.com/GrazynaDachtera/Kongwell",
    order: 3,
    wide: true,
    logo: { src: "/logo3.svg", alt: "Kongwell logo" },
  },
  {
    title: "Global Property",
    siteUrl: "https://globalproperty-group.com/",
    summary:
      "Built a Next.js/React site for a luxury real-estate company. Translated Figma designs into reusable components, integrated Node.js APIs, and ensured cross-browser compatibility.",
    role: "Web Development Intern",
    period: "2024-2025",
    tags: ["Next.js", "React", "TypeScript", "SCSS", "Node.js"],
    highlights: [
      "Translated Figma into reusable React/TS components (SCSS modules).",
      "Integrated Next.js APIs for property data and lead capture.",
    ],
    featured: true,
    repoUrl: "https://github.com/ProAdvisorGroup",
    order: 4,
    wide: true,
    logo: { src: "/logo4.png", alt: "GlobalProperty logo" },
  },
  {
    title: "summ-it",
    siteUrl: "https://summ-it.pl",
    summary:
      "Full-site Lighthouse audit of summ-it.pl (desktop & mobile) across Performance, Accessibility, Best Practices, and SEO—delivering a prioritized fix plan.",
    role: "Associate IT Specialist",
    period: "2023-2024",
    tags: [
      "Website Audit",
      "Performance",
      "Accessibility (WCAG)",
      "SEO",
      "Best Practices",
      "Image Optimization",
      "Lazy Loading",
    ],
    highlights: [
      "Lighthouse audit: Performance, Accessibility, Best Practices, SEO (desktop & mobile).",
      "Performance: defined media sizes, optimized/compressed images, lazy-loaded assets, reduced unused JS.",
      "Accessibility: added accessible names; fixed heading hierarchy.",
      "SEO: meta descriptions; descriptive alt text; improved snippets/indexing.",
      "Best practices: cookie flags (Secure/SameSite/HttpOnly); font-display & preload.",
      "Page fixes: lazy-loaded Google Maps; iframe titles; improved Case Study response time.",
      "UX: tighter spacing, centered CTAs/footers, clearer slider/navigation.",
    ],
    featured: true,
    repoUrl: "",
    order: 5,
    wide: true,
    logo: { src: "/logo5.png", alt: "Summ-it logo" },
  },
] as const satisfies readonly Project[];

/* ---------- Utilities ---------- */

function slugify(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

/* ---------- UI ---------- */

function Tag({ children }: { children: ReactNode }) {
  // stays "pill" on purpose to keep global styling hooks
  return <span className="pill">{children}</span>;
}

function ExternalLink({
  href,
  children,
  className,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

function BrandLogo({ logo, title }: { logo?: Project["logo"]; title: string }) {
  if (!logo?.src) {
    const initials = title
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase())
      .join("");
    return (
      <div
        className="projectCardBrand projectCardBrandFallback"
        aria-hidden="true"
      >
        <span>{initials || "•"}</span>
      </div>
    );
  }
  return (
    <div
      className="projectCardBrand"
      style={logo.bg ? ({ background: logo.bg } as CSSProperties) : undefined}
    >
      <Image
        src={logo.src}
        alt={logo.alt || `${title} logo`}
        fill
        sizes="44px"
      />
    </div>
  );
}

function ProjectCard({ proj, index }: { proj: Project; index: number }) {
  const headingId = `${slugify(proj.title)}-${index}`;
  const summaryId = `${headingId}-summary`;

  return (
    <li
      className={`portfolioItem${proj.wide ? " isWide" : ""}`}
      key={proj.title}
    >
      <article
        className="projectCard"
        aria-labelledby={headingId}
        aria-describedby={summaryId}
        itemScope
        itemType="https://schema.org/CreativeWork"
      >
        <span className="projectCardAccent" aria-hidden="true" />

        <header className="projectCardHead">
          <BrandLogo logo={proj.logo} title={proj.title} />

          <div className="projectCardHeadText">
            <h3 id={headingId} className="projectCardTitle" itemProp="name">
              <ExternalLink
                href={proj.siteUrl}
                ariaLabel={`Open live site: ${proj.title}`}
              >
                {proj.title}
              </ExternalLink>
            </h3>

            <p className="projectCardMeta">
              <span className="projectCardRole">{proj.role}</span>
              <span aria-hidden="true" className="projectCardDot">
                •
              </span>
              <time itemProp="datePublished" dateTime={proj.period}>
                {proj.period}
              </time>
            </p>

            <p
              id={summaryId}
              className="projectCardSummary"
              itemProp="description"
            >
              {proj.summary}
            </p>
          </div>
        </header>

        <div className="projectCardContent">
          {proj.highlights.length > 0 && (
            <ul className="projectCardHighlights" role="list">
              {proj.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
        </div>

        <footer className="projectCardFooter">
          <div className="projectCardTags" aria-label="Tech stack">
            {proj.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <nav className="projectCardActions" aria-label="Project links">
            <ExternalLink
              href={proj.siteUrl}
              className="btn btn--primary"
              ariaLabel={`Open live site: ${proj.title}`}
            >
              Live
            </ExternalLink>

            {proj.repoUrl && (
              <ExternalLink
                href={proj.repoUrl}
                className="btn btn--ghost"
                ariaLabel={`View code on GitHub: ${proj.title}`}
              >
                Code
              </ExternalLink>
            )}
          </nav>
        </footer>
      </article>
    </li>
  );
}

/* ---------- Component ---------- */

const PROJECTS_SORTED = [...PROJECTS].sort((a, b) => a.order - b.order);

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className={`portfolio ${poppins.className}`}
      aria-label="Portfolio projects"
    >
      <header className="portfolioHeader">
        <h2 className="portfolioTitle accent-gradient">Portfolio</h2>
        <p className="portfolioSubtitle">
          A few representative projects. Each card lists stack, role, and
          measurable outcomes.
        </p>
      </header>

      <ul className="portfolioGrid" role="list">
        {PROJECTS_SORTED.map((proj, i) => (
          <ProjectCard proj={proj} index={i} key={proj.title} />
        ))}
      </ul>
    </section>
  );
}
