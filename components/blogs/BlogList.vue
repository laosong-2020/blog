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
    <div 
      v-if="data?.list && data?.list.length > 0"
      class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-0 md:py-4 md:p-0"
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