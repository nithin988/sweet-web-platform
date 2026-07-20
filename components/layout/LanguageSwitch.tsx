"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

export function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function switchTo(next: "en" | "te") {
    router.replace(
      // @ts-expect-error dynamic params are fine here
      { pathname, params },
      { locale: next }
    );
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-gold/30 bg-ivory/60 p-1 text-sm">
      <button
        onClick={() => switchTo("en")}
        className={`rounded-full px-3 py-1 transition-colors ${
          locale === "en" ? "bg-gold text-ivory" : "text-brown-soft"
        }`}
      >
        English
      </button>
      <button
        onClick={() => switchTo("te")}
        className={`rounded-full px-3 py-1 font-telugu transition-colors ${
          locale === "te" ? "bg-gold text-ivory" : "text-brown-soft"
        }`}
      >
        తెలుగు
      </button>
    </div>
  );
}
