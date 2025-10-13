"use client";

import React from "react";
import "./AreasOfExpertise.scss";

const SKILLS = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS / SCSS",
  "React",
  "Next.js",
  "Git",
  "Accessibility (WCAG)",
  "Performance & SEO",
  "SQL (basics)",
] as const;

export default function AreasOfExpertise() {
  return (
    <section className="expertiseCard" aria-labelledby="expertiseTitle">
      <header className="expertiseHeader">
        <span aria-hidden="true" className="expertiseIcon">
          ⚙️
        </span>
        <h3 id="expertiseTitle" className="expertiseTitle">
          Areas of Expertise
        </h3>
      </header>

      <ul className="expertiseList" role="list">
        {SKILLS.map((skill) => (
          <li key={skill} tabIndex={0}>
            <span className="expertiseCheck" aria-hidden="true" />
            <span className="expertiseText">{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
