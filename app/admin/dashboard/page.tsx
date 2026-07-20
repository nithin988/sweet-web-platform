import Link from "next/link";

const SECTIONS = [
  { href: "/admin/dashboard/products", label: "Products" },
  { href: "/admin/dashboard/categories", label: "Categories" },
  { href: "/admin/dashboard/offers", label: "Offers" },
  { href: "/admin/dashboard/testimonials", label: "Testimonials" },
  { href: "/admin/dashboard/gallery", label: "Gallery" },
  { href: "/admin/dashboard/settings", label: "Site Settings" },
];

export default function AdminDashboardPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16">
      <h1 className="mb-8 font-display text-3xl text-brown">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {SECTIONS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="rounded-xl border border-gold/20 bg-ivory p-6 text-center font-medium text-brown-soft transition-colors hover:border-gold hover:text-gold-dark"
          >
            {s.label}
          </Link>
        ))}
      </div>
    </main>
  );
}
