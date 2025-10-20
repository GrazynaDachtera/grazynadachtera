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
  featured: boolean;
  repoUrl?: string;
  order: number;
  wide?: boolean;
  logo?: { src: string; alt?: string; bg?: string; href?: string };
  status?: "In progress" | "Completed" | "Archived" | string;
  legacyUrl?: string;
};

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const PROJECTS = [
  {
    title: "Sąsiedzki Łazarz",
    siteUrl: "https://www.sasiedzkilazarz.pl/",
    summary:
      "Community hub for Poznań’s Łazarz district. Live news and events, active projects (Park-Sad by Hetmańska, neighborhood clean-ups, fire-safety workshops), the weekly “Blajba” culture guide, community dinners, and tree-planting with clear ways to get involved.",
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
      "Shipped MVP from brief to launch in 3 weeks.",
      "Built with Next.js App Router (TypeScript): file-based routing and shared layouts.",
      "Lighthouse (mobile and desktop): 100/100/100 for Accessibility, Best Practices and SEO.",
      "Implemented a GDPR-compliant contact form with explicit consent (EmailJS + serverless).",
      "Optimized mobile performance: responsive SCSS, Next.js Image, and lazy loading.",
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
      "Next.js rebuild for a Poznań sports club: consistent branding, mobile design, straightforward navigation, quick access to the season schedule and pricing, and up to date news and social posts - replacing kuzisport.pl.",
    role: "Web Developer",
    period: "2025 - in progress",
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
      "Built trial sign-up and contact forms with validation, loading/disabled states, and GDPR consent (EmailJS).",
      "Implemented a live 2025/2026 schedule with search and filters by location and discipline.",
      "Optimized for mobile: responsive SCSS, Next.js Image, and lazy loading.",
      "Migrating from the legacy JavaScript site. This build will be pinned to kuzisport.pl on launch.",
    ],
    featured: true,
    repoUrl: "https://github.com/GrazynaDachtera/kuzisportreact",
    order: 2,
    wide: true,
    logo: { src: "/logo2.png", alt: "Kuzi Sport logo" },
    status: "In progress",
    legacyUrl: "https://kuzisport.pl",
  },
  {
    title: "Kongwell",
    siteUrl: "https://kongwell.com/",
    summary:
      "Next.js landing for a proprietary trading firm highlighting the value proposition, operating model, and REMIT transparency.",
    role: "Web Developer",
    period: "2025",
    tags: ["Next.js", "React", "TypeScript", "SCSS", "Accessibility"],
    highlights: [
      "Designed a single-page landing with a clear section flow.",
      "Lighthouse (mobile and desktop): 100/100/100 for Accessibility, Best Practices and SEO.",
      "Implemented a responsive layout with strong typography and contrast.",
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
      "Next.js site for a luxury real estate company. Reusable component system, Node.js/Next.js API integration, and cross-browser compatibility.",
    role: "Web Development Intern",
    period: "2024-2025",
    tags: ["Next.js", "React", "TypeScript", "SCSS", "Node.js"],
    highlights: [
      "Translated Figma mockups into reusable React/TS components (SCSS modules).",
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
      "Lighthouse audit of summ-it.pl, a database services company: Performance, Accessibility, Best Practices, and SEO (mobile and desktop) with a prioritized fix plan.",
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
      "Accessibility: added accessible names, fixed heading hierarchy.",
      "SEO: meta descriptions, descriptive alt text, improved snippets/indexing.",
      "Best practices: cookie flags (Secure/SameSite/HttpOnly), font-display & preload.",
      "Page fixes: lazy-loaded Google Maps, iframe titles, improved Case Study response time.",
      "UX: tighter spacing, centered CTAs/footers, clearer slider/navigation.",
    ],
    featured: true,
    repoUrl: "",
    order: 5,
    wide: true,
    logo: { src: "/logo5.png", alt: "Summ-it logo" },
  },
] as const satisfies readonly Project[];

function slugify(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function Tag({ children }: { children: ReactNode }) {
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

function BrandLogo({
  logo,
  title,
  href,
}: {
  logo?: Project["logo"];
  title: string;
  href?: string;
}) {
  const content = logo?.src ? (
    <Image
      src={logo.src}
      alt={logo.alt || `${title} logo`}
      fill
      sizes="2.75rem"
    />
  ) : (
    <span>
      {title
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase())
        .join("") || "•"}
    </span>
  );

  const style = logo?.bg
    ? ({ background: logo.bg } as CSSProperties)
    : undefined;

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`projectCardBrand ${
        !logo?.src ? "projectCardBrandFallback" : ""
      }`}
      aria-label={`Open ${title}`}
      style={style}
    >
      {content}
    </a>
  ) : (
    <div
      className={`projectCardBrand ${
        !logo?.src ? "projectCardBrandFallback" : ""
      }`}
      aria-hidden="true"
      style={style}
    >
      {content}
    </div>
  );
}

function ProjectCard({ proj, index }: { proj: Project; index: number }) {
  const headingId = `${slugify(proj.title)}-${index}`;
  const summaryId = `${headingId}-summary`;

  // Ensure <time dateTime> is valid even when period includes text like "— in progress"
  const dateTimeValue = /^\d{4}(-\d{2}(-\d{2})?)?$/.test(proj.period)
    ? proj.period
    : proj.period.match(/\b\d{4}\b/)?.[0] ?? "";

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
          <BrandLogo
            logo={proj.logo}
            title={proj.title}
            href={proj.logo?.href ?? proj.siteUrl}
          />

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
              <time itemProp="datePublished" dateTime={dateTimeValue}>
                {proj.period}
              </time>
              {proj.status && (
                <>
                  <span aria-hidden="true" className="projectCardDot">
                    •
                  </span>
                  <span className="projectCardStatus">{proj.status}</span>
                </>
              )}
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
            {proj.legacyUrl && (
              <ExternalLink
                href={proj.legacyUrl}
                className="btn btn--ghost"
                ariaLabel={`Open legacy site: ${proj.title}`}
              >
                Legacy
              </ExternalLink>
            )}
          </nav>
        </footer>
      </article>
    </li>
  );
}

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
