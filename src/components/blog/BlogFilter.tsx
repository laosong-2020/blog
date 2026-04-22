import { useState, useMemo } from 'react'

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

function FilterPanel({
  allCategories,
  allTags,
  selectedCategories,
  selectedTags,
  toggleCategory,
  toggleTag,
}: {
  allCategories: string[]
  allTags: string[]
  selectedCategories: Set<string>
  selectedTags: Set<string>
  toggleCategory: (cat: string) => void
  toggleTag: (tag: string) => void
}) {
  return (
    <div role="toolbar" aria-label="Filter posts">
      {allCategories.length > 0 && (
        <div className="mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 block mb-2">
            Categories
          </span>
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <button
                key={`cat-${cat}`}
                type="button"
                onClick={() => toggleCategory(cat)}
                className={
                  selectedCategories.has(cat)
                    ? 'text-xs px-3 py-1 rounded-full font-medium transition-colors bg-accent text-white'
                    : 'text-xs px-3 py-1 rounded-full font-medium transition-colors bg-accent-muted text-accent hover:bg-accent hover:text-white'
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
      {allCategories.length > 0 && allTags.length > 0 && (
        <div className="h-px bg-gray-100 dark:bg-gray-800 my-4" />
      )}
      {allTags.length > 0 && (
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 block mb-2">
            Tags
          </span>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={`tag-${tag}`}
                type="button"
                onClick={() => toggleTag(tag)}
                className={
                  selectedTags.has(tag)
                    ? 'text-xs px-3 py-1 rounded-full font-medium transition-colors bg-accent text-white'
                    : 'text-xs px-3 py-1 rounded-full font-medium transition-colors bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-accent hover:text-white'
                }
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function BlogFilter({ posts, allCategories, allTags }: BlogFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set())
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  const hasActiveFilter = selectedCategories.size > 0 || selectedTags.size > 0
  const hasFilters = allCategories.length > 0 || allTags.length > 0
  const activeCount = selectedCategories.size + selectedTags.size

  const filteredPosts = useMemo(() => {
    if (!hasActiveFilter) return posts

    return posts.filter((post) => {
      const postCats = post.categories ?? []
      const postTags = post.tags ?? []
      const matchesCategory = postCats.some((c) => selectedCategories.has(c))
      const matchesTag = postTags.some((t) => selectedTags.has(t))
      return matchesCategory || matchesTag
    })
  }, [posts, selectedCategories, selectedTags, hasActiveFilter])

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev)
      if (next.has(cat)) next.delete(cat)
      else next.add(cat)
      return next
    })
  }

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev)
      if (next.has(tag)) next.delete(tag)
      else next.add(tag)
      return next
    })
  }

  const filterPanelProps = {
    allCategories,
    allTags,
    selectedCategories,
    selectedTags,
    toggleCategory,
    toggleTag,
  }

  return (
    <div>
      {/* Mobile: filter toggle button + collapsible panel */}
      {hasFilters && (
        <div className="lg:hidden mb-6">
          <button
            type="button"
            onClick={() => setMobileFilterOpen((v) => !v)}
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-accent transition-colors flex items-center gap-1.5"
            aria-expanded={mobileFilterOpen}
            aria-controls="mobile-filter-panel"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z"
                clipRule="evenodd"
              />
            </svg>
            Filter
            {activeCount > 0 && (
              <span className="text-xs px-1.5 py-0.5 rounded-full bg-accent text-white">
                {activeCount}
              </span>
            )}
          </button>
          {mobileFilterOpen && (
            <div id="mobile-filter-panel" className="mt-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
              <FilterPanel {...filterPanelProps} />
            </div>
          )}
        </div>
      )}

      {/* Desktop: sidebar + content */}
      <div className="lg:flex lg:gap-8">
        {hasFilters && (
          <aside className="hidden lg:block lg:w-48 lg:shrink-0">
            <div className="sticky top-20">
              <FilterPanel {...filterPanelProps} />
            </div>
          </aside>
        )}

        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {filteredPosts.map((blog) => (
              <article key={blog.slug}>
                <a href={`/blogs/${blog.slug}`} className="group block">
                  <div className="aspect-video overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800/80 mb-4">
                    {blog.image ? (
                      <img
                        src={blog.image.path}
                        alt={blog.image.alt || blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-gray-200 dark:text-gray-700">
                          {blog.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-xs text-gray-400 dark:text-gray-500">{blog.date}</span>
                    {blog.categories?.map((cat) => (
                      <span
                        key={cat}
                        className="text-xs px-2 py-0.5 rounded-full bg-accent-muted text-accent font-medium"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-accent transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5 line-clamp-2">
                    {blog.description}
                  </p>
                </a>
              </article>
            ))}
          </div>

          {hasActiveFilter && filteredPosts.length === 0 && (
            <p className="text-center text-gray-400 dark:text-gray-500 py-12">
              No posts match the selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
