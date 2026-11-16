import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLandListings } from "@/lib/catalog";
import { applicationPDF, money, photoURL } from "@/lib/estates";
import { landEnquiry, landPath } from "@/lib/land-prices";
import { Icon } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import { EstateGallery } from "@/components/EstateGallery";
export const dynamic="force-dynamic";
type Props={params:Promise<{slug:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {slug}=await params;const item=(await getLandListings()).find(x=>x.slug===slug);
  return item?{title:item.name+" land price",description:"Published land price, listed locations and floor-plan details for the "+item.name.toLowerCase()+".",openGraph:{images:[photoURL(item.gallery[0].image)]}}:{title:"Listing unavailable"};
}
export default async function HomeType({params}:Props){
  const [{slug},list]=await Promise.all([params,getLandListings()]);const index=list.findIndex(x=>x.slug===slug);
  if(index===-1)notFound();
  const item=list[index], image=item.gallery[0], next=list[(index+1)%list.length];
  return <main id="main-content"><section className="detail-hero land-hero"><div className="scene-image"><Photo image={image.image} alt={image.alt} priority/></div><div className="scene-wash"/>
    <div className="detail-hero-inner shell"><div className="detail-top"><a href="/land-prices" className="back-on-image"><Icon name="left" size={15}/> All land prices</a><span className="image-credit">Architectural render</span></div>
    <div className="detail-text"><span className="kicker light-kicker">Residential land</span><h1>{item.name}</h1><p>Published land price <strong className="hero-quote">{money(item.price)}</strong></p></div>
    <div className="detail-actions"><a className="btn btn-brand" href={landEnquiry(slug)}>Enquire about this price <Icon name="up-right" size={15}/></a><a className="light-link" href="#specification">View specification <Icon name="down" size={15}/></a></div></div></section>
    <section className="shell estate-options" id="specification"><div><span className="kicker">Home specification</span><h2>The <em>details.</em></h2><p>{item.note}</p><a className="inline-link" href={item.source} target="_blank" rel="noopener noreferrer">Company listing <Icon name="up-right" size={14}/></a></div>
    <dl className="fact-list"><div><dt>Published land price</dt><dd>{money(item.price)}</dd></div><div><dt>Listed locations</dt><dd>{item.locations}</dd></div><div><dt>Bedrooms</dt><dd>{item.bedrooms}</dd></div><div><dt>Bathrooms / toilets</dt><dd>{item.baths} / {item.toilets}</dd></div><div><dt>Listed features</dt><dd>Kitchen, water, parking, 24-hour power and security</dd></div></dl></section>
    <EstateGallery photos={item.gallery} estateName={item.name} title="Design"/>
    <section className="visit-strip"><div className="shell visit-inner"><div><span className="kicker">Service plot application</span><h2>Apply for a <em>plot.</em></h2><div className="agent-links"><a href="/applications">View plot sizes and terms</a></div></div><a className="btn btn-brand" href={applicationPDF} download>Download application form <Icon name="download" size={17}/></a></div></section>
    <a href={landPath(next.slug)} className="next-property shell"><span>Next home type</span><strong>{next.name}</strong><Icon name="arrow" size={24}/></a></main>;
}
