<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { BlogList } from '~/types/blogs';
import BlogCard from '~/components/blogs/BlogCard.vue';

const LIMIT_CARDS = 3;

const { data: blogList } = await useAsyncData<BlogList[] >('blogs', async () => queryContent<BlogList>('blogs/')
  .sort({ date: -1 })
  .limit(LIMIT_CARDS)
  .find())
</script>

<template>
  <section>
    <div
      class="flex items-center animate__animated mb-1"
      data-animate="animate__fadeInUp"
    >
      <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-200 capitalize">
        Latest Posts
      </h2>
      <div class="mx-auto"/>
      <NuxtLink to="/blogs">
        <button
          class="btn btn-primary btn-ghost btn-sm"
          type="button"
        >
          <h2 class="text-lg font-bold text-gray-800 dark:text-gray-200 capitalize">
            More
          </h2>
          <Icon
            class="text-lg text-gray-800 dark:text-gray-200"
            icon="material-symbols:arrow-forward"
          />
        </button>
      </NuxtLink>
    </div>
    <p class="text-gray-700 dark:text-gray-300">
      Blogs Description
    </p>
    <div
      v-show="blogList?.length !== 0"
      class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:gap-4 p-0 md:py-4 md:p-0"
    >
      <BlogCard
        v-for="blog in blogList"
        :key="blog._path"
        class="animate__animated"
        data-animate="animate__fadeIn"
        dense
        :blog="blog"
      />
    </div>
    <p
      v-show="blogList?.length === 0"
      class="py-4 text-center"
    >
      No blogs found.
    </p>
  </section>
</template>