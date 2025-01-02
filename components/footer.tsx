"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-cyan-200/20 bg-gradient-to-b from-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-6 md:py-8">
          {/* Left side */}
          <div className="flex items-center mb-4 md:mb-0">
            <p className="text-sm text-gray-600 flex items-center">
              <span>{t("footer.madeWith")}</span>
              <Heart className="h-4 w-4 text-primary mx-1.5 hover:text-red-500 transition-colors" />
              <span>{t("footer.by")}</span>
            </p>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-10">
            <Link
              href="/privacy"
              className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
            >
              {t("nav.privacy")}
            </Link>
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium text-gray-500 mb-1.5">
                {t("nav.externalLinkTitle")}
              </span>
              <Link
                href="https://gamedashers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-primary transition-colors hover:underline underline-offset-2"
              >
                {t("nav.externalLinkText")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
