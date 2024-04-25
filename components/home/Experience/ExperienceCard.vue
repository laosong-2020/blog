<script setup lang="ts">
import type { Experience } from '~/types/experience'
const appConfig = useAppConfig()
const Props = defineProps<{
  expInfo: Experience
}>()
</script>
<template>
  <div class="card rounded mx-16 hover:scale-105 transition ease-in-out duration-300 shadow-xl bg-base-200 rounded-xl">
    <div class="flex justify-center items-center">
      <div class="basis-1/4">
        <NuxtImg
          class="rounded h-32 w-64 object-cover"
          :src="expInfo.imgSrc"
          sizes="100vw sm:50vw md:400px"
        />
      </div>
      <div class="basis-1/2">
        <div tabindex="0" class="collapse collapse-plus">
          <input type="checkbox" className="peer" />
          <div class="collapse-title">
            <div class="flex flex-col justify-center items-start">
              <p class="text-3xl font-bold text-gray-800 dark:text-gray-200">
                {{ expInfo.companyName }}
              </p>
              <p class="pb-4 text-base font-normal text-gray-700 dark:text-gray-200 opacity-75">
                {{ expInfo.companyLocation }}
              </p>
              <p class="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {{ expInfo.position }}
              </p>
              <p class="text-xl font-medium text-gray-800 dark:text-gray-200">
                {{ expInfo.date }}
              </p>
            </div>
          </div>
          <div class="collapse-content">
            <ul class="max-w-md space-y-1 text-gray-700 list-disc list-inside dark:text-gray-300">
              <li>
                {{ expInfo.description[0] }}
              </li>
              <li>
                {{ expInfo.description[1] }}
              </li>
              <li>
                {{ expInfo.description[2] }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>