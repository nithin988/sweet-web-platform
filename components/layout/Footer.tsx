import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-gold/10 bg-cream py-8 text-center text-sm text-brown-soft">
      <p>Sri Lakshmi Srinivasa Kalakand Sweets &amp; Hots</p>
      <p className="mt-1">© {new Date().getFullYear()} · {t("rights")}</p>
    </footer>
  );
}
