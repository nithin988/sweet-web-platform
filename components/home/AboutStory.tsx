"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export function AboutStory() {
  const t = useTranslations("about");

  return (
    <section id="about" className="bg-ivory py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-sm uppercase tracking-[0.3em] text-gold-dark"
        >
          {t("eyebrow")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 font-display text-3xl text-brown sm:text-4xl"
        >
          {t("title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-brown-soft leading-relaxed"
        >
          {t("body")}
        </motion.p>
      </div>
    </section>
  );
}
