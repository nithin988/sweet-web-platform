export type CategoryRow = {
  id: string;
  slug: "sweets" | "hots";
  name_en: string;
  name_te: string;
  sort_order: number;
};

export type ProductRow = {
  id: string;
  slug: string;
  category_id: string;
  name_en: string;
  name_te: string;
  description_en: string;
  description_te: string;
  price: string;
  images: string[];
  is_speciality: boolean;
  is_available: boolean;
  sort_order: number;
  created_at: string;
};
