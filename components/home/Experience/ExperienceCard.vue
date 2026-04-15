<script setup lang="ts">
import type { Experience } from '~/types/Experience'
defineProps<{
  expInfo: Experience
}>()
const open = ref(false)
</script>
<template>
  <div
    class="py-5 cursor-pointer hover:bg-base-200/50 transition-colors duration-150 -mx-2 px-2 rounded-lg"
    @click="open = !open"
  >
    <div class="flex items-start gap-4">
      <div class="flex-shrink-0 w-28 h-28 rounded-xl bg-base-200 flex items-center justify-center p-2.5 ring-1 ring-base-300">
        <NuxtImg
          class="w-full h-full object-contain"
          :src="expInfo.imgSrc"
          :alt="expInfo.companyName"
        />
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-baseline justify-between gap-2">
          <p class="text-3xl font-semibold">{{ expInfo.companyName }}</p>
          <p class="text-lg text-base-content/60 flex-shrink-0">{{ expInfo.date }}</p>
        </div>
        <p class="text-xl text-base-content/80">{{ expInfo.position }}</p>
        <p class="text-lg text-base-content/60 mt-0.5">{{ expInfo.companyLocation }}</p>
      </div>
    </div>
    <div v-if="open" class="mt-3 ml-32">
      <ul class="space-y-1 text-lg text-base-content/75 list-disc list-inside leading-relaxed">
        <li v-for="(item, i) in expInfo.description" :key="i">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
