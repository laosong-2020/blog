<script setup lang="ts">
const appConfig = useAppConfig()
import ContactLink from '~/components/contact/ContactLink.vue'
</script>

<template>
  <section>
    <div class="card bg-base-100 mb-4">
      <div class="card-body">
        <h2 class="card-title text-4xl text-gray-800 dark:text-gray-200">Contact</h2>
        <p class="text-xl text-gray-600 dark:text-gray-400">
          Please contact me through email or social media if you have any questions or suggestions by clicking the icons below...
        </p>
        <div class="mt-2 flex text-3xl space-x-2">
          <ContactLink
            v-if="appConfig.profile?.email"
            icon="ic:outline-email"
            :href="`mailto:${appConfig.profile?.email}`"
            tooltip="email"
          />
          <ContactLink
            v-if="appConfig.profile.socials?.github"
            icon="ri:github-fill"
            :href="appConfig.profile.socials?.github"
            tooltip="Github"
          />
          <ContactLink
            v-if="appConfig.profile.socials?.linkedin"
            icon="ri:linkedin-fill"
            :href="appConfig.profile.socials?.linkedin"
            tooltip="Linkedin"
          />
        </div>
      </div>
    </div>
  </section>
</template>