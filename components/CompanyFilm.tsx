"use client";
import { useState } from "react";
import { companyFilm } from "@/lib/estates";
import { Icon } from "./Icons";
export function CompanyFilm(){
  const [playing,setPlaying]=useState(false);
  return <section id="film" className="film-band"><div className="shell film-inner"><div>
    <span className="kicker">Gotas Diamond on film</span><h2>A view of <em>Gotas.</em></h2>
    <a className="light-link" href={companyFilm} target="_blank" rel="noopener noreferrer">Watch on YouTube <Icon name="up-right" size={15}/></a></div>
    <div className="film-frame">{playing?<iframe title="Film by Gotas Diamond Global Limited" src="https://www.youtube-nocookie.com/embed/53ndcTLQNo4?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/>:
    <button type="button" onClick={()=>setPlaying(true)} aria-label="Play the Gotas Diamond company film"><img src="/media/gotas-film.webp" alt="Aerial view from the Gotas Diamond film" width="480" height="360" loading="lazy"/><span><Icon name="play" size={27}/></span></button>}</div></div></section>;
}
