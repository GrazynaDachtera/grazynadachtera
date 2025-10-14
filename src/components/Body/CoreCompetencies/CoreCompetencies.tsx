"use client";

import React from "react";
import "./CoreCompetencies.scss";

export default function CoreCompetencies() {
  return (
    <section className="competenciesCard" aria-labelledby="competencies-title">
      <header className="competenciesCardHeader">
        <span aria-hidden="true" className="competenciesCardIcon">
          💡
        </span>
        <h3 id="competencies-title" className="competenciesCardTitle">
          Core Competencies
        </h3>
      </header>

      <ul className="competenciesCardList" role="list">
        <li tabIndex={0}>
          <span className="competenciesCheck" aria-hidden="true" />
          <span className="competenciesText">
            <strong>React &amp; TypeScript Development:</strong> building
            responsive, accessible, and scalable web applications
          </span>
        </li>
        <li tabIndex={0}>
          <span className="competenciesCheck" aria-hidden="true" />
          <span className="competenciesText">
            <strong>Performance &amp; Accessibility:</strong> optimizing user
            experience with fast, inclusive, and SEO-friendly solutions
          </span>
        </li>
        <li tabIndex={0}>
          <span className="competenciesCheck" aria-hidden="true" />
          <span className="competenciesText">
            <strong>Collaboration &amp; Communication:</strong> clear PRs,
            constructive feedback, and effective teamwork across disciplines
          </span>
        </li>
        <li tabIndex={0}>
          <span className="competenciesCheck" aria-hidden="true" />
          <span className="competenciesText">
            <strong>Adaptability &amp; Growth Mindset:</strong> eager learner,
            open to feedback, and quick to master new tools
          </span>
        </li>
      </ul>
    </section>
  );
}
