<script setup lang="ts">
import ThemeSelect from './ThemeSelect.vue'

const isScrolled = ref(false)

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
    class="navbar fixed z-10 top-0 h-14 px-6 transition-all duration-300"
    :class="isScrolled
      ? 'bg-base-100/95 backdrop-blur-md shadow-sm border-b border-base-300'
      : 'bg-transparent'"
  >
    <div class="flex-1">
      <NuxtLink
        to="/"
        class="text-xl font-semibold hover:opacity-70 transition-opacity"
      >
        Zhenlei's Blog
      </NuxtLink>
    </div>
    <nav class="flex items-center gap-1">
      <NuxtLink
        to="/blogs"
        class="px-3 py-1.5 rounded-md text-sm font-medium text-base-content/60 hover:text-base-content hover:bg-base-200 transition-colors"
      >
        Blogs
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="px-3 py-1.5 rounded-md text-sm font-medium text-base-content/60 hover:text-base-content hover:bg-base-200 transition-colors"
      >
        Contact
      </NuxtLink>
      <ThemeSelect isIcon end />
    </nav>
  </header>
</template>
