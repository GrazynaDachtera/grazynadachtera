"use client";

import React from "react";
import "./Languages.scss";

type LevelCode = "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "NATIVE";

const LEVELS: Record<LevelCode, { label: string; value: number }> = {
  A1: { label: "Beginner", value: 20 },
  A2: { label: "Elementary", value: 35 },
  B1: { label: "Intermediate", value: 55 },
  B2: { label: "Upper-intermediate", value: 70 },
  C1: { label: "Advanced", value: 85 },
  C2: { label: "Mastery", value: 95 },
  NATIVE: { label: "Native", value: 100 },
};

const LANGS = [
  { name: "English", code: "C1" as LevelCode },
  { name: "Polish", code: "NATIVE" as LevelCode },
];

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
        {LANGS.map(({ name, code }) => {
          const level = LEVELS[code];
          const cefr = code === "NATIVE" ? "Native" : code; // keep CEFR code for display
          const cefrFull =
            code === "NATIVE" ? "Native" : `${cefr} ${level.label}`;
          return (
            <li key={name} className="languageItem">
              <span className="languagesCardName">{name}</span>

              <span
                className="languagesCardLevel"
                aria-label={`${name}: ${cefrFull}`}
              >
                {code === "NATIVE" ? (
                  "native"
                ) : (
                  <abbr title={cefrFull} className="languagesCardAbbr">
                    {cefr}
                  </abbr>
                )}
              </span>

              <meter
                className="languagesCardMeter"
                min={0}
                max={100}
                value={level.value}
                aria-label={`${name} proficiency`}
                aria-valuetext={cefrFull}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
