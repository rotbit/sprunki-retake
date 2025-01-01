'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-context'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-cyan-200/20 bg-gradient-to-b from-cyan-50 to-blue-50">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-gray-600 md:text-left flex items-center space-x-1">
            <span>{t('footer.madeWith')}</span> 
            <Heart className="h-4 w-4 text-primary mx-1 hover:text-red-500 transition-colors" />
            <span>{t('footer.by')}</span>
          </p>
        </div>
        <div className="flex space-x-6">
          <Link 
            href="/" 
            className="text-sm text-gray-600 hover:text-primary transition-colors"
          >
            GitHub
          </Link>
          <Link 
            href="/privacy" 
            className="text-sm text-gray-600 hover:text-primary transition-colors"
          >
            {t('nav.privacy')}
          </Link>
        </div>
      </div>
    </footer>
  )
}

