
<script lang="ts" setup>
import NavBar from '~/layouts/home/Header.vue';
const route = useRoute();
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input
      id="default-layout-drawer"
      type="checkbox"
      class="drawer-toggle"
    >
    <div
      id="base-content"
      class="drawer-content relative max-h-full flex flex-col"
    >
      <NavBar />
      <div class="flex-grow p-2 lg:p-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
section {
  @apply max-w-7xl mx-auto px-4 lg:px-6 py-6;
}
</style>