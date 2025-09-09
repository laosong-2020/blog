<script setup lang="ts">
import type { BlogDetail } from '~/types/blogs'
import { Icon } from '@iconify/vue'

interface TocItem {
  id: string
  title: string
  level: number
  children?: TocItem[]
}

const props = defineProps<{
  content: BlogDetail
}>()

const tocItems = ref<TocItem[]>([])
const isVisible = ref(false)

const extractHeadings = () => {
  if (!props.content || !props.content.body) return []

  const headings: TocItem[] = []

  const walkTokens = (tokens: unknown[]) => {
    tokens.forEach((token: unknown) => {
      const tokenNode = token as Record<string, unknown>
      if (
        tokenNode.type === 'element' &&
        (tokenNode.tag === 'h1' || tokenNode.tag === 'h2') &&
        tokenNode.children &&
        Array.isArray(tokenNode.children) &&
        tokenNode.children.length > 0
      ) {
        const level = Number.parseInt((tokenNode.tag as string).substring(1))
        const title = extractTextFromChildren(tokenNode.children)
        const propsObj = (tokenNode.props as Record<string, unknown>) || {}
        const id = (propsObj.id as string) || generateId(title)

        headings.push({
          id,
          title,
          level,
          children: [],
        })
      }

      if (tokenNode.children && Array.isArray(tokenNode.children)) {
        walkTokens(tokenNode.children)
      }
    })
  }

  walkTokens(props.content.body.children || [])
  return buildHierarchy(headings)
}

const extractTextFromChildren = (children: unknown[]): string => {
  return children
    .map((child: unknown) => {
      const childNode = child as Record<string, unknown>
      if (childNode.type === 'text') {
        return childNode.value as string
      }
      if (childNode.children && Array.isArray(childNode.children)) {
        return extractTextFromChildren(childNode.children)
      }
      return ''
    })
    .join('')
    .trim()
}

const generateId = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

const buildHierarchy = (headings: TocItem[]): TocItem[] => {
  const result: TocItem[] = []
  let currentH1: TocItem | null = null

  headings.forEach(heading => {
    if (heading.level === 1) {
      currentH1 = heading
      result.push(heading)
    } else if (heading.level === 2 && currentH1) {
      if (!currentH1.children) {
        currentH1.children = []
      }
      currentH1.children.push(heading)
    }
  })

  return result
}

const scrollToHeading = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

const toggleToc = () => {
  isVisible.value = !isVisible.value
}

onMounted(() => {
  tocItems.value = extractHeadings()

  nextTick(() => {
    const articleElement = document.getElementById('article')
    if (!articleElement) return

    const assignIds = (items: TocItem[]) => {
      items.forEach(item => {
        const headings = articleElement.querySelectorAll(`h${item.level}`)
        headings.forEach(heading => {
          if (heading.textContent?.trim() === item.title && !heading.id) {
            heading.id = item.id
          }
        })

        if (item.children) {
          assignIds(item.children)
        }
      })
    }

    assignIds(tocItems.value)
  })
})

watch(
  () => props.content,
  () => {
    tocItems.value = extractHeadings()
  },
  { deep: true }
)
</script>

<template>
  <div v-if="tocItems.length > 0" class="toc-container">
    <!-- Mobile Toggle Button -->
    <button
      class="lg:hidden fixed top-20 right-4 z-50 bg-primary text-primary-content p-2 rounded-full shadow-lg"
      @click="toggleToc"
    >
      <Icon icon="material-symbols:format-list-bulleted" class="w-5 h-5" />
    </button>

    <!-- TOC Content -->
    <div class="toc-sticky-container">
      <div
        :class="[
          'toc-content',
          isVisible ? 'block' : 'hidden lg:block',
          'fixed lg:relative top-16 right-4 lg:top-0 lg:right-auto',
          'bg-base-100 lg:bg-base-200 p-4 rounded-lg shadow-xl lg:shadow-none',
          'max-w-xs lg:max-w-none z-40 lg:z-auto',
          'lg:w-64 lg:ml-8 lg:p-4 lg:bg-base-200 lg:rounded-lg',
        ]"
      >
        <h3 class="font-bold text-lg mb-4 flex items-center">
          <Icon icon="material-symbols:format-list-bulleted" class="w-5 h-5 mr-2" />
          Table of Contents
        </h3>

        <nav class="toc-nav">
          <ul class="space-y-2">
            <li v-for="item in tocItems" :key="item.id">
              <button
                class="text-left w-full text-sm hover:text-primary transition-colors duration-200 font-medium"
                @click="scrollToHeading(item.id)"
              >
                {{ item.title }}
              </button>

              <ul v-if="item.children && item.children.length > 0" class="ml-4 mt-2 space-y-1">
                <li v-for="child in item.children" :key="child.id">
                  <button
                    class="text-left w-full text-xs text-base-content/70 hover:text-primary transition-colors duration-200"
                    @click="scrollToHeading(child.id)"
                  >
                    {{ child.title }}
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Overlay for mobile -->
    <div
      v-if="isVisible"
      class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
      @click="toggleToc"
    />
  </div>
</template>

<style scoped>
.toc-container {
  position: relative;
}

.toc-nav button:hover {
  text-decoration: underline;
}

/* Sticky positioning for desktop */
@media (min-width: 1024px) {
  .toc-sticky-container {
    position: sticky;
    top: 2rem;
    align-self: flex-start;
    max-height: calc(100vh - 4rem);
  }

  .toc-content {
    max-height: calc(100vh - 6rem);
    overflow-y: auto;
  }
}

@media (max-width: 1023px) {
  .toc-content {
    max-height: 70vh;
    overflow-y: auto;
  }
}

/* Custom scrollbar for TOC */
.toc-content::-webkit-scrollbar {
  width: 4px;
}

.toc-content::-webkit-scrollbar-track {
  background: transparent;
}

.toc-content::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}

.toc-content::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}
</style>
