<script setup lang="ts">
const route = useRoute()
import ProfileCard from '~/components/contact/ProfileCard.vue'

</script>

<template>
  <main class="space-y-4">
    <ProfileCard />
    <!--    <RequestCard />-->
  </main>
</template>
<style>
main {
  height: 100vh;
}
</style>