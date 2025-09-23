"use client";

import React from "react";
import "./Languages.scss";

export default function Languages() {
  return (
    <section className="languages-card" aria-labelledby="languages-title">
      <header className="languages-card__header">
        <div aria-hidden className="languages-card__icon">
          🗣️
        </div>
        <h3 id="languages-title" className="languages-card__title">
          Languages
        </h3>
      </header>

      <ul className="languages-card__list" role="list">
        <li>
          <span className="languages-card__name">English</span>
          <span className="languages-card__level" aria-label="C1 proficiency">
            C1
          </span>
        </li>
        <li>
          <span className="languages-card__name">Polish</span>
          <span
            className="languages-card__level"
            aria-label="Native proficiency"
          >
            native
          </span>
        </li>
        <li>
          <span className="languages-card__name">German</span>
          <span className="languages-card__level" aria-label="A1 proficiency">
            A1
          </span>
        </li>
      </ul>
    </section>
  );
}
