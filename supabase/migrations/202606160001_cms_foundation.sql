create extension if not exists "pgcrypto";

create table if not exists public.site_config (
  id text primary key default 'main',
  whatsapp_number text not null default '5215500000000',
  phone_label text not null default '+52 (55) 0000-0000',
  phone_href text not null default '+5215500000000',
  email text not null default 'hola@fincalahermosa.com',
  instagram_url text not null default 'https://instagram.com/',
  facebook_url text not null default 'https://facebook.com/',
  address_label text not null default 'Isidro Fabela, Estado de México',
  maps_url text not null default 'https://maps.google.com/?q=Finca+La+Hermosa,+Isidro+Fabela,+Estado+de+Mexico',
  footer_text text not null default 'Una finca familiar convertida en destino de experiencias. Naturaleza, hospitalidad y celebración.',
  response_time_label text not null default '24 h',
  copyright_label text not null default '© 2026 Finca La Hermosa',
  visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  hero jsonb not null default '{}'::jsonb,
  sections jsonb not null default '{}'::jsonb,
  seo jsonb not null default '{}'::jsonb,
  visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.packages (
  id text primary key,
  filters text[] not null default '{}',
  image text not null default '',
  image_alt text not null default '',
  badge text,
  overline text not null default '',
  title text not null,
  price text not null default '',
  unit text not null default '',
  capacity text not null default '',
  features text[] not null default '{}',
  cta text not null default 'Solicitar propuesta',
  sort_order integer not null default 0,
  visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.addons (
  id text primary key,
  icon text not null default 'salon',
  name text not null,
  description text not null default '',
  price_label text not null default '',
  price_amount integer not null default 0,
  quote_only boolean not null default false,
  dashed boolean not null default false,
  accent_price boolean not null default false,
  appears_in text[] not null default array['experiencias','cotizar'],
  sort_order integer not null default 0,
  visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.spaces (
  id text primary key,
  name text not null,
  bullets text[] not null default '{}',
  capacity text not null default '',
  image text not null default '',
  image_alt text not null default '',
  gallery text[] not null default '{}',
  caption text not null default '',
  sort_order integer not null default 0,
  visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.amenities (
  id text primary key,
  name text not null,
  detail text not null default '',
  addon boolean not null default false,
  sort_order integer not null default 0,
  visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.faq_categories (
  id text primary key,
  label text not null,
  group_label text not null,
  sort_order integer not null default 0,
  visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.faqs (
  id text primary key,
  category_id text not null references public.faq_categories(id) on delete cascade,
  question text not null,
  answer text not null,
  sort_order integer not null default 0,
  visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  quote text not null,
  author text not null,
  event_label text not null default '',
  image text,
  background text not null default '#fffdf5',
  rotation text not null default 'rotate(0deg)',
  pin text not null default '#9d563d',
  featured boolean not null default false,
  sort_order integer not null default 0,
  visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.about_sections (
  id text primary key,
  label text not null,
  content jsonb not null default '{}'::jsonb,
  sort_order integer not null default 0,
  visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.quote_settings (
  id text primary key default 'main',
  base_price integer not null default 13000,
  event_types jsonb not null default '[]'::jsonb,
  durations jsonb not null default '[]'::jsonb,
  hero jsonb not null default '{}'::jsonb,
  success_message jsonb not null default '{}'::jsonb,
  visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.confirmed_events (
  id uuid primary key default gen_random_uuid(),
  date_start date not null,
  date_end date,
  event_type text,
  notes text,
  visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

do $$
declare
  table_name text;
begin
  foreach table_name in array array[
    'site_config','pages','packages','addons','spaces','amenities',
    'faq_categories','faqs','testimonials','about_sections','quote_settings','confirmed_events'
  ]
  loop
    execute format('drop trigger if exists set_%I_updated_at on public.%I', table_name, table_name);
    execute format('create trigger set_%I_updated_at before update on public.%I for each row execute function public.set_updated_at()', table_name, table_name);
  end loop;
end $$;

alter table public.site_config enable row level security;
alter table public.pages enable row level security;
alter table public.packages enable row level security;
alter table public.addons enable row level security;
alter table public.spaces enable row level security;
alter table public.amenities enable row level security;
alter table public.faq_categories enable row level security;
alter table public.faqs enable row level security;
alter table public.testimonials enable row level security;
alter table public.about_sections enable row level security;
alter table public.quote_settings enable row level security;
alter table public.confirmed_events enable row level security;

grant select on public.site_config, public.pages, public.packages, public.addons, public.spaces, public.amenities, public.faq_categories, public.faqs, public.testimonials, public.about_sections, public.quote_settings, public.confirmed_events to anon, authenticated;
grant insert, update, delete on public.site_config, public.pages, public.packages, public.addons, public.spaces, public.amenities, public.faq_categories, public.faqs, public.testimonials, public.about_sections, public.quote_settings, public.confirmed_events to authenticated;

do $$
declare
  table_name text;
begin
  foreach table_name in array array[
    'site_config','pages','packages','addons','spaces','amenities',
    'faq_categories','faqs','testimonials','about_sections','quote_settings','confirmed_events'
  ]
  loop
    execute format('drop policy if exists "%s public read" on public.%I', table_name, table_name);
    execute format('create policy "%s public read" on public.%I for select using (visible is not false)', table_name, table_name);
    execute format('drop policy if exists "%s authenticated write" on public.%I', table_name, table_name);
    execute format('create policy "%s authenticated write" on public.%I for all to authenticated using (true) with check (true)', table_name, table_name);
  end loop;
end $$;

insert into public.site_config (id) values ('main') on conflict (id) do nothing;
insert into public.quote_settings (id) values ('main') on conflict (id) do nothing;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('site-images', 'site-images', true, 5242880, array['image/jpeg','image/png','image/webp','image/gif','image/svg+xml','image/avif'])
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "site images public read" on storage.objects;
create policy "site images public read"
on storage.objects for select
using (bucket_id = 'site-images');

drop policy if exists "site images authenticated insert" on storage.objects;
create policy "site images authenticated insert"
on storage.objects for insert to authenticated
with check (bucket_id = 'site-images');

drop policy if exists "site images authenticated update" on storage.objects;
create policy "site images authenticated update"
on storage.objects for update to authenticated
using (bucket_id = 'site-images')
with check (bucket_id = 'site-images');

drop policy if exists "site images authenticated delete" on storage.objects;
create policy "site images authenticated delete"
on storage.objects for delete to authenticated
using (bucket_id = 'site-images');
