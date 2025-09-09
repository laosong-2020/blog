<script setup lang="ts">
import type { BlogList } from '~/types/blogs'
import { DefaultNuxtImagePath, DefaultNuxtImageAlt } from '~/types/blogs'
import dayjs from 'dayjs'
import { Icon } from '@iconify/vue'
const props = withDefaults(
  defineProps<{
    blog: BlogList
    noImage?: boolean
    isHideTime?: boolean
    dense?: boolean
  }>(),
  {
    blog: () => {
      return {} as BlogList
    },
    noImage: false,
    dense: false,
  }
)
const route = useRoute()

const newDay = 2
const _isNew = computed(() => {
  const now = dayjs()
  const targetDate = dayjs(props.blog.date)
  return now.diff(targetDate, 'day') < newDay
})
</script>
<template>
  <div
    class="card rounded hover:scale-105 transition ease-in-out duration-300 shadow-xl bg-base-200 rounded-xl h-96"
  >
    <NuxtLink
      class="flex flex-col h-full"
      :to="{
        path: props.blog._path,
        query: route.query,
      }"
    >
      <div v-if="!noImage" class="rounded-t relative">
        <div class="absolute right-2 -bottom-4 drop-shadow-xl">
          <button :path="blog._path" />
        </div>
        <img
          v-if="blog.image && blog.image.path"
          class="aspect-video rounded-t-xl"
          :src="blog.image.path"
          :alt="blog.image.alt || DefaultNuxtImageAlt"
        />
        <img
          v-else
          class="aspect-video rounded-t-xl"
          :src="DefaultNuxtImagePath"
          :alt="DefaultNuxtImageAlt"
        />
      </div>
      <div class="card-body flex-1 p-4">
        <h2 class="card-title">
          {{ blog.title }}
        </h2>
        <p v-if="!dense" class="line-clamp-3 text-sm">
          {{ blog.description }}
        </p>
        <!-- categories -->
        <div v-if="blog.categories?.length" class="mt-2 card-actions">
          <Icon icon="material-symbols:folder-open-outline-rounded" />
          <div
            v-for="category in blog.categories"
            :key="category"
            class="badge badge-outline badge-md lg:badge-sm"
          >
            {{ category }}
          </div>
        </div>
        <!-- Tags -->
        <div v-if="blog.tags?.length" class="mt-1 card-actions text-md lg:text-sm">
          <div v-for="tag in blog.tags" :key="tag" class="badge badge-outline badge-md lg:badge-sm">
            {{ tag }}
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
