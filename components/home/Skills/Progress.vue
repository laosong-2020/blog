<script setup lang="ts">
import type { Skill } from '~/types/skill'
const appConfig = useAppConfig()
const props = defineProps<{
  skill: Skill
}>()
</script>
<template>
  <div class="flex flex-col">
    <p>
      {{ skill.name }}
    </p>
    <progress 
      class="progress progress-success"
      :value="skill.level"
      max="100"
    >
    </progress>
  </div>
</template>