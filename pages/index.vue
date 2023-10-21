<script lang="ts" setup>
const route = useRoute()
import Hero from '../components/home/Hero.vue';
import Blogs from '../components/home/Blogs.vue';
import Education from '../components/home/Education.vue';
definePageMeta({
  layout: 'home',
  scrollToTop: true,
})
</script>

<template>
  <main class="space-y-4">
    <Hero />
    <Education />
    <Blogs />
  </main>
</template>
