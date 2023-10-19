<script setup lang="ts">
const route = useRoute()
</script>
<template>
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
        <li class="h-12">
          <NuxtLink to="/" :class="{ 'font-bold text-gray-900 text-xl dark:text-gray-100 text-xl': route.path === '/', 'text-gray-500 text-xldark:text-gray-400 text-xl': route.path !== '/' }">Home</NuxtLink>
        </li>
        <li class="h-12">
          <NuxtLink to="/blogs" :class="{ 'font-bold text-gray-900 text-xl dark:text-gray-100 text-xl': route.path === '/blogs', 'text-gray-500 text-xl dark:text-gray-400 text-xl': route.path !== '/blogs' }">Blogs</NuxtLink>
        </li>
        <li class="h-12">
          <NuxtLink to="/contact" :class="{ 'font-bold text-gray-900 text-xl dark:text-gray-100 text-xl': route.path === '/contact', 'text-gray-500 text-xl dark:text-gray-400 text-xl': route.path !== '/contact' }">Contact</NuxtLink>
        </li>
      </ul>
    </div>
</template>