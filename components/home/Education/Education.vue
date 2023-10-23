<script setup lang="ts">
import EducationCard from './EducationCard.vue'
import { Education } from '~/types/education'
const appConfig = useAppConfig()
const route = useRoute();
const router = useRouter();
const eduList = appConfig.education
</script>
<template>
  <section>
    <p 
      class="text-4xl font-black text-gray-800 dark:text-gray-200"
    >
      Education
    </p>
    <br />
    <div class="grid grid-cols-1 gap-6">
      <EducationCard 
        v-for="eduInfo in eduList"
        :eduInfo="eduInfo"
      />
    </div>
    <br />
  </section>
</template>