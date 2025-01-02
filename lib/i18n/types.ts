export type Language = 'en' | 'zh' | 'ja' | 'ko'

export interface GameContent {
  title: string
  description: string
  guide: string[]
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Translations {
  nav: {
    blog: string
    privacy: string
    externalLinkTitle: string
    externalLinkText: string
  }
  hero: {
    title: string
    subtitle: string
    playNow: string
  }
  game: {
    fullscreen: string
    exitFullscreen: string
    restart: string
    content: GameContent
  }
  faq: {
    title: string
    items: FAQItem[]
  }
  footer: {
    madeWith: string
    by: string
  }
  languages: {
    en: string
    zh: string
    ja: string
    ko: string
  }
}

export type TranslationDictionary = Record<Language, Translations>

