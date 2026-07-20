"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { slugify } from "@/lib/utils/slugify";
import type { CategoryRow, ProductRow } from "@/lib/supabase/types";

type Props = {
  categories: CategoryRow[];
  product: ProductRow | null;
  onClose: () => void;
  onSaved: () => void;
};

export function ProductForm({ categories, product, onClose, onSaved }: Props) {
  const [nameEn, setNameEn] = useState(product?.name_en ?? "");
  const [nameTe, setNameTe] = useState(product?.name_te ?? "");
  const [descriptionEn, setDescriptionEn] = useState(product?.description_en ?? "");
  const [descriptionTe, setDescriptionTe] = useState(product?.description_te ?? "");
  const [price, setPrice] = useState(product?.price ?? "");
  const [categoryId, setCategoryId] = useState(product?.category_id ?? categories[0]?.id ?? "");
  const [isSpeciality, setIsSpeciality] = useState(product?.is_speciality ?? false);
  const [isAvailable, setIsAvailable] = useState(product?.is_available ?? true);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [existingImage, setExistingImage] = useState(product?.images?.[0] ?? "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const supabase = createClient();
    let imageUrl = existingImage;

    try {
      if (imageFile) {
        const ext = imageFile.name.split(".").pop();
        const path = `${slugify(nameEn)}-${Date.now()}.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from("product-images")
          .upload(path, imageFile, { upsert: true });
        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from("product-images")
          .getPublicUrl(path);
        imageUrl = publicUrlData.publicUrl;
      }

      const payload = {
        slug: product?.slug ?? slugify(nameEn),
        category_id: categoryId,
        name_en: nameEn,
        name_te: nameTe,
        description_en: descriptionEn,
        description_te: descriptionTe,
        price,
        images: imageUrl ? [imageUrl] : [],
        is_speciality: isSpeciality,
        is_available: isAvailable,
      };

      const { error: saveError } = product
        ? await supabase.from("products").update(payload).eq("id", product.id)
        : await supabase.from("products").insert(payload);

      if (saveError) throw saveError;

      onSaved();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brown/50 p-4">
      <form
        onSubmit={handleSubmit}
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-ivory p-6 shadow-xl"
      >
        <h2 className="mb-5 font-display text-xl text-brown">
          {product ? "Edit Product" : "Add Product"}
        </h2>

        <div className="mb-4 grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-sm text-brown-soft">Name (English)</label>
            <input
              required
              value={nameEn}
              onChange={(e) => setNameEn(e.target.value)}
              className="w-full rounded-lg border border-gold/25 bg-cream px-3 py-2 text-sm outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-brown-soft">Name (Telugu)</label>
            <input
              required
              value={nameTe}
              onChange={(e) => setNameTe(e.target.value)}
              className="w-full rounded-lg border border-gold/25 bg-cream px-3 py-2 text-sm outline-none focus:border-gold"
            />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-sm text-brown-soft">Description (English)</label>
            <textarea
              value={descriptionEn}
              onChange={(e) => setDescriptionEn(e.target.value)}
              rows={2}
              className="w-full rounded-lg border border-gold/25 bg-cream px-3 py-2 text-sm outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-brown-soft">Description (Telugu)</label>
            <textarea
              value={descriptionTe}
              onChange={(e) => setDescriptionTe(e.target.value)}
              rows={2}
              className="w-full rounded-lg border border-gold/25 bg-cream px-3 py-2 text-sm outline-none focus:border-gold"
            />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-sm text-brown-soft">Price</label>
            <input
              required
              placeholder="₹480/kg"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full rounded-lg border border-gold/25 bg-cream px-3 py-2 text-sm outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-brown-soft">Category</label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full rounded-lg border border-gold/25 bg-cream px-3 py-2 text-sm outline-none focus:border-gold"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name_en}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm text-brown-soft">Photo</label>
          {existingImage && !imageFile && (
            <img src={existingImage} alt="" className="mb-2 h-24 w-24 rounded-lg object-cover" />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
            className="w-full text-sm text-brown-soft"
          />
        </div>

        <div className="mb-6 flex gap-6">
          <label className="flex items-center gap-2 text-sm text-brown-soft">
            <input
              type="checkbox"
              checked={isSpeciality}
              onChange={(e) => setIsSpeciality(e.target.checked)}
              className="accent-maroon"
            />
            Speciality
          </label>
          <label className="flex items-center gap-2 text-sm text-brown-soft">
            <input
              type="checkbox"
              checked={isAvailable}
              onChange={(e) => setIsAvailable(e.target.checked)}
              className="accent-gold"
            />
            Available
          </label>
        </div>

        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-gold/40 px-5 py-2 text-sm text-brown-soft"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-ivory disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
