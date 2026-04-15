# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (localhost:3000)
pnpm build      # Build for production
pnpm generate   # Static site generation
pnpm preview    # Preview production build
```

No test framework is configured in this project.

## Architecture

This is a **Nuxt 3 personal portfolio + blog** using file-based routing, `@nuxt/content` for Markdown-driven blog posts, Tailwind CSS + DaisyUI for styling, and TypeScript throughout.

### Central Configuration

[app.config.ts](app.config.ts) is the single source of truth for all personal data: profile links, education, work experience, and skills. Components read from `useAppConfig()` — to add/update portfolio content, edit this file only.

### Content (Blog Posts)

Blog posts live in [content/blogs/](content/blogs/) as Markdown files with front matter:

```yaml
---
title: Post Title
description: Post description
date: '2024-01-01'
image:
  path: /blog-imgs/filename.jpg
  width: 800
  height: 500
  alt: alt text
---
```

Blog pages use `queryContent()` to fetch posts. Math expressions (KaTeX) and syntax highlighting (Dracula theme) are enabled globally via [nuxt.config.ts](nuxt.config.ts).

### Routing

- `/` → `pages/index.vue` (portfolio homepage with hero, education, experience, skills, recent blogs)
- `/blogs` → `pages/blogs/index.vue` (all posts)
- `/blogs/[...slug]` → `pages/blogs/[...slug]/index.vue` (individual post with ToC)
- `/contact` → `pages/contact/index.vue`

### Layouts

- `layouts/home/` — homepage layout with top navigation bar
- `layouts/default/` — blog/inner pages with sidebar navigation

### TypeScript Types

All interfaces are in [types/](types/): `BlogFrontMatter`, `BlogList`, `BlogDetail`, `Education`, `Experience`, `Skill`.

### Styling

Tailwind CSS + DaisyUI with three themes: `light`, `dark`, `dracula` (dark is default). Color mode is managed by `@nuxtjs/color-mode`.

### Static Assets

- `/public/blog-imgs/` — images referenced in blog post front matter
- `/public/logos/` — company/school logos used in portfolio sections
