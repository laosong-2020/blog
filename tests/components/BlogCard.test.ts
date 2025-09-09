import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import BlogCard from '~/components/blogs/BlogCard.vue'

// Mock Nuxt composables
mockNuxtImport('useRoute', () => {
  return () => ({
    path: '/test',
    params: {},
    query: {},
  })
})

mockNuxtImport('navigateTo', () => {
  return (path: string) => Promise.resolve(path)
})

// Sample blog data for testing
const mockBlog = {
  _path: '/blogs/test-post',
  title: 'Test Blog Post',
  description: 'This is a test blog post description',
  date: '2023-10-19',
  categories: ['test', 'example'],
  tags: ['vue', 'nuxt', 'test'],
  image: {
    path: '/test-image.jpg',
    alt: 'Test image',
    width: 800,
    height: 400,
  },
  readingTime: {
    minutes: 5,
    text: '5 min read',
    time: 300000,
    words: 1000,
  },
}

describe('BlogCard Component', () => {
  it('renders blog title correctly', () => {
    const wrapper = mount(BlogCard, {
      props: {
        blog: mockBlog,
      },
      global: {
        stubs: {
          Icon: true,
          NuxtLink: true,
        },
      },
    })

    expect(wrapper.text()).toContain('Test Blog Post')
  })

  it('renders blog description when dense is false', () => {
    const wrapper = mount(BlogCard, {
      props: {
        blog: mockBlog,
        dense: false,
      },
      global: {
        stubs: {
          Icon: true,
          NuxtLink: true,
        },
      },
    })

    expect(wrapper.text()).toContain('This is a test blog post description')
  })

  it('does not render description when dense is true', () => {
    const wrapper = mount(BlogCard, {
      props: {
        blog: mockBlog,
        dense: true,
      },
      global: {
        stubs: {
          Icon: true,
          NuxtLink: true,
        },
      },
    })

    expect(wrapper.text()).not.toContain('This is a test blog post description')
  })

  it('renders image when blog has image', () => {
    const wrapper = mount(BlogCard, {
      props: {
        blog: mockBlog,
        noImage: false,
      },
      global: {
        stubs: {
          Icon: true,
          NuxtLink: true,
        },
      },
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('/test-image.jpg')
    expect(img.attributes('alt')).toBe('Test image')
  })
})
