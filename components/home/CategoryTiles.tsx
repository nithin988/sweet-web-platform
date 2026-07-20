"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const TILES = [
  { key: "kalakand", image: "/images/products/organic-jaggery-kalakand-real.jpg" },
  { key: "traditional", image: "/images/products/bellam-sunnundalu-real.jpg" },
  { key: "drinks", image: "/images/products/badam-milk-real.jpg" },
  { key: "hots", image: "/images/products/hots-collection.jpg" },
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
            className="group overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-b from-ivory to-cream text-center shadow-sm transition-all hover:border-maroon/40 hover:shadow-lg hover:shadow-maroon/10"
          >
            <div className="aspect-square w-full overflow-hidden">
              <img
                src={tile.image}
                alt={t(`${tile.key}.title`)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <span className="font-display text-base text-brown">
                {t(`${tile.key}.title`)}
              </span>
              <span className="mt-1 block text-xs text-brown-soft">
                {t(`${tile.key}.desc`)}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
