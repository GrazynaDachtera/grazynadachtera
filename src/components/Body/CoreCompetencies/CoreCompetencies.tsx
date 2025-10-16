"use client";

import React from "react";
import "./CoreCompetencies.scss";

export default function CoreCompetencies() {
  return (
    <section className="competenciesCard" aria-labelledby="competencies-title">
      <header className="competenciesCardHeader">
        <span aria-hidden="true" className="competenciesCardIcon" role="img">
          {/* “skills” sparkle icon (green via CSS) */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
          >
            <path
              d="M12 2l2.2 4.8L19 9l-4.8 2.2L12 16l-2.2-4.8L5 9l4.8-2.2L12 2Zm7 9.5 1.2 2.6 2.6 1.2-2.6 1.2L19 19.1l-1.2-2.6-2.6-1.2 2.6-1.2L19 11.5ZM4 12.5l1 2.2 2.2 1-2.2 1L4 19l-1-2.2-2.2-1L3 14.7 4 12.5Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <h3 id="competencies-title" className="competenciesCardTitle">
          Core Competencies
        </h3>
      </header>

      <ul className="competenciesCardList" role="list">
        <li tabIndex={0}>
          <span className="competenciesCheck" aria-hidden="true" />
          <span className="competenciesText">
            <strong>React and TypeScript Development:</strong> delivers
            responsive, accessible, and scalable user interfaces.
          </span>
        </li>
        <li tabIndex={0}>
          <span className="competenciesCheck" aria-hidden="true" />
          <span className="competenciesText">
            <strong>Performance and Accessibility:</strong> drives measurable
            gains in site speed, Lighthouse scores, SEO, and WCAG compliance.
          </span>
        </li>
        <li tabIndex={0}>
          <span className="competenciesCheck" aria-hidden="true" />
          <span className="competenciesText">
            <strong>Collaboration and Communication:</strong> clear
            communication, clean PRs, and smooth collaboration with designers
            and developers.
          </span>
        </li>
        <li tabIndex={0}>
          <span className="competenciesCheck" aria-hidden="true" />
          <span className="competenciesText">
            <strong>Adaptability and Growth Mindset:</strong> eager learner,
            receptive to feedback, and quick to master new tools and frameworks.
          </span>
        </li>
      </ul>
    </section>
  );
}
