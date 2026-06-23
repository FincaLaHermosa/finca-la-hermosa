"use client";

import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  AlertCircle,
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  Eye,
  EyeOff,
  ExternalLink,
  ImageIcon,
  Pencil,
  Plus,
  Save,
  Search,
  Trash2,
  UploadCloud,
  X,
} from "lucide-react";
import type { AdminField, AdminResource } from "@/lib/admin/resources";
import { createClient } from "@/lib/supabase/client";

type Row = Record<string, unknown>;
type UploadResult = {
  url: string;
  originalBytes: number;
  optimizedBytes: number;
  quality: number;
};

export function ResourceEditor({ resource }: { resource: AdminResource }) {
  const supabase = useMemo(() => createClient(), []);
  const [rows, setRows] = useState<Row[]>([]);
  const [current, setCurrent] = useState<Row>(() => emptyRow(resource));
  const [editingId, setEditingId] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadRows = async () => {
    setLoading(true);
    const query = supabase.from(resource.table).select("*");
    const ordered = resource.orderKey ? query.order(resource.orderKey, { ascending: true }) : query;
    const { data, error } = await ordered;
    setLoading(false);
    if (error) {
      setError(`No pude cargar esta sección. ${error.message}`);
      return;
    }
    setRows(data || []);
  };

  useEffect(() => {
    setCurrent(emptyRow(resource));
    setEditingId(null);
    setMessage(null);
    setError(null);
    setQuery("");
    void loadRows();
  }, [resource.slug]);

  const filteredRows = rows.filter((row) => {
    if (!query.trim()) return true;
    const haystack = resource.listFields.map((field) => formatCell(row[field])).join(" ").toLowerCase();
    return haystack.includes(query.trim().toLowerCase());
  });

  const visibleCount = rows.filter((row) => row.visible !== false).length;
  const hiddenCount = rows.length - visibleCount;

  const save = async () => {
    setMessage(null);
    setError(null);
    const payload = normalizePayload(resource, current);
    const idValue = payload[resource.idKey];

    if (!idValue && resource.idKey !== "id") {
      setError("Falta el identificador interno. Es necesario para guardar este registro sin crear duplicados.");
      return;
    }

    setSaving(true);
    const result = editingId
      ? await supabase.from(resource.table).update(payload).eq(resource.idKey, editingId as string)
      : await supabase.from(resource.table).insert(payload);
    setSaving(false);

    if (result.error) {
      setError(result.error.message);
      return;
    }

    setMessage(editingId ? "Cambios guardados. El sitio se actualizará con esta información." : "Registro creado. Ya puedes editarlo u ordenar la lista.");
    setCurrent(emptyRow(resource));
    setEditingId(null);
    await loadRows();
  };

  const remove = async (row: Row) => {
    if (!confirm(`¿Eliminar "${getRowTitle(resource, row)}"? Esta acción no se puede deshacer.`)) return;
    setMessage(null);
    setError(null);
    const { error } = await supabase.from(resource.table).delete().eq(resource.idKey, row[resource.idKey] as string);
    if (error) {
      setError(error.message);
      return;
    }
    setMessage("Registro eliminado. Ya no aparecerá en esta sección.");
    if (editingId === row[resource.idKey]) {
      setEditingId(null);
      setCurrent(emptyRow(resource));
    }
    await loadRows();
  };

  const startNew = () => {
    setCurrent(emptyRow(resource));
    setEditingId(null);
    setMessage(null);
    setError(null);
  };

  const editRow = (row: Row) => {
    setCurrent({ ...row });
    setEditingId(row[resource.idKey]);
    setMessage(null);
    setError(null);
  };

  const setField = (key: string, value: unknown) => {
    setCurrent((valueMap) => ({ ...valueMap, [key]: value }));
  };

  const sections = groupFields(resource);
  const title = getRowTitle(resource, current);
  const previewHref = getPreviewHref(resource, current);

  return (
    <div className="admin-resource-page">
      <div className="admin-header">
        <div className="admin-header-copy">
          <p className="admin-eyebrow">{resource.eyebrow}</p>
          <h1>{resource.title}</h1>
          <p>{resource.description}</p>
        </div>
        <div className="admin-header-tools">
          <dl className="admin-header-stats" aria-label="Resumen de registros">
            <div>
              <dt>Total</dt>
              <dd>{rows.length}</dd>
            </div>
            <div>
              <dt>Visibles</dt>
              <dd>{visibleCount}</dd>
            </div>
            <div>
              <dt>Ocultos</dt>
              <dd>{hiddenCount}</dd>
            </div>
          </dl>
          <div className="admin-header-actions">
            {previewHref ? (
              <a className="admin-secondary admin-preview-link" href={previewHref} target="_blank" rel="noreferrer">
                <ExternalLink size={15} strokeWidth={1.8} />
                Ver en sitio
              </a>
            ) : null}
            <button className="admin-primary" type="button" onClick={startNew}>
              <Plus size={16} strokeWidth={1.8} />
              Nuevo
            </button>
          </div>
        </div>
      </div>

      <div className="admin-grid admin-resource-grid">
        <section className="admin-panel admin-list-panel">
          <div className="admin-panel-header">
            <div>
              <p className="admin-module-eyebrow">Lista</p>
              <h2>Registros de esta sección</h2>
            </div>
            <label className="admin-search">
              <Search size={16} strokeWidth={1.8} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por nombre o detalle" />
            </label>
          </div>

          {loading ? <ListSkeleton /> : null}
          {!loading && rows.length === 0 ? (
            <div className="admin-empty">
              Todavía no hay registros en esta sección. Crea el primero o carga la base editable desde el dashboard.
            </div>
          ) : null}

          {!loading && filteredRows.length > 0 ? (
            <div className="admin-record-list">
              {filteredRows.map((row) => {
                const rowId = row[resource.idKey];
                const isActive = editingId === rowId;
                return (
                  <article key={String(rowId)} className={isActive ? "admin-record active" : "admin-record"}>
                    <button type="button" className="admin-record-main" onClick={() => editRow(row)}>
                      <RecordThumb row={row} />
                      <span>
                        <strong>{getRowTitle(resource, row)}</strong>
                        <small>{getRowSubtitle(resource, row)}</small>
                      </span>
                    </button>
                    <div className="admin-record-meta">
                      <VisibilityBadge visible={row.visible !== false} />
                      {resource.orderKey ? <span className="admin-badge" data-tone="muted">Orden {formatCell(row[resource.orderKey]) || "0"}</span> : null}
                    </div>
                    <div className="admin-record-actions">
                      <button className="admin-icon-button" type="button" title="Editar" onClick={() => editRow(row)}>
                        <Pencil size={15} strokeWidth={1.8} />
                      </button>
                      <button className="admin-icon-button danger" type="button" title="Eliminar" onClick={() => remove(row)}>
                        <Trash2 size={15} strokeWidth={1.8} />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : null}

          {!loading && rows.length > 0 && filteredRows.length === 0 ? (
            <div className="admin-empty">No hay coincidencias. Prueba con otro nombre, categoría o detalle.</div>
          ) : null}
        </section>

        <section className="admin-panel admin-editor-panel" aria-label="Editor">
          <div className="admin-editor-hero">
            <p className="admin-module-eyebrow">{editingId ? "Editando" : "Nuevo registro"}</p>
            <h2>{title || "Nuevo registro"}</h2>
            <p>{editingId ? `Editando el registro: ${String(editingId)}` : "Completa los datos principales y guarda para crear el registro."}</p>
          </div>

          <div className="admin-form">
            {sections.map((section) => (
              <fieldset key={section.title} className="admin-fieldset">
                <legend>{section.title}</legend>
                {section.description ? <p>{section.description}</p> : null}
                <div className="admin-fieldset-grid">
                  {section.fields.map((field) => (
                    <FieldEditor
                      key={field.key}
                      field={field}
                      value={current[field.key]}
                      disabled={Boolean(editingId) && field.key === resource.idKey}
                      onChange={(value) => setField(field.key, value)}
                    />
                  ))}
                </div>
              </fieldset>
            ))}

            {message ? (
              <div className="admin-message">
                <CheckCircle2 size={16} strokeWidth={1.8} />
                {message}
              </div>
            ) : null}
            {error ? (
              <div className="admin-message admin-error">
                <AlertCircle size={16} strokeWidth={1.8} />
                {error}
              </div>
            ) : null}
          </div>

          <div className="admin-savebar">
            <button className="admin-secondary" type="button" onClick={startNew}>
              <X size={15} strokeWidth={1.8} />
              Cancelar
            </button>
            <button className="admin-primary" type="button" onClick={save} disabled={saving}>
              <Save size={15} strokeWidth={1.8} />
              {saving ? "Guardando" : editingId ? "Guardar cambios" : "Crear registro"}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

function FieldEditor({ field, value, disabled = false, onChange }: { field: AdminField; value: unknown; disabled?: boolean; onChange: (value: unknown) => void }) {
  const [uploading, setUploading] = useState(false);
  const [uploadInfo, setUploadInfo] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const inputId = `admin-field-${field.key}`;

  const upload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadInfo(null);
    try {
      const result = await uploadOptimizedImage(file, field.folder || "misc", "cover");
      onChange(result.url);
      setUploadInfo(formatUploadInfo(result));
    } catch (error) {
      alert(error instanceof Error ? error.message : "No pude subir la imagen.");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  };

  if (field.type === "boolean") {
    return (
      <label className="admin-switch">
        <input type="checkbox" checked={Boolean(value)} onChange={(event) => onChange(event.target.checked)} />
        <span aria-hidden="true" />
        <strong>{field.label}</strong>
      </label>
    );
  }

  if (field.type === "textarea") {
    return (
      <div className="admin-field admin-field-wide">
        <label htmlFor={inputId}>{field.label}</label>
        <textarea id={inputId} value={String(value || "")} onChange={(event) => onChange(event.target.value)} required={field.required} />
      </div>
    );
  }

  if (field.type === "json") {
    return (
      <div className="admin-field admin-field-wide">
        <label htmlFor={inputId}>{field.label}</label>
        <textarea id={inputId} data-json="true" value={stringifyJson(value)} onChange={(event) => onChange(event.target.value)} />
        <small>Campo avanzado. Edita este bloque solo si necesitas cambiar la estructura del contenido.</small>
      </div>
    );
  }

  if (field.type === "text_array") {
    if (field.key === "gallery") {
      return <GalleryFieldEditor field={field} value={value} onChange={onChange} />;
    }

    return (
      <div className="admin-field admin-field-wide">
        <label htmlFor={inputId}>{field.label}</label>
        <textarea id={inputId} value={arrayToLines(value)} onChange={(event) => onChange(event.target.value)} />
        <small>Escribe un elemento por línea. Ese mismo orden se usará en el sitio.</small>
      </div>
    );
  }

  if (field.type === "image") {
    const imageUrl = typeof value === "string" ? value : "";
    return (
      <div className="admin-field admin-field-wide">
        <label>{field.label}</label>
        <div className={imageUrl ? "admin-image-uploader has-image" : "admin-image-uploader"}>
          {imageUrl ? (
            <img className="admin-preview" src={imageUrl} alt="" />
          ) : (
            <div className="admin-image-placeholder">
              <ImageIcon size={28} strokeWidth={1.6} />
              <span>Sin imagen</span>
            </div>
          )}
          <div className="admin-upload-copy">
            <strong>{imageUrl ? "Reemplazar imagen" : "Subir imagen"}</strong>
            <span>Usa una foto clara, bien encuadrada y coherente con el estilo del sitio.</span>
            <div className="admin-upload-actions">
              <button className="admin-secondary" type="button" onClick={() => fileInputRef.current?.click()}>
                <UploadCloud size={15} strokeWidth={1.8} />
                {uploading ? "Subiendo" : "Subir archivo"}
              </button>
              {imageUrl ? (
                <button className="admin-danger" type="button" onClick={() => onChange("")}>
                  Quitar imagen
                </button>
              ) : null}
            </div>
          </div>
          <input ref={fileInputRef} id={inputId} className="admin-file-input" type="file" accept="image/*" onChange={upload} />
        </div>
        {uploadInfo ? <small className="admin-upload-meta">{uploadInfo}</small> : null}
        <input className="admin-url-input" type="text" value={imageUrl} onChange={(event) => onChange(event.target.value)} placeholder="Pega una URL si la imagen ya está publicada" />
      </div>
    );
  }

  return (
    <div className={field.type === "number" || field.type === "date" ? "admin-field" : "admin-field admin-field-wide"}>
      <label htmlFor={inputId}>{field.label}</label>
      <input
        id={inputId}
        type={field.type === "number" ? "number" : field.type === "date" ? "date" : "text"}
        value={String(value || "")}
        onChange={(event) => onChange(field.type === "number" ? Number(event.target.value) : event.target.value)}
        required={field.required}
        disabled={disabled}
      />
      {disabled ? <small>El identificador se bloquea al editar para evitar duplicados.</small> : null}
    </div>
  );
}

function GalleryFieldEditor({ field, value, onChange }: { field: AdminField; value: unknown; onChange: (value: unknown) => void }) {
  const [uploading, setUploading] = useState(false);
  const [uploadInfo, setUploadInfo] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const inputId = `admin-field-${field.key}-upload`;
  const items = arrayFromLines(value).map(String);

  const setItems = (nextItems: string[]) => onChange(nextItems.join("\n"));

  const uploadGallery = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;

    setUploading(true);
    setUploadInfo(null);
    try {
      const results = await Promise.all(files.map((file) => uploadOptimizedImage(file, field.folder || "spaces", "gallery")));
      setItems([...items, ...results.map((result) => result.url)]);
      const original = results.reduce((total, result) => total + result.originalBytes, 0);
      const optimized = results.reduce((total, result) => total + result.optimizedBytes, 0);
      const saved = Math.max(0, original - optimized);
      setUploadInfo(`${results.length} imagen${results.length === 1 ? "" : "es"} en AVIF: ${formatBytes(original)} a ${formatBytes(optimized)}. Reducción: ${formatBytes(saved)}.`);
    } catch (error) {
      alert(error instanceof Error ? error.message : "No pude subir las imágenes de galería.");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  };

  const removeItem = (index: number) => setItems(items.filter((_, itemIndex) => itemIndex !== index));
  const moveItem = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    const nextItems = [...items];
    [nextItems[index], nextItems[target]] = [nextItems[target], nextItems[index]];
    setItems(nextItems);
  };

  return (
    <div className="admin-field admin-field-wide">
      <label>{field.label}</label>
      <div className="admin-gallery-uploader">
        <div>
          <strong>Subir imágenes de galería</strong>
          <span>Selecciona una o varias fotos. Se convierten a AVIF optimizado antes de guardarse en Supabase.</span>
        </div>
        <button className="admin-secondary" type="button" onClick={() => fileInputRef.current?.click()}>
          <UploadCloud size={15} strokeWidth={1.8} />
          {uploading ? "Subiendo" : "Elegir imágenes"}
        </button>
        <input ref={fileInputRef} id={inputId} className="admin-file-input" type="file" accept="image/*" multiple onChange={uploadGallery} />
      </div>

      {uploadInfo ? <small className="admin-upload-meta">{uploadInfo}</small> : null}

      {items.length ? (
        <div className="admin-gallery-list">
          {items.map((item, index) => (
            <article key={`${item}-${index}`} className="admin-gallery-item">
              <img className="admin-gallery-thumb" src={item} alt="" />
              <input
                type="text"
                value={item}
                onChange={(event) => {
                  const nextItems = [...items];
                  nextItems[index] = event.target.value;
                  setItems(nextItems);
                }}
                aria-label={`URL de imagen ${index + 1}`}
              />
              <div className="admin-gallery-actions">
                <button className="admin-icon-button" type="button" title="Subir posición" onClick={() => moveItem(index, -1)} disabled={index === 0}>
                  <ArrowUp size={14} strokeWidth={1.8} />
                </button>
                <button className="admin-icon-button" type="button" title="Bajar posición" onClick={() => moveItem(index, 1)} disabled={index === items.length - 1}>
                  <ArrowDown size={14} strokeWidth={1.8} />
                </button>
                <button className="admin-icon-button danger" type="button" title="Quitar imagen" onClick={() => removeItem(index)}>
                  <Trash2 size={14} strokeWidth={1.8} />
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="admin-gallery-empty">Todavía no hay imágenes en la galería.</div>
      )}

      <textarea value={arrayToLines(value)} onChange={(event) => onChange(event.target.value)} />
      <small>También puedes pegar una URL por línea. El orden de esta lista será el orden publicado.</small>
    </div>
  );
}

function ListSkeleton() {
  return (
    <div className="admin-skeleton-list" aria-label="Cargando registros">
      {[1, 2, 3, 4].map((item) => <span key={item} />)}
    </div>
  );
}

function VisibilityBadge({ visible }: { visible: boolean }) {
  return (
    <span className="admin-badge" data-tone={visible ? "success" : "muted"}>
      {visible ? <Eye size={13} strokeWidth={1.8} /> : <EyeOff size={13} strokeWidth={1.8} />}
      {visible ? "Visible" : "Oculto"}
    </span>
  );
}

function RecordThumb({ row }: { row: Row }) {
  const image = typeof row.image === "string" ? row.image : "";
  if (image) return <img className="admin-record-thumb" src={image} alt="" />;
  return (
    <span className="admin-record-thumb empty">
      <ImageIcon size={17} strokeWidth={1.7} />
    </span>
  );
}

function groupFields(resource: AdminResource) {
  const groups = [
    { title: "Datos principales", description: "Nombre, identificador y datos que ubican este contenido dentro del CMS.", fields: [] as AdminField[] },
    { title: "Imagen", description: "Foto principal, galería o texto descriptivo para accesibilidad.", fields: [] as AdminField[] },
    { title: "Contenido", description: "Textos, listas y detalles que verá el visitante.", fields: [] as AdminField[] },
    { title: "Publicación", description: "Visibilidad, orden y estados que controlan cómo aparece en el sitio.", fields: [] as AdminField[] },
    { title: "Avanzado", description: "Configuración estructurada. Úsala solo cuando necesites ajustar bloques complejos.", fields: [] as AdminField[] },
  ];

  for (const field of resource.fields) {
    const section = getFieldSection(field);
    groups.find((group) => group.title === section)?.fields.push(field);
  }

  return groups.filter((group) => group.fields.length);
}

function getFieldSection(field: AdminField) {
  if (field.type === "image" || field.key.includes("image") || field.key.includes("gallery")) return "Imagen";
  if (field.type === "json") return "Avanzado";
  if (["visible", "featured", "quote_only", "dashed", "accent_price", "sort_order", "addon"].includes(field.key)) return "Publicación";
  if (["id", "slug", "title", "name", "label", "category_id", "event_type"].includes(field.key)) return "Datos principales";
  return "Contenido";
}

function emptyRow(resource: AdminResource): Row {
  return Object.fromEntries(resource.fields.map((field) => {
    if (field.type === "boolean") return [field.key, field.key === "visible"];
    if (field.type === "number") return [field.key, 0];
    if (field.type === "json") return [field.key, "{}"];
    if (field.type === "text_array") return [field.key, ""];
    return [field.key, ""];
  }));
}

function getPreviewHref(resource: AdminResource, row: Row) {
  if (resource.slug === "pages") {
    const pageSlug = typeof row.slug === "string" ? row.slug.trim() : "";
    if (!pageSlug || ["home", "inicio", "index"].includes(pageSlug)) return "/";
    return pageSlug.startsWith("/") ? pageSlug : `/${pageSlug}`;
  }

  const routes: Record<string, string> = {
    config: "/",
    packages: "/experiencias",
    addons: "/experiencias",
    spaces: "/espacios",
    amenities: "/espacios",
    faqs: "/faq",
    "faq-categories": "/faq",
    testimonials: "/",
    about: "/nosotros",
    "quote-settings": "/cotizar",
    "confirmed-events": "/cotizar",
  };

  return routes[resource.slug] || null;
}

function normalizePayload(resource: AdminResource, row: Row): Row {
  const payload = { ...row };
  for (const field of resource.fields) {
    const value = payload[field.key];
    if (field.type === "json") payload[field.key] = parseJson(value);
    if (field.type === "text_array") payload[field.key] = arrayFromLines(value);
    if (field.type === "number") payload[field.key] = Number(value || 0);
    if (field.type === "boolean") payload[field.key] = Boolean(value);
    if (field.key === "id" && !value) delete payload[field.key];
  }
  return payload;
}

function getRowTitle(resource: AdminResource, row: Row) {
  const keys = ["title", "name", "label", "question", "author", "id", "slug", resource.idKey];
  const value = keys.map((key) => row[key]).find((item) => typeof item === "string" && item.trim());
  return String(value || "");
}

function getRowSubtitle(resource: AdminResource, row: Row) {
  const values = resource.listFields
    .filter((field) => !["title", "name", "label", "question", "author", "visible"].includes(field))
    .map((field) => formatCell(row[field]))
    .filter(Boolean);
  return values.slice(0, 2).join(" · ") || String(row[resource.idKey] || "Sin publicar");
}

function formatCell(value: unknown) {
  if (typeof value === "boolean") return value ? "Sí" : "No";
  if (Array.isArray(value)) return value.join(", ");
  if (value && typeof value === "object") return JSON.stringify(value).slice(0, 80);
  return String(value ?? "");
}

function stringifyJson(value: unknown) {
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value ?? {}, null, 2);
  } catch {
    return "{}";
  }
}

function parseJson(value: unknown) {
  if (!value) return {};
  if (typeof value !== "string") return value;
  try {
    return JSON.parse(value);
  } catch {
    return {};
  }
}

function arrayToLines(value: unknown) {
  if (Array.isArray(value)) return value.join("\n");
  return String(value || "");
}

function arrayFromLines(value: unknown) {
  if (Array.isArray(value)) return value;
  return String(value || "").split("\n").map((item) => item.trim()).filter(Boolean);
}

async function uploadOptimizedImage(file: File, folder: string, variant: "cover" | "gallery"): Promise<UploadResult> {
  const preparedFile = await prepareImageForUpload(file);
  if (preparedFile.size > 4_000_000) {
    throw new Error("La imagen sigue pesando mas de 4 MB despues de prepararla. Convierte la foto a JPG/PNG/WEBP o reduce su tamano antes de subirla.");
  }

  const formData = new FormData();
  formData.append("file", preparedFile);
  formData.append("folder", folder);
  formData.append("variant", variant);

  const response = await fetch("/api/admin/upload-image", {
    method: "POST",
    body: formData,
  });
  const contentType = response.headers.get("content-type") || "";
  const payload = contentType.includes("application/json") ? await response.json().catch(() => ({})) : {};
  const fallbackMessage = response.status === 413
    ? "La imagen es demasiado pesada para subirla desde el CMS. Reduce la foto a menos de 4 MB e intenta de nuevo."
    : `No pude subir la imagen optimizada. El servidor respondio ${response.status}.`;

  if (!response.ok) {
    throw new Error(payload.error || fallbackMessage);
  }

  return payload as UploadResult;
}

async function prepareImageForUpload(file: File) {
  if (file.size <= 3_000_000 || file.type === "image/svg+xml") return file;

  try {
    const bitmap = await createImageBitmap(file);
    const maxDimension = 2400;
    const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height));
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) return file;

    context.drawImage(bitmap, 0, 0, width, height);
    bitmap.close();

    const quality = file.size > 8_000_000 ? 0.9 : 0.94;
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", quality));
    if (!blob) return file;

    return new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), { type: "image/jpeg" });
  } catch {
    return file;
  }
}

function formatUploadInfo(result: UploadResult) {
  return `AVIF optimizado: ${formatBytes(result.originalBytes)} a ${formatBytes(result.optimizedBytes)}. Reducción: ${formatBytes(Math.max(0, result.originalBytes - result.optimizedBytes))}. Calidad ${result.quality}.`;
}

function formatBytes(value: number) {
  if (!Number.isFinite(value) || value <= 0) return "0 KB";
  if (value >= 1024 * 1024) return `${(value / 1024 / 1024).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(value / 1024))} KB`;
}
