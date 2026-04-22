
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  Path: typeof import("../../components/content/Path.vue")['default']
  BlogsBlogCard: typeof import("../../components/blogs/BlogCard.vue")['default']
  BlogsBlogList: typeof import("../../components/blogs/BlogList.vue")['default']
  ContactLink: typeof import("../../components/contact/ContactLink.vue")['default']
  ContactProfileCard: typeof import("../../components/contact/ProfileCard.vue")['default']
  HomeBlogListBlogs: typeof import("../../components/home/BlogList/Blogs.vue")['default']
  HomeEducation: typeof import("../../components/home/Education/Education.vue")['default']
  HomeEducationCard: typeof import("../../components/home/Education/EducationCard.vue")['default']
  HomeExperience: typeof import("../../components/home/Experience/Experience.vue")['default']
  HomeExperienceCard: typeof import("../../components/home/Experience/ExperienceCard.vue")['default']
  HomeHero: typeof import("../../components/home/Hero/Hero.vue")['default']
  HomeSkillsProgress: typeof import("../../components/home/Skills/Progress.vue")['default']
  HomeSkillsSkill: typeof import("../../components/home/Skills/Skill.vue")['default']
  LinksContactLink: typeof import("../../components/links/ContactLink.vue")['default']
  ContentDoc: typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']
  ContentList: typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']
  ContentNavigation: typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']
  ContentQuery: typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']
  ContentRenderer: typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
  ContentRendererMarkdown: typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']
  ContentSlot: typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']
  DocumentDrivenEmpty: typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']
  DocumentDrivenNotFound: typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']
  Markdown: typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']
  ProseCode: typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")['default']
  ProseCodeInline: typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue")['default']
  ProsePre: typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue")['default']
  ProseA: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']
  ProseBlockquote: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']
  ProseEm: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']
  ProseH1: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']
  ProseH2: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']
  ProseH3: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']
  ProseH4: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']
  ProseH5: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']
  ProseH6: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']
  ProseHr: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']
  ProseImg: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']
  ProseLi: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']
  ProseOl: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']
  ProseP: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']
  ProseScript: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
  ProseStrong: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']
  ProseTable: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']
  ProseTbody: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']
  ProseTd: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']
  ProseTh: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']
  ProseThead: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']
  ProseTr: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']
  ProseUl: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/.pnpm/@nuxt+image@2.0.0_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
  NuxtPicture: typeof import("../../node_modules/.pnpm/@nuxt+image@2.0.0_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
  MDC: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
  MDCRenderer: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
  MDCSlot: typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
  ColorScheme: typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.5.2/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
  NuxtPage: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyPath: LazyComponent<typeof import("../../components/content/Path.vue")['default']>
  LazyBlogsBlogCard: LazyComponent<typeof import("../../components/blogs/BlogCard.vue")['default']>
  LazyBlogsBlogList: LazyComponent<typeof import("../../components/blogs/BlogList.vue")['default']>
  LazyContactLink: LazyComponent<typeof import("../../components/contact/ContactLink.vue")['default']>
  LazyContactProfileCard: LazyComponent<typeof import("../../components/contact/ProfileCard.vue")['default']>
  LazyHomeBlogListBlogs: LazyComponent<typeof import("../../components/home/BlogList/Blogs.vue")['default']>
  LazyHomeEducation: LazyComponent<typeof import("../../components/home/Education/Education.vue")['default']>
  LazyHomeEducationCard: LazyComponent<typeof import("../../components/home/Education/EducationCard.vue")['default']>
  LazyHomeExperience: LazyComponent<typeof import("../../components/home/Experience/Experience.vue")['default']>
  LazyHomeExperienceCard: LazyComponent<typeof import("../../components/home/Experience/ExperienceCard.vue")['default']>
  LazyHomeHero: LazyComponent<typeof import("../../components/home/Hero/Hero.vue")['default']>
  LazyHomeSkillsProgress: LazyComponent<typeof import("../../components/home/Skills/Progress.vue")['default']>
  LazyHomeSkillsSkill: LazyComponent<typeof import("../../components/home/Skills/Skill.vue")['default']>
  LazyLinksContactLink: LazyComponent<typeof import("../../components/links/ContactLink.vue")['default']>
  LazyContentDoc: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']>
  LazyContentList: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']>
  LazyContentNavigation: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']>
  LazyContentQuery: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']>
  LazyContentRenderer: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
  LazyContentRendererMarkdown: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']>
  LazyContentSlot: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']>
  LazyDocumentDrivenEmpty: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']>
  LazyDocumentDrivenNotFound: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']>
  LazyMarkdown: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']>
  LazyProseCode: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue")['default']>
  LazyProseCodeInline: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue")['default']>
  LazyProsePre: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+content@2.13.4_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2_nuxt@3.21.2_@parcel+watche_a48da0db05e68bcddf357548e75b9aee/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue")['default']>
  LazyProseA: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue")['default']>
  LazyProseBlockquote: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue")['default']>
  LazyProseEm: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue")['default']>
  LazyProseH1: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue")['default']>
  LazyProseH2: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue")['default']>
  LazyProseH3: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue")['default']>
  LazyProseH4: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue")['default']>
  LazyProseH5: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue")['default']>
  LazyProseH6: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue")['default']>
  LazyProseHr: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue")['default']>
  LazyProseImg: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue")['default']>
  LazyProseLi: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue")['default']>
  LazyProseOl: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue")['default']>
  LazyProseP: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue")['default']>
  LazyProseScript: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
  LazyProseStrong: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue")['default']>
  LazyProseTable: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue")['default']>
  LazyProseTbody: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue")['default']>
  LazyProseTd: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue")['default']>
  LazyProseTh: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue")['default']>
  LazyProseThead: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue")['default']>
  LazyProseTr: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue")['default']>
  LazyProseUl: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+image@2.0.0_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2/node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxt+image@2.0.0_db0@0.3.4_ioredis@5.10.1_magicast@0.5.2/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
  LazyMDC: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
  LazyMDCRenderer: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
  LazyMDCSlot: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+mdc@0.9.5_magicast@0.5.2/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
  LazyColorScheme: LazyComponent<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.5.2/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@3.21.2_@parcel+watcher@2.5.6_@types+node@20.19.37_@vue+compiler-sfc@3.5.30_cac@6.7_d20850893dfbc7e07c6fc64b523ad7c4/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
