<script lang="ts" setup>
const route = useRoute()
import Hero from '..//components/home/Hero.vue';

definePageMeta({
  layout: 'default',
  scrollToTop: true,
})
</script>

<template>
  <main class="space-y-4">
    <Hero />
    <Hero />
  </main>
</template>