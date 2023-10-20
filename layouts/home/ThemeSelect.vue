<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  top?: boolean
  bottom?: boolean
  end?: boolean
  isIcon?: boolean
  contentClass?: string | Record<string, boolean>
}

defineProps<Props>()
const colorMode = useColorMode()

const handleClick = async (newTheme?: string) => {
  colorMode.preference = newTheme || 'system'
}
</script>

<template>
  <div class="dropdown dropdown-bottom">
    <label v-if="!isIcon" :tabIndex="0" class="btn btn-ghost btn-sm">
      <!--
        <Icon class="text-2xl text-gray-800 dark:text-gray-200" icon="mdi:theme-light-dark" />
      -->
      <span class="text-lg capitalize text-gray-800 dark:text-gray-200">
        Themes
      </span>
    </label>
    <label v-else :tabIndex="0" class="btn btn-ghost btn-sm">
      <Icon class="text-2xl text-gray-800 dark:text-gray-200" icon="mdi:theme-light-dark" />
    </label>
    <client-only>
      <ul
        :tabIndex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32 z-20"
        :class="contentClass"
      >
        <li>
          <button
            class="w-full capitalize"
            :class="{
              'bg-primary text-white': colorMode.preference === 'light'
            }"
            type="button"
            @click="() => handleClick('light')"
          >
            Light
          </button>
        </li>
        <li>
          <button
            class="w-full capitalize"
            :class="{
              'bg-primary text-white': colorMode.preference === 'dark'
            }"
            type="button"
            @click="() => handleClick('dark')"
          >
            Dark
          </button>
        </li>
      </ul>
    </client-only>
  </div>
</template>