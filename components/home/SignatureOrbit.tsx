"use client";

import { motion } from "motion/react";
import { useLocale } from "next-intl";
import { showcaseItems } from "@/lib/data/showcase";

const ORBIT_DURATION = 36;

export function SignatureOrbit() {
  const locale = useLocale();
  const step = 360 / showcaseItems.length;

  return (
    <div className="relative mx-auto flex h-[300px] w-[300px] items-center justify-center sm:h-[440px] sm:w-[440px]">
      {/* center — shop name */}
      <div className="absolute z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 border-gold bg-brown/80 text-center shadow-lg shadow-gold/20 backdrop-blur-sm sm:h-36 sm:w-36">
        <span className="font-display text-sm leading-tight text-gold-light sm:text-base">
          Sri Lakshmi
          <br />
          Srinivasa
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-widest text-cream/60 sm:text-xs">
          Kalakand Sweets &amp; Hots
        </span>
      </div>

      {/* orbit ring */}
      <motion.div
        className="absolute inset-0 [--radius:120px] sm:[--radius:180px]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: ORBIT_DURATION }}
      >
        {showcaseItems.map((item, i) => {
          const angle = step * i;
          return (
            <div
              key={item.nameEn}
              className="absolute top-1/2 left-1/2 h-0 w-0"
              style={{
                transform: `rotate(${angle}deg) translateY(calc(var(--radius) * -1))`,
              }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: ORBIT_DURATION }}
                className="-translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.4,
                    delay: i * 0.25,
                    ease: "easeInOut",
                  }}
                  className="flex w-20 flex-col items-center gap-1 rounded-xl border border-gold/30 bg-ivory/95 px-2 py-2 text-center shadow-md shadow-brown/10 sm:w-28"
                >
                  <span className="text-xl sm:text-2xl">{item.emoji}</span>
                  <span
                    className={`text-[10px] leading-tight font-medium text-brown sm:text-xs ${
                      locale === "te" ? "font-telugu" : ""
                    }`}
                  >
                    {locale === "te" ? item.nameTe : item.nameEn}
                  </span>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
