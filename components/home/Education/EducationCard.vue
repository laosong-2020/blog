<script setup lang="ts">
import { Education } from '~/types/education'
const appConfig = useAppConfig()
const Props = defineProps<{
  eduInfo: Education
}>()
</script>
<template>
  <div class="card rounded mx-16 hover:scale-105 transition ease-in-out duration-300 shadow-xl bg-base-200 rounded-xl">
    <div class="flex justify-center items-center">
        <div class="basis-1/4">
          <NuxtImg
            class="aspect-auto rounded-full w-40"
            :src="eduInfo.imgSrc"/>
        </div>
        <div class="basis-1/2">
          <div tabindex="0" class="collapse collapse-plus">
            <input type="checkbox" className="peer" />
            <div class="collapse-title">
              <div class="flex flex-col justify-center items-start">
                <p class="text-3xl font-bold text-gray-800 dark:text-gray-200">{{ eduInfo.schoolName }}</p>
                <p class="pb-4 text-base font-normal text-gray-700 dark:text-gray-200 opacity-75">{{ eduInfo.schoolLocation }}</p>
                <p class="text-xl font-semibold text-gray-800 dark:text-gray-200">{{ eduInfo.degree }}</p>
                <p class="text-xl font-medium text-gray-800 dark:text-gray-200">{{ eduInfo.date }}</p>
              </div>
            </div>
            <div class="collapse-content"> 
              <p>{{ eduInfo.description }}</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>