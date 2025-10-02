"use client";

import React from "react";
import "./CoreCompetencies.scss";

export default function CoreCompetencies() {
  return (
    <section className="competencies-card" aria-labelledby="competencies-title">
      <header className="competencies-card__header">
        <div aria-hidden className="competencies-card__icon">
          💡
        </div>
        <h3 id="competencies-title" className="competencies-card__title">
          Core Competencies
        </h3>
      </header>

      <ul className="competencies-card__list" role="list">
        <li>
          <strong>React & TypeScript Development:</strong> building responsive,
          accessible, and scalable web applications
        </li>
        <li>
          <strong>Performance & Accessibility:</strong> optimizing user
          experience with fast, inclusive, and SEO-friendly solutions
        </li>
        <li>
          <strong>Collaboration & Communication:</strong> clear PRs,
          constructive feedback, and effective teamwork across disciplines
        </li>
        <li>
          <strong>Adaptability & Growth Mindset:</strong> eager learner, open to
          feedback, and quick to master new tools
        </li>
      </ul>
    </section>
  );
}
