import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./LogoutButton";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between border-b border-gold/15 bg-ivory px-5 py-4">
        <span className="font-display text-lg text-brown">Admin</span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-brown-soft">{user.email}</span>
          <LogoutButton />
        </div>
      </header>
      {children}
    </div>
  );
}
