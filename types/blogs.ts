import { MarkdownParsedContent, ParsedContent } from "@nuxt/content/dist/runtime/types";

export const DefaultNuxtImagePath = '/assets/images/nuxt.png'
export const DefaultNuxtImageAlt = 'Nuxt Logo'
export const DefaultNuxtImageHeight = 1024
export const DefaultNuxtImageWidth = 576

export interface BlogFrontMatterImage {
    path: string
    alt: string
    height: number
    width: number
    caption?: string
}

export interface BlogFrontMatter {
    title: string
    description: string
    date: string
    categories: string[]
    tags: string[]
    image: BlogFrontMatterImage
}

export interface BlogList extends ParsedContent, BlogFrontMatter {
    title: string
    readingTime: {
        minutes: number
        text: string
        time: number
        words: number
    }
}

export interface BlogListFilter {
    search?: string
    tags?: string[]
    categories?: string[]
}

export interface BlogDetail extends MarkdownParsedContent, BlogFrontMatter {
    title: string
    readingTime: {
        minutes: number
        text: string
        time: number
        words: number
    }
    lastUpdated: string
}