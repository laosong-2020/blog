# Blog Filter Component & Footer Redesign

## Topic 1: Blog Page Filter Component

### Overview

Add a client-side filter component to the blog listing page (`/blogs`) that allows filtering by categories and tags. Uses a React island for instant filtering without page reload.

### Component Architecture

**New file:** `src/components/blog/BlogFilter.tsx`

**Props:**

```typescript
interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  image?: { path: string; alt?: string }
  categories?: string[]
  tags?: string[]
}

interface BlogFilterProps {
  posts: BlogPost[]
  allCategories: string[]
  allTags: string[]
}
```

**State:**

- `selectedCategories: Set<string>` — currently active category filters
- `selectedTags: Set<string>` — currently active tag filters

### Data Flow

1. `blogs/index.astro` fetches all blog posts from Content Collections
2. Extracts deduplicated `allCategories` and `allTags` arrays
3. Serializes blog data and passes as props to `<BlogFilter client:load />`
4. Component manages filter state internally; no URL sync needed

### Filter Logic

- **OR semantics**: a post is shown if ANY of its categories/tags match ANY selected filter
- When no filters are selected, all posts are shown
- Categories and tags share the same OR pool (selecting category "GIS" and tag "Nuxt" shows posts matching either)

### Pill Styling

| State | Categories | Tags |
|-------|-----------|------|
| Unselected | `bg-accent-muted text-accent` | `bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300` |
| Selected | `bg-accent text-white` (shared) | `bg-accent text-white` (shared) |

Pills are clickable toggles. Clicking an active pill deselects it.

### Layout

```
[Category pills] [Tag pills]    ← single row, categories first then tags
                                   separated by a subtle vertical divider or gap

[Blog card grid]                 ← same 2-column grid as current
```

### Test Blog Frontmatter Updates

**`src/content/blog/1.md`:**
```yaml
categories:
  - Web Development
tags:
  - Nuxt
  - Tailwind
```

**`src/content/blog/2.md`:**
```yaml
categories:
  - Web Development
tags:
  - Vue
  - Content Management
```

Existing `OffshoreWindEnergy.md` already has: categories `[GIS, Visualization]`, tags `[Offshore Wind Energy, Multi-Criteria]`.

### Testing

**Setup:** Vitest + React Testing Library (new dev dependencies)

**Test file:** `src/components/blog/BlogFilter.test.tsx`

**Test cases:**

1. Default state — no filter selected, all posts rendered
2. Select single category — only matching posts shown
3. Select single tag — only matching posts shown
4. OR logic — select `GIS` + `Web Development`, all 3 posts shown
5. Deselect — click active pill, returns to showing all posts
6. Pill style — selected pill has `bg-accent` class, unselected does not

---

## Topic 2: Remove Contact Page, Add Global Footer

### Overview

Delete the standalone `/contact` page. Replace with a lightweight footer on all layouts containing contact icon links.

### Changes

**Delete:** `src/pages/contact/index.astro`

**New file:** `src/components/layout/Footer.astro`

**Modify:**
- `src/layouts/HomeLayout.astro` — add `<Footer />` before closing tags
- `src/layouts/BlogLayout.astro` — add `<Footer />` before closing tags
- `src/components/layout/Header.astro` — remove "Contact" nav link

### Footer Design

```html
<footer>
  <div class="max-w-4xl mx-auto px-6 py-8 border-t border-gray-100 dark:border-gray-800/80">
    <div class="flex items-center justify-center gap-5">
      <!-- Icon-only links: GitHub, LinkedIn, Email -->
      <!-- Same icon style as hero section: gray-400, hover:text-accent -->
    </div>
  </div>
</footer>
```

- Pure icons (GitHub, LinkedIn, Mail from lucide-react), no text labels
- Centered, horizontal layout
- Consistent with hero section icon styling
- Future-extensible: can add copyright, sitemap links, etc. below the icons
