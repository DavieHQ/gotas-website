import { Icon } from "@/components/Icons";
export default function NotFound() {
  return <main id="main-content" className="shell empty-page"><span className="kicker">Page unavailable</span><h1>Find an <em>estate.</em></h1><p>This address does not match a current page.</p><a href="/properties" className="btn btn-ink">Explore properties <Icon name="arrow"/></a></main>;
}
