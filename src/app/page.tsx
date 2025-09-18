"use client";

import React, { useRef } from "react";
import Header from "../components/Header/Header";
import AreasOfExpertise from "../components/Body/AreasOfExpertise/AreasOfExpertise";
import CoreCompetencies from "../components/Body/CoreCompetencies/CoreCompetencies";
/*import Education from "../components/Body/Education/Education";
import Languages from "../components/Body/Languages/Languages"; */
import Portfolio from "../components/Body/Portfolio/Portfolio";
/*import WorkExperience from "../components/Body/WorkExperience/WorkExperience"; */
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
          <div className="skillsGrid">
            <AreasOfExpertise />
            <CoreCompetencies />
          </div>
        </section>
      </div>
    </>
  );
}
