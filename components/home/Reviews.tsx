"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const SAMPLE_REVIEWS = [
  { name: "Ramesh K.", text: "Best Kalakand in the area — tastes just like homemade." },
  { name: "Priya S.", text: "Ordered for a function, everyone loved the jaggery kalakand." },
  { name: "Suresh V.", text: "Fresh, authentic, and the badam milk is outstanding." },
];

export function Reviews() {
  const t = useTranslations("reviews");

  return (
    <section className="mx-auto max-w-5xl px-5 py-24">
      <h2 className="mb-12 text-center font-display text-3xl text-brown">
        {t("title")}
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {SAMPLE_REVIEWS.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-gold/15 bg-ivory p-6 shadow-sm"
          >
            <p className="mb-3 text-gold">★★★★★</p>
            <p className="text-sm text-brown-soft">&ldquo;{r.text}&rdquo;</p>
            <p className="mt-4 text-sm font-medium text-brown">{r.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
