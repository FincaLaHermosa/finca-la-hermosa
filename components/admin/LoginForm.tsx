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
        <label>
          Email
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <label>
          Contraseña
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </label>
        {message ? <p className="admin-login-error">{message}</p> : null}
        <button type="submit" disabled={loading}>{loading ? "Entrando..." : "Entrar"}</button>
      </form>
      <style jsx global>{`
        body { background: #1e3232; }
        .admin-login { min-height: 100vh; display: grid; place-items: center; padding: 24px; font-family: var(--font-jost), system-ui, sans-serif; }
        .admin-login-card { width: min(420px, 100%); background: #fffdf8; border-radius: 12px; padding: 28px; display: grid; gap: 16px; box-shadow: 0 24px 60px rgba(0,0,0,.18); }
        .admin-login-card span { color: #9d563d; text-transform: uppercase; letter-spacing: .14em; font-size: .72rem; }
        .admin-login-card h1 { margin: 0; font-family: var(--font-cormorant), Georgia, serif; font-weight: 400; font-size: 2rem; color: #1e3232; }
        .admin-login-card label { display: grid; gap: 7px; color: #6f634f; font-size: .78rem; text-transform: uppercase; letter-spacing: .08em; }
        .admin-login-card input { border: 1px solid #ede6d6; border-radius: 8px; padding: 12px; font: inherit; text-transform: none; letter-spacing: 0; }
        .admin-login-card button { border: 0; border-radius: 999px; padding: 13px 18px; background: #9d563d; color: #fffdf8; cursor: pointer; text-transform: uppercase; letter-spacing: .1em; }
        .admin-login-error { margin: 0; color: #9d563d; font-size: .86rem; }
      `}</style>
    </div>
  );
}
