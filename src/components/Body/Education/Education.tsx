"use client";

import React from "react";
import "./Education.scss";

export default function CoreCompetencies() {
  return (
    <section className="competenciesCard" aria-labelledby="competencies-title">
      <header className="competenciesCardHeader">
        <span aria-hidden="true" className="competenciesCardIcon">
          💡
        </span>
        <h3 id="competencies-title" className="competenciesCardTitle">
          Education
        </h3>
      </header>

      <ul className="competenciesCardList" role="list">
        <li tabIndex={0}>
          <span className="competenciesCheck" aria-hidden="true" />
          <span className="competenciesText">
            <strong>Postgraduate studies - Frontend Development</strong>{" "}
            <span className="competenciesDate">2023 – 2024</span> Poznan
            University of Technology, Poznan, Poland
          </span>
        </li>
        <li tabIndex={0}>
          <span className="competenciesCheck" aria-hidden="true" />
          <span className="competenciesText">
            <strong>Master’s degree - Business Management</strong>{" "}
            <span className="competenciesDate">2020 – 2022</span> WSB Merito
            University, Poznan, Poland
          </span>
        </li>
      </ul>
    </section>
  );
}
