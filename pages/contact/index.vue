<script setup lang="ts">
const route = useRoute()
import ProfileCard from '~/components/contact/ProfileCard.vue'

</script>

<template>
  <main class="space-y-4">
    <div class="mx-auto max-w-lg lg:max-w-7xl">
      <ProfileCard />
    <!--    <RequestCard />-->
    </div>
  </main>
</template>
<style>
main {
  height: 100vh;
}
</style>