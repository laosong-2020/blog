# Personal Portfolio & Blog
[![Netlify Status](https://api.netlify.com/api/v1/badges/8bbe923e-4e4b-4022-9d39-db7fd8c3f900/deploy-status)](https://app.netlify.com/sites/szl-blog/deploys)

A modern, high-performance personal portfolio and blog built with **Astro**, **React**, and **Tailwind CSS**.

## 🚀 Tech Stack
- **Framework:** [Astro](https://astro.build/)
- **UI Library:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Testing:** [Vitest](https://vitest.dev/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## 🛠️ Getting Started

### Installation
```bash
pnpm install
```

### Development
Start the development server:
```bash
pnpm dev
```
The site will be available at `http://localhost:4321`.

### Build
Build the site for production:
```bash
pnpm build
```

### Preview
Preview the production build locally:
```bash
pnpm preview
```

### Testing
Run unit tests with Vitest:
```bash
pnpm test
# or with watch mode
pnpm test:watch
```

## 📁 Project Structure
- `src/content/`: Markdown files for blog posts.
- `src/data/`: Structured data for profile, education, and experience.
- `src/components/`: React UI components.
- `src/pages/`: Astro routing and page templates.
- `public/`: Static assets (images, logos).

## 📝 Content Management
Blog posts are located in `src/content/blog/`. Each post requires frontmatter following the schema defined in `src/content/config.ts`.

---
*Note: This project was migrated from Nuxt3 to Astro for better performance and developer experience.*
