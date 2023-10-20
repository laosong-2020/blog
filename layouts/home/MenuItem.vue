<script setup lang="ts">
interface Props {
  to: string,
  isScrolled: boolean
}
defineProps<Props>()
</script>
<template>
  <NuxtLink
    class="capitalize font-black"
    :class="{
      'text-white': !isScrolled,
    }"
    :to="{
      path: to,
    }"
  >
    <button
      class="btn btn-primary btn-ghost btn-sm"
      type="button"
    >
      <span class="text-lg capitalize text-gray-800 dark:text-gray-200">
        <slot />
      </span>
    </button>
  </NuxtLink>
</template>