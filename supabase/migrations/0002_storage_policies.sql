-- Storage RLS policies for the product-images bucket.
-- The "Public bucket" toggle only grants public read; write access
-- still needs explicit policies, or admin image uploads fail with
-- "new row violates row-level security policy".

create policy "public read product-images"
on storage.objects for select
using (bucket_id = 'product-images');

create policy "authenticated upload product-images"
on storage.objects for insert
with check (bucket_id = 'product-images' and auth.role() = 'authenticated');

create policy "authenticated update product-images"
on storage.objects for update
using (bucket_id = 'product-images' and auth.role() = 'authenticated');

create policy "authenticated delete product-images"
on storage.objects for delete
using (bucket_id = 'product-images' and auth.role() = 'authenticated');
