"use client";

import { useTranslations } from "next-intl";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="bg-brown py-24 text-ivory">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:grid-cols-2">
        <div>
          <h2 className="mb-6 font-display text-3xl">{t("title")}</h2>
          <p className="mb-1 text-cream/80">123 Main Road, Your Town, Andhra Pradesh</p>
          <p className="mb-6 text-cream/80">Open daily · 7:00 AM – 9:30 PM</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/910000000000"
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ivory"
            >
              {t("whatsapp")}
            </a>
            <a
              href="tel:+910000000000"
              className="rounded-full border border-gold/40 px-5 py-2.5 text-sm font-medium"
            >
              {t("callUs")}
            </a>
            <a
              href="https://maps.google.com"
              className="rounded-full border border-gold/40 px-5 py-2.5 text-sm font-medium"
            >
              {t("getDirections")}
            </a>
          </div>
        </div>
        <div className="aspect-4/3 rounded-2xl bg-cream/10" >
          <div className="flex h-full items-center justify-center text-sm text-cream/50">
            Google Map embed goes here
          </div>
        </div>
      </div>
    </section>
  );
}
