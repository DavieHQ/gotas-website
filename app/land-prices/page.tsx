import type { Metadata } from "next";
import { getLandListings } from "@/lib/catalog";
import { money } from "@/lib/estates";
import { landPath } from "@/lib/land-prices";
import { Photo } from "@/components/Photo";
import { Icon } from "@/components/Icons";
export const dynamic="force-dynamic";
export const metadata:Metadata={title:"Land prices in Abuja",description:"Browse Gotas’s published residential land prices by home type and district."};
export default async function PriceGuide() {
  const listings=await getLandListings();
  return <main id="main-content"><section className="guide-hero"><div className="shell guide-head">
    <div><span className="kicker"><i/>Residential land · Abuja</span><h1>Land <em>prices.</em></h1><p>Explore Gotas’s published land prices by home type. Ask the team to confirm the estate, plot size and availability for a specific quote.</p><a href="#prices" className="light-link">Browse the guide <Icon name="down" size={15}/></a></div>
    <figure className="price-cover"><Photo image="semi-detached" alt="Gotas architectural rendering of a semi-detached duplex" priority sizes="(max-width:680px) 94vw, 46vw"/><figcaption>Gotas architectural render · Semi-detached duplex</figcaption></figure>
  </div></section>
  <section id="prices" className="shell price-directory"><div className="section-title"><div><span className="kicker">Home-type guide</span><h2>Compare <em>land prices.</em></h2></div><span className="directory-unit">Nigerian naira (₦)</span></div>
    {listings.map(item=><a className="rate-row" href={landPath(item.slug)} key={item.slug}><div className="rate-image"><Photo image={item.gallery[0].image} alt={item.gallery[0].alt} sizes="165px"/></div>
    <div className="rate-name"><h3>{item.name}</h3><p>{item.locations}</p></div><div className="rate-price"><span>Published land price</span><strong>{money(item.price)}</strong></div><span className="round-arrow"><Icon name="up-right" size={17}/></span></a>)}
  </section>
  <section className="visit-strip"><div className="shell visit-inner"><div><span className="kicker">Service plot applications</span><h2>Find your <em>plot size.</em></h2></div><a className="btn btn-brand" href="/applications#plot-sizes">Explore plot sizes <Icon name="arrow"/></a></div></section></main>;
}
