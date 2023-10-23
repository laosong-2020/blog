<script setup lang="ts">
import Progress from './Progress.vue'

const appConfig = useAppConfig()
const route = useRoute();
const router = useRouter();
const skillList = appConfig.skills
</script>
<template>
  <section>
    <p 
      class="text-4xl font-black text-gray-800 dark:text-gray-200"
    >
      Skills
    </p>
    <br />
    <div class="grid grid-cols-1 gap-6">
      <Progress
        v-for="skill in skillList"
        :skill="skill"
      />
    </div>
    <br />
  </section>
</template>