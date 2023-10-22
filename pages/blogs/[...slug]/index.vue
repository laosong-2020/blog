<script setup lang="ts">
import { BlogList, BlogDetail, DefaultNuxtImageHeight } from '~/types/blogs'
import BlogCard from '~/components/BlogCard.vue'

const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const router = useRouter()

const { data: page, error } = await useAsyncData<BlogDetail>('page-data', async () =>
  await queryContent<BlogDetail>(`/blogs/${route.params.slug[0]}`)
    .findOne()
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
  <div class="max-w-5xl mx-auto flex p-2 lg:p-4">
    <div class="grow w-1 px-0 md:px-12">
      <h1 class="text-3xl font-bold mb-4">
        {{ page?.title }}
      </h1>
      <div class="flex mb-4">
        <div>
          <span class="mr-1 capitalize">
            posted
          </span>
        </div>
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
        />
      </div>
    </div>
  </div>
</template>