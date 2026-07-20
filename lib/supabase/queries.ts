import { createClient } from "./server";
import type { Product } from "@/lib/data/products";

export async function getPublicProducts(): Promise<Product[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*, categories(slug)")
    .eq("is_available", true)
    .order("sort_order");

  if (error || !data) return [];

  return data.map((row) => ({
    slug: row.slug,
    nameEn: row.name_en,
    nameTe: row.name_te,
    category: row.categories.slug,
    descriptionEn: row.description_en,
    descriptionTe: row.description_te,
    price: row.price,
    isSpeciality: row.is_speciality,
    image: row.images?.[0],
  }));
}
