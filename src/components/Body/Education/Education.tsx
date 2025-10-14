"use client";

import React from "react";
import "./Education.scss";

export default function Education() {
  return (
    <section className="educationCard" aria-labelledby="education-title">
      <header className="educationCardHeader">
        <div aria-hidden className="educationCardIcon">
          🎓
        </div>
        <h3 id="education-title" className="educationCardTitle">
          Education
        </h3>
      </header>

      <ul className="educationCardTimeline" role="list">
        <li className="educationCardItem">
          <div className="educationCardContent">
            <strong className="educationCardDegree">
              Postgraduate studies - Frontend Development
            </strong>
            <span className="educationCardSchool">
              <span className="educationCardInstitution">
                Poznan University of Technology
              </span>
              , <span className="educationCardCity">Poznan</span>,{" "}
              <span className="educationCardCountry">Poland</span>
            </span>
          </div>
          <time className="educationCardDates" aria-label="2023 to 2024">
            2023 – 2024
          </time>
        </li>

        <li className="educationCardItem">
          <div className="educationCardContent">
            <strong className="educationCardDegree">
              Master’s degree - Business Management
            </strong>
            <span className="educationCardSchool">
              <span className="educationCardInstitution">
                WSB Merito University
              </span>
              , <span className="educationCardCity">Poznan</span>,{" "}
              <span className="educationCardCountry">Poland</span>
            </span>
          </div>
          <time className="educationCardDates" aria-label="2020 to 2022">
            2020 – 2022
          </time>
        </li>
      </ul>
    </section>
  );
}
