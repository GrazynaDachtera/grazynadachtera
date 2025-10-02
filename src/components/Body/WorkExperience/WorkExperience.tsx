"use client";

import React from "react";
import "./WorkExperience.scss";

export type Experience = {
  company: string;
  companyUrl?: string;
  role: string;
  team?: string;
  location?: string;
  period: string;
  summary: string;
  tags: readonly string[];
  highlights: readonly string[];
  order: number;
  wide?: boolean;
};

const e = (x: Experience) => x;

const EXPERIENCES = [
  e({
    company: "Pro Advisor Group",
    role: "Web Developer",
    team: "Development",
    location: "Brussels, Belgium",
    period: "09.2024 - 03.2025",
    summary:
      "Frontend development in Next.js/React: responsive UIs, Figma handoff, and API-integrated forms.",
    tags: ["React", "TypeScript", "Next.js", "SCSS", "APIs", "Figma"],
    highlights: [
      "Built responsive interfaces from Figma in React/TypeScript (Next.js).",
      "Integrated forms with APIs for data submission and validation.",
      "Delivered globalproperty-group.com UI with cross-browser compatibility.",
    ],
    order: 1,
    wide: true,
  }),
  e({
    company: "summ-it inc",
    companyUrl: "https://summ-it.pl",
    role: "Associate IT Specialist",
    team: "Managed Service",
    location: "Poznań, Poland",
    period: "11.2023 - 09.2024",
    summary:
      "Web audit + IT ops: boosted site scores to 99% and supported MS/SQL, Windows Server, and AD.",
    tags: [
      "Audit",
      "SEO",
      "Accessibility",
      "SQL Server",
      "Windows Server",
      "Active Directory",
    ],
    highlights: [
      "Raised performance/SEO/a11y scores to 99% via full site audit.",
      "L1/L2 support for SQL Server; maintained Windows Server environments.",
      "Streamlined Active Directory for global teams (licenses, groups, signatures).",
    ],
    order: 2,
    wide: true,
  }),
  e({
    company: "Allegro Ltd.",
    companyUrl: "https://allegro.pl",
    role: "Customer Service Technical Support",
    team: "Customer Experience",
    location: "Poznań, Poland",
    period: "01.2022 - 10.2022",
    summary:
      "Supported customers and internal teams, ensuring smooth resolution of technical issues.",
    tags: ["Customer Support", "Process Optimization"],
    highlights: [
      "Resolved customer technical requests with a high first-contact resolution rate.",
      "Collaborated with internal teams to improve support workflows and knowledge base.",
    ],
    order: 3,
    wide: true,
  }),
] as const satisfies readonly Experience[];

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}

export default function WorkExperience() {
  const items = [...EXPERIENCES].sort((a, b) => a.order - b.order);

  return (
    <section
      id="work-experience"
      className="WorkExperience"
      aria-label="Work experience"
    >
      <header className="WorkExperience__header">
        <h2 className="WorkExperience__title">Work Experience</h2>
        <p className="WorkExperience__subtitle">
          Roles, teams, stack, and measurable outcomes.
        </p>
      </header>

      <ul className="WorkExperience__grid" role="list">
        {items.map((x, i) => {
          const headingId = `${slugify(`${x.company}-${x.role}`)}-${i}`;
          const title = x.company;
          const titleLink = x.companyUrl || undefined;

          return (
            <li
              key={`${x.company}-${x.role}-${x.period}`}
              className={`WorkExperience__item${x.wide ? " is-wide" : ""}`}
            >
              <article
                className="project-card"
                aria-labelledby={headingId}
                itemScope
                itemType="https://schema.org/Organization"
              >
                <div className="project-card__head">
                  <h3
                    id={headingId}
                    className="project-card__title"
                    itemProp="name"
                  >
                    {titleLink ? (
                      <a
                        href={titleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open: ${title}`}
                        itemProp="url"
                      >
                        {title}
                      </a>
                    ) : (
                      <span>{title}</span>
                    )}
                  </h3>
                  <p className="project-card__meta">
                    <span>{x.role}</span>
                    <span aria-hidden="true"> · </span>
                    <time>{x.period}</time>
                  </p>
                </div>

                <p className="project-card__summary" itemProp="description">
                  {[
                    x.team ? `${x.team}` : "",
                    x.company ? ` ${x.company}` : "",
                    x.location ? ` - ${x.location}` : "",
                  ].join("")}
                  {x.summary ? ` - ${x.summary}` : ""}
                </p>

                {x.highlights.length > 0 && (
                  <ul className="project-card__highlights">
                    {x.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}

                <div className="project-card__tags">
                  {x.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                {x.companyUrl && (
                  <p className="project-card__links">
                    <a
                      href={x.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`Open company site: ${x.company}`}
                    >
                      Company
                    </a>
                  </p>
                )}
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
