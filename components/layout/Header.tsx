"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LanguageSwitch } from "./LanguageSwitch";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#items", label: "Items" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact Us" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gold/10 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
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
        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-gold/30 md:hidden"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 4.5 : 0 }}
              className="h-0.5 w-4 bg-brown"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="h-0.5 w-4 bg-brown"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -4.5 : 0 }}
              className="h-0.5 w-4 bg-brown"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-gold/10 bg-cream md:hidden"
          >
            <div className="flex flex-col px-5 py-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-gold/10 py-3 text-sm text-brown-soft last:border-0 hover:text-gold-dark"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
