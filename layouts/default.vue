<script lang="ts" setup>
import SideMenu from '~/layouts/components/SideMenu.vue'
import Header from '~/layouts/default/Header.vue'
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
      class="drawer-content relative min-h-screen flex flex-col bg-base-200/30"
    >
      <!-- Page content here -->
      <Header />
      <div class="flex-grow p-2 lg:p-4">
        <slot />
      </div>
    </div>
    <div class="drawer-side">
      <label
        aria-label="drawer"
        for="default-layout-drawer"
        class="drawer-overlay"
      />
      <SideMenu />
    </div>
  </div>
</template>
<style>
section {
  @apply max-w-7xl mx-auto px-2 lg:px-0 lg:py-4;
}
</style>