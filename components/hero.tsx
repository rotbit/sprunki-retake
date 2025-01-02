"use client";

import Link from "next/link";
import { Play, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-cyan-50 to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-normal tracking-normal sm:text-5xl md:text-6xl lg:text-7xl/none text-gray-800">
              {t("hero.title")}
            </h1>
            <h2 className="mx-auto max-w-[700px] text-xl text-gray-500 md:text-2xl font-normal">
              {t("hero.subtitle")}
              <span className="inline-block animate-bounce ml-2">🎮</span>
            </h2>
          </div>
          <Link
            href="#game"
            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#5CD3D3] text-white hover:bg-[#4CC0C0] transition-colors"
          >
            <Play className="h-5 w-5" />
            <span>{t("hero.playNow")}</span>
            <Sparkles className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
