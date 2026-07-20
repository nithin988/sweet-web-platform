"use client";

import { LanguageSwitch } from "./LanguageSwitch";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#items", label: "Items" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact Us" },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 h-16 w-full border-b border-gold/10 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-5">
        <span className="font-display text-lg tracking-tight text-brown sm:text-xl">
          Sri Lakshmi Srinivasa
        </span>
        <nav className="hidden gap-6 text-sm text-brown-soft md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gold-dark transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <LanguageSwitch />
      </div>
    </header>
  );
}
