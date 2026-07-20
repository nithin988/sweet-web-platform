"use client";

import { useTranslations } from "next-intl";
import { LanguageSwitch } from "./LanguageSwitch";

export function Header() {
  const t = useTranslations("nav");

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gold/10 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <span className="font-display text-lg tracking-tight text-brown sm:text-xl">
          Sri Lakshmi Srinivasa
        </span>
        <nav className="hidden gap-6 text-sm text-brown-soft md:flex">
          <a href="#home" className="hover:text-gold-dark transition-colors">{t("home")}</a>
          <a href="#items" className="hover:text-gold-dark transition-colors">{t("items")}</a>
          <a href="#gallery" className="hover:text-gold-dark transition-colors">{t("gallery")}</a>
          <a href="#about" className="hover:text-gold-dark transition-colors">{t("about")}</a>
          <a href="#contact" className="hover:text-gold-dark transition-colors">{t("contact")}</a>
        </nav>
        <LanguageSwitch />
      </div>
    </header>
  );
}
