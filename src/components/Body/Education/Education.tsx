"use client";

import React from "react";
import "./Education.scss";

export default function CoreCompetencies() {
  return (
    <section className="competenciesCard" aria-labelledby="competencies-title">
      <header className="competenciesCardHeader">
        {/* mortarboard icon (inline SVG for zero deps) */}
        <span aria-hidden="true" className="competenciesCardIcon" role="img">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M12 3 2 8l10 5 9-4.5V14h1V8L12 3Zm-6 8.4V14c0 2.21 3.58 4 6 4s6-1.79 6-4v-2.6l-6 3-6-3Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <h3 id="competencies-title" className="competenciesCardTitle">
          Education
        </h3>
      </header>

      <ul className="competenciesCardList" role="list">
        <li tabIndex={0} className="eduItem">
          <span className="competenciesCheck" aria-hidden="true" />
          <div className="eduContent">
            <div className="eduHeader">
              <strong className="eduTitle">
                Postgraduate studies – Frontend Development
              </strong>
              <time className="datePill" aria-label="Years attended">
                2023 – 2024
              </time>
            </div>
            <p className="eduMeta">
              Poznan University of Technology, Poznan, Poland
            </p>
          </div>
        </li>

        <li tabIndex={0} className="eduItem">
          <span className="competenciesCheck" aria-hidden="true" />
          <div className="eduContent">
            <div className="eduHeader">
              <strong className="eduTitle">
                Master’s degree – Business Management
              </strong>
              <time className="datePill" aria-label="Years attended">
                2020 – 2022
              </time>
            </div>
            <p className="eduMeta">WSB Merito University, Poznan, Poland</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
