<script setup lang="ts">
import type { BlogDetail } from '~/types/blogs'
import { DefaultNuxtImageHeight, DefaultNuxtImageAlt, DefaultNuxtImageWidth } from '~/types/blogs'

const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const router = useRouter()

const { data: page, error } = await useAsyncData<BlogDetail>('page-data', async () =>
  await queryContent<BlogDetail>(`/blogs/${route.params.slug[0]}`)
    .findOne()
)

useSeoMeta({
  title: () => page.value?.title ?? '',
  ogTitle: () => page.value?.title ?? '',
  description: () => page.value?.description ?? '',
  ogDescription: () => page.value?.description ?? '',
  ogImage: () => page.value?.image?.path ?? 'https://avatars.githubusercontent.com/u/60795200?v=4',
  ogType: 'article',
})

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
  <div class="max-w-5xl mx-auto flex p-2 lg:p-4">
    <div class="grow w-1 px-0 md:px-12">
      <h1 class="text-3xl font-bold mb-4">
        {{ page?.title }}
      </h1>
      <div class="flex gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
        <span v-if="page?.date">{{ page.date }}</span>
        <span v-if="page?.readingTime?.text">{{ page.readingTime.text }}</span>
      </div>
      <figure>
        <NuxtImg
          v-if="page.image && page.image.path"
          class="w-full"
          :src="page.image.path"
          :alt="page.image.alt || DefaultNuxtImageAlt"
          :height="page.image.height || DefaultNuxtImageHeight"
          :width="page.image.width || DefaultNuxtImageWidth"
          preload
        />
      </figure>
      <hr class="my-4">
      <div class="prose prose-lg max-w-full">
        <ContentRenderer
          id="article"
          class="max-w-full"
          :value="page"
        >
          <ContentRendererMarkdown
            :value="page" />
        </ContentRenderer>
      </div>
    </div>
  </div>
</template>