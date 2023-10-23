<script lang="ts" setup>
const route = useRoute()
import Hero from '../components/home/Hero/Hero.vue';
import Blogs from '../components/home/BlogList/Blogs.vue';
import Education from '../components/home/Education/Education.vue';
import Experience from '../components/home/Experience/Experience.vue';
import Skill from '../components/home/Skills/Skill.vue';
definePageMeta({
  layout: 'home',
  scrollToTop: true,
})
</script>

<template>
  <main class="space-y-4">
    <Hero />
    <Education />
    <Experience />
    <Skill />
    <Blogs />
  </main>
</template>
