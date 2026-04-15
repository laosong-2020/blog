<script setup lang="ts">
import EducationCard from './EducationCard.vue'
const appConfig = useAppConfig()
const eduList = appConfig.education
</script>
<template>
  <section>
    <h2 class="text-4xl font-bold mb-4">Education</h2>
    <div class="max-w-[70%] mx-auto divide-y divide-base-300">
      <EducationCard
        v-for="eduInfo in eduList"
        :key="eduInfo.schoolName"
        :eduInfo="eduInfo"
      />
    </div>
  </section>
</template>
