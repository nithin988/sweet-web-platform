"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { heroSlides } from "@/lib/data/heroSlides";
import { CornerFlourish } from "./CornerFlourish";

const AUTOPLAY_MS = 4200;

export function BannerSlider() {
  const locale = useLocale();
  const t = useTranslations("brand");
  const tHero = useTranslations("hero");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex(((i % heroSlides.length) + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  const slide = heroSlides[index];
  const teluguDisplay = locale === "te";

  return (
    <div
      className="relative h-[70vh] min-h-[420px] w-full overflow-hidden sm:h-[85vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroSlides.map((s, i) => (
        <div
          key={s.slug}
          style={{
            transform: `translateX(${i === index ? "0" : i < index ? "-100" : "100"}%)`,
            opacity: i === index ? 1 : 0,
            transition: "transform 0.9s cubic-bezier(0.22,1,0.36,1), opacity 0.9s cubic-bezier(0.22,1,0.36,1)",
          }}
          className="absolute inset-0 h-full w-full overflow-hidden"
        >
          <img
            src={s.image}
            alt={locale === "te" ? s.nameTe : s.nameEn}
            className={`h-full w-full object-cover ${i === index ? "animate-kenburns" : ""}`}
          />
        </div>
      ))}

      {/* legibility overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/70 via-brown/40 to-brown/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(200,150,44,0.15),transparent_65%)]" />

      {/* ornamental corner flourishes */}
      <CornerFlourish className="absolute top-4 left-4 z-10 h-10 w-10 text-gold-light/70 sm:h-14 sm:w-14" />
      <CornerFlourish className="absolute top-4 right-4 z-10 h-10 w-10 rotate-90 text-gold-light/70 sm:h-14 sm:w-14" />
      <CornerFlourish className="absolute bottom-4 left-4 z-10 h-10 w-10 -rotate-90 text-gold-light/70 sm:h-14 sm:w-14" />
      <CornerFlourish className="absolute bottom-4 right-4 z-10 h-10 w-10 rotate-180 text-gold-light/70 sm:h-14 sm:w-14" />

      {/* shop name — persistent */}
      <div className="absolute inset-x-0 top-10 z-10 flex flex-col items-center px-6 text-center text-ivory sm:top-14">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-light sm:text-sm">
          {tHero("eyebrow")}
        </p>
        <h1
          className={`text-3xl leading-tight sm:text-5xl ${
            teluguDisplay ? "font-telugu-display" : "font-display"
          }`}
        >
          {t("nameLine1")}
        </h1>
        <p
          className={`mt-1 text-lg text-cream/80 sm:text-xl ${
            teluguDisplay ? "font-telugu-display" : "font-display italic"
          }`}
        >
          {t("nameLine2")}
        </p>
      </div>

      {/* current item label */}
      <div className="absolute inset-x-0 bottom-24 z-10 flex justify-center sm:bottom-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="rounded-full border border-gold/40 bg-brown/60 px-6 py-2 backdrop-blur-sm"
          >
            <span
              className={`text-sm font-medium text-ivory sm:text-base ${
                locale === "te" ? "font-telugu" : ""
              }`}
            >
              {locale === "te" ? slide.nameTe : slide.nameEn}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA */}
      <motion.a
        href="#items"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gold px-8 py-3 text-sm font-medium tracking-wide text-ivory shadow-lg shadow-gold/30 sm:bottom-12"
      >
        {tHero("cta")}
      </motion.a>

      {/* arrows */}
      <button
        aria-label="Previous"
        onClick={() => goTo(index - 1)}
        className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-brown/50 text-lg text-ivory backdrop-blur-sm transition-colors hover:bg-brown/70 sm:left-3 sm:h-10 sm:w-10"
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={() => goTo(index + 1)}
        className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-brown/50 text-lg text-ivory backdrop-blur-sm transition-colors hover:bg-brown/70 sm:right-3 sm:h-10 sm:w-10"
      >
        ›
      </button>

      {/* dots */}
      <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-2 sm:bottom-4">
        {heroSlides.map((s, i) => (
          <button
            key={s.slug}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-gold" : "w-1.5 bg-ivory/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
