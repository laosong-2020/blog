<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  href: string,
  tooltip: string,
  icon: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="tooltip"
    :data-tooltip="tooltip"
  >
    <a 
      :href="href"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="tooltip"
    >
      <Icon
        :icon="icon"
        class="hover:-rotate-45 transition ease-in-out duration-200"
      />
    </a>
  </div>
</template>