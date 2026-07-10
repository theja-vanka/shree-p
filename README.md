# Shree Pushpa — Portfolio

Single-page portfolio built with Next.js (App Router, static export) and Tailwind CSS, deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Static output is written to `out/`.

## Deployment

Deploys are manual, via the `gh-pages` package:

```bash
npm run deploy
```

This runs `next build` (producing the static export in `out/`) and pushes `out/` to the `gh-pages` branch.

One-time setup on GitHub, after this repo is pushed:

1. Repo → Settings → Pages → Build and deployment → Source: **Deploy from a branch**.
2. Branch: `gh-pages`, folder: `/ (root)`.
3. Run `npm run deploy` whenever you want to publish an update.
4. Site will be live at `https://theja-vanka.github.io/shree-p/`.

The `basePath`/`assetPrefix` in `next.config.js` only apply during a production build (`NODE_ENV=production`, i.e. `next build`), so `npm run dev` still works at the site root locally.

## Content

All copy (bio, experience, education, skills, projects, contact info) lives in `data/content.ts` — edit that file to update the site.
