"use client";

import Image from "next/image";
import React from "react";
import "./Header.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

// ---- types ----
type ContactType = "phone" | "email" | "github" | "linkedin";
type Contact = { type: ContactType; label: string; href: string };

// ---- data (edit as needed) ----
const CONTACTS: Contact[] = [
  { type: "phone", label: "+48 733 828 924", href: "tel:+48733828924" },
  {
    type: "email",
    label: "grazynadachtera@gmail.com",
    href: "mailto:grazynadachtera@gmail.com",
  },
  {
    type: "github",
    label: "github.com/grazynadachtera",
    href: "https://github.com/grazynadachtera",
  },
  {
    type: "linkedin",
    label: "linkedin.com/in/grazynadachtera",
    href: "https://linkedin.com/in/grazynadachtera",
  },
];

// light, ATS-friendly one-liner. keep it to ~140 chars.
const TAGLINE =
  "Frontend Developer (React/TypeScript) with a UX focus; turns Figma into accessible, fast UIs and ships clean, readable code.";

function Icon({ type }: { type: ContactType }) {
  // simple inline SVGs (no extra libs); sized via CSS
  if (type === "phone")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11 11 0 003.4.54 1 1 0 011 1v3.6a1 1 0 01-1 1A18.8 18.8 0 013 5a1 1 0 011-1h3.6a1 1 0 011 1 11 11 0 00.54 3.4 1 1 0 01-.25 1z" />
      </svg>
    );
  if (type === "email")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6a2 2 0 012-2h14a2 2 0 012 2v.2l-9 6.3-9-6.3V6zm0 2.8l8.5 5.9a1 1 0 001.1 0L21 8.8V18a2 2 0 01-2 2H5a2 2 0 01-2-2V8.8z" />
      </svg>
    );
  if (type === "github")
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.6-4.1-1.6a3.2 3.2 0 00-1.3-1.8c-1-.7.1-.7.1-.7a2.5 2.5 0 011.8 1.2 2.6 2.6 0 003.5 1 2.6 2.6 0 01.8-1.7c-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 011.2-3.2 4.4 4.4 0 01.1-3.2s1-.3 3.2 1.2a11 11 0 015.8 0C16 4.7 17 5 17 5a4.4 4.4 0 01.1 3.2 4.7 4.7 0 011.2 3.2c0 4.7-2.8 5.7-5.5 6a3 3 0 01.9 2.3V23c0 .3.2.7.8.6A12 12 0 0012 .5z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.4 20.5h-3.5v-6.4c0-1.6-.6-2.7-2-2.7-1.1 0-1.7.7-2 1.4-.1.3-.1.7-.1 1.1v6.6H9.3s.1-10.7 0-11.8h3.5v1.7c.5-.8 1.4-2 3.5-2 2.6 0 4.6 1.7 4.6 5.4v6.7zM5 7.2a2 2 0 110-4.1 2 2 0 010 4.1zM3.2 20.5h3.6V8.7H3.2v11.8z" />
    </svg>
  );
}

export default function Header() {
  return (
    <header
      className={`resume-header ${poppins.className}`}
      aria-label="Introduction"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="resume-header__photo">
        {/* Put your file at public/images/profile.jpg */}
        <Image
          src="/profileImage.jpg"
          alt="Grażyna Dachtera headshot"
          width={128}
          height={128}
          priority
        />
      </div>

      <div className="resume-header__content">
        <h1 className="resume-header__name" itemProp="name">
          Grażyna Dachtera
        </h1>

        <p className="resume-header__title">
          <span itemProp="jobTitle">
            Frontend Developer — React / TypeScript
          </span>
          <span className="sep"> · </span>
          <span>Associate IT Specialist</span>
        </p>

        <p className="resume-header__tagline">{TAGLINE}</p>

        <ul className="resume-header__contacts" role="list">
          {CONTACTS.map(({ type, label, href }) => (
            <li key={type} className="resume-header__contact">
              <Icon type={type} />
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noreferrer noopener" : undefined
                }
                itemProp={
                  type === "email"
                    ? "email"
                    : type === "phone"
                    ? "telephone"
                    : "sameAs"
                }
              >
                <span className="sr-only">{type}: </span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
