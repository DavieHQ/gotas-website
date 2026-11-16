export type EstatePhoto = { image: string; alt: string; caption: string };
export type EstateOffer = { price: number; label: string };
export type Estate = {
  slug: string; name: string; shortName: string; district: string; area: string;
  subtitle: string; overview: string; features: string[]; status: string;
  gallery: EstatePhoto[]; homeTypes: string[]; offer?: EstateOffer;
};
export type LegacyEstate = Omit<Estate, "homeTypes" | "offer"> & {
  listing: { label: string; bedrooms: number; price: number; priceLabel: string }
};
export type StoredEstate = Estate | LegacyEstate;
export const districtsFor = (estates: Estate[]) => [...new Set(estates.map(estate => estate.district))];
export const byRequest = "Availability on request";
export const statuses = [byRequest, "Available", "Now selling", "Selling fast", "On hold", "Sold out"];
export const estateHomeTypes = ["5-bedroom detached duplex", "4-bedroom detached duplex", "5-bedroom semi-detached duplex", "4-bedroom terrace"];
const amenities = ["Power supply", "Water supply", "Paved roads", "Clinic", "Schools", "Fitness facilities", "Shopping", "Recreation centre"];
export const renders = {
  terrace: { image: "terrace", alt: "Gotas architectural render of a terrace home and shaded forecourt", caption: "Terrace duplex" },
  front: { image: "detached-front", alt: "Gotas render of a contemporary detached duplex viewed from its gate", caption: "Detached duplex · front elevation" },
  angle: { image: "detached-angle", alt: "Gotas render of a detached duplex and its boundary wall", caption: "Detached duplex · street view" },
  penthouse: { image: "penthouse-angle", alt: "Gotas render of a pitched-roof penthouse beside a landscaped drive", caption: "Penthouse · driveway view" },
  penthouseFront: { image: "penthouse-front", alt: "Gotas render of the penthouse facade with a central balcony", caption: "Penthouse · front elevation" },
  semi: { image: "semi-detached", alt: "Gotas render of a semi-detached duplex with glazed balconies", caption: "Semi-detached duplex" }
} satisfies Record<string, EstatePhoto>;

export const portfolio: Estate[] = [
  { slug: "gotas-ecocity-idu-gousa", name: "Gotas Ecocity", shortName: "Ecocity", district: "Idu Gousa", area: "Idu Gousa, Abuja",
    subtitle: "The estate where Gotas began.",
    overview: "Gotas Ecocity is the company’s first estate, close to Idu Train Station in Gousa. Gotas began here with 91 serviced plots. Detached homes, semi-detached duplexes and terraces form part of a plan for greener urban living.",
    status: byRequest, features: amenities, gallery: [renders.terrace, renders.angle, renders.front], homeTypes: estateHomeTypes },
  { slug: "kingsland-idu-gousa", name: "Kingsland", shortName: "Kingsland", district: "Idu Gousa", area: "Idu Gousa, Abuja",
    subtitle: "A neighbourhood on the approach to Idu Train Station.",
    overview: "Kingsland sits opposite NAFVille Estate on the approach to Idu Train Station in Gousa. Its plan brings detached homes and terraces together with shared services and recreational facilities.",
    status: byRequest, features: amenities, gallery: [renders.penthouse, renders.terrace, renders.front], homeTypes: estateHomeTypes },
  { slug: "kings-garden-estate-kabusa", name: "Kings Garden Estate", shortName: "Kings Garden", district: "Kabusa", area: "Kabusa, Abuja",
    subtitle: "Garden living along the Kabusa express road.",
    overview: "Kings Garden Estate lies along the new Sherreti–Kabusa express road. Gotas describes a community built around greenery and everyday services, with plans for terraces and detached duplexes.",
    status: byRequest, features: amenities, gallery: [renders.front, renders.terrace, renders.angle], homeTypes: estateHomeTypes },
  { slug: "the-aurora-by-gotas", name: "The Aurora by Gotas", shortName: "The Aurora", district: "Kuje", area: "Sauka, Kuje, Abuja",
    subtitle: "Gotas Pearl Residences in Sauka.",
    overview: "Also known as Gotas Pearl Residences, The Aurora neighbours the Double Kings and Fhemfels estates in the Sauka area of Kuje. Gotas plans a mix of duplexes and terraces with smart-home features and green surroundings.",
    status: byRequest, features: amenities, gallery: [renders.angle, renders.terrace, renders.front], homeTypes: estateHomeTypes }
];
export const widerPortfolio = [
  { id: "eco-villas", name: "Gotas EcoVillas", place: "District details on enquiry" },
  { id: "salem-city", name: "Gotas Salem City Estate", place: "Lugbe, Abuja" },
  { id: "sapphire-heights", name: "Sapphire Heights", place: "Maitama 2, Abuja" }
];
export const sitePhone = "+2348187365047";
export const siteEmail = "info@gotasdiamond.com";
export const officeMap = "https://maps.app.goo.gl/uhmbf3jS52k74qb4A";
export const applicationPDF = "/documents/Gotas-Service-Plot-Sale-Application.pdf";
export const socials = [
  { label: "Instagram", url: "https://www.instagram.com/gotasdiamond/" },
  { label: "Facebook", url: "https://www.facebook.com/share/1D5VscU279/" },
  { label: "YouTube", url: "https://www.youtube.com/@gotasdiamondgloballimited" }
];
export const companyFilm = "https://www.youtube.com/watch?v=53ndcTLQNo4";
export const money = (value: number) => "₦" + new Intl.NumberFormat("en-NG").format(value);
export const propertyPath = (slug: string) => "/properties/" + encodeURIComponent(slug);
export const inspectionPath = (slug: string) => "/contact?estate=" + encodeURIComponent(slug) + "&topic=inspection#inspection";
export const photoURL = (image: string) => image.startsWith("https://") ? image : "/media/" + image + ".webp";
