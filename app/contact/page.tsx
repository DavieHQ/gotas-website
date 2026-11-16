import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Icon } from "@/components/Icons";
import { getCatalog } from "@/lib/catalog";
import { siteEmail, officeMap, widerPortfolio, applicationPDF, socials } from "@/lib/estates";
import { landListings } from "@/lib/land-prices";
import { plots } from "@/lib/applications";
import { enquiryTopics } from "@/lib/enquiry";
export const metadata:Metadata={title:"Contact and inspections",description:"Contact Gotas Diamond in Wuse Zone 6, ask about land and applications, or arrange an Abuja estate inspection."};
export const dynamic="force-dynamic";
type Props={searchParams:Promise<Record<string,string|string[]|undefined>>};
export default async function Contact({searchParams}:Props){
  const [query,estates]=await Promise.all([searchParams,getCatalog()]);
  const estate=estates.find(p=>p.slug===query.estate)?.slug || "general";
  const topic=enquiryTopics.find(t=>t===query.topic) || "inspection";
  const land=landListings.find(h=>h.slug===query.home), development=widerPortfolio.find(item=>item.id===query.development);
  const plot=plots.find(item=>String(item.size)===query.plot);
  const initialMessage=land ? "I’m interested in the published land price for the "+land.name.toLowerCase()+". Please confirm eligible estates and plot sizes." :
    development ? "Please send me the location, development details and current availability for "+development.name+"." :
    plot ? "Please confirm the price and availability of a "+plot.size+" m² plot." : "";
  return <main id="main-content" className="contact-page"><div className="shell contact-layout"><section className="contact-intro"><span className="kicker"><i/>Gotas Diamond · Abuja</span><h1>Let’s<br/><em>talk.</em></h1><p>Arrange an estate visit, ask about land or speak with the applications team.</p>
    <div className="contact-items"><div><Icon name="pin"/><div><span>Visit the office</span><a href={officeMap} target="_blank" rel="noopener noreferrer">No. 5 Yaounde Street, Wuse Zone 6,<br/>Abuja, Nigeria <Icon name="up-right" size={13}/></a></div></div>
    <div><Icon name="phone"/><div><span>Call Gotas</span><a href="tel:+2348187365047">+234 818 736 5047</a><a href="tel:+2348081137063">+234 808 113 7063</a><a href="tel:+2347031021073">+234 703 102 1073</a></div></div>
    <div><Icon name="mail"/><div><span>Email</span><a href={"mailto:"+siteEmail}>{siteEmail}</a></div></div>
    <div><Icon name="download"/><div><span>Plot applications</span><a href={applicationPDF} download>Download the application PDF</a><a href="/applications">Plot sizes, fees and return address <Icon name="right" size={12}/></a></div></div></div>
    <div className="social-line">{socials.map(s=><a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">{s.label} <Icon name="up-right" size={11}/></a>)}</div>
    </section><EnquiryForm options={estates.map(({slug,name})=>({slug,name}))} initialEstate={estate} initialTopic={topic} initialMessage={initialMessage}/></div></main>;
}
