"use client";

import React from "react";
import Image from "next/image";
import "./Portfolio.scss";
import { Poppins } from "next/font/google";

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
  logo?: {
    src: string;
    alt?: string;
    bg?: string;
  };
};

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const p = (x: Project) => x;

const PROJECTS = [
  p({
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
      "Delivered MVP to production in 3 weeks",
      "Built with Next.js App Router (TypeScript): file-based routing and shared layouts",
      "Contact form with explicit RODO/GDPR consent (EmailJS, serverless)",
      "Legal and accessibility pages: RODO, Privacy Policy, Accessibility, Terms",
      "Responsive SCSS and mobile-first performance optimizations",
    ],
    featured: true,
    repoUrl: "https://github.com/GrazynaDachtera/SasiedzkiLazarz.git",
    order: 1,
    wide: true,
    logo: { src: "/logo1.png", alt: "Sąsiedzki Łazarz logo" },
  }),

  p({
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
      "End-to-end ownership: designed, built, and deployed on Vercel with preview deployments and env-scoped secrets",
      "Production-ready forms: Trial Sign-Up and Contact with client-side validation, loading/disabled states, and RODO/GDPR consent (Contact via EmailJS)",
      "Mobile-first performance: responsive SCSS, next/image optimizations, and lazy loading for a fast first paint",
      "Dynamic schedule (2025/2026) with search and filters by location and discipline",
      "Clear pricing and news/updates with social integrations and prominent CTAs",
      "App Router (TypeScript) architecture: file-based routing, shared layouts, and an accessible, semantic UI",
    ],
    featured: true,
    repoUrl: "https://github.com/GrazynaDachtera/kuzisportreact",
    order: 2,
    wide: true,
    logo: { src: "/logo2.png", alt: "Kuzi Sport logo" },
  }),
  p({
    title: "Kongwell",
    siteUrl: "https://kongwell.com/",
    summary:
      "Next.js landing with a clean ‘What we do / Who we are / Why it matters / How we operate’ flow, highlighting proprietary-capital trading and REMIT-aligned transparency.",
    role: "Web Developer",
    period: "2025",
    tags: ["Next.js", "React", "TypeScript", "SCSS", "Accessibility"],
    highlights: [
      "Single-page landing with clear section hierarchy",
      "Mobile-first, responsive layout with strong typographic hierarchy and readable contrast",
      "Fast first paint and distraction-free UI focused on information hierarchy",
    ],
    featured: false,
    repoUrl: "https://github.com/GrazynaDachtera/Kongwell",
    order: 3,
    wide: true,
    logo: { src: "/logo3.svg", alt: "Kongwell logo" },
  }),
  p({
    title: "Global Property",
    siteUrl: "https://globalproperty-group.com/",
    summary:
      "Built a Next.js/React site for a luxury real-estate company. Translated Figma designs into reusable components, integrated Node.js APIs, and ensured cross-browser compatibility.",
    role: "Web Development Intern",
    period: "2024-2025",
    tags: ["Next.js", "React", "TypeScript", "SCSS", "Node.js"],
    highlights: [
      "Converted Figma designs into reusable React/TypeScript components with SCSS modules",
      "Integrated Node.js/Next.js APIs for property data and lead/contact flows",
    ],
    featured: true,
    repoUrl: "https://github.com/ProAdvisorGroup",
    order: 4,
    wide: true,
    logo: { src: "/logo4.png", alt: "GlobalProperty logo" },
  }),
  p({
    title: "summ-it",
    siteUrl: "https://summ-it.pl",
    summary:
      "Full-site Lighthouse audit of summ-it.pl (desktop and mobile) across Performance, Accessibility, Best Practices, and SEO-delivering a prioritized fix plan to reduce Speed Index/Total Blocking Time, stabilize layout, and close key a11y/SEO gaps.",
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
      "Lighthouse-driven review covering Performance, Accessibility, Best Practices, and SEO (desktop and mobile)",
      "Performance: defined img width/height, cut network payloads, modernized/compressed images, lazy-loaded assets, and reduced unused JS to improve SI/TBT",
      "Accessibility: added accessible names for buttons/links and fixed heading hierarchy for screen readers",
      "SEO: added meta descriptions and descriptive alt text for images; improved crawl snippets and image indexing",
      "Best practices: corrected cookie attributes (Secure/SameSite/HttpOnly) and set font-display with proper preloading",
      "Page-level fixes: lazy-loaded Google Maps, added <iframe> titles, and addressed server response time on Case Study pages",
      "UX notes: cleaner spacing, centered CTAs/footers, and more intuitive slider/navigation adjustments",
    ],
    featured: true,
    repoUrl: "",
    order: 5,
    wide: true,
    logo: { src: "/logo5.png", alt: "Summ-it logo" },
  }),
] as const;

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag pill">{children}</span>;
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
        className="project-card__brand project-card__brand--fallback"
        aria-hidden="true"
      >
        <span>{initials || "•"}</span>
      </div>
    );
  }
  return (
    <div
      className="project-card__brand"
      style={
        logo.bg ? ({ background: logo.bg } as React.CSSProperties) : undefined
      }
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

export default function Portfolio() {
  const items = [...PROJECTS].sort((a, b) => a.order - b.order);

  return (
    <section
      id="portfolio"
      className={`portfolio ${poppins.className}`}
      aria-label="Portfolio projects"
    >
      <header className="portfolio__header">
        <h2 className="portfolio__title accent-gradient">Portfolio</h2>
        <p className="portfolio__subtitle">
          A few representative projects. Each card lists stack, role, and
          measurable outcomes.
        </p>
      </header>

      <ul className="portfolio__grid" role="list">
        {items.map((p, i) => {
          const headingId = `${slugify(p.title)}-${i}`;
          return (
            <li
              key={p.title}
              className={`portfolio__item${p.wide ? " is-wide" : ""}`}
            >
              <article
                className="project-card"
                aria-labelledby={headingId}
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <div className="project-card__head">
                  <BrandLogo logo={p.logo} title={p.title} />
                  <div className="project-card__head-text">
                    <h3
                      id={headingId}
                      className="project-card__title"
                      itemProp="name"
                    >
                      <a
                        href={p.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live site: ${p.title}`}
                        itemProp="url"
                      >
                        {p.title}
                      </a>
                    </h3>
                    <p className="project-card__meta">
                      <span>{p.role}</span>
                      <span aria-hidden="true"> · </span>
                      <time>{p.period}</time>
                    </p>
                  </div>
                </div>

                <p className="project-card__summary" itemProp="description">
                  {p.summary}
                </p>

                {p.highlights.length > 0 && (
                  <ul className="project-card__highlights">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}

                <div className="project-card__tags">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <p className="project-card__links">
                  <a
                    href={p.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--ghost--green"
                    aria-label={`Open live site: ${p.title}`}
                  >
                    Live
                  </a>
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--ghost"
                      aria-label={`View code on GitHub: ${p.title}`}
                    >
                      Code
                    </a>
                  )}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function slugify(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
