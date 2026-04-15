<script setup lang="ts">
import ThemeSelect from '~/layouts/home/ThemeSelect.vue'
import MenuItem from '~/layouts/components/MenuItem.vue'
import SideMenuContacts from '~/layouts/components/SideMenuContacts.vue'
const appConfig = useAppConfig()
const route = useRoute()
const routeName = computed(() => String(route.name ?? ''))

const isHomeActive = computed(() => routeName.value.includes('index'))
const isBlogsActive = computed(() => routeName.value.includes('blogs'))
const isContactActive = computed(() => routeName.value.includes('contact'))
</script>

<template>
  <div class="flex flex-col w-64 h-full bg-base-100 border-r border-base-300">
    <!-- Profile（用间距分区，无 border-b） -->
    <div class="flex flex-col items-center text-center pt-8 pb-6 px-5">
      <div class="avatar mb-3">
        <div class="w-14 rounded-full ring-1 ring-base-300">
          <img
            :src="appConfig.profile.image"
            height="56"
            width="56"
            alt="profile image"
          >
        </div>
      </div>
      <div class="text-xl font-semibold">Zhenlei's Blog</div>
      <div class="text-xs text-base-content/40 mt-1 leading-relaxed">
        Talk is cheap. Programmer is cheaper...
      </div>
    </div>
    <!-- Nav -->
    <nav class="flex-1 px-3 space-y-1">
      <MenuItem
        to="/"
        icon="material-symbols:home-outline-rounded"
        :active="isHomeActive"
      >
        <span>Home</span>
      </MenuItem>
      <MenuItem
        to="/blogs"
        icon="material-symbols:article-outline-rounded"
        :active="isBlogsActive"
      >
        <span>Blogs</span>
      </MenuItem>
      <MenuItem
        to="/contact"
        icon="material-symbols:mail-outline-rounded"
        :active="isContactActive"
      >
        <span>Contact</span>
      </MenuItem>
    </nav>
    <!-- Bottom（mt-auto 推到底，无 border-t） -->
    <div class="mt-auto pb-6 px-5">
      <SideMenuContacts />
    </div>
  </div>
</template>
