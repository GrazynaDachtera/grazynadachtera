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
          <strong>Understand users:</strong> translate goals into clear UI flows
        </li>
        <li>
          <strong>Communicate clearly:</strong> concise tickets, readable PRs
        </li>
        <li>
          <strong>Team player:</strong> constructive code reviews & pairing
        </li>
        <li>
          <strong>Problem-solver:</strong> unblock with research & small spikes
        </li>
        <li>
          <strong>Growth mindset:</strong> continuous learning & feedback
        </li>
      </ul>
    </section>
  );
}
