<script setup lang="ts">
import ContactLink from '~/components/links/ContactLink.vue'

const appConfig = useAppConfig()

</script>

<template>
  <div class="flex items-center justify-center mb-4">
    <div class="mt-2 flex text-3xl space-x-2">
      <ContactLink
          v-if="appConfig.socials?.email"
          icon="ic:outline-email"
          :href="`mailto:${appConfig.socials?.email}`"
          tooltip="email"
        />
        <ContactLink
          v-if="appConfig.socials?.github"
          icon="ri:github-fill"
          :href="appConfig.socials?.github"
          tooltip="Github"
        />
        <ContactLink
          v-if="appConfig.socials?.linkedin"
          icon="ri:linkedin-fill"
          :href="appConfig.socials?.linkedin"
          tooltip="Linkedin"
        />
    </div>
  </div>
</template>