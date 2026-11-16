import { Icon } from "./Icons";
import { Wordmark } from "./Navigation";
import { siteEmail, socials } from "@/lib/estates";
import { isSiteOwner } from "@/lib/owner";
export async function Footer() {
  const owner=await isSiteOwner();
  return <footer className="footer"><div className="footer-core shell">
    <a href="/" className="brand" aria-label="Gotas Diamond home"><Wordmark/></a>
    <nav aria-label="Footer"><a href="/properties">Properties</a><a href="/land-prices">Land prices</a><a href="/applications">Applications</a><a href="/about">About</a><a href="/contact">Contact</a></nav>
    <a className="footer-email" href={"mailto:"+siteEmail}>{siteEmail}<Icon name="up-right" size={14}/></a>
    </div><div className="footer-end shell"><span>© 2026 Gotas Diamond Global Limited · RC 1626637</span>
    <nav aria-label="Social media">{socials.map(s=><a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>)}</nav>
    {owner&&<a href="/studio">Manage site <Icon name="up-right" size={12}/></a>}</div></footer>;
}
export function InspectionCTA({href="/contact?topic=inspection#inspection"}:{href?:string}) {
  return <section className="visit-strip"><div className="shell visit-inner"><div><span className="kicker">Private inspections</span><h2>See it <em>in person.</em></h2></div><a href={href} className="btn btn-brand">Arrange a visit <Icon name="up-right" size={17}/></a></div></section>;
}
