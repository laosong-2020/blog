<script lang="ts" setup>
import Hero from '../components/home/Hero/Hero.vue';
import Blogs from '../components/home/BlogList/Blogs.vue';
import Education from '../components/home/Education/Education.vue';
import Experience from '../components/home/Experience/Experience.vue';
import Skill from '../components/home/Skills/Skill.vue';
definePageMeta({
  layout: 'home',
  scrollToTop: true,
})
useSeoMeta({
  title: 'Zhenlei Song',
  ogTitle: 'Zhenlei Song — GIS & Navigation Researcher',
  description: 'Personal blog and portfolio of Zhenlei Song — PhD student in GIS & Navigation.',
  ogDescription: 'Personal blog and portfolio of Zhenlei Song — PhD student in GIS & Navigation.',
  ogImage: 'https://avatars.githubusercontent.com/u/60795200?v=4',
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
