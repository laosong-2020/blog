<script lang="ts" setup>
const route = useRoute()
import Hero from '../components/home/Hero.vue';
import Blogs from '../components/home/Blogs.vue';
definePageMeta({
  layout: 'home',
  scrollToTop: true,
})
</script>

<template>
  <main class="px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 bg-gray-100 dark:bg-gray-900">
    <Hero />
    <Blogs />
  </main>
</template>