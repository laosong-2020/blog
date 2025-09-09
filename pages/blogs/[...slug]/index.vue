<script setup lang="ts">
import type { BlogDetail } from '~/types/blogs'
import { DefaultNuxtImageAlt } from '~/types/blogs'
import SeoHead from '~/components/seo/SeoHead.vue'
import TableOfContents from '~/components/blogs/TableOfContents.vue'

// const runtimeConfig = useRuntimeConfig()
const route = useRoute()
// const router = useRouter()

const { data: page } = await useAsyncData<BlogDetail>(
  'page-data',
  async () => await queryContent<BlogDetail>(`/blogs/${route.params.slug[0]}`).findOne()
)

onMounted(() => {
  if (route.hash) {
    const contentDiv = document.getElementById('base-content')
    if (!contentDiv) return
    const hashEl = document.getElementById(route.hash.replace('#', ''))
    if (!hashEl) return
    contentDiv.scrollTo({
      top: hashEl.offsetTop,
      behavior: 'smooth',
    })
  }
})
</script>

<template>
  <SeoHead
    :title="page?.title"
    :description="page?.description"
    :image="page?.image?.path"
    type="article"
  />
  <div class="max-w-7xl mx-auto p-2 lg:p-4 min-h-screen">
    <div class="flex flex-col lg:flex-row gap-6 lg:items-start">
      <!-- Main Content -->
      <article class="flex-1 min-w-0 px-0 md:px-6">
        <h1 class="text-3xl font-bold mb-4">
          {{ page?.title }}
        </h1>
        <div class="flex mb-4">
          <div>
            <span class="mr-1 capitalize"> posted </span>
          </div>
        </div>
        <figure v-if="page?.image?.path">
          <img class="w-full" :src="page.image.path" :alt="page.image.alt || DefaultNuxtImageAlt" />
        </figure>
        <hr class="my-4" />
        <div class="prose prose-lg max-w-full">
          <ContentRenderer v-if="page" id="article" class="max-w-full" :value="page">
            <ContentRendererMarkdown :value="page" />
          </ContentRenderer>
        </div>
      </article>

      <!-- Table of Contents Sidebar -->
      <aside class="lg:w-80 flex-shrink-0">
        <TableOfContents v-if="page" :content="page" />
      </aside>
    </div>
  </div>
</template>
