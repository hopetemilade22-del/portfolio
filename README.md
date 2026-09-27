# Hope Adesina — Portfolio

## How to deploy to GitHub Pages

1. Push all the files in this folder to your `portfolio` repo (replace what's there now — same repo, same URL: `hopetemilade22-del.github.io/portfolio`).
2. In the repo's **Settings → Pages**, make sure the source is set to your default branch (usually `main`), root folder.
3. Give it a minute — your site updates at the same address.

No build step, no dependencies to install. It's plain HTML, CSS and JavaScript.

## How to add a new project (Crocs, Kivo, Brochure, Logo work, etc.)

You only ever need to touch **one file**: `js/projects-data.js`.

1. Drop your images into `assets/projects/` (create the folder if it's not there).
2. Open `js/projects-data.js`.
3. Copy one of the existing project blocks, paste it where you want it to appear in the list, and fill in your details. Delete any line you don't have information for — don't write "N/A".
4. Save. The site rebuilds itself from this file automatically — no HTML or CSS to touch.

Full field-by-field instructions are written as comments at the top of that file.

## Folder structure

```
index.html          → the page itself (structure/copy — rarely needs editing)
css/style.css        → all visual styling
js/projects-data.js  → ALL project content lives here — this is what you'll edit
js/main.js            → renders the work grid, handles nav + filters (rarely needs editing)
assets/                → your photo, Sips & Bites assets
assets/projects/       → put new project images here
```

## What's included right now

- Hero, About, Services, Selected Work, Experience, Skills, Contact — matching your existing site's structure.
- Crocs, Kivo, IKEA brochure and the KPMG/Deloitte/PwC set — labelled as brand-identity design practice from your TJD mentorship, not real client work.
- Sips & Bites, the M-KOPA SEO audit, the email campaign, Brand Identity & Fliers, and the short-form content portfolio.
- A working filter on Selected Work (All / Brand / Content / SEO / Email / Design), and each project card expands in place to show the brief, approach, tools and result.

## Still to add (whenever you're ready)

- Any more graphics you mentioned having
- Real images for M-KOPA, the email campaign, and the content portfolio (they're text-only right now)

Same process as before: images go in `assets/projects/`, details go in `js/projects-data.js`.
