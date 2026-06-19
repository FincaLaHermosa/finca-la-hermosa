"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    router.replace(params.get("next") || "/admin");
    router.refresh();
  };

  return (
    <div className="admin-login">
      <form className="admin-login-card" onSubmit={submit}>
        <span>FLH CMS</span>
        <h1>Entrar al admin</h1>
        <p>Acceso privado para editar contenido, imágenes, paquetes y configuración del sitio.</p>
        <label>
          Correo
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <label>
          Contraseña
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </label>
        {message ? <p className="admin-login-error">{message}</p> : null}
        <button type="submit" disabled={loading}>{loading ? "Validando acceso" : "Entrar al CMS"}</button>
      </form>
      <style jsx global>{`
        body {
          background:
            radial-gradient(circle at 15% 12%, rgba(232,196,173,.24), transparent 28rem),
            linear-gradient(135deg, #1e3232 0%, #2d4949 100%);
        }
        .admin-login {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 24px;
          font-family: var(--font-jost), system-ui, sans-serif;
        }
        .admin-login-card {
          position: relative;
          overflow: hidden;
          width: min(460px, 100%);
          background: #fffdf8;
          border: 1px solid rgba(237,230,214,.9);
          border-radius: 16px;
          padding: 34px;
          display: grid;
          gap: 16px;
          box-shadow: 0 30px 90px rgba(0,0,0,.24);
        }
        .admin-login-card::after {
          content: "CMS";
          position: absolute;
          right: 18px;
          bottom: -16px;
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: 6rem;
          line-height: .8;
          color: rgba(30,50,50,.055);
          pointer-events: none;
        }
        .admin-login-card span { color: #9d563d; text-transform: uppercase; letter-spacing: .14em; font-size: .72rem; }
        .admin-login-card h1 { margin: 0; font-family: var(--font-cormorant), Georgia, serif; font-weight: 400; font-size: 2.75rem; line-height: 1; color: #1e3232; }
        .admin-login-card p { margin: -4px 0 4px; color: #6f634f; line-height: 1.55; }
        .admin-login-card label { display: grid; gap: 7px; color: #6f634f; font-size: .78rem; text-transform: uppercase; letter-spacing: .08em; }
        .admin-login-card input { border: 1px solid rgba(111,99,79,.26); background: rgba(255,253,248,.98); border-radius: 9px; padding: 13px; font: inherit; text-transform: none; letter-spacing: 0; outline: 0; box-shadow: inset 0 1px 0 rgba(30,50,50,.035); }
        .admin-login-card input:focus { border-color: rgba(157,86,61,.68); box-shadow: 0 0 0 3px rgba(157,86,61,.12), inset 0 1px 0 rgba(30,50,50,.035); }
        .admin-login-card button { border: 0; border-radius: 999px; padding: 14px 18px; background: #9d563d; color: #fffdf8; cursor: pointer; text-transform: uppercase; letter-spacing: .1em; box-shadow: 0 14px 30px rgba(157,86,61,.2); }
        .admin-login-error { margin: 0; color: #9d563d; font-size: .86rem; }
      `}</style>
    </div>
  );
}
