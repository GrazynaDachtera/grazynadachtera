"use client";

import React, { useRef } from "react";
import Header from "../components/Header/Header";
import AreasOfExpertise from "../components/Body/AreasOfExpertise/AreasOfExpertise";
import CoreCompetencies from "../components/Body/CoreCompetencies/CoreCompetencies";
import Education from "../components/Body/Education/Education";
import Languages from "../components/Body/Languages/Languages";
import Portfolio from "../components/Body/Portfolio/Portfolio";
import WorkExperience from "../components/Body/WorkExperience/WorkExperience";
import "../app/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export default function ResumeHomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={scrollRef} style={{ overflow: "hidden" }}>
        <section className={`ResumeGrazynaDachtera ${poppins.className}`}>
          <Header />
          <Portfolio />
          <WorkExperience />

          {/* Skills section with the same header layout as Work Experience */}
          <section id="skills" className="Skills" aria-label="Skills">
            <header className="Skills__header">
              <h2 className="Skills__title">Skills</h2>
              <p className="Skills__subtitle">
                Areas of expertise, core competencies, education, and languages.
              </p>
            </header>

            {/* Keep existing grid class but scope it so it uses the section container */}
            <div className="Skills__grid skillsGrid">
              <AreasOfExpertise />
              <CoreCompetencies />
              <Education />
              <Languages />
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
