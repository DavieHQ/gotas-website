import { renders, type EstatePhoto } from "./estates";
export type LandListing = {
  slug: string; name: string; price: number; locations: string; baths: number; toilets: number;
  bedrooms: string; note: string; gallery: EstatePhoto[]; source: string;
};
export const landListings: LandListing[] = [
  { slug: "penthouse", name: "Penthouse", price: 16000000, locations: "Ecocity, Kabusa and Kuje", baths: 4, toilets: 5,
    bedrooms: "Confirm floor plan", note: "The published heading gives five bedrooms. Its amenities list four bedrooms, four baths and five toilets. Ask the team for the floor plan that applies to your plot.",
    gallery: [renders.penthouseFront, renders.penthouse], source: "https://gotasdiamond.com/listinga.html" },
  { slug: "semi-detached-duplex", name: "Semi-detached duplex", price: 12000000, locations: "Ecocity Idu, Gousa, Kabusa and Kuje", baths: 5, toilets: 5,
    bedrooms: "5 bedrooms", note: "The detail page gives five bedrooms, five baths and five toilets. Another published description gives six toilets. The team can confirm the approved layout.",
    gallery: [renders.semi], source: "https://gotasdiamond.com/listingb.html" },
  { slug: "detached-duplex", name: "Detached duplex", price: 16000000, locations: "Ecocity Idu, Gousa and Kabusa", baths: 6, toilets: 6,
    bedrooms: "Confirm floor plan", note: "The detail page lists five bedrooms, six baths and six toilets. The company’s homepage calls this a three-bedroom duplex. The price of the completed home is pending.",
    gallery: [renders.angle, renders.front], source: "https://gotasdiamond.com/listingc.html" },
  { slug: "terrace-duplex", name: "Terrace duplex", price: 8000000, locations: "Ecocity Idu, Gousa, Kabusa and Kuje", baths: 4, toilets: 5,
    bedrooms: "4 bedrooms", note: "The listing describes four bedrooms, four baths and five toilets. The price of the completed home is pending.",
    gallery: [renders.terrace], source: "https://gotasdiamond.com/listingd.html" }
];
export const landPath = (slug: string) => "/land-prices/" + encodeURIComponent(slug);
export const landEnquiry = (slug: string) => "/contact?topic=property&home=" + encodeURIComponent(slug) + "#inspection";
