# Naman Sharma — portfolio site

A plain static site: HTML, CSS and a little JavaScript. No build step, no framework, no dependencies. It runs on GitHub Pages as is.

## What's in the folder

```
index.html        Homepage (hero, KPIs, sutras, selected work, about, contact)
project.html      One template that renders every project (project.html?p=slug)
404.html          Not-found page
css/style.css     All styling and design tokens (colors and fonts at the top)
js/data.js        ALL your content: site info, sutras, up to 10 projects
js/app.js         Renders the pages from data.js (you rarely need to edit this)
assets/images/    Put your project images here
.nojekyll         Tells GitHub Pages to serve the files exactly as they are
```

## Edit your content

Open `js/data.js`. Everything in `[square brackets]` is a placeholder.

- **SITE**: your name, email, and the link to your sutras page.
- **SUTRAS**: the six sutras (myth and principle). Shared by the homepage and every project.
- **PROJECTS**: up to 10 entries. For each project you can set:
  - `title`, `type` (Work, Academic, Publication, Talk, Award), `year`, `summary`
  - `role`, `when`, `where`, `team`
  - `metrics`: four value + label pairs. The first two appear on the homepage card.
  - `problem`, `approach`, `output`
  - `scores`: six numbers from 0 to 4, one per sutra, which draw the radar chart
  - `beats`: the one or two moments a sutra changed the course (sutra number 1 to 6, plus what changed)
  - `show: false` hides a project from the whole site without deleting it
  - `order`: the position in the list

Each project automatically gets its own page, and the previous and next buttons follow `order`.

### Add images

1. Copy image files into `assets/images/` (JPG or WebP, ideally under 300 KB each).
2. In the project's `images` block, set `src: 'assets/images/your-file.jpg'` and write a short `alt` description. Leave `src` empty to keep the dashed placeholder.

Image slots per project: one wide hero (21:9), two side-by-side images in "The approach" (4:3), and one image in "What it left behind" (16:9).

## Preview on your computer

Open a terminal in this folder and run:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000. (Opening index.html by double-click also works, but the web server mimics GitHub more closely.)

## Publish on GitHub Pages

1. Create a **public** repository named `YOUR-USERNAME.github.io` on GitHub.
2. Upload everything in this folder to the repository root (the "Add file > Upload files" button works; include the hidden `.nojekyll` file, or create an empty file with that name).
3. In the repo go to **Settings > Pages**. Under "Build and deployment" choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.
4. After a minute or two your site is live at `https://YOUR-USERNAME.github.io`.

Every time you commit a change to `main`, the site updates.

### Custom domain (optional)

Buy a domain from any registrar, then add it under Settings > Pages > Custom domain and create the DNS records GitHub shows you. HTTPS is turned on for you.

## Before you go live

- Replace `hello@example.com` in `js/data.js` with your real email.
- The sutras link points to a claude.ai page that is private until you share it. Publish the sutras page somewhere public (or share it) and update `sutrasUrl` in `js/data.js`.
- Replace all placeholder text and the radar `scores`. The scores shipped here are illustrative.
- The homepage hero figure and KPI numbers (12x, 150+, 100, 8+) are written directly in `index.html`, so edit them there.
- Fonts load from Google Fonts. If you want zero third-party requests, download the three font families and host them in the repo.
