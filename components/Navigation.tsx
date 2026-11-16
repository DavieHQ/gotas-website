"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "./Icons";
import { useShortlist } from "./Shortlist";

export function Wordmark() {
  return <img className="brand-logo" src="/brand/gotas-diamond-light.png" alt="Gotas Diamond Global Limited" width="947" height="127"/>;
}
const pages = [["/", "Home"], ["/properties", "Properties"], ["/land-prices", "Land prices"], ["/applications", "Applications"], ["/about", "About"], ["/contact", "Contact"]];
export function Header() {
  const path = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const { slugs } = useShortlist();
  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); button.current?.focus(); }
    }
    const onResize = () => { if (window.innerWidth > 980) setOpen(false); };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => { document.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, [open]);
  return <header className="site-header">
    <div className="nav-inner">
      <a href="/" className="brand" aria-label="Gotas Diamond home"><Wordmark/></a>
      <nav id="main-nav" className={"main-nav" + (open ? " mobile-open" : "")} aria-label="Main navigation">
        {pages.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)} aria-current={(href === "/" ? path === "/" : path.startsWith(href)) ? "page" : undefined}>{label}</a>)}
      </nav>
      <div className="nav-actions">
        <a className="shortlist-link" href="/properties?saved=1" aria-label={"Open shortlist, " + slugs.length + " saved estates"} title="Saved estates"><Icon name="save" size={19}/>{slugs.length > 0 && <span>{slugs.length}</span>}</a>
        <a className="btn btn-ink header-book" aria-label="Book an inspection" href="/contact?topic=inspection#inspection"><span className="book-full">Book an inspection</span><span className="book-short" aria-hidden="true">Book a visit</span> <Icon name="up-right" size={14}/></a>
        <button ref={button} type="button" className="mobile-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="main-nav" aria-expanded={open} onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} size={22}/></button>
      </div>
    </div>
    {open && <button className="menu-scrim" tabIndex={-1} aria-label="Close navigation" onClick={() => setOpen(false)}/>}
  </header>;
}
