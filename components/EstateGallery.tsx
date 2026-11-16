"use client";
import { useRef, useState } from "react";
import { Icon } from "./Icons";
import { Photo } from "./Photo";
import type { EstatePhoto } from "@/lib/estates";

export function EstateGallery({ photos, estateName, title = "Estate" }: { photos: EstatePhoto[]; estateName: string; title?: string }) {
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const current = photos[index];
  const step = (n: number) => setIndex(value => (value + photos.length + n) % photos.length);
  const controls = photos.length > 1 && <div className="gallery-controls">
      <button className="frame-arrow" aria-label="Previous gallery photo" onClick={() => step(-1)}><Icon name="left" size={16}/></button>
      <span aria-live="polite">{index + 1} / {photos.length}</span>
      <button className="frame-arrow" aria-label="Next gallery photo" onClick={() => step(1)}><Icon name="right" size={16}/></button>
    </div>;
  return <section id="gallery" className="shell gallery-section">
    <div className="section-title"><div><h2>{title} <em>gallery.</em></h2></div></div>
    <div className="gallery-stage">
      <Photo key={current.image} image={current.image} alt={current.alt}/>
      <button aria-label="Expand gallery" className="expand-photo" onClick={() => dialog.current?.showModal()}><Icon name="expand" size={18}/></button>
    </div>
    <div className="gallery-caption"><div><strong>{current.caption}</strong><span>{current.image.startsWith("https://") ? "Estate gallery" : "Architectural illustration"}</span></div>{controls}</div>
    <dialog className="lightbox" ref={dialog} aria-label={estateName + " image gallery"} onClick={event => { if (event.target === dialog.current) dialog.current?.close(); }} onKeyDown={event => {
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    }}>
      <div className="lightbox-inner"><button className="close-lightbox" aria-label="Close gallery" onClick={() => dialog.current?.close()}><Icon name="close" size={22}/></button>
        <Photo image={current.image} alt={current.alt} priority/>
        <div className="gallery-caption"><span>{current.caption}</span>{controls}</div>
      </div>
    </dialog>
  </section>;
}
