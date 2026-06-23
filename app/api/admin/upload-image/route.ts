import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const maxDuration = 30;

const MAX_DIMENSIONS = {
  cover: 1800,
  gallery: 1600,
  default: 1600,
};
const MAX_UPLOAD_BYTES = 4_000_000;

export async function POST(request: Request) {
  const supabase = await createClient();

  if (!supabase) {
    return NextResponse.json({ error: "Faltan variables de Supabase en el servidor." }, { status: 500 });
  }

  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData.user) {
    return NextResponse.json({ error: "Necesitas iniciar sesión para subir imágenes." }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const folder = sanitizeFolder(String(formData.get("folder") || "misc"));
  const variant = normalizeVariant(String(formData.get("variant") || "default"));

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No recibí ningún archivo de imagen." }, { status: 400 });
  }

  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "El archivo debe ser una imagen." }, { status: 400 });
  }

  if (file.type === "image/svg+xml") {
    return NextResponse.json({ error: "Los SVG no se optimizan como foto. Sube JPG, PNG, WEBP o AVIF." }, { status: 400 });
  }

  try {
    const input = Buffer.from(await file.arrayBuffer());
    if (input.byteLength > MAX_UPLOAD_BYTES) {
      return NextResponse.json(
        {
          error:
            "La imagen llega demasiado pesada al servidor. Intenta subir una imagen JPG, PNG o WEBP menor a 4 MB.",
        },
        { status: 413 },
      );
    }

    const sharp = (await import("sharp")).default;
    const image = sharp(input, { failOn: "none" }).rotate();
    const metadata = await image.metadata();
    const width = metadata.width || 0;
    const height = metadata.height || 0;
    const quality = getAdaptiveQuality(input.byteLength, width, height);
    const maxSize = MAX_DIMENSIONS[variant];

    const optimized = await image
      .resize({
        width: maxSize,
        height: maxSize,
        fit: "inside",
        withoutEnlargement: true,
      })
      .avif({
        quality,
        effort: 6,
      })
      .toBuffer();

    const path = `${folder}/${Date.now()}-${slugify(file.name)}.avif`;
    const { error: uploadError } = await supabase.storage.from("site-images").upload(path, optimized, {
      cacheControl: "31536000",
      contentType: "image/avif",
      upsert: false,
    });

    if (uploadError) {
      return NextResponse.json({ error: `No pude guardar la imagen en Supabase. ${uploadError.message}` }, { status: 500 });
    }

    const { data } = supabase.storage.from("site-images").getPublicUrl(path);

    return NextResponse.json({
      url: data.publicUrl,
      path,
      originalBytes: input.byteLength,
      optimizedBytes: optimized.byteLength,
      width,
      height,
      quality,
      format: "avif",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No pude optimizar la imagen.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function getAdaptiveQuality(bytes: number, width: number, height: number) {
  const megapixels = width && height ? (width * height) / 1_000_000 : 0;

  if (bytes > 8_000_000 || megapixels > 18) return 58;
  if (bytes > 4_000_000 || megapixels > 10) return 66;
  if (bytes > 1_500_000 || megapixels > 4) return 74;
  return 82;
}

function normalizeVariant(value: string): keyof typeof MAX_DIMENSIONS {
  if (value === "cover" || value === "gallery") return value;
  return "default";
}

function sanitizeFolder(value: string) {
  const folder = value.toLowerCase().replace(/[^a-z0-9/_-]+/g, "-").replace(/^-|-$/g, "");
  return folder || "misc";
}

function slugify(value: string) {
  const base = value.replace(/\.[^.]+$/, "");
  return base.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "image";
}
