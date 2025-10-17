"use client";

import React from "react";
import "./Languages.scss";

type Skill = {
  name: string;
  level: "Native" | "C2" | "C1" | "B2" | "B1" | "A2" | "A1";
  langCode?: string;
};

const SKILLS: readonly Skill[] = [
  { name: "English", level: "C1", langCode: "en" },
  { name: "Polish", level: "Native", langCode: "pl" },
] as const;

export default function Languages() {
  return (
    <section className="languageCard" aria-labelledby="languagesTitle">
      <header className="languageHeader">
        <span aria-hidden="true" className="languageIcon">
          <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path
              fill="currentColor"
              d="M7 4h10a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4h-2.6l-2.9 2.9A1 1 0 0 1 10 17v-2H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v.59l1.88-1.88A1 1 0 0 1 15.59 13H17a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H7Z"
            />
          </svg>
        </span>
        <h3 id="languagesTitle" className="languageTitle">
          Languages
        </h3>
      </header>

      <ul className="languageList" role="list">
        {SKILLS.map(({ name, level, langCode }) => (
          <li
            key={name}
            tabIndex={0}
            className="languageItem"
            aria-label={`${name}: ${level}`}
          >
            <span className="languageCheck" aria-hidden="true" />
            <span className="languageText" lang={langCode}>
              {name}
            </span>
            <span
              className="languageLevelBadge"
              title={`Proficiency: ${level}`}
            >
              {level}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
