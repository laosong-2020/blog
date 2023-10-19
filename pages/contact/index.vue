<script setup lang="ts">
const route = useRoute()
import ProfileCard from '~/components/contact/ProfileCard.vue'

definePageMeta({
    layout: 'default',
    scrollToTop: true,
})
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <ProfileCard />
    <!--    <RequestCard />-->
  </div>
</template>