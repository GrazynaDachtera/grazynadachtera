"use client";

import React from "react";
import "./WorkExperience.scss";

/* ---------- Types ---------- */
export type Experience = {
  company: string;
  companyUrl?: string;
  role: string;
  team?: string;
  location?: string;
  period: string; // e.g. "09.2024 – 03.2025"
  summary: string;
  tags: readonly string[];
  highlights: readonly string[];
  project?: { title: string; url: string };
  order: number;
  wide?: boolean;
};

/* Helper to ensure each object conforms to Experience at compile time */
const e = (x: Experience) => x;

/* ---------- Data (from your resume) ---------- */
const EXPERIENCES = [
  e({
    company: "Pro Advisor Group",
    companyUrl: undefined, // no official site provided in the CV section
    role: "Web Developer",
    team: "Development",
    location: "Brussels, Belgium",
    period: "09.2024 – 03.2025",
    summary:
      "Built responsive UI in a Next/React stack, collaborating closely with designers and assisting with Node.js on the server side.",
    tags: ["HTML", "SCSS", "TypeScript", "React", "Node.js", "APIs", "Figma"],
    highlights: [
      "Built user interfaces with HTML, SCSS, TypeScript, and React, ensuring responsive and mobile-friendly designs.",
      "Worked with designers to convert Figma mockups into functional web pages.",
      "Integrated web apps with databases and APIs; assisted with server-side development in Node.js.",
      "Reviewed code and joined team discussions to improve quality and project outcomes.",
      "Project: globalproperty-group.com — Created and improved a user-focused site; delivered responsive interfaces, integrated APIs, and ensured cross-browser compatibility for a luxury real-estate investment company.",
    ],
    project: {
      title: "globalproperty-group.com",
      url: "https://globalproperty-group.com/",
    },
    order: 1,
    wide: true,
  }),
  e({
    company: "summ-it inc",
    companyUrl: "https://summ-it.pl",
    role: "Associate IT Specialist",
    team: "Managed Service",
    location: "Poznań, Poland",
    period: "11.2023 – 09.2024",
    summary:
      "Website audit & implementation, UX/UI testing, and IT operations across SQL Server, Windows Server, and Active Directory.",
    tags: [
      "Audit",
      "Performance",
      "A11y",
      "SEO",
      "UX/UI",
      "SQL Server",
      "Windows Server",
      "Active Directory",
    ],
    highlights: [
      "Performed a full website audit to improve performance, accessibility, best practices, and SEO (raised summ-it.pl performance from 75–80% to 99%).",
      "Tested new features and UX/UI changes to ensure a seamless user experience.",
      "Provided L1/L2 support for SQL Server issues; maintained server infrastructure including Windows Server backups and updates.",
      "Managed Active Directory (user creation, signatures, license assignments, and group organization for international clients).",
    ],
    project: { title: "summ-it.pl", url: "https://summ-it.pl" },
    order: 2,
    wide: true,
  }),
  e({
    company: "Allegro Ltd.",
    companyUrl: "https://allegro.pl",
    role: "Customer Service Technical Support",
    team: "Customer Experience",
    location: "Poznań, Poland",
    period: "01.2022 – 10.2022",
    summary:
      "Customer support within the Customer Experience team (contact-center tooling and processes).",
    tags: ["Customer Support"],
    highlights: [],
    order: 3,
    wide: true,
  }),
] as const satisfies readonly Experience[];

/* ---------- UI ---------- */
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
          const titleLink = x.companyUrl ?? x.project?.url; // prefer company site; fall back to project
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
                    x.location ? ` — ${x.location}` : "",
                  ].join("")}
                  {x.summary ? ` — ${x.summary}` : ""}
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

                {(x.companyUrl || x.project) && (
                  <p className="project-card__links">
                    {x.companyUrl && (
                      <a
                        href={x.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`Open company site: ${x.company}`}
                      >
                        Company
                      </a>
                    )}
                    {x.companyUrl && x.project && (
                      <span aria-hidden="true" className="dot">
                        •
                      </span>
                    )}
                    {x.project && (
                      <a
                        href={x.project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`Open project: ${x.project.title}`}
                      >
                        Project
                      </a>
                    )}
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

/* ---------- Helpers ---------- */
function slugify(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
