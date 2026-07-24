# mertkamberov.github.io

Personal portfolio of **Mert Kamberov** — Data Engineer & IoT enthusiast, Sofia, Bulgaria.

Live at **https://mertkamberov.github.io** · built with [Astro](https://astro.build), deployed via GitHub Actions to GitHub Pages.

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # production build to ./dist
npm run preview   # preview the production build
```

## Edit content

All content lives in plain data files — no component editing needed:

| What | Where |
| --- | --- |
| Projects | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Certificates | `src/data/certificates.ts` |
| Contact links / tagline | `src/data/site.ts` |
| CV | replace `public/cv.pdf` |

## Blog

The site is blog-ready. To publish a post, add a Markdown file in `src/content/blog/`:

```md
---
title: My first post
description: What it's about
pubDate: 2026-08-01
---

Post body…
```

The "blog" link appears in the nav automatically once at least one post exists.

## Deploy

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages (repo Settings → Pages → Source must be set to **GitHub Actions**).
