# GEMINI.md - Project Context & Instructions

This project is a personal portfolio and blog website. Although the `README.md` currently mentions Nuxt3, the project has been migrated to **Astro**.

## Project Overview
- **Framework:** [Astro](https://astro.build/) (v4+)
- **UI Library:** [React](https://reactjs.org/) (integrated via `@astrojs/react`)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Content Management:** Astro Content Collections (Markdown)
- **Testing:** [Vitest](https://vitest.dev/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Building and Running
- **Install Dependencies:** `pnpm install`
- **Development Server:** `pnpm dev` (runs on `localhost:4321` by default)
- **Build Production:** `pnpm build`
- **Preview Production Build:** `pnpm preview`
- **Run Tests:** `pnpm test`
- **Run Tests in Watch Mode:** `pnpm test:watch`

## Directory Structure & Key Files
- `src/content/`: Contains blog posts in Markdown.
    - `src/content/config.ts`: Defines the schema for the `blog` collection.
- `src/data/portfolio.ts`: Contains structured data for the portfolio (Education, Experience, Skills, Profile).
- `src/components/`: React components used throughout the site.
- `src/layouts/`: Astro layouts (e.g., `HomeLayout.astro`, `BlogLayout.astro`).
- `src/pages/`: Astro pages and routing.
    - `src/pages/index.astro`: Homepage.
    - `src/pages/blogs/`: Blog listing and individual post routes.
- `public/`: Static assets like images and logos.
- `astro.config.mjs`: Astro configuration, including integrations and Markdown/Vite settings.
- `tailwind.config.cjs`: Tailwind CSS configuration.

## Development Conventions
- **TypeScript:** The project uses TypeScript. Ensure type safety when adding new components or data.
- **Styling:** Use Tailwind CSS utility classes. Global styles are in `src/styles/global.css`.
- **Content:** When adding blog posts, follow the schema defined in `src/content/config.ts`.
- **Testing:** Add or update Vitest tests (`*.test.tsx`) for UI components.
- **Portfolio Data:** Update `src/data/portfolio.ts` to change the information displayed on the resume/home page.

## Note on Nuxt3
The `.nuxt` and `.output` (if present) directories and references in `README.md` are legacy from a previous version of the project. Future work should focus on the Astro-based architecture.
