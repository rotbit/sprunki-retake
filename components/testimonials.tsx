"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { TestimonialItem } from "@/lib/i18n/types";

export function Testimonials() {
  const { t } = useLanguage();
  const testimonials = t("testimonials.items");

  return (
    <section className="w-full py-12 game-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              {t("testimonials.title")}
            </h2>
            <p className="mt-2 text-gray-600">{t("testimonials.subtitle")}</p>
          </div>

          <div className="w-full max-w-[900px] space-y-6 mt-8">
            {testimonials.map((testimonial: TestimonialItem, index: number) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* 用户信息 */}
                  <div className="flex items-center md:w-1/3">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">
                        {testimonial.author}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>

                  {/* 评价内容 */}
                  <div className="md:w-2/3">
                    <p className="text-gray-600 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
