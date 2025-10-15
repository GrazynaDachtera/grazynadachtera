"use client";

import React from "react";
import "./Languages.scss";

type Skill = {
  name: string;
  level: "Native" | "C2" | "C1" | "B2" | "B1" | "A2" | "A1";
  langCode?: string; // optional BCP-47 for a11y (e.g., "en", "pl")
};

const SKILLS: readonly Skill[] = [
  { name: "English", level: "C1", langCode: "en" },
  { name: "Polish", level: "Native", langCode: "pl" },
] as const;

export default function Languages() {
  return (
    <section className="expertiseCard" aria-labelledby="languagesTitle">
      <header className="expertiseHeader">
        <span aria-hidden="true" className="expertiseIcon">
          {/* chat-bubbles icon (inherits currentColor) */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M7 4h10a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4h-2.6l-2.9 2.9A1 1 0 0 1 10 17v-2H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v.59l1.88-1.88A1 1 0 0 1 15.59 13H17a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H7Z"
            />
          </svg>
        </span>
        <h3 id="languagesTitle" className="expertiseTitle">
          Languages
        </h3>
      </header>

      <ul className="expertiseList" role="list">
        {SKILLS.map(({ name, level, langCode }) => (
          <li
            key={name}
            tabIndex={0}
            className="skillItem"
            aria-label={`${name}: ${level}`}
          >
            <span className="expertiseCheck" aria-hidden="true" />
            <span className="expertiseText" lang={langCode}>
              {name}
            </span>
            <span className="levelBadge" title={`Proficiency: ${level}`}>
              {level}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
