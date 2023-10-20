<script setup lang="ts">
import ThemeSelect from '~/layouts/home/ThemeSelect.vue'
import MenuItem from '~/layouts/components/MenuItem.vue'
import SideMenuContacts from '~/layouts/components/SideMenuContacts.vue'
const appConfig = useAppConfig()
const route = useRoute()

</script>
<template>
  <div class="flex flex-col w-64 h-full bg-base-100">
    <div class="text-center p-4 mt-4">
      <div class="avatar flex justify-center mb-4">
        <div class="w-1/2 rounded-full border">
          <img
            :src="appConfig.profile.image"
            height="300"
            width="300"
            alt="profile image"
          >
        </div>
      </div>
      <div class="text-2xl font-bold">
        Zhenlei's Blog
      </div>
      <div class="text-sm opacity-70 line whitespace-pre-wrap">
        "Talk is cheap. Programmer is cheaper..."
      </div>
    </div>
    <div class="menu">
      <ul class="px-4">
        <li>
          <MenuItem
            to="/"
            icon="material-symbols:home-outline-rounded"
            :active="route.name.includes('index')"
          >
            <span>home</span>
          </MenuItem>
        </li>
        <li>
          <MenuItem
            to="/blogs"
            icon="material-symbols:menu-rounded"
            :active="route.name.includes('blogs')"
          >
            <span>blogs</span>
          </MenuItem>
        </li>
        <li>
          <MenuItem
            to="/contact"
            icon="mdi:donation-outline"
            :active="route.name.includes('contact')"
          >
            <span>contact</span>
          </MenuItem>
        </li>
      </ul>
    </div>
    <div class="mt-auto p-4">
      <SideMenuContacts />
      <div class="flex items-center justify-center">
        <ThemeSelect
          class="block lg:hidden"
          top
        />
      </div>
    </div>
  </div>
</template>