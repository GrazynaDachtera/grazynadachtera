"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import "./Header.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

type ContactType = "phone" | "email" | "github" | "linkedin";

type Contact = {
  type: ContactType;
  label: string;
  href: string;
  copy?: string;
};

const CONTACTS: Contact[] = [
  {
    type: "phone",
    label: "+48 733 828 924",
    href: "tel:+48733828924",
    copy: "+48 733 828 924",
  },
  {
    type: "github",
    label: "github.com/grazynadachtera",
    href: "https://github.com/grazynadachtera",
  },
  {
    type: "email",
    label: "grazynadachtera@gmail.com",
    href: "mailto:grazynadachtera@gmail.com",
    copy: "grazynadachtera@gmail.com",
  },
  {
    type: "linkedin",
    label: "linkedin.com/in/grazynadachtera",
    href: "https://linkedin.com/in/grazynadachtera",
  },
];

const TAGLINE = [
  "I am a Frontend Developer (JavaScript • Next.js • TypeScript) with strong aesthetic judgment.",
  "I translate Figma designs into minimalist, clarity-first, standards-compliant interfaces and deliver clean, maintainable code.",
  "Clients value my speed and the intuitive feel of my sites.",
].join("\n");

const EMAIL = "grazynadachtera@gmail.com";
const SUBJECT = "Frontend role — Grażyna Dachtera";
const BODY =
  "Hi Grażyna,\n\nI'm reaching out about a Frontend/Next.js role. Would you be available for a quick chat?\n\nBest,\n";

const ICON_PATHS: Record<ContactType, string> = {
  phone:
    "M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11 11 0 003.4.54 1 1 0 011 1v3.6a1 1 0 01-1 1A18.8 18.8 0 013 5a1 1 0 011-1h3.6a1 1 0 011 1 11 11 0 00.54 3.4 1 1 0 01-.25 1z",
  email:
    "M3 6a2 2 0 012-2h14a2 2 0 012 2v.2l-9 6.3-9-6.3V6zm0 2.8l8.5 5.9a1 1 0 001.1 0L21 8.8V18a2 2 0 01-2 2H5a2 2 0 01-2-2V8.8z",
  github:
    "M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.6-4.1-1.6a3.2 3.2 0 00-1.3-1.8c-1-.7.1-.7.1-.7a2.5 2.5 0 011.8 1.2 2.6 2.6 0 003.5 1 2.6 2.6 0 01.8-1.7c-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 011.2-3.2 4.4 4.4 0 01.1-3.2s1-.3 3.2 1.2a11 11 0 015.8 0C16 4.7 17 5 17 5a4.4 4.4 0 01.1 3.2 4.7 4.7 0 011.2 3.2c0 4.7-2.8 5.7-5.5 6a3 3 0 01.9 2.3V23c0 .3.2.7.8.6A12 12 0 0012 .5z",
  linkedin:
    "M20.4 20.5h-3.5v-6.4c0-1.6-.6-2.7-2-2.7-1.1 0-1.7.7-2 1.4-.1.3-.1.7-.1 1.1v6.6H9.3s.1-10.7 0-11.8h3.5v1.7c.5-.8 1.4-2 3.5-2 2.6 0 4.6 1.7 4.6 5.4v6.7zM5 7.2a2 2 0 110-4.1 2 2 0 010 4.1zM3.2 20.5h3.6V8.7H3.2v11.8z",
};

const ITEM_PROP: Record<ContactType, "email" | "telephone" | "sameAs"> = {
  email: "email",
  phone: "telephone",
  github: "sameAs",
  linkedin: "sameAs",
};

const isExternal = (href: string) => href.startsWith("http");
const externalLinkProps = (href: string) =>
  isExternal(href)
    ? { target: "_blank", rel: "me noreferrer noopener" as const }
    : {};

