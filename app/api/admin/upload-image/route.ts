import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const maxDuration = 30;

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
  const originalBytes = Number(formData.get("originalBytes")) || 0;

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

    const extension = extensionFromMime(file.type);
    const path = `${folder}/${Date.now()}-${slugify(file.name)}.${extension}`;
    const { error: uploadError } = await supabase.storage.from("site-images").upload(path, input, {
      cacheControl: "31536000",
      contentType: file.type,
      upsert: false,
    });

    if (uploadError) {
      return NextResponse.json({ error: `No pude guardar la imagen en Supabase. ${uploadError.message}` }, { status: 500 });
    }

    const { data } = supabase.storage.from("site-images").getPublicUrl(path);

    return NextResponse.json({
      url: data.publicUrl,
      path,
      originalBytes: originalBytes || input.byteLength,
      optimizedBytes: input.byteLength,
      format: extension,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No pude subir la imagen.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function sanitizeFolder(value: string) {
  const folder = value.toLowerCase().replace(/[^a-z0-9/_-]+/g, "-").replace(/^-|-$/g, "");
  return folder || "misc";
}

function slugify(value: string) {
  const base = value.replace(/\.[^.]+$/, "");
  return base.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "image";
}

function extensionFromMime(value: string) {
  if (value === "image/png") return "png";
  if (value === "image/webp") return "webp";
  if (value === "image/gif") return "gif";
  if (value === "image/avif") return "avif";
  return "jpg";
}
