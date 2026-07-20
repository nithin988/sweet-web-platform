"use client";

import { motion } from "motion/react";
import { heroSlides } from "@/lib/data/heroSlides";

export function Gallery() {
  return (
    <section id="gallery" className="bg-ivory py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="mb-12 text-center font-display text-3xl text-brown">
          Gallery
        </h2>
        <div className="columns-2 gap-4 sm:columns-3">
          {heroSlides.map((slide, i) => (
            <motion.div
              key={slide.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="mb-4 overflow-hidden break-inside-avoid rounded-xl border border-gold/15"
            >
              <img
                src={slide.image}
                alt={slide.nameEn}
                className="aspect-square w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
