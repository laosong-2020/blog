
<script lang="ts" setup>
import AppNavbar from '~/components/navBar/AppNavbar.vue';

</script>

<template>
  <AppNavbar />
  <slot />
</template>

<style>
section {
  @apply max-w-5xl mx-auto px-2 lg:px-0 lg:py-4;
}
</style>