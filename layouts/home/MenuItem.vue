<script setup lang="ts">
interface Props {
  to: string,
  isScrolled: boolean,
  query?: Record<string, any>,
}
defineProps<Props>()
</script>
<template>
  <a 
    class="capitalize font-black"
    :class="{
      'text-white': !isScrolled,
    }"
    :href="to"
  >
    <button
      class="btn btn-primary btn-ghost btn-sm"
      type="button"
    >
      <span class="text-lg capitalize text-gray-800 dark:text-gray-200">
        <slot />
      </span>
    </button>
  </a>
</template>