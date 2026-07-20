"use client";

import { motion } from "motion/react";
import { BannerSlider } from "./BannerSlider";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brown">
      <BannerSlider />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
        className="pointer-events-none absolute bottom-1 left-1/2 z-10 hidden -translate-x-1/2 text-gold-light/70 sm:block"
      >
        ↓
      </motion.div>
    </section>
  );
}
