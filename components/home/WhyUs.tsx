"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { MilkIcon, JaggeryIcon, HandsIcon, LeafIcon } from "@/components/icons/Icons";

const KEYS = ["milk", "jaggery", "handmade", "noPreservatives"] as const;
const ICONS = [MilkIcon, JaggeryIcon, HandsIcon, LeafIcon];

export function WhyUs() {
  const t = useTranslations("whyUs");

  return (
    <section className="bg-gradient-to-b from-brown to-maroon-dark py-24 text-ivory">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="mb-12 text-center font-display text-3xl">{t("title")}</h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {KEYS.map((key, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <Icon className="mb-3 h-8 w-8 text-gold-light" />
                <span className="text-sm text-cream/80">{t(`items.${key}`)}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
