import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { Icon } from "@/components/Icons";
import { InspectionCTA } from "@/components/Shared";
import { CompanyFilm } from "@/components/CompanyFilm";
export const metadata:Metadata={title:"About Gotas Diamond",description:"The company, its Abuja developments and the people behind Gotas Diamond Global Limited."};
const milestones=[
 ["2019","The first 91 plots","Founder Justine Andor Eleshi started with 91 serviced plots near Idu Train Station in Gousa. Gotas Ecocity became the company’s first estate."],
 ["2020","A subscriber model","Gotas introduced flexible 12–36-month plans for its early subscribers. The company reports more than 2,500 subscribers in the first year."],
 ["2025","A wider Abuja portfolio","The portfolio expanded to Kabusa, Idu, Lugbe, Kuje and Maitama 2. The company history also names Gotas EcoVillas and separately records more than 5,000 homeowners and investors."]
];
const services=[["Construction","Residential construction and finishing for private homeowners."],["Urban development","Estate planning and green residential communities, beginning with Ecocity in Idu."],["Property investment","Land banking and property management for subscribers investing in Abuja."]];
const leaders=[
 {name:"Dr. Justine Andor Eleshi",role:"Founder, Managing Director & CEO",image:"dr-justine-eleshi",intro:"A former Platinum Mortgage Bank branch manager with experience in mortgage refinancing and real estate marketing.",
 detail:"He holds a BSc in Geography and Regional Planning, an MSc in Environmental Resource Management and a PhD in Environmental Management. His work focuses on affordable housing, sustainable cities and the use of BIM and GIS in development."},
 {name:"Mr. Peter Chukwu Ibeneme",role:"Chief Financial Officer",image:"peter-ibeneme",intro:"Gotas credits him with more than 17 years in banking and finance, including control roles at UBA, Skye Bank and Polaris Bank.",
 detail:"He holds a BSc in Business Administration and a diploma in Marketing. The company lists professional affiliations in administration and economics and an MSc in Entrepreneurship in progress. His work covers financial strategy, risk management and financing for affordable housing."}
];
export default function About(){
  return <main id="main-content"><section className="about-lead"><div className="about-lead-text"><span className="kicker"><i/>About Gotas Diamond</span><h1>Rooted in<br/><em>Abuja.</em></h1><p>Since 2019, Gotas Diamond Global Limited has developed land and homes for people building a future in Nigeria’s capital.</p><a className="inline-link" href="#journey">Our journey <Icon name="down" size={15}/></a></div><div className="about-image"><Photo image="building-exterior" alt="Architectural exterior from the Gotas company profile" priority sizes="(max-width:680px) 100vw, 55vw"/></div></section>
  <section id="journey" className="shell story-timeline"><div className="story-intro"><span className="kicker">Company history</span><h2>The Gotas <em>story.</em></h2><p>Integrity, dedication, creativity and excellence guide the company’s work in construction, development and investment.</p><a href="/properties#more-estates" className="inline-link">Explore the wider portfolio <Icon name="arrow" size={14}/></a></div><div className="timeline">{milestones.map(([date,title,body])=><article key={date}><span>{date}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>
  <section className="company-figures"><div className="shell"><span className="kicker">Figures reported by Gotas</span><dl>{[["10+","Years of experience"],["100+","Happy clients"],["5+","Experts"]].map(([n,t])=><div key={t}><dt>{t}</dt><dd>{n}</dd></div>)}</dl></div></section>
  <section className="shell services-section"><div className="section-title"><div><span className="kicker">Our services</span><h2>What <em>we do.</em></h2></div></div><div className="services-list">{services.map(([t,b])=><article key={t}><h3>{t}</h3><p>{b}</p></article>)}</div></section>
  <section className="leadership-section"><div className="shell"><div className="section-title"><div><span className="kicker">The people behind Gotas</span><h2>Our <em>leadership.</em></h2></div></div><div className="leaders">{leaders.map(person=><article key={person.name}><div className="portrait"><Photo image={person.image} alt={person.name} sizes="(max-width:680px) 42vw, 22vw"/></div><div><span className="kicker">{person.role}</span><h3>{person.name}</h3><p>{person.intro}</p><details className="spec-details"><summary>Full profile <Icon name="plus" size={14}/></summary><p>{person.detail}</p></details></div></article>)}</div></div></section>
  <CompanyFilm/>
  <section className="shell estate-options"><div><span className="kicker">Company information</span><h2>Project <em>enquiries.</em></h2></div><div>
    <details className="spec-details"><summary>What does Gotas report about property titles?<Icon name="plus" size={15}/></summary><p>Gotas describes the titles for its Idu and Kuje properties as verified and says it vets properties through AGIS. Ask the team for the title documents for your chosen plot.</p><a className="inline-link" href="/contact?topic=property#inspection">Request plot documents <Icon name="arrow" size={14}/></a></details>
    <details className="spec-details"><summary>What is the latest Ecocity progress update?<Icon name="plus" size={15}/></summary><p>The company profile reports 85% completion without an update date. The inspections team can confirm current progress before a visit.</p><a className="inline-link" href="/contact?topic=inspection&estate=gotas-ecocity-idu-gousa#inspection">Arrange an Ecocity visit <Icon name="arrow" size={14}/></a></details>
    <details className="spec-details"><summary>Which payment plans are published?<Icon name="plus" size={15}/></summary><p>The application form describes upfront, 12-month, 24-month and individually approved plans.</p><a className="inline-link" href="/applications">Application details <Icon name="arrow" size={14}/></a></details>
  </div></section><InspectionCTA/></main>;
}
