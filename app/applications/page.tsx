import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import { applicationPDF, sitePhone } from "@/lib/estates";
import { plots, paymentPlans } from "@/lib/applications";
export const metadata:Metadata={title:"Plot applications",description:"Download the official Gotas service plot application, explore its five plot sizes and review the printed instalment terms."};
export default function Applications(){
  return <main id="main-content"><section className="application-hero"><div className="shell application-head"><div>
    <span className="kicker"><i/>Service plot sales</span><h1>Apply for a <em>plot.</em></h1><p>Choose a plot size, review the payment options, and download the company’s six-page application form.</p>
    <div className="page-actions"><a className="btn btn-ink" href={applicationPDF} download>Download application form <Icon name="download" size={17}/></a><a className="inline-link" href={"tel:"+sitePhone}>Call Gotas <Icon name="phone" size={15}/></a></div></div>
    <a className="document-display" href={applicationPDF} target="_blank" rel="noopener" aria-label="Preview the official six-page application PDF"><img src="/media/application-cover.webp" alt="Cover of the Gotas service plot sale application form" width="724" height="1024"/><span>Preview PDF <Icon name="up-right" size={15}/></span></a>
    </div></section>
    <section className="shell plot-section" id="plot-sizes"><div className="section-title"><div><span className="kicker">Buildable land</span><h2>Plot <em>sizes.</em></h2></div></div>
    <p className="section-copy">The application lists five plot sizes. Gotas quotes each plot individually. BQ refers to detached staff quarters.</p>
    <div className="plot-table"><div className="plot-labels" aria-hidden="true"><span>Plot area</span><span>Home design</span><span>Space for</span><span/></div>
    {plots.map(p=><a href={"/contact?topic=application&plot="+p.size+"#inspection"} key={p.size} aria-label={"Enquire about the "+p.size+" square metre plot"}><strong>{p.size} m²</strong><span>{p.bedrooms}-bedroom detached duplex</span><small>{p.extras}</small><Icon name="up-right" size={17}/></a>)}</div></section>
    <section className="terms-band"><div className="shell estate-options"><div><span className="kicker">July 2025 application form</span><h2>Payment <em>options.</em></h2><p>The form lists a ₦20,000 non-refundable application fee. Ask Gotas to confirm the current fee, plan and terms for your chosen plot.</p></div>
    <div>{paymentPlans.map(([title,text])=><details className="spec-details" key={title}><summary>{title}<Icon name="plus" size={16}/></summary><p>{text}</p></details>)}</div></div></section>
    <section className="shell estate-options"><div><span className="kicker">Submitting your form</span><h2>Where to <em>return it.</em></h2></div><div><p className="section-copy">The company lists its office at No. 5 Yaounde Street, Wuse Zone 6, Abuja. The printed form gives Zone 4 for the same street. Contact the team to confirm the return address before visiting.</p><a className="inline-link" href="/contact?topic=application#inspection">Contact the applications team <Icon name="arrow" size={16}/></a></div></section>
    </main>;
}
