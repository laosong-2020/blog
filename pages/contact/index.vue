<script setup lang="ts">
import ProfileCard from '~/components/contact/ProfileCard.vue'

const router = useRouter()
const route = useRoute()
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