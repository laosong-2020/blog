<script setup lang="ts">
import { Icon } from '@iconify/vue'
import ThemeSelect from '~/layouts/home/ThemeSelect.vue'
</script>

<template>
  <header class="navbar bg-base-100 border-b border-base-300 px-4 min-h-12 h-12">
    <label
      for="default-layout-drawer"
      class="btn btn-ghost btn-sm drawer-button lg:hidden"
    >
      <Icon icon="material-symbols:menu-rounded" class="text-2xl" />
    </label>
      <div class="text-xl font-semibold ml-1 truncate">
        Zhenlei's Blog
      </div>
    <div class="ml-auto" />
    <ThemeSelect isIcon end />
  </header>
</template>
