<script setup lang="ts">
import { Icon } from '@iconify/vue'
import ThemeSelect from '~/layouts/home/ThemeSelect.vue'
</script>

<template>
  <header class="navbar bg-base-100 md:px-4">
    <label
      for="default-layout-drawer"
      class="btn btn-ghost btn-sm drawer-button lg:hidden"
    >
      <span class="text-2xl">
        <Icon 
          icon="material-symbols:menu-rounded"
        />
      </span>
    </label>
    <ClientOnly>
      <div class="text-3xl text-gray-800 dark:text-gray-200 capitalize font-bold truncate">
        Zhenlei's Blog
      </div>
  </ClientOnly>
    <div class="ml-auto" />
    <ThemeSelect 
      class="hidden lg:block"
      end
    />
  </header>
</template>