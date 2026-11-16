import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCatalog } from "@/lib/catalog";
import { inspectionPath, money, photoURL, propertyPath, siteEmail, sitePhone } from "@/lib/estates";
import { Icon } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import { SaveButton } from "@/components/Shortlist";
import { EstateGallery } from "@/components/EstateGallery";

export const dynamic = "force-dynamic";
type Props = {params:Promise<{slug:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata> {
  const {slug}=await params; const e=(await getCatalog()).find(item=>item.slug===slug);
  return e ? {title:e.name+" in "+e.district,description:e.overview,openGraph:{title:e.name,images:[photoURL(e.gallery[0].image)]}} : {title:"Estate unavailable"};
}
export default async function EstatePage({params}:Props) {
  const [{slug},estates]=await Promise.all([params,getCatalog()]);
  const index=estates.findIndex(p=>p.slug===slug);
  if(index===-1) notFound();
  const e=estates[index], next=estates[(index+1)%estates.length], cover=e.gallery[0];
  return <main id="main-content">
    <section className="detail-hero"><div className="scene-image"><Photo image={cover.image} alt={cover.alt} priority/></div><div className="scene-wash"/>
      <div className="detail-hero-inner shell"><div className="detail-top"><a href="/properties" className="back-on-image"><Icon name="left" size={15}/> All properties</a><SaveButton slug={slug} name={e.name}/></div>
        <div className="detail-text"><span className="status-tag"><i/>{e.status}</span><h1>{e.name}</h1><p><Icon name="pin" size={17}/>{e.area}</p></div>
        <div className="detail-actions"><a href={inspectionPath(slug)} className="btn btn-brand">Book an inspection <Icon name="up-right" size={17}/></a><a href="#overview" className="light-link">Estate overview <Icon name="down" size={15}/></a></div>
      </div></section>
    <nav className="detail-nav" aria-label="On this estate page"><div className="shell"><a href="#overview">Overview</a><a href="#amenities">Amenities</a><a href="#home-type">Home types</a><a href="#gallery">Gallery</a></div></nav>
    <section id="overview" className="shell profile-overview"><span className="kicker">Estate overview</span><div><h2>{e.subtitle}</h2><p>{e.overview}</p>{e.offer&&<p>{e.offer.label} · <strong>{money(e.offer.price)}</strong></p>}</div></section>
    <section id="amenities" className="amenities-band"><div className="shell amenities-inner"><div><span className="kicker">Estate plan</span><h2>Planned <em>amenities.</em></h2><p className="section-note">The team can confirm which facilities are in service during your inspection.</p></div><ul>{e.features.map(f=><li key={f}><Icon name="check" size={16}/>{f}</li>)}</ul></div></section>
    <section id="home-type" className="shell estate-options"><div><span className="kicker">Residential designs</span><h2>Home <em>options.</em></h2><p>Ask Gotas to match your preferred design with an available plot at {e.shortName}.</p><a href="/land-prices" className="inline-link">View published land prices <Icon name="arrow" size={15}/></a></div>
    <div className="options-list">{e.homeTypes.map(h=><div key={h}><Icon name="bed" size={20}/><span>{h}</span></div>)}<a className="inline-link" href={"/contact?topic=property&estate="+slug+"#inspection"}>Ask about this estate <Icon name="up-right" size={15}/></a></div></section>
    <EstateGallery photos={e.gallery} estateName={e.name}/>
    <section className="visit-strip"><div className="shell visit-inner"><div><span className="kicker">Private inspections</span><h2>Visit <em>{e.shortName}.</em></h2><div className="agent-links"><a href={"tel:"+sitePhone}>Call an agent</a><a href={"mailto:"+siteEmail}>Email Gotas</a></div></div><a href={inspectionPath(slug)} className="btn btn-brand">Arrange a visit <Icon name="up-right" size={17}/></a></div></section>
    <a href={propertyPath(next.slug)} className="next-property shell"><span>Next estate</span><strong>{next.name}</strong><Icon name="arrow" size={25}/></a>
  </main>;
}
