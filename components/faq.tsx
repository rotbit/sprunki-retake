"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/i18n/language-context";
import { HelpCircle } from "lucide-react";
import { FAQItem } from "@/lib/i18n/types";

export function FAQ() {
  const { t } = useLanguage();
  const faqItems = t("faq.items") as FAQItem[];

  return (
    <section className="w-full py-12 bg-gradient-to-b from-blue-50/50 to-cyan-50/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <HelpCircle className="h-12 w-12 text-[#5CD3D3]" />
          <h2 className="text-4xl font-normal tracking-normal sm:text-5xl text-gray-800">
            {t("faq.title")}
          </h2>
        </div>
        <div className="mx-auto max-w-[800px]">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item: FAQItem, index: number) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-cyan-100 rounded-lg overflow-hidden bg-white/80"
              >
                <AccordionTrigger className="px-6 py-4 text-xl font-normal text-gray-800 hover:text-[#5CD3D3] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600 text-lg">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
