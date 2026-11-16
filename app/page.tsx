import { getCatalog, getLandListings } from "@/lib/catalog";
import { districtsFor, money } from "@/lib/estates";
import { landPath } from "@/lib/land-prices";
import { HomeHero } from "@/components/HomeHero";
import { Icon } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import { InspectionCTA } from "@/components/Shared";

export const dynamic = "force-dynamic";
export default async function Home() {
  const [estates, land] = await Promise.all([getCatalog(), getLandListings()]);
  return <main id="main-content">
    <HomeHero estates={estates.slice(0,4)}/>
    <section className="districts-section shell">
      <div className="section-title"><div><span className="kicker">Property collection</span><h2>Explore by <em>district.</em></h2></div><a href="/properties" className="inline-link">View all estates <Icon name="arrow" size={16}/></a></div>
      <div className="districts-grid">{districtsFor(estates).map((district) => {
        const matches = estates.filter(item => item.district === district);
        const view = matches[0].gallery[0];
        return <a className="district-card" key={district} href={"/properties?district=" + encodeURIComponent(district)}>
          <div className="district-image"><Photo image={view.image} alt={view.alt} sizes="(max-width: 680px) 90vw, 30vw"/></div>
          <div className="district-caption"><div><span className="micro">{matches.length} {matches.length === 1 ? "estate" : "estates"}</span><h3>{district}</h3></div><span className="round-arrow"><Icon name="up-right" size={16}/></span></div>
        </a>;
      })}</div>
    </section>
    <section className="home-prices"><div className="shell wider-inner">
      <div><span className="kicker">Land price guide</span><h2>Land by <em>home type.</em></h2><p>Compare the published land prices, then ask Gotas for a quote for your chosen estate and plot size.</p><a href="/applications#plot-sizes" className="inline-link">Explore plot sizes <Icon name="arrow" size={15}/></a></div>
      <div className="home-price-list">{land.map(item => <a key={item.slug} href={landPath(item.slug)}><strong>{item.name}</strong><span>{money(item.price)}</span><Icon name="up-right" size={16}/></a>)}</div>
    </div></section>
    <section className="home-about"><div className="shell home-about-inner">
      <div><span className="kicker">Gotas Diamond Global Limited</span><h2>Your trust,<br/><em>our diamond.</em></h2></div>
      <div><p>Gotas began in 2019 with 91 serviced plots in Gousa. Today our work spans residential and commercial real estate, from construction and urban development to property investment across Abuja.</p><a href="/about" className="inline-link">Our story <Icon name="arrow" size={16}/></a><a href="/about#film" className="inline-link">Watch the Gotas film <Icon name="play" size={16}/></a></div>
    </div></section>
    <InspectionCTA/>
  </main>;
}
