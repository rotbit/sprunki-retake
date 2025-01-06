"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import Image from "next/image";

export function Features() {
  const { t } = useLanguage();
  const features = t("features.items");

  return (
    <section className="w-full py-12 game-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              {t("features.title")}
            </h2>
            <p className="mt-2 text-gray-600">{t("features.subtitle")}</p>
          </div>

          <div className="w-full max-w-[900px] space-y-8 mt-8">
            {features.map((feature: FeatureItem, index: number) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden"
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* 图片部分 */}
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* 文字内容部分 */}
                  <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                    <div className="inline-block p-3 bg-[#5CD3D3]/10 rounded-lg w-fit">
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <button className="mt-4 flex items-center text-[#5CD3D3] hover:text-[#4CC0C0] transition-colors">
                      {t("features.learnMore")}
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
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
