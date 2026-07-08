"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Uses", href: "#uses" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [glowEnabled, setGlowEnabled] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.glow = glowEnabled ? "on" : "off";
    window.dispatchEvent(new CustomEvent("portfolio-glow", { detail: glowEnabled }));
  }, [glowEnabled]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-outline-variant/10 bg-background/80 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-xl shadow-black/20" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-container-max items-center justify-between px-gutter">
        <a
          href="#home"
          className="font-display text-headline-sm font-bold tracking-tighter text-on-background"
          onClick={closeMenu}
        >
          Nico
        </a>

        <div className="hidden items-center gap-stack-md md:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={
                index === 0
                  ? "font-semibold text-primary transition-colors"
                  : "text-on-surface-variant transition-colors hover:text-on-surface"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-stack-sm">
          <a
            href="mailto:hello@nico.dev?subject=Resume%20Request"
            className="mr-2 hidden items-center gap-2 rounded-lg border border-outline-variant/20 bg-surface-container-high/50 px-4 py-1.5 font-semibold text-on-surface transition-colors hover:bg-surface-container-high md:flex"
            title="Add your resume as public/resume.pdf"
          >
            <Icon className="text-[20px]">description</Icon>
            Resume
          </a>
          <button
            type="button"
            aria-label={glowEnabled ? "Disable ambient glow" : "Enable ambient glow"}
            aria-pressed={glowEnabled}
            onClick={() => setGlowEnabled((current) => !current)}
            className="rounded-lg p-2 transition-colors hover:bg-surface-variant/20"
            title="Toggle ambient glow"
          >
            <Icon>{glowEnabled ? "dark_mode" : "light_mode"}</Icon>
          </button>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="rounded-lg p-2 transition-colors hover:bg-surface-variant/20 md:hidden"
          >
            <Icon>{menuOpen ? "close" : "menu"}</Icon>
          </button>
          <a
            href="#projects"
            aria-label="View projects"
            className="hidden rounded-lg p-2 transition-colors hover:bg-surface-variant/20 md:block"
          >
            <Icon>terminal</Icon>
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-outline-variant/10 bg-background/95 px-gutter py-4 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-container-max flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@nico.dev?subject=Resume%20Request"
              onClick={closeMenu}
              className="mt-2 flex items-center gap-2 rounded-lg border border-outline-variant/20 bg-surface-container-high/50 px-3 py-3 font-semibold text-on-surface"
            >
              <Icon className="text-[20px]">description</Icon>
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
