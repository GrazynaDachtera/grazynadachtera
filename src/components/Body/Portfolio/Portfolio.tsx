"use client";

import React from "react";
import "./Portfolio.scss";

/* ---------- Types ---------- */
export type Project = {
  title: string;
  siteUrl: string; // live URL (required)
  summary: string; // 1–2 lines
  role: string; // e.g., "Web Developer"
  period: string; // e.g., "2024" or "2023–2024"
  tags: readonly string[]; // tech stack
  highlights: readonly string[]; // outcomes / impact
  featured: boolean; // keep if you use it elsewhere
  repoUrl?: string; // optional link to code

  // layout control
  order: number; // controls position (1,2,3…)
  wide?: boolean; // if true, spans 2 columns on desktop
};

/* Helper to ensure each object conforms to Project at compile time */
const p = (x: Project) => x;

/* ---------- Data (update links/text as needed) ---------- */
const PROJECTS = [
  p({
    title: "Sąsiedzki Łazarz",
    siteUrl: "https://www.sasiedzkilazarz.pl/",
    summary:
      "Neighborhood association site for Poznań’s Łazarz district: who they are, how to get involved, and current community projects.",
    role: "Web Developer",
    period: "2025",
    tags: ["Next.js", "React", "TypeScript", "SCSS", "Node.js"],
    highlights: [
      "From zero → production in 3 weeks",
      "Static-first Next.js (ISR) — fast and low-cost",
      "CI/CD to Vercel with preview deploys; ISR for news/projects",
    ],
    featured: true,
    repoUrl: "https://github.com/GrazynaDachtera/SasiedzkiLazarz.git",
    order: 1,
    wide: true,
  }),
  p({
    title: "Kuzi Sport",
    siteUrl: "https://www.kuzisport.pl/",
    summary:
      "Multi-discipline sports club site with trial signup, news/blog, schedule, pricing, contact, and socials.",
    role: "Web Developer",
    period: "2025",
    tags: ["Next.js", "React", "TypeScript", "SCSS", "Node.js"],
    highlights: [
      "Clean IA and mobile-first layout",
      "Fast first paint; optimized media",
    ],
    featured: true,
    repoUrl: "https://github.com/GrazynaDachtera/kuzisportreact",
    order: 2,
    wide: true,
  }),
  p({
    title: "Global Property",
    siteUrl: "https://globalproperty-group.com/",
    summary:
      "Boutique real-estate development & advisory studio; consultation funnel and team capabilities from concept to execution.",
    role: "Web Development Intern",
    period: "2024 – 2025",
    tags: ["Next.js", "React", "TypeScript", "SCSS", "Node.js"],
    highlights: ["Performance & a11y improvements", "SEO-ready metadata"],
    featured: true,
    repoUrl: "https://github.com/ProAdvisorGroup",
    order: 3,
    wide: true,
  }),
  // FULL-WIDTH like Global Property:
  p({
    title: "Kongwell",
    siteUrl: "https://example.com/kongwell",
    summary:
      "Landing page with clear information hierarchy and mobile-first layout.",
    role: "Web Developer",
    period: "2023",
    tags: ["React", "SCSS"],
    highlights: ["Clean layout; fast TTI"],
    featured: false,
    repoUrl: "",
    order: 4,
    wide: true, // ← now spans both columns
  }),
  p({
    title: "summ-it.pl Audit & UX",
    siteUrl: "https://summ-it.pl",
    summary:
      "Audit + implementation that boosted performance and UX for a managed services company.",
    role: "Associate IT Specialist",
    period: "2024",
    tags: ["Audit", "Performance", "A11y", "SEO"],
    highlights: [
      "Scores raised to 99%",
      "Improved responsiveness & accessibility",
    ],
    featured: true,
    repoUrl: "",
    order: 5,
    wide: true, // ← now spans both columns
  }),
] as const satisfies readonly Project[];

/* ---------- Component ---------- */
function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}

export default function Portfolio() {
  // Sort strictly by explicit order
  const items = [...PROJECTS].sort((a, b) => a.order - b.order);

  return (
    <section
      id="portfolio"
      className="portfolio"
      aria-label="Portfolio projects"
    >
      <header className="portfolio__header">
        <h2 className="portfolio__title">Portfolio</h2>
        <p className="portfolio__subtitle">
          A few representative projects. Each card lists stack, role, and
          measurable outcomes.
        </p>
      </header>

      <ul className="portfolio__grid" role="list">
        {items.map((p) => (
          <li
            key={p.title}
            className={`portfolio__item${p.wide ? " is-wide" : ""}`}
          >
            <article
              className="project-card"
              aria-labelledby={`${slugify(p.title)}-title`}
            >
              <div className="project-card__head">
                <h3
                  id={`${slugify(p.title)}-title`}
                  className="project-card__title"
                >
                  <a
                    href={p.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} — live site`}
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

              <p className="project-card__summary">{p.summary}</p>

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
                  className="project-link"
                >
                  Live
                </a>
                {p.repoUrl && (
                  <>
                    <span aria-hidden="true" className="dot">
                      •
                    </span>
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Code
                    </a>
                  </>
                )}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Helpers ---------- */
function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
