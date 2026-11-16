"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Icon } from "./Icons";

const storageKey = "gotas:shortlist:v1";
const SavedContext = createContext({ slugs: [] as string[], ready: false, toggle: (_slug: string) => {} });

function readSaved(): string[] {
  try {
    const value = JSON.parse(window.localStorage.getItem(storageKey) || "[]");
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
  } catch { return []; }
}
export function ShortlistProvider({ children }: { children: React.ReactNode }) {
  const [slugs, setSlugs] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setSlugs(readSaved());
    setReady(true);
    const sync = (event: StorageEvent) => { if (event.key === storageKey || event.key === null) setSlugs(readSaved()); };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  function toggle(slug: string) {
    const next = slugs.includes(slug) ? slugs.filter(item => item !== slug) : [...slugs, slug];
    setSlugs(next);
    try { window.localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* Still usable in this tab. */ }
  }
  return <SavedContext.Provider value={{ slugs, ready, toggle }}>{children}</SavedContext.Provider>;
}
export const useShortlist = () => useContext(SavedContext);
export function SaveButton({ slug, name }: { slug: string; name: string }) {
  const { slugs, toggle } = useShortlist();
  const saved = slugs.includes(slug);
  return <button type="button" className="save-button" onClick={() => toggle(slug)} aria-label={(saved ? "Remove " : "Save ") + name + (saved ? " from shortlist" : " to shortlist")} aria-pressed={saved}>
    <Icon name="save" size={16}/><span>{saved ? "Saved" : "Save"}</span>
  </button>;
}
