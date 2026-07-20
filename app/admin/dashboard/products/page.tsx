"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { CategoryRow, ProductRow } from "@/lib/supabase/types";
import { ProductForm } from "./ProductForm";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<ProductRow[]>([]);
  const [categories, setCategories] = useState<CategoryRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<ProductRow | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const supabase = createClient();
    const [{ data: productsData }, { data: categoriesData }] = await Promise.all([
      supabase.from("products").select("*").order("created_at", { ascending: false }),
      supabase.from("categories").select("*").order("sort_order"),
    ]);
    setProducts(productsData ?? []);
    setCategories(categoriesData ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  function categoryName(categoryId: string) {
    return categories.find((c) => c.id === categoryId)?.name_en ?? "—";
  }

  async function handleDelete(id: string) {
    const supabase = createClient();
    await supabase.from("products").delete().eq("id", id);
    setDeletingId(null);
    load();
  }

  return (
    <main className="mx-auto max-w-5xl px-5 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-2xl text-brown">Products</h1>
        <button
          onClick={() => {
            setEditing(null);
            setFormOpen(true);
          }}
          className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-ivory"
        >
          + Add Product
        </button>
      </div>

      {loading ? (
        <p className="text-brown-soft">Loading…</p>
      ) : products.length === 0 ? (
        <p className="text-brown-soft">No products yet. Add your first one.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.id}
              className="overflow-hidden rounded-2xl border border-gold/20 bg-ivory shadow-sm"
            >
              <div className="aspect-4/3 bg-cream">
                {p.images?.[0] ? (
                  <img src={p.images[0]} alt={p.name_en} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-brown-soft/50">
                    No photo
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="mb-1 flex items-center gap-2">
                  {p.is_speciality && (
                    <span className="rounded-full bg-maroon px-2 py-0.5 text-[10px] font-medium text-gold-light">
                      Speciality
                    </span>
                  )}
                  {!p.is_available && (
                    <span className="rounded-full bg-brown-soft/20 px-2 py-0.5 text-[10px] font-medium text-brown-soft">
                      Unavailable
                    </span>
                  )}
                </div>
                <h3 className="font-display text-base text-brown">{p.name_en}</h3>
                <p className="text-xs text-brown-soft">{categoryName(p.category_id)}</p>
                <p className="mt-1 font-medium text-gold-dark">{p.price}</p>

                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => {
                      setEditing(p);
                      setFormOpen(true);
                    }}
                    className="flex-1 rounded-full border border-gold/40 py-1.5 text-xs text-brown-soft hover:border-gold"
                  >
                    Edit
                  </button>
                  {deletingId === p.id ? (
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="flex-1 rounded-full bg-red-600 py-1.5 text-xs font-medium text-white"
                    >
                      Confirm?
                    </button>
                  ) : (
                    <button
                      onClick={() => setDeletingId(p.id)}
                      onBlur={() => setDeletingId(null)}
                      className="flex-1 rounded-full border border-red-300 py-1.5 text-xs text-red-600 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {formOpen && (
        <ProductForm
          categories={categories}
          product={editing}
          onClose={() => setFormOpen(false)}
          onSaved={() => {
            setFormOpen(false);
            load();
          }}
        />
      )}
    </main>
  );
}
