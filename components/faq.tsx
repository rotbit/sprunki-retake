'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from '@/lib/i18n/language-context'
import { HelpCircle } from 'lucide-react'
import { FAQItem } from '@/lib/i18n/types'

export function FAQ() {
  const { t } = useLanguage()
  const faqItems = t('faq.items') as FAQItem[]

  return (
    <section className="w-full py-12 bg-gradient-to-b from-blue-50 to-cyan-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <HelpCircle className="h-12 w-12 text-primary" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-800">
            {t('faq.title')}
          </h2>
        </div>
        <div className="mx-auto max-w-[800px]">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item: FAQItem, index: number) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-cyan-200">
                <AccordionTrigger className="text-lg font-medium text-gray-800 hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="bg-white/80 rounded-b-lg p-4 text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

