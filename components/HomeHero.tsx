"use client";

import { useState } from "react";
import { propertyPath, type Estate } from "@/lib/estates";
import { Icon } from "./Icons";
import { Photo } from "./Photo";

export function HomeHero({ estates }: { estates: Estate[] }) {
  const [index, setIndex] = useState(0);
  const active = estates[index];
  function cycle(direction: number) {
    setIndex(value => (value + estates.length + direction) % estates.length);
  }
  return <section className="home-hero" aria-label="Abuja real estate and featured estates">
    <div key={active.slug} className="hero-shot"><Photo image={active.gallery[0].image} alt={active.gallery[0].alt} priority/></div>
    <div className="hero-wash"/>
    <div className="hero-composition shell">
      <div className="hero-type">
        <p className="kicker light-kicker"><i/>Residential real estate · Abuja</p>
        <h1>At home in<br/><em>Abuja.</em></h1>
        <p className="hero-intro">Explore homes and serviced land in Idu Gousa, Kabusa and Kuje.</p>
        <a className="btn btn-brand" href="/properties">Explore properties <Icon name="arrow"/></a>
      </div>
      <div className="feature-console" aria-label="Featured estate carousel" aria-roledescription="carousel">
        <div className="feature-caption"><span className="kicker">Featured estate</span><span>{String(index + 1).padStart(2, "0")} / {String(estates.length).padStart(2, "0")}</span></div>
        <div aria-live="polite" aria-atomic="true" className="feature-estate"><a href={propertyPath(active.slug)}>{active.name}<Icon name="up-right" size={17}/></a><span>{active.area} <i aria-hidden="true">/</i> {active.gallery[0].image.startsWith("https://") ? "Estate image" : "Architectural render"}</span></div>
        <div className="feature-controls">
          <div className="slide-bars">{estates.map((item, i) => <button key={item.slug} aria-label={"Show " + item.name} aria-pressed={index === i} onClick={() => setIndex(i)}><i/></button>)}</div>
          <div className="arrows"><button className="circle-control" aria-label="Previous featured estate" onClick={() => cycle(-1)}><Icon name="left" size={16}/></button><button className="circle-control" aria-label="Next featured estate" onClick={() => cycle(1)}><Icon name="right" size={16}/></button></div>
        </div>
      </div>
    </div>
  </section>;
}
