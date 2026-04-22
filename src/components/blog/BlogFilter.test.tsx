import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import BlogFilter from './BlogFilter'

const mockPosts = [
  {
    slug: 'offshore-wind',
    title: 'Offshore Wind Energy',
    description: 'Wind energy site selection',
    date: '2024-04-23',
    categories: ['GIS', 'Visualization'],
    tags: ['Offshore Wind Energy', 'Multi-Criteria'],
  },
  {
    slug: 'test-1',
    title: 'Test Post 1',
    description: 'First test post',
    date: '2023-10-19',
    categories: ['Web Development'],
    tags: ['Nuxt', 'Tailwind'],
  },
  {
    slug: 'test-2',
    title: 'Test Post 2',
    description: 'Second test post',
    date: '2023-10-19',
    categories: ['Web Development'],
    tags: ['Vue', 'Content Management'],
  },
]

const allCategories = ['GIS', 'Visualization', 'Web Development']
const allTags = ['Offshore Wind Energy', 'Multi-Criteria', 'Nuxt', 'Tailwind', 'Vue', 'Content Management']

function getArticleTitles() {
  return screen.getAllByRole('article').map(
    (article) => within(article).getByRole('heading', { level: 2 }).textContent,
  )
}

function queryArticleByTitle(title: string) {
  return screen.getAllByRole('article').find(
    (article) => within(article).queryByRole('heading', { level: 2, name: title }),
  )
}

describe('BlogFilter', () => {
  it('renders all posts when no filter is selected', () => {
    render(<BlogFilter posts={mockPosts} allCategories={allCategories} allTags={allTags} />)

    const titles = getArticleTitles()
    expect(titles).toHaveLength(3)
    expect(titles).toContain('Offshore Wind Energy')
    expect(titles).toContain('Test Post 1')
    expect(titles).toContain('Test Post 2')
  })

  it('filters by single category', async () => {
    const user = userEvent.setup()
    render(<BlogFilter posts={mockPosts} allCategories={allCategories} allTags={allTags} />)

    await user.click(screen.getByRole('button', { name: 'GIS' }))

    const titles = getArticleTitles()
    expect(titles).toHaveLength(1)
    expect(titles).toContain('Offshore Wind Energy')
  })

  it('filters by single tag', async () => {
    const user = userEvent.setup()
    render(<BlogFilter posts={mockPosts} allCategories={allCategories} allTags={allTags} />)

    await user.click(screen.getByRole('button', { name: 'Nuxt' }))

    const titles = getArticleTitles()
    expect(titles).toHaveLength(1)
    expect(titles).toContain('Test Post 1')
  })

  it('uses OR logic across categories', async () => {
    const user = userEvent.setup()
    render(<BlogFilter posts={mockPosts} allCategories={allCategories} allTags={allTags} />)

    await user.click(screen.getByRole('button', { name: 'GIS' }))
    await user.click(screen.getByRole('button', { name: 'Web Development' }))

    const titles = getArticleTitles()
    expect(titles).toHaveLength(3)
  })

  it('deselects filter and shows all posts again', async () => {
    const user = userEvent.setup()
    render(<BlogFilter posts={mockPosts} allCategories={allCategories} allTags={allTags} />)

    await user.click(screen.getByRole('button', { name: 'GIS' }))
    expect(getArticleTitles()).toHaveLength(1)

    await user.click(screen.getByRole('button', { name: 'GIS' }))
    expect(getArticleTitles()).toHaveLength(3)
  })

  it('applies selected style to active pill', async () => {
    const user = userEvent.setup()
    render(<BlogFilter posts={mockPosts} allCategories={allCategories} allTags={allTags} />)

    const gisButton = screen.getByRole('button', { name: 'GIS' })
    expect(gisButton.className).toContain('bg-accent-muted')

    await user.click(gisButton)
    expect(gisButton.className).toContain('bg-accent text-white')
    expect(gisButton.className).not.toContain('bg-accent-muted')
  })
})
