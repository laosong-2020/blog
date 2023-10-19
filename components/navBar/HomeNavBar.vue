<script lang="ts" setup>
import ThemeSelect from './ThemeSelect.vue';
import SideDropdown from './Dropdown.vue';
const appConfig = useAppConfig()

const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}
</script>

<template>
  <header 
    class="navbar bg-base-100 fixed z-10 top-0 transition duration-500 ease-in-out"
    :class="{
      'bg-transparent': !isScrolled,
      'shadow-xl': isScrolled,
    }">
    <div class="navbar-start">
      <SideDropdown />
    </div>
    <div class="navbar-center">
      <NuxtLink to="/">
        <a class="btn btn-ghost normal-case text-2xl">Zhenlei's Blog</a>
      </NuxtLink>
      
    </div>
    <div class="navbar-end">
      <ul class="menu menu-horizontal bg-base-200 rounded-box">
        <li>
          <a v-if="appConfig.socials?.github" :href="`https://github.com/${appConfig.socials?.github}`" title="GitHub" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="mdi:github" class="w-8 h-8" /></a>
        </li>
        <li>
          <a v-if="appConfig.socials?.linkedin" :href="`https://linkedin.com/in/${appConfig.socials?.linkedin}`" title="LinkedIn" class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300"><Icon name="mdi:linkedin" class="w-8 h-8" /></a>
        </li>
        <li>
          <ThemeSelect class="dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300" />
        </li>
      </ul>
    </div>
  </header>
</template>