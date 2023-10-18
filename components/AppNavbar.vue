<script lang="ts" setup>
import ColorModeSwitch from '~/components/ColorModeSwitch.vue';

const appConfig = useAppConfig()
const route = useRoute()

</script>

<template>
  <div class="flex justify-between max-w-2xl px-4 py-4 mx-auto sm:px-8">
    <!-- Navigation -->
    <div class="text-gray-700 dark:text-gray-200">
        <NuxtLink to="/" :class="{ 'font-bold text-gray-900 dark:text-gray-100': route.path === '/', 'ml-4 text-gray-500 dark:text-gray-400': route.path !== '/' }">Home</NuxtLink>
        <span class="px-4"></span>
        <NuxtLink to="/blogs" :class="{ 'font-bold text-gray-900 dark:text-gray-100': route.path === '/blogs', 'ml-4 text-gray-500 dark:text-gray-400': route.path !== '/blogs' }">Blogs</NuxtLink>
    </div>
    <!-- Social icons & Color Mode -->
    <div class="space-x-3 transition text-gray-500">
      <a v-if="appConfig.socials?.github" :href="`https://github.com/${appConfig.socials?.github}`" title="GitHub" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:github" class="w-5 h-5" /></a>
      <a v-if="appConfig.socials?.linkedin" :href="`https://linkedin.com/in/${appConfig.socials?.linkedin}`" title="LinkedIn" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:linkedin" class="w-5 h-5" /></a>
      <ColorModeSwitch class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300" />
    </div>
  </div>
</template>