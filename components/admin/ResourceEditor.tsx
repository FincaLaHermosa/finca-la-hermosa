"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";
import type { AdminField, AdminResource } from "@/lib/admin/resources";
import { createClient } from "@/lib/supabase/client";

type Row = Record<string, unknown>;

export function ResourceEditor({ resource }: { resource: AdminResource }) {
  const supabase = useMemo(() => createClient(), []);
  const [rows, setRows] = useState<Row[]>([]);
  const [current, setCurrent] = useState<Row>(() => emptyRow(resource));
  const [editingId, setEditingId] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadRows = async () => {
    setLoading(true);
    const query = supabase.from(resource.table).select("*");
    const ordered = resource.orderKey ? query.order(resource.orderKey, { ascending: true }) : query;
    const { data, error } = await ordered;
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    setRows(data || []);
  };

  useEffect(() => {
    void loadRows();
  }, [resource.slug]);

  const save = async () => {
    setMessage(null);
    setError(null);
    const payload = normalizePayload(resource, current);
    const idValue = payload[resource.idKey];

    if (!idValue && resource.idKey !== "id") {
      setError(`Falta ${resource.idKey}.`);
      return;
    }

    const result = editingId
      ? await supabase.from(resource.table).update(payload).eq(resource.idKey, editingId as string)
      : await supabase.from(resource.table).insert(payload);
    const { error } = result;

    if (error) {
      setError(error.message);
      return;
    }

    setMessage("Guardado.");
    setCurrent(emptyRow(resource));
    setEditingId(null);
    await loadRows();
  };

  const remove = async (row: Row) => {
    if (!confirm("¿Eliminar este registro?")) return;
    setMessage(null);
    setError(null);
    const { error } = await supabase.from(resource.table).delete().eq(resource.idKey, row[resource.idKey] as string);
    if (error) {
      setError(error.message);
      return;
    }
    setMessage("Eliminado.");
    await loadRows();
  };

  const setField = (key: string, value: unknown) => {
    setCurrent((valueMap) => ({ ...valueMap, [key]: value }));
  };

  return (
    <div>
      <div className="admin-header">
        <div>
          <h1>{resource.title}</h1>
          <p>Edita contenido del CMS. Los cambios se reflejan en el sitio cuando el bloque público ya está conectado.</p>
        </div>
        <button className="admin-secondary" type="button" onClick={() => { setCurrent(emptyRow(resource)); setEditingId(null); }}>Nuevo</button>
      </div>

      <div className="admin-grid">
        <div className="admin-card">
          {loading ? <div className="admin-empty">Cargando...</div> : null}
          {!loading && rows.length === 0 ? <div className="admin-empty">Aún no hay registros.</div> : null}
          {rows.length > 0 ? (
            <table className="admin-table">
              <thead>
                <tr>
                  {resource.listFields.map((field) => <th key={field}>{field}</th>)}
                  <th />
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={String(row[resource.idKey])}>
                    {resource.listFields.map((field) => <td key={field}>{formatCell(row[field])}</td>)}
                    <td>
                      <div className="admin-actions">
                        <button className="admin-secondary" type="button" onClick={() => { setCurrent(row); setEditingId(row[resource.idKey]); }}>Editar</button>
                        <button className="admin-danger" type="button" onClick={() => remove(row)}>Eliminar</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>

        <div className="admin-card admin-form">
          {resource.fields.map((field) => (
            <FieldEditor key={field.key} field={field} value={current[field.key]} disabled={Boolean(editingId) && field.key === resource.idKey} onChange={(value) => setField(field.key, value)} />
          ))}
          {message ? <div className="admin-message">{message}</div> : null}
          {error ? <div className="admin-message admin-error">{error}</div> : null}
          <button className="admin-primary" type="button" onClick={save}>{editingId ? "Guardar cambios" : "Crear"}</button>
        </div>
      </div>
    </div>
  );
}

function FieldEditor({ field, value, disabled = false, onChange }: { field: AdminField; value: unknown; disabled?: boolean; onChange: (value: unknown) => void }) {
  const [uploading, setUploading] = useState(false);

  const upload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const supabase = createClient();
    const extension = file.name.split(".").pop() || "jpg";
    const folder = field.folder || "misc";
    const path = `${folder}/${Date.now()}-${slugify(file.name)}.${extension}`;
    const { error } = await supabase.storage.from("site-images").upload(path, file, { upsert: false });
    setUploading(false);
    if (error) {
      alert(error.message);
      return;
    }
    const { data } = supabase.storage.from("site-images").getPublicUrl(path);
    onChange(data.publicUrl);
  };

  if (field.type === "boolean") {
    return (
      <label className="admin-check">
        <input type="checkbox" checked={Boolean(value)} onChange={(event) => onChange(event.target.checked)} />
        {field.label}
      </label>
    );
  }

  if (field.type === "textarea") {
    return (
      <div className="admin-field">
        <label>{field.label}</label>
        <textarea value={String(value || "")} onChange={(event) => onChange(event.target.value)} required={field.required} />
      </div>
    );
  }

  if (field.type === "json") {
    return (
      <div className="admin-field">
        <label>{field.label}</label>
        <textarea data-json="true" value={stringifyJson(value)} onChange={(event) => onChange(event.target.value)} />
      </div>
    );
  }

  if (field.type === "text_array") {
    return (
      <div className="admin-field">
        <label>{field.label}</label>
        <textarea value={arrayToLines(value)} onChange={(event) => onChange(event.target.value)} />
      </div>
    );
  }

  if (field.type === "image") {
    return (
      <div className="admin-field">
        <label>{field.label}</label>
        {typeof value === "string" && value ? <img className="admin-preview" src={value} alt="" /> : null}
        <input type="text" value={String(value || "")} onChange={(event) => onChange(event.target.value)} />
        <input type="file" accept="image/*" onChange={upload} />
        {uploading ? <small>Subiendo...</small> : null}
      </div>
    );
  }

  return (
    <div className="admin-field">
      <label>{field.label}</label>
      <input
        type={field.type === "number" ? "number" : field.type === "date" ? "date" : "text"}
        value={String(value || "")}
        onChange={(event) => onChange(field.type === "number" ? Number(event.target.value) : event.target.value)}
        required={field.required}
        disabled={disabled}
      />
    </div>
  );
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

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9.]+/g, "-").replace(/^-|-$/g, "");
}
