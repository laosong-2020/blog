<script setup lang="ts">
import BlogCard from './BlogCard.vue'
import type { BlogList } from '~/types/blogs'

const disPlayLimit = 16
//get blog list
const { data } = await useAsyncData<{
    list: BlogList[]
  }>('blogs', async () => {
    //blogs
    const list = await queryContent<BlogList>('blogs/')
      .sort({ date: -1 })
      .limit(disPlayLimit)
      .find()

    return {
      list,
    }
  })
</script>

<template>
  <div class="mx-auto">
    <div class="mb-8 pb-6 border-b border-base-300">
      <h1 class="text-2xl font-bold">All Posts</h1>
      <p v-if="data?.list" class="mt-1 text-sm text-base-content/50">
        {{ data.list.length }} article{{ data.list.length !== 1 ? 's' : '' }}
      </p>
    </div>
    <div
      v-if="data?.list && data?.list.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <BlogCard
        v-for="blog in data?.list || []"
        :key="blog._path"
        :blog="blog"
      />
    </div>
    <div 
      v-else
      class="flex justify-center items-center h-64"
    >
      <div class="text-4xl font-bold capitalize">
        No blog found
      </div>
    </div>
  </div>
</template>