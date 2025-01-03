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

export interface FeatureItem {
  title: string
  description: string
  icon: string
  image: string
}

export interface Features {
  title: string
  subtitle: string
  items: FeatureItem[]
  learnMore: string
}

export interface TestimonialItem {
  content: string
  author: string
  title: string
  image: string
}

export interface Testimonials {
  title: string
  subtitle: string
  items: TestimonialItem[]
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
  features: Features
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
  testimonials: Testimonials
}

export type TranslationDictionary = Record<Language, Translations>

