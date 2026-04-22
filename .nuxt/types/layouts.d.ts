import type { ComputedRef, MaybeRef } from 'vue'

type ComponentProps<T> = T extends new(...args: any) => { $props: infer P } ? NonNullable<P>
  : T extends (props: infer P, ...args: any) => any ? P
  : {}

declare module 'nuxt/app' {
  interface NuxtLayouts {
    "components-menu-item": ComponentProps<typeof import("/Users/szl/Desktop/26Spring/blog/layouts/components/MenuItem.vue").default>,
    "components-side-menu": ComponentProps<typeof import("/Users/szl/Desktop/26Spring/blog/layouts/components/SideMenu.vue").default>,
    "components-side-menu-contacts": ComponentProps<typeof import("/Users/szl/Desktop/26Spring/blog/layouts/components/SideMenuContacts.vue").default>,
    default: ComponentProps<typeof import("/Users/szl/Desktop/26Spring/blog/layouts/default.vue").default>,
    "default-header": ComponentProps<typeof import("/Users/szl/Desktop/26Spring/blog/layouts/default/Header.vue").default>,
    home: ComponentProps<typeof import("/Users/szl/Desktop/26Spring/blog/layouts/home.vue").default>,
    "home-dropdown": ComponentProps<typeof import("/Users/szl/Desktop/26Spring/blog/layouts/home/Dropdown.vue").default>,
    "home-header": ComponentProps<typeof import("/Users/szl/Desktop/26Spring/blog/layouts/home/Header.vue").default>,
    "home-menu-item": ComponentProps<typeof import("/Users/szl/Desktop/26Spring/blog/layouts/home/MenuItem.vue").default>,
    "home-theme-select": ComponentProps<typeof import("/Users/szl/Desktop/26Spring/blog/layouts/home/ThemeSelect.vue").default>,
}
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}