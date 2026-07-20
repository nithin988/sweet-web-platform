"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const TILES = [
  { key: "kalakand", emoji: "🍮" },
  { key: "traditional", emoji: "🪔" },
  { key: "drinks", emoji: "🥛" },
  { key: "hots", emoji: "🌶️" },
] as const;

export function CategoryTiles() {
  const t = useTranslations("categoryTiles");

  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="mb-10 text-center font-display text-3xl text-brown">
        {t("title")}
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {TILES.map((tile, i) => (
          <motion.a
            key={tile.key}
            href="#items"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-gold/20 bg-gradient-to-b from-ivory to-cream p-6 text-center shadow-sm transition-all hover:-translate-y-0 hover:border-maroon/40 hover:shadow-lg hover:shadow-maroon/10"
          >
            <span className="text-3xl transition-transform group-hover:scale-110">
              {tile.emoji}
            </span>
            <span className="font-display text-base text-brown">
              {t(`${tile.key}.title`)}
            </span>
            <span className="text-xs text-brown-soft">{t(`${tile.key}.desc`)}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
