"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/place/sri+lakshmi+srinivasa+kalakaan+sweets+%26+hots/@16.6353301,80.9719004,927m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a360dabc39c94dd:0xc79e8c8ad7ecb14b!8m2!3d16.6353301!4d80.9719004!16s%2Fg%2F11nr5b51rc";
const MAPS_EMBED_URL = "https://www.google.com/maps?q=16.6353301,80.9719004&output=embed";

const PHONE_NUMBERS = ["+91 99633 94005", "+91 98493 16067", "+91 90329 94005"];
const WHATSAPP_NUMBER = "919963394005";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="bg-brown py-24 text-ivory">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 font-display text-3xl">{t("title")}</h2>
          <p className="mb-1 text-cream/80">{t("address")}</p>
          <p className="mb-4 text-cream/80">{t("hours")}</p>

          <div className="mb-6 flex flex-col gap-1">
            {PHONE_NUMBERS.map((num) => (
              <a
                key={num}
                href={`tel:${num.replace(/\s/g, "")}`}
                className="text-sm text-gold-light hover:text-gold-dark transition-colors"
              >
                {num}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ivory"
            >
              {t("whatsapp")}
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="rounded-full border border-gold/40 px-5 py-2.5 text-sm font-medium"
            >
              {t("callUs")}
            </a>
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gold/40 px-5 py-2.5 text-sm font-medium"
            >
              {t("getDirections")}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="aspect-4/3 overflow-hidden rounded-2xl"
        >
          <iframe
            src={MAPS_EMBED_URL}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sri Lakshmi Srinivasa Kalakand Sweets & Hots — location"
          />
        </motion.div>
      </div>
    </section>
  );
}
