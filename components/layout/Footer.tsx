import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t-2 border-maroon/25 bg-cream py-10 text-center text-sm text-brown-soft">
      <img
        src="/images/brand/logo.jpg"
        alt="Sri Lakshmi Srinivasa Kalakand Sweets & Hots"
        className="mx-auto mb-4 h-16 w-auto rounded-lg border border-gold/30 object-cover sm:h-20"
      />
      <p>Sri Lakshmi Srinivasa Kalakand Sweets &amp; Hots</p>
      <p className="mt-1">© {new Date().getFullYear()} · {t("rights")}</p>
    </footer>
  );
}
