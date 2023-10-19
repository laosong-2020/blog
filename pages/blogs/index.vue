<script lang="ts" setup>
  import BlogList from '~/components/blogs/BlogList.vue';
  definePageMeta({
  layout: 'home',
  scrollToTop: true,
})
</script>
<template>
  <main class="px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24">
    <div class="mx-auto max-w-lg lg:max-w-7xl">
      <div class="border-b border-b-gray-200 pb-6">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-800 dark:text-gray-300 sm:text-4xl">
          Posts
        </h2>
      </div>
      <BlogList />
    </div>
  </main>
</template>