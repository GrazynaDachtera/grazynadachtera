"use client";

import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import "./WorkExperience.scss";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

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
  logo?: { src: string; alt?: string; bg?: string; href?: string };
};

const e = (x: Experience) => x;

const EXPERIENCES = [
  e({
    company: "Pro Advisor Group",
    companyUrl: "https://globalproperty-group.com/",
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
    logo: { src: "/logo4.png", alt: "Pro Advisor Group logo" },
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
      "M365",
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
    logo: { src: "/logo5.png", alt: "summ-it logo" },
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
    logo: { src: "/logo6.jpg", alt: "allegro logo" },
  }),
] as const satisfies readonly Experience[];

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

function ExternalLink({
  href,
  children,
  className,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
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

function CompanyLogo({
  logo,
  title,
  href,
}: {
  logo?: Experience["logo"];
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
    ? ({ background: logo.bg } as React.CSSProperties)
    : undefined;

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`projectCardBrand ${
        !logo?.src ? "projectCardBrandFallback" : ""
      }`}
      aria-label={`Open ${title} website`}
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

export default function WorkExperience() {
  const items = [...EXPERIENCES].sort((a, b) => a.order - b.order);

  return (
    <section
      id="work-experience"
      className={`workExperienceSection ${poppins.className}`}
      aria-label="Work experience"
    >
      <header className="workExperienceHeader">
        <h2 className="workExperienceTitle accent-gradient">Work Experience</h2>
        <p className="workExperienceSubtitle">
          Roles, teams, stack, and measurable outcomes.
        </p>
      </header>

      <ul className="portfolioGrid" role="list">
        {items.map((x, i) => {
          const headingId = `${slugify(`${x.company}-${x.role}`)}-${i}`;
          const summaryId = `${headingId}-summary`;
          return (
            <li
              key={`${x.company}-${x.role}-${x.period}`}
              className={`portfolioItem${x.wide ? " isWide" : ""}`}
            >
              <article
                className="projectCard"
                aria-labelledby={headingId}
                aria-describedby={summaryId}
                itemScope
                itemType="https://schema.org/Organization"
              >
                <span className="projectCardAccent" aria-hidden="true" />

                <header className="projectCardHead">
                  <CompanyLogo
                    logo={x.logo}
                    title={x.company}
                    href={x.logo?.href ?? x.companyUrl}
                  />
                  <div className="projectCardHeadText">
                    <h3
                      id={headingId}
                      className="projectCardTitle"
                      itemProp="name"
                    >
                      {x.companyUrl ? (
                        <ExternalLink
                          href={x.companyUrl}
                          ariaLabel={`Open company site: ${x.company}`}
                        >
                          {x.company}
                        </ExternalLink>
                      ) : (
                        x.company
                      )}
                    </h3>

                    <p className="projectCardMeta">
                      <span className="projectCardRole">{x.role}</span>
                      <span aria-hidden="true" className="projectCardDot">
                        •
                      </span>
                      <time itemProp="datePublished" dateTime={x.period}>
                        {x.period}
                      </time>
                    </p>

                    <p
                      id={summaryId}
                      className="projectCardSummary"
                      itemProp="description"
                    >
                      {[
                        x.team ? `${x.team}` : "",
                        x.location ? ` — ${x.location}` : "",
                      ].join("")}{" "}
                      {x.summary}
                    </p>
                  </div>
                </header>

                <div className="projectCardContent">
                  {x.highlights.length > 0 && (
                    <ul className="projectCardHighlights" role="list">
                      {x.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <footer className="projectCardFooter">
                  <div className="projectCardTags" aria-label="Tech stack">
                    {x.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>

                  {x.companyUrl && (
                    <nav
                      className="projectCardActions"
                      aria-label="Company link"
                    >
                      <ExternalLink
                        href={x.companyUrl}
                        className="btn btn--ghost"
                        ariaLabel={`Open company site: ${x.company}`}
                      >
                        Company
                      </ExternalLink>
                    </nav>
                  )}
                </footer>
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
