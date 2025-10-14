"use client";

import React from "react";
import "./Languages.scss";

export default function Languages() {
  return (
    <section className="languagesCard" aria-labelledby="languages-title">
      <header className="languagesCardHeader">
        <div aria-hidden className="languagesCardIcon">
          🗣️
        </div>
        <h3 id="languages-title" className="languagesCardTitle">
          Languages
        </h3>
      </header>

      <ul className="languagesCardList" role="list">
        <li>
          <span className="languagesCardName">English</span>
          <span className="languagesCardLevel" aria-label="C1 proficiency">
            C1
          </span>
        </li>
        <li>
          <span className="languagesCardName">Polish</span>
          <span className="languagesCardLevel" aria-label="Native proficiency">
            native
          </span>
        </li>
      </ul>
    </section>
  );
}