const classNames = {
  header: "resumeHeader",
  photo: "resumeHeaderPhoto",
  content: "resumeHeaderContent",
  role: "resumeHeaderRole",
  availability: "resumeHeaderAvailability",
  tagline: "resumeHeaderTagline",
  cta: "resumeHeaderCta",
  contacts: "resumeHeaderContacts",
  contact: "resumeHeaderContact",
  toast: "toast",
};

function Icon({ type }: { type: ContactType }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={ICON_PATHS[type]} />
    </svg>
  );
}

function ContactItem({
  contact,
  onCopy,
}: {
  contact: Contact;
  onCopy: (text?: string) => void;
}) {
  const { type, label, href, copy } = contact;
  return (
    <li className={classNames.contact} key={href}>
      <Icon type={type} />
      <a href={href} {...externalLinkProps(href)} itemProp={ITEM_PROP[type]}>
        <span className="sr-only">{type}: </span>
        {label}
      </a>
      {copy && (
        <button
          className="copy"
          type="button"
          aria-label={`Copy ${type}`}
          onClick={() => onCopy(copy)}
        >
          ⧉
        </button>
      )}
    </li>
  );
}

export default function Header() {
  const [toast, setToast] = useState<string | null>(null);

  const gmailComposeUrl = useMemo(() => {
    const base = "https://mail.google.com/mail/?view=cm&fs=1";
    return `${base}&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(
      SUBJECT
    )}&body=${encodeURIComponent(BODY)}`;
  }, []);

  const jsonLd = useMemo(
    () =>
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Grażyna Dachtera",
        jobTitle: "Frontend Developer (React/Next.js)",
        image: "/profileImage1.jpg",
        email: `mailto:${EMAIL}`,
        telephone: "+48 733 828 924",
        sameAs: [
          "https://github.com/grazynadachtera",
          "https://linkedin.com/in/grazynadachtera",
        ],
      }),
    []
  );

  async function handleCopy(text?: string) {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setToast("Copied!");
    } catch {
      setToast("Press ⌘/Ctrl+C to copy");
    }
    window.setTimeout(() => setToast(null), 1600);
  }

  return (
    <header
      className={`${classNames.header} ${poppins.className}`}
      aria-label="Introduction"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className={`${classNames.photo} glow`}>
        <Image
          src="/profileImage1.jpg"
          alt="Grażyna Dachtera headshot"
          width={156}
          height={156}
          priority
          sizes="(max-width:520px) 144px, 156px"
          decoding="async"
        />
      </div>

      <div className={classNames.content}>
        <h1 className="accent-gradient" itemProp="name">
          Grażyna Dachtera
        </h1>

        <p className={classNames.role}>
          <span className="badge" itemProp="jobTitle">
            Frontend Developer (React/Next.js)
          </span>
          <span className="badge badge--sub">Figma → Prod fast</span>
        </p>

        <p className={classNames.availability} aria-label="Availability">
          <span className="chip">Open to Frontend & UI roles</span>
          <span className="chip">EU Remote · Hybrid in Warsaw</span>
          <span className="chip">CET (UTC+1)</span>
        </p>

        <ul
          className={`${classNames.tagline} taglineList`}
          aria-label="Summary"
        >
          {TAGLINE.split("\n").map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>

        <div className={classNames.cta}>
          <a
            className="btn btn--primary"
            href="/cv-grazyna-dachtera.pdf"
            download
          >
            Download CV
          </a>
          <a
            className="btn btn--ghost"
            href={gmailComposeUrl}
            {...externalLinkProps(gmailComposeUrl)}
            aria-label="Write an email in Gmail"
          >
            Write an email
          </a>
          <a
            className="btn btn--ghost"
            href="#portfolio"
            aria-label="Jump to portfolio section"
          >
            View portfolio ↓
          </a>
        </div>

        <ul className={classNames.contacts} aria-label="Contact links">
          {CONTACTS.map((c) => (
            <ContactItem contact={c} onCopy={handleCopy} key={c.href} />
          ))}
        </ul>
      </div>

      <div
        className={classNames.toast}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {toast}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </header>
  );
}
