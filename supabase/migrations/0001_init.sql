-- Categories
create table categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null check (slug in ('sweets', 'hots')),
  name_en text not null,
  name_te text not null,
  sort_order int not null default 0
);

-- Products
create table products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  category_id uuid not null references categories(id) on delete restrict,
  name_en text not null,
  name_te text not null,
  description_en text default '',
  description_te text default '',
  price text not null,
  images text[] not null default '{}',
  is_speciality boolean not null default false,
  is_available boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Offers
create table offers (
  id uuid primary key default gen_random_uuid(),
  title_en text not null,
  title_te text not null,
  description_en text default '',
  description_te text default '',
  image text,
  active_from date,
  active_to date,
  created_at timestamptz not null default now()
);

-- Testimonials
create table testimonials (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  text_en text not null,
  text_te text not null,
  rating int not null default 5 check (rating between 1 and 5),
  created_at timestamptz not null default now()
);

-- Site settings (singleton row)
create table site_settings (
  id int primary key default 1 check (id = 1),
  hero_video_url text,
  hero_image_url text,
  about_en text default '',
  about_te text default '',
  phone text default '',
  whatsapp text default '',
  address text default '',
  maps_embed_url text default '',
  opening_hours text default '',
  instagram_url text default '',
  updated_at timestamptz not null default now()
);
insert into site_settings (id) values (1);

-- Festival announcements
create table festival_announcements (
  id uuid primary key default gen_random_uuid(),
  title_en text not null,
  title_te text not null,
  message_en text default '',
  message_te text default '',
  active_from date,
  active_to date,
  created_at timestamptz not null default now()
);

-- Row Level Security: public read, authenticated write
alter table categories enable row level security;
alter table products enable row level security;
alter table offers enable row level security;
alter table testimonials enable row level security;
alter table site_settings enable row level security;
alter table festival_announcements enable row level security;

create policy "public read categories" on categories for select using (true);
create policy "public read products" on products for select using (true);
create policy "public read offers" on offers for select using (true);
create policy "public read testimonials" on testimonials for select using (true);
create policy "public read site_settings" on site_settings for select using (true);
create policy "public read festival_announcements" on festival_announcements for select using (true);

create policy "admin write categories" on categories for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write products" on products for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write offers" on offers for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write testimonials" on testimonials for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write site_settings" on site_settings for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "admin write festival_announcements" on festival_announcements for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
