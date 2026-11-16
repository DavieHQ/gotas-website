# Continuing the Gotas Diamond build

## Project and visual direction

Gotas Diamond Global Limited showcases residential estates and serviced plots in Abuja. The primary visitor actions are to explore an estate, compare published land prices, download a plot application and enquire about an inspection. The private Studio lets the owner maintain estates, prices and enquiries.

Keep the multi-page structure Benjamin approved. Each estate in the collection fills the usable viewport beneath the sticky navigation and district toolbar. Each detail page opens with its own full-screen hero. When changing navigation heights, update the `--header` and `--toolbar` values and check the layout on a narrow phone as well as desktop. Preserve keyboard-accessible controls, visible focus, gallery navigation and reduced-motion behaviour.

Use the original logos in `public/brand/` and the locally supplied DM Sans and Instrument Serif in `public/fonts/`. The core indigo is `#374A86`, cyan is `#03B0F1` and the logo's gold accent is `#FDCD32`. The design uses cool paper backgrounds and darker blues for legibility. A company render illustrates a design. Estate progress and completed-site photography require separate confirmation.

## Where to edit

| Visitor or owner task | Source files |
| --- | --- |
| Homepage and featured estate carousel | `app/page.tsx`, `components/HomeHero.tsx` |
| Navigation, footer, shared metadata and visual tokens | `app/layout.tsx`, `components/Navigation.tsx`, `components/Shared.tsx`, `app/globals.css` |
| Full-screen collection, district filter and saved estates | `app/properties/page.tsx`, `components/PropertyCollection.tsx`, `components/Shortlist.tsx` |
| Estate detail, home options, media and gallery | `app/properties/[slug]/page.tsx`, `lib/estates.ts`, `components/Photo.tsx`, `components/EstateGallery.tsx`, `public/media/` |
| Home-type price guide and individual price pages | `app/land-prices/page.tsx`, `app/land-prices/[slug]/page.tsx`, `lib/land-prices.ts` |
| Application terms, plot choices and downloadable form | `app/applications/page.tsx`, `lib/applications.ts`, `public/documents/Gotas-Service-Plot-Sale-Application.pdf` |
| History, services, leadership and company film | `app/about/page.tsx`, `components/CompanyFilm.tsx` |
| Contact details, map, enquiry prefills and submission | `app/contact/page.tsx`, `lib/estates.ts`, `components/EnquiryForm.tsx`, `lib/enquiry.ts`, `app/api/inspections/route.ts` |
| Owner inbox, estate editing and price editing | `app/studio/page.tsx`, `components/Studio.tsx`, `components/ListingManager.tsx`, `components/LandPriceManager.tsx`, `app/api/studio/` |
| Data and owner checks | `lib/catalog.ts`, `lib/estate-input.ts`, `db/schema.ts`, `drizzle/`, `app/chatgpt-auth.ts`, `lib/owner.ts` |

## Data and local development

Use the npm lockfile and the commands in README.md. This is a React and TypeScript App Router project built with Vinext/Vite and deployed as a Cloudflare Worker. `worker/index.ts` serves the application. Drizzle accesses SQLite through the `DB` D1 binding. `.openai/hosting.json` identifies the existing hosted project. `wrangler.local.json` supplies the database configuration for this handoff's local migration command.

The estate catalogue merges defaults with owner edits in `listing_updates`. `lib/previous-estate-defaults.json` supports older persisted entries. Published home-type prices use the separate `land_price_updates` table. An optional owner-confirmed quote can belong to one estate. Keep the four home-type prices independent from estate records and from the five application plot sizes.

Inspection, property and application enquiries share the `inspection_requests` table. `submissionKey` makes retries return the original reference. The Studio inbox is their delivery destination. A shortlist is saved in the visitor's browser. Enquiry links use `estate`, `home`, `plot` or `development` to set the relevant form context.

If the schema changes, edit `db/schema.ts`, run `npm run db:generate`, then `npm run db:local` and review the new SQL. Keep existing migration files so current databases can upgrade. For independent hosting, configure a production D1 binding and trusted server-side authentication for the Studio. The local mock identity belongs to development.

## Content that needs confirmation from Gotas

- The website gives Wuse Zone 6 for the office. The printed application gives Zone 4 for the same street. The applications page explains the discrepancy.
- The penthouse and detached listings have conflicting bedroom counts, and the semi-detached listing has conflicting toilet counts. Each price page records the published details and links to the original company listing.
- EcoVillas, Salem City and Sapphire Heights appear in the company history and currently lead to enquiries. The four profiled estates are Ecocity, Kingsland, Kings Garden and The Aurora.
- Treat the form's July 2025 payment terms as dated and facilities as planned. Use a company-confirmed update before changing availability, delivery dates, progress or fees. [Company website](https://gotasdiamond.com/) · [Published application form](https://gotasdiamond.com/gotform.pdf)

## Checks after a change

Run `npm run typecheck` and `npm run build`. For an estate change, check the district filter, detail page, gallery, shortlist and inspection link. For a price change, check the homepage, guide and detail page. For an enquiry change, send a local test and verify its reference in the local Studio. On a phone, check the menu, full-screen estate and the plot-size links.
