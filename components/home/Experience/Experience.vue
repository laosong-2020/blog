<script setup lang="ts">
import ExperienceCard from './ExperienceCard.vue'
const appConfig = useAppConfig()
const expList = appConfig.experience
</script>
<template>
  <section>
    <h2 class="text-4xl font-bold mb-4">Work Experience</h2>
    <div class="max-w-[70%] mx-auto divide-y divide-base-300">
      <ExperienceCard
        v-for="expInfo in expList"
        :key="expInfo.companyName"
        :expInfo="expInfo"
      />
    </div>
  </section>
</template>
