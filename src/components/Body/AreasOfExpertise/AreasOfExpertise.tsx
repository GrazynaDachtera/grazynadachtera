"use client";

import React from "react";
import "./AreasOfExpertise.scss";

export default function AreasOfExpertise() {
  return (
    <section className="areas-card" aria-labelledby="areas-title">
      <header className="areas-card__header">
        <div aria-hidden className="areas-card__icon">
          ⚙️
        </div>
        <h3 id="areas-title" className="areas-card__title">
          Areas of Expertise
        </h3>
      </header>

      <ul className="areas-card__list" role="list">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>HTML</li>
        <li>CSS / SCSS</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Git</li>
        <li>Accessibility (WCAG)</li>
        <li>Performance & SEO</li>
        <li>SQL (basics)</li>
      </ul>
    </section>
  );
}
