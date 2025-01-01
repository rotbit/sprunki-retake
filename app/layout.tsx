import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LanguageProvider } from '@/lib/i18n/language-context'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spurnki Retake - Fun Indie Game',
  description: 'Jump into the exciting world of Spurnki Retake - a delightful indie game experience!',
  keywords: ['indie game', 'casual game', 'fun game', 'spurnki', 'retake'],
  openGraph: {
    title: 'Spurnki Retake - Fun Indie Game',
    description: 'Jump into the exciting world of Spurnki Retake - a delightful indie game experience!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col bg-gradient-to-b from-cyan-50 to-blue-50">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}

