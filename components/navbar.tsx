"use client";

import Link from "next/link";
import { GamepadIcon, Sparkles } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "@/lib/i18n/language-context";

export function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <GamepadIcon className="h-8 w-8 text-primary" />
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400" />
            </div>
            <span className="hidden font-bold text-xl sm:inline-block">
              Spurnki Retake
            </span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-end space-x-6">
          <Link
            href="/blog"
            className="text-sm font-medium px-6 py-2 rounded-lg bg-[#5CD3D3] text-white hover:bg-[#4CC0C0] transition-colors"
          >
            {t("nav.blog")}
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium px-6 py-2 rounded-lg bg-[#5CD3D3] text-white hover:bg-[#4CC0C0] transition-colors"
          >
            {t("nav.privacy")}
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
