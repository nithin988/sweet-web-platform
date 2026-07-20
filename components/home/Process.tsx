"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export function Process() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as string[];

  return (
    <section className="mx-auto max-w-4xl px-5 py-24">
      <h2 className="mb-12 text-center font-display text-3xl text-brown">
        {t("title")}
      </h2>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex flex-1 flex-col items-center text-center"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold text-gold-dark font-display">
              {i + 1}
            </div>
            <p className="text-sm text-brown-soft">{step}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
