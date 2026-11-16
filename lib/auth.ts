import { cookies } from "next/headers";

const COOKIE_NAME = "gotas_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days in seconds

// Default fallback secret for development if not provided in .env.local
const DEFAULT_SECRET = "gotas-diamond-secret-key-2026";

function getSecretKey(): string {
  return process.env.ADMIN_PASSWORD || process.env.SESSION_SECRET || DEFAULT_SECRET;
}

// HMAC SHA-256 signature using standard Web Crypto API
async function sign(message: string, secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createSessionToken(): Promise<string> {
  const timestamp = Date.now().toString();
  const payload = `admin:${timestamp}`;
  const signature = await sign(payload, getSecretKey());
  return `${payload}.${signature}`;
}

export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [payload, providedSig] = parts;
  const [role, timestampStr] = payload.split(":");
  if (role !== "admin") return false;

  const timestamp = parseInt(timestampStr, 10);
  if (isNaN(timestamp)) return false;

  // Check expiration (7 days)
  if (Date.now() - timestamp > SESSION_MAX_AGE * 1000) return false;

  const expectedSig = await sign(payload, getSecretKey());
  return expectedSig === providedSig;
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(COOKIE_NAME);
  return verifySessionToken(sessionCookie?.value);
}

export async function setAdminSession(): Promise<string> {
  const token = await createSessionToken();
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return token;
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export function checkAdminPassword(password: string): boolean {
  const configuredPassword = process.env.ADMIN_PASSWORD || "gotas2026!";
  return password.trim() === configuredPassword.trim();
}
