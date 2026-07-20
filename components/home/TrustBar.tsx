"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { StarIcon, MilkIcon, HandsIcon, ScrollIcon } from "@/components/icons/Icons";

const KEYS = ["rating", "milk", "handmade", "recipes"] as const;
const ICONS = [StarIcon, MilkIcon, HandsIcon, ScrollIcon];

export function TrustBar() {
  const t = useTranslations("trustBar");

  return (
    <section className="border-y border-gold/15 bg-ivory py-8">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-5 sm:grid-cols-4">
        {KEYS.map((key, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <Icon className="h-6 w-6 text-gold" />
              <span className="text-xs font-medium text-brown-soft sm:text-sm">
                {t(key)}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
