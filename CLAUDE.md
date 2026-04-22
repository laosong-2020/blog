# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (localhost:4321)
pnpm build      # Build static site to dist/
pnpm preview    # Preview production build
pnpm test       # Run tests (Vitest)
pnpm test:watch # Run tests in watch mode
```

## Architecture

This is an **Astro 4 personal portfolio + blog** using file-based routing, Astro Content Collections for Markdown-driven blog posts, Tailwind CSS (no component library) for styling, React for interactive components, and TypeScript throughout.

### Central Configuration

[src/data/portfolio.ts](src/data/portfolio.ts) is the single source of truth for all personal data: profile links, education, work experience, and skills.

### Content (Blog Posts)

Blog posts live in [src/content/blog/](src/content/blog/) as Markdown files with frontmatter:

```yaml
---
title: Post Title
description: Post description
date: '2024-01-01'
image:
  path: /blog-imgs/filename.jpg   # or R2 public URL
  width: 800
  height: 500
  alt: alt text
categories: [GIS]
tags: [tag1, tag2]
---
```

Collection schema is defined in [src/content/config.ts](src/content/config.ts).
Math expressions (KaTeX) and syntax highlighting (Dracula theme) are enabled via [astro.config.mjs](astro.config.mjs).

### Routing

- `/` → `src/pages/index.astro` (portfolio: hero, education, experience, skills, recent blogs)
- `/blogs` → `src/pages/blogs/index.astro` (all posts with category/tag filter)
- `/blogs/[slug]` → `src/pages/blogs/[slug].astro` (individual post with ToC)

### Layouts

- `src/layouts/HomeLayout.astro` — portfolio pages (includes dark mode init script)
- `src/layouts/BlogLayout.astro` — blog pages (includes KaTeX CSS)

### Dark Mode

Tailwind `darkMode: 'class'`. The layout inlines a script in `<head>` that reads `localStorage.getItem('theme')` before paint to avoid FOUC. ThemeToggle component writes back to localStorage and toggles `dark` class on `<html>`.

### Styling

Tailwind CSS v3, no component library. Custom styles written per component. Config in [tailwind.config.cjs](tailwind.config.cjs).

### Static Assets

- `/public/blog-imgs/` — blog cover images (will move to Cloudflare R2)
- `/public/logos/` — company/school logos used in portfolio sections

### Deployment

Target: Cloudflare Pages (static). Blog `.md` files will eventually be stored in Cloudflare R2 and pulled into `src/content/blog/` at build time.
