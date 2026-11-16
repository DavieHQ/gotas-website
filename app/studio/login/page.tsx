"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Wordmark } from "@/components/Navigation";
import { Icon } from "@/components/Icons";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("return_to") || "/studio";
  
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!password || loading) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/studio/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json() as { success?: boolean; error?: string };

      if (res.ok && data.success) {
        router.push(returnTo);
        router.refresh();
      } else {
        setError(data.error || "Incorrect password. Please try again.");
      }
    } catch {
      setError("Unable to connect to authentication service.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-card">
      <div className="login-brand">
        <Wordmark />
      </div>
      <span className="kicker"><i />Owner Workspace</span>
      <h1>Studio <em>Sign in.</em></h1>
      <p className="login-desc">Enter your management passcode to access enquiries, estate listings, and land prices.</p>

      <form onSubmit={handleSubmit} className="login-form">
        <label>
          <span>Passcode</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(""); }}
            placeholder="••••••••••••"
            required
            autoFocus
            disabled={loading}
          />
        </label>

        {error && <div className="login-error" role="alert">{error}</div>}

        <button type="submit" className="btn btn-ink login-btn" disabled={loading}>
          <span>{loading ? "Verifying…" : "Enter Studio"}</span>
          <Icon name="up-right" size={16} />
        </button>
      </form>

      <div className="login-foot">
        <a href="/" className="inline-link">
          <Icon name="left" size={14} /> Back to main site
        </a>
      </div>
    </div>
  );
}

export default function StudioLogin() {
  return (
    <main id="main-content" className="studio-login-wrap">
      <Suspense fallback={<div className="login-card"><p>Loading…</p></div>}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
