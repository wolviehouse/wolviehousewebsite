"use client";

import { useState } from "react";
import Link from "next/link";

const areaLinks = [
  ["Trade", "/trade"],
  ["Brands", "/brands"],
  ["Community", "/community"],
  ["Consulting", "/consulting"],
  ["Ventures", "/ventures"]
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="headerInner shell">
        <Link href="/" className="wordmark" aria-label="Wolvie home">
          WOLVIE<span>.</span>
        </Link>

        <button
          className="menuButton"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <nav className={`mainNav ${open ? "open" : ""}`}>
          <Link href="/#about" onClick={() => setOpen(false)}>About</Link>
          <div className="navDropdown">
            <button className="navDropdownButton">What we do</button>
            <div className="navDropdownMenu">
              {areaLinks.map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)}>
                  {label}<span>↗</span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/#approach" onClick={() => setOpen(false)}>Approach</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
