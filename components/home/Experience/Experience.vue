<script setup lang="ts">
import ExperienceCard from './ExperienceCard.vue'
import { Experience } from '~/types/experience'

const appConfig = useAppConfig()
const route = useRoute();
const router = useRouter();
const expList = appConfig.experience
</script>

<template>
  <section>
    <p 
      class="text-4xl font-black text-gray-800 dark:text-gray-200"
    >
      Work Experience
  </p>
    <br />
    <div class="grid grid-cols-1 gap-6">
      <ExperienceCard
        v-for="expInfo in expList"
        :expInfo="expInfo"
      />
    </div>
    <br />
  </section>
</template>