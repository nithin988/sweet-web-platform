"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import type { Product, ProductCategory } from "@/lib/data/products";

export function ItemsSection({ products }: { products: Product[] }) {
  const t = useTranslations("categories");
  const locale = useLocale();
  const [category, setCategory] = useState<ProductCategory>("sweets");
  const [onlySpeciality, setOnlySpeciality] = useState(false);

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          p.category === category && (!onlySpeciality || p.isSpeciality)
      ),
    [products, category, onlySpeciality]
  );

  return (
    <section id="items" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mb-10 flex flex-col items-center gap-6">
        <div className="flex rounded-full border border-gold/30 bg-ivory p-1">
          {(["sweets", "hots"] as ProductCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className="relative rounded-full px-6 py-2 text-sm font-medium"
            >
              {category === cat && (
                <motion.span
                  layoutId="category-pill"
                  className="absolute inset-0 rounded-full bg-gold"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  category === cat ? "text-ivory" : "text-brown-soft"
                } ${locale === "te" ? "font-telugu" : ""}`}
              >
                {t(cat)}
              </span>
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-sm text-brown-soft">
          <input
            type="checkbox"
            checked={onlySpeciality}
            onChange={(e) => setOnlySpeciality(e.target.checked)}
            className="accent-gold"
          />
          {locale === "te" ? "ప్రత్యేకతలు మాత్రమే" : "Speciality only"}
        </label>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.div
              key={item.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-gold/15 bg-ivory shadow-sm transition-shadow hover:shadow-lg hover:shadow-gold/10"
            >
              {item.image ? (
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={item.image}
                    alt={locale === "te" ? item.nameTe : item.nameEn}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex aspect-4/3 items-center justify-center bg-gradient-to-br from-brown/10 to-gold/10 text-brown-soft/40">
                  <span className="text-xs uppercase tracking-widest">
                    Photo coming soon
                  </span>
                </div>
              )}
              <div className="p-5">
                {item.isSpeciality && (
                  <span className="mb-2 inline-block rounded-full bg-maroon px-2 py-0.5 text-xs font-medium text-gold-light">
                    Speciality
                  </span>
                )}
                <h3
                  className={`font-display text-lg text-brown ${
                    locale === "te" ? "font-telugu" : ""
                  }`}
                >
                  {locale === "te" ? item.nameTe : item.nameEn}
                </h3>
                <p
                  className={`mt-1 text-sm text-brown-soft ${
                    locale === "te" ? "font-telugu" : ""
                  }`}
                >
                  {locale === "te" ? item.descriptionTe : item.descriptionEn}
                </p>
                <p className="mt-3 font-medium text-gold-dark">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
