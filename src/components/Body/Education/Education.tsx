"use client";

import React from "react";
import "./Education.scss";

export default function Education() {
  return (
    <section className="education-card" aria-labelledby="education-title">
      <header className="education-card__header">
        <div aria-hidden className="education-card__icon">
          🎓
        </div>
        <h3 id="education-title" className="education-card__title">
          Education
        </h3>
      </header>

      <ul className="education-card__timeline" role="list">
        <li className="education-card__item">
          <div className="education-card__content">
            <strong className="education-card__degree">
              Postgraduate studies - Frontend Development
            </strong>
            <span className="education-card__school">
              <span className="education-card__institution">
                Poznan University of Technology
              </span>
              , <span className="education-card__city">Poznan</span>,{" "}
              <span className="education-card__country">Poland</span>
            </span>
          </div>
          <time className="education-card__dates" aria-label="2023 to 2024">
            2023 – 2024
          </time>
        </li>

        <li className="education-card__item">
          <div className="education-card__content">
            <strong className="education-card__degree">
              Master’s degree - Business Management
            </strong>
            <span className="education-card__school">
              <span className="education-card__institution">
                WSB Merito University
              </span>
              , <span className="education-card__city">Poznan</span>,{" "}
              <span className="education-card__country">Poland</span>
            </span>
          </div>
          <time className="education-card__dates" aria-label="2020 to 2022">
            2020 – 2022
          </time>
        </li>
      </ul>
    </section>
  );
}
