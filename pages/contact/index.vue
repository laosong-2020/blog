<script setup lang="ts">
const route = useRoute()
import ProfileCard from '~/components/contact/ProfileCard.vue'

definePageMeta({
    layout: 'home',
    scrollToTop: true,
})
</script>

<template>
  <main class="px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24">
    <div class="mx-auto max-w-lg lg:max-w-7xl">
      <ProfileCard />
    <!--    <RequestCard />-->
    </div>
  </main>
</template>