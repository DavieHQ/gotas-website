# Gotas Diamond Global Limited

## Start in Antigravity

1. Extract the ZIP and open the **Gotas-Diamond-Antigravity** folder in Antigravity. This is the folder containing `package.json`.
2. Use Node.js 24 and npm in the integrated terminal. If you use nvm, run `nvm install` in this folder to select the included version.
3. Run the following commands from that terminal.

```sh
npm run setup
npm run dev
```

Open [the local website](http://127.0.0.1:5173). Leave the terminal running while you work. On later visits, run `npm run dev`. The first setup downloads the locked dependencies and applies the three database migrations. It is safe to repeat. Local development works without cloud credentials.

### Try the buying journey

Open **Properties**, choose Kuje, and explore The Aurora. Open **Land prices** to compare home types, or **Applications** to choose a plot size. Following an enquiry link carries the selection into the contact form. The enquiry form saves the request and gives the buyer a reference. The applications page also offers the company's six-page PDF.

### Work in the local Studio

Start the dev server, then open [local Studio sign-in](http://127.0.0.1:5173/signin-with-chatgpt?return_to=/studio) in the same browser. This uses a development identity on your own computer. Use the **Enquiry inbox**, **Estates** and **Land prices** tabs to test changes. Reload the relevant public page to see a saved change. To test the guest view, [end the local session](http://127.0.0.1:5173/signout-with-chatgpt?return_to=/).

Local enquiries and edits persist under `.wrangler/state/`. The ZIP starts with the published catalogue defaults and an empty local inbox. The hosted database and its customer records remain on the host.

### First message to the Antigravity agent

> Read README.md and AGENTS.md. Start this existing Gotas Diamond project locally and check the Properties, Land prices and Applications pages. Use the current multi-page build, official brand assets and full-screen estate layouts as the baseline for my next brief.

## Development commands

| Command | Use |
| --- | --- |
| `npm run setup` | Install dependencies from the lockfile and initialise local D1. |
| `npm run dev` | Run the site with live editing on port 5173. |
| `npm run db:local` | Apply outstanding local migrations. Useful after a schema change. |
| `npm run typecheck` | Check the TypeScript source. |
| `npm run build` | Produce the Worker and browser assets in `dist/`. |
| `npm start` | Serve the compiled build locally. Open the address Wrangler prints. The Studio sign-in link above belongs to the development server. |

## Starting version

This handoff is based on **published version 3** at Git commit `0f681ce1cf1e62e631b82bfb4f498c872ee58571`. It includes the full route source, UI components, SQL migrations, local fonts, original logo variants, estate imagery and official application PDF. [Hosted preview](https://gotas-diamond-estates.davianeyng.chatgpt.site)

The export adds this guide, [agent notes](AGENTS.md), a Node version pin, local setup commands and a Wrangler configuration for local D1. The development sign-in adapter uses the existing Studio owner's identity on loopback. The application routes, production owner check, dependency versions and public assets match the published source.
