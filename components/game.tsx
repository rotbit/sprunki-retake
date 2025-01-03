"use client";

import { useState, useRef } from "react";
import { Maximize, RefreshCw, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
export function GameGuide() {
  const { t } = useLanguage();
  const guideItems = t("game.content.guide") as string[];

  return (
    <div className="w-full bg-white/80 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="h-5 w-5" />
        <h1 className="text-lg font-medium text-gray-800">
          Retake Sprunki Game Guide
        </h1>
      </div>
      <ul className="space-y-3 list-disc list-inside text-gray-700">
        {guideItems.map((item: string, index: number) => (
          <li key={index} className="leading-relaxed">
            <h2>{item}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Game() {
  const { t } = useLanguage();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const gameContainerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = async () => {
    if (!gameContainerRef.current) return;

    try {
      const iframe = gameContainerRef.current.querySelector("iframe");
      if (!document.fullscreenElement) {
        // 优先使用 iframe 全屏
        if (iframe) {
          await iframe.requestFullscreen();
        } else {
          await gameContainerRef.current.requestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error("全屏切换失败:", err);
    }
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <section id="game" className="w-full py-12 game-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <div ref={gameContainerRef} className="game-container">
            <div className="game-content">
              <iframe
                src="https://www.twoplayergames.org/embed/sprunki-retake"
                className="w-full h-[600px]"
                allowFullScreen
                title="Sprunki Retake"
              />
            </div>
          </div>

          <div className="game-controls">
            <button
              onClick={toggleFullscreen}
              className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#5CD3D3] text-white hover:bg-[#4CC0C0] transition-colors"
            >
              <Maximize className="h-4 w-4" />
              <span>
                {isFullscreen ? t("game.exitFullscreen") : t("game.fullscreen")}
              </span>
            </button>
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#5CD3D3] text-white hover:bg-[#4CC0C0] transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              <span>{t("game.restart")}</span>
            </button>
          </div>

          <div className="w-full max-w-[900px] space-y-6 mt-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                {t("game.content.title")}
              </h1>
              <h2 className="text-xl text-gray-800 mb-4">
                {t("game.content.description")}
              </h2>
            </div>
            <GameGuide />
          </div>
        </div>
      </div>
    </section>
  );
}
