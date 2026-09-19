"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { label: "About", href: "/#about" },
  { label: "What we do", href: "/#what-we-do" },
  { label: "Approach", href: "/#approach" },
  { label: "Updates", href: "/updates" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="siteHeaderInner shell">
        <Link className="wordmark" href="/" onClick={() => setOpen(false)}>
          WOLVIE<span>.</span>
        </Link>

        <nav className="nav">
          {nav.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="menuBtn"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="navMobile shell">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
