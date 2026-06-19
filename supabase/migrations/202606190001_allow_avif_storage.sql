update storage.buckets
set allowed_mime_types = array['image/jpeg','image/png','image/webp','image/gif','image/svg+xml','image/avif']
where id = 'site-images';
