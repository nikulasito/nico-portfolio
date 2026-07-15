"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label="Nico Alumbro home">
        <span className="brand-mark">N</span>
        <span className="brand-copy">
          Nico Alumbro
          <small>Developer / Creative Technologist</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="mailto:n.alumbro@gmail.com?subject=Project%20inquiry">
        Start a project <span aria-hidden="true">↗</span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <div className="mobile-menu-inner">
          {links.map((link, index) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {link.label}
            </a>
          ))}
          <a
            className="mobile-contact"
            href="mailto:n.alumbro@gmail.com?subject=Project%20inquiry"
            onClick={() => setOpen(false)}
          >
            Start a project ↗
          </a>
        </div>
      </div>
    </header>
  );
}
