"use client";

import { motion } from "motion/react";

export function Gallery() {
  return (
    <section id="gallery" className="bg-ivory py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="mb-12 text-center font-display text-3xl text-brown">
          Gallery
        </h2>
        <div className="columns-2 gap-4 sm:columns-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="mb-4 flex aspect-square items-center justify-center break-inside-avoid rounded-xl bg-gradient-to-br from-brown/10 to-gold/15 text-brown-soft/40"
            >
              <span className="text-xs uppercase tracking-widest">Photo</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
