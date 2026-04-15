<script setup lang="ts">
import type { Education } from '~/types/education'
defineProps<{
  eduInfo: Education
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
          :src="eduInfo.imgSrc"
          :alt="eduInfo.schoolName"
        />
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-baseline justify-between gap-2">
          <p class="text-3xl font-semibold">{{ eduInfo.schoolName }}</p>
          <p class="text-lg text-base-content/60 flex-shrink-0">{{ eduInfo.date }}</p>
        </div>
        <p class="text-xl text-base-content/80">{{ eduInfo.degree }}</p>
        <p class="text-lg text-base-content/60 mt-0.5">{{ eduInfo.schoolLocation }}</p>
      </div>
    </div>
    <div v-if="open" class="mt-3 ml-32 text-lg text-base-content/75 leading-relaxed">
      {{ eduInfo.description }}
    </div>
  </div>
</template>
