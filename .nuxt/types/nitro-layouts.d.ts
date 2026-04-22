export type LayoutKey = "components-menu-item" | "components-side-menu" | "components-side-menu-contacts" | "default" | "default-header" | "home" | "home-dropdown" | "home-header" | "home-menu-item" | "home-theme-select"
declare module 'nitropack' {
  interface NitroRouteConfig {
    appLayout?: LayoutKey | false
  }
  interface NitroRouteRules {
    appLayout?: LayoutKey | false
  }
}
declare module 'nitropack/types' {
  interface NitroRouteConfig {
    appLayout?: LayoutKey | false
  }
  interface NitroRouteRules {
    appLayout?: LayoutKey | false
  }
}