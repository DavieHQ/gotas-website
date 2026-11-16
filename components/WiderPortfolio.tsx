import { widerPortfolio } from "@/lib/estates";
import { Icon } from "./Icons";
export function WiderPortfolio() {
  return <section className="wider-portfolio" id="more-estates"><div className="shell wider-inner">
    <div><span className="kicker">Across Abuja</span><h2>More from <em>Gotas.</em></h2><p>Ask the team for project details and current availability.</p></div>
    <div className="wider-links">{widerPortfolio.map(d => <a key={d.id} href={"/contact?topic=property&development="+d.id+"#inspection"} aria-label={"Enquire about "+d.name}>
      <div><strong>{d.name}</strong><span>{d.place}</span></div><Icon name="up-right" size={20}/>
    </a>)}</div>
  </div></section>;
}
