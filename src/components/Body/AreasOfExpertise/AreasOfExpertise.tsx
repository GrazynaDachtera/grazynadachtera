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
  "SQL (basics)",
] as const;

export default function AreasOfExpertise() {
  return (
    <section className="expertiseCard" aria-labelledby="expertiseTitle">
      <header className="expertiseHeader">
        <span aria-hidden="true" className="expertiseIcon" role="img">
          {/* green cog (tinted via currentColor) */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.2 7.2 0 0 0-1.63-.94l-.36-2.55A.5.5 0 0 0 13.88 1h-3.76a.5.5 0 0 0-.49.41l-.36 2.55c-.58.23-1.12.54-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.73 7.99a.5.5 0 0 0 .12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.13.22.4.31.64.22l2.39-.96c.5.4 1.05.72 1.63.94l.36 2.55c.05.24.26.41.49.41h3.76c.24 0 .44-.17.49-.41l.36-2.55c.58-.23 1.12-.54 1.63-.94l2.39.96c.24.09.51 0 .64-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58Zm-7.14 2.56a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"
            />
          </svg>
        </span>
        <h3 id="expertiseTitle" className="expertiseTitle">
          Areas of Expertise
        </h3>
      </header>

      <ul className="expertiseList" role="list">
        {SKILLS.map((skill) => (
          <li key={skill} tabIndex={0} className="skillItem">
            <span className="expertiseCheck" aria-hidden="true" />
            <span className="expertiseText">{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
