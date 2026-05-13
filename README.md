# cj-portfolio

Personal portfolio, blog, and expression site. Built with [Astro](https://astro.build), deployed to GitHub Pages.

**Live:** https://crittecol.github.io/cj-portfolio/

---

## Adding content

All content is Markdown (`.md`) or MDX (`.mdx`) files in `src/content/`. Push to `main` to deploy.

### Blog post

**Without images** — single file:

```
src/content/blog/your-post-slug.md
```

**With images** — folder:

```
src/content/blog/your-post-slug/
  index.md
  hero.jpg
  screenshot.png
```

Frontmatter:

```yaml
---
title: "Post Title"
description: "One sentence summary shown in previews."
pubDate: 2025-05-14
heroImage: ./hero.jpg       # optional — relative to this file
tags: ["tag1", "tag2"]      # optional
draft: true                 # set false (or remove) to publish
---

Content here...
```

Inline images in the body use the same relative syntax:

```markdown
![Alt text](./screenshot.png)
```

**Required:** `title`, `description`, `pubDate`

---

### Portfolio project

**Without images** — single file:

```
src/content/projects/your-project-slug.md
```

**With images** — folder:

```
src/content/projects/your-project-slug/
  index.md
  thumb.jpg
  demo.gif
```

Frontmatter:

```yaml
---
title: "Project Name"
category: webdev            # webdev | av | design | gamedev
description: "What it is and why it matters."
thumbnail: ./thumb.jpg      # optional — shows in grid cards
links:
  - label: "Live site"
    url: "https://..."
  - label: "Source"
    url: "https://github.com/..."
tags: ["Astro", "CSS"]      # optional
featured: false             # true = shown on home page
order: 5                    # lower number = earlier in grid
pubDate: 2025-05-14         # optional
draft: true
---

## Overview

Content here...
```

**Required:** `title`, `category`, `description`

---

### Toggling draft / publishing

`draft: true` hides a post or project everywhere — home page, indexes, and direct URL. Change to `draft: false` (or delete the line) to publish.

---

### MDX and components

Files with a `.mdx` extension can embed Astro components. Useful for interactive demos, game embeds, code playgrounds.

Example — a game iframe component:

```mdx
---
title: "My Game"
category: gamedev
description: "A puzzle platformer."
draft: false
---

import GameEmbed from '../../components/GameEmbed.astro';

Here is the game:

<GameEmbed src="https://itch.io/embed/123" title="Puzzle Platformer" />
```

Create the component at `src/components/GameEmbed.astro` first.

---

## Local development

```bash
npm install
npm run dev       # dev server at localhost:4321/cj-portfolio/
npm run build     # production build → dist/
npm run preview   # preview the production build
```

---

## Deployment

Push to `main`. GitHub Actions builds the site and deploys to GitHub Pages automatically.

Required one-time repo setting: **Settings → Pages → Source → GitHub Actions**

---

## Structure

```
src/
  content/
    blog/           blog posts (.md or .mdx, or folders with index.md + images)
    projects/       portfolio items (same)
  components/       reusable Astro components
  layouts/          page templates (BaseLayout, BlogLayout, ProjectLayout)
  pages/            routes (index, about, work/*, blog/*)
  styles/           global CSS
public/
  favicon.ico
  images/           fallback location for images not co-located with content
```
