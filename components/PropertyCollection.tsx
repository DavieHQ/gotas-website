"use client";

import { useEffect, useRef, useState } from "react";
import { districtsFor, money, propertyPath, type Estate } from "@/lib/estates";
import { Icon } from "./Icons";
import { WiderPortfolio } from "./WiderPortfolio";
import { Photo } from "./Photo";
import { SaveButton, useShortlist } from "./Shortlist";

export function PropertyCollection({ estates, district, savedOnly }: { estates: Estate[]; district: string; savedOnly: boolean }) {
  const districts = districtsFor(estates);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeSlug, setActiveSlug] = useState("");
  const trigger = useRef<HTMLButtonElement>(null);
  const { slugs, ready } = useShortlist();
  const visible = estates.filter(item => (!district || item.district === district) && (!savedOnly || slugs.includes(item.slug)));
  const signature = visible.map(item => item.slug).join(",");
  function filterPath(value: string, saved: boolean) {
    const query = new URLSearchParams();
    if (value) query.set("district", value);
    if (saved) query.set("saved", "1");
    return "/properties" + (query.size ? "?" + query.toString() : "");
  }
  useEffect(() => {
    if (!signature) return;
    let frame = 0;
    const scenes = Array.from(document.querySelectorAll<HTMLElement>(".estate-scene"));
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.48;
      const current = scenes.find(scene => {
        const rect = scene.getBoundingClientRect();
        return rect.top <= line && rect.bottom >= line;
      }) || scenes[0];
      if (current) setActiveSlug(current.id);
    };
    function onScroll() { if (!frame) frame = requestAnimationFrame(update); }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(frame); };
  }, [signature]);
  useEffect(() => {
    if (!filtersOpen) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") { setFiltersOpen(false); trigger.current?.focus(); }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [filtersOpen]);
  return <main id="main-content" className="collection">
    <h1 className="sr-only">Abuja property collection</h1>
    <div className="collection-toolbar">
      <div className="shell toolbar-inner">
        <span className="toolbar-title">Property collection</span>
        <div className="collection-filters">
          <button type="button" className="filter-toggle" ref={trigger} aria-controls="district-filter" aria-expanded={filtersOpen} onClick={() => setFiltersOpen(!filtersOpen)}>
            <Icon name="pin" size={14}/>{district || "All districts"}<Icon name="down" size={12}/>
          </button>
          <a href={filterPath(district, !savedOnly)} aria-current={savedOnly ? "true" : undefined} className="saved-filter"><Icon name="save" size={14}/><span>Saved</span>{slugs.length > 0 && <small>{slugs.length}</small>}</a>
        </div>
        {filtersOpen && <div className="filter-menu" id="district-filter">
          <span className="micro">Filter by district</span>
          {["", ...districts].map(place => <a href={filterPath(place, savedOnly)} key={place} aria-current={district === place ? "true" : undefined}>{place || "All districts"}{district === place && <Icon name="check" size={14}/>}</a>)}
        </div>}
      </div>
    </div>
    {visible.length === 0 && <section className="empty-collection shell">
      <Icon name="save" size={30}/><h2>{savedOnly && !ready ? "Opening your shortlist…" : savedOnly ? "Your saved estates" : "No estates in this district"}</h2>
      <p>{savedOnly ? "Use Save on an estate to keep it here on this device." : "Choose another district to see the available developments."}</p>
      <a className="btn btn-ink" href="/properties">Explore all estates <Icon name="arrow"/></a></section>}
    {visible.map((estate, index) => <section className="estate-scene" id={estate.slug} key={estate.slug} aria-label={estate.name}>
      <div className="scene-image"><Photo image={estate.gallery[0].image} alt={estate.gallery[0].alt} priority={index === 0}/></div>
      <div className="scene-wash"/>
      <div className="scene-layout shell">
        <div className="scene-top"><span className="status-tag"><i/>{estate.status}</span><SaveButton slug={estate.slug} name={estate.name}/></div>
        <div className="scene-content">
          <div className="scene-titles"><span className="kicker light-kicker"><Icon name="pin" size={15}/>{estate.area}</span><h2>{estate.name}</h2><p>{estate.subtitle}</p><a href={propertyPath(estate.slug)} className="btn btn-brand">Explore this estate <Icon name="up-right" size={17}/></a></div>
          <div className="scene-listing"><span className="micro">{estate.offer?.label || "Estate portfolio"}</span><strong>{estate.offer ? money(estate.offer.price) : estate.homeTypes.length + " home " + (estate.homeTypes.length === 1 ? "type" : "types")}</strong>
            <a className="light-link" href={propertyPath(estate.slug) + "#home-type"}>Explore home options <Icon name="right" size={13}/></a></div>
        </div>
        <div className="scene-bottom"><span>{String(index + 1).padStart(2,"0")} <i>/</i> {String(visible.length).padStart(2,"0")}</span>
          <div className="scene-jumps" aria-label="Jump to an estate">{visible.map((item, i) => <a key={item.slug} href={"#" + item.slug} aria-label={"Go to " + item.name} aria-current={activeSlug === item.slug ? "true" : undefined} className={i === index ? "selected" : ""}><i/></a>)}</div>
          {index + 1 < visible.length ? <a href={"#" + visible[index + 1].slug}>Next estate <Icon name="down" size={14}/></a> : <a href={propertyPath(estate.slug)}>View estate <Icon name="up-right" size={14}/></a>}
        </div>
      </div>
    </section>)}
    {!district && !savedOnly && <WiderPortfolio/>}
  </main>;
}
