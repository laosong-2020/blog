<script setup lang="ts">
import { Icon } from '@iconify/vue'
import ThemeSelect from './ThemeSelect.vue'
import HomeMenuItem from '~/layouts/home/MenuItem.vue'
const isScrolled = ref(false)
const route = useRoute()
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>
<template>
  <header 
    class="navbar bg-base-100 fixed z-10 top-0 transition duration-500 ease-in-out"
    :class="{
      'bg-transparent': !isScrolled,
      'shadow-xl': isScrolled,
    }"
  >
    <div class="navbar-start">
    </div>
    <div class="navbar-center">
      <NuxtLink to="/">
        <a class="btn btn-ghost normal-case text-4xl text-gray-800 dark:text-gray-200">Zhenlei's Blog</a>
      </NuxtLink>
      
    </div>
    <div class="navbar-end">
      <div class="flex">
        <div class="flex-auto">
          <div class="ml-auto" />
          <div class="space-x-4 hidden lg:flex lg:mr-2">
            <HomeMenuItem
              :is-scrolled="isScrolled"
              to="/blogs"
            >
              <span>blogs</span>
            </HomeMenuItem>
            <!--        <MenuItem-->
            <!--          :is-scrolled="isScrolled"-->
            <!--          to="/showcases"-->
            <!--        >-->
            <!--          showcases-->
            <!--        </MenuItem>-->
            <HomeMenuItem
              :is-scrolled="isScrolled"
              to="/contact"
            >
              <span>contact</span>
            </HomeMenuItem>
            <ThemeSelect />
          </div>
          
        </div>
      </div>
    </div>
  </header>
</template>