"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { SignatureOrbit } from "./SignatureOrbit";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-gradient-to-b from-brown via-brown-light to-cream py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(200,150,44,0.25),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-ivory">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-sm uppercase tracking-[0.3em] text-gold-light"
        >
          {t("eyebrow")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="font-display text-4xl leading-tight sm:text-6xl"
        >
          {t("title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="mt-3 font-display text-xl italic text-cream/80 sm:text-2xl"
        >
          {t("subtitle")}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
        className="relative z-10"
      >
        <SignatureOrbit />
      </motion.div>

      <motion.a
        href="#items"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="relative z-10 inline-block rounded-full bg-gold px-8 py-3 text-sm font-medium tracking-wide text-ivory shadow-lg shadow-gold/20"
      >
        {t("cta")}
      </motion.a>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
        className="relative z-10 text-gold-light/70"
      >
        ↓
      </motion.div>
    </section>
  );
}
