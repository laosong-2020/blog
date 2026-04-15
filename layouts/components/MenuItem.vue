<script setup lang="ts">
import { Icon } from '@iconify/vue'
interface Props {
  to: string
  active: boolean
  icon?: string
  query?: Record<string, any>
}
defineProps<Props>()
</script>

<template>
  <NuxtLink
    class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium capitalize transition-colors duration-150 w-full"
    :class="{
      'text-base-content/60 hover:bg-base-200 hover:text-base-content': !active,
      'bg-primary/10 text-primary': active,
    }"
    :to="{ path: to, query: query }"
  >
    <Icon v-if="icon" :icon="icon" class="text-base flex-shrink-0" />
    <slot />
  </NuxtLink>
</template>
