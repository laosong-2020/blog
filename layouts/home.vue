
<script lang="ts" setup>
import HomeNavBar from '~/components/navBar/HomeNavBar.vue';

</script>

<template>
  <HomeNavBar />
  <slot />
</template>

<style>
section {
  @apply max-w-5xl mx-auto px-2 lg:px-0 lg:py-4;
}
</style>