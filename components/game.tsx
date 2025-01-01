"use client";

import { useState, useRef } from "react";
import { Maximize, RefreshCw, Gamepad2, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Game() {
  const { t } = useLanguage();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const guideItems = t("game.content.guide") as string[];

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
                frameBorder="0"
                allowFullScreen
                title="Sprunki Retake"
              />
            </div>
          </div>

          <div className="game-controls">
            <button onClick={toggleFullscreen} className="game-button">
              <Maximize className="h-4 w-4" />
              <span>
                {isFullscreen ? t("game.exitFullscreen") : t("game.fullscreen")}
              </span>
            </button>
            <button onClick={handleRestart} className="game-button">
              <RefreshCw className="h-4 w-4" />
              <span>{t("game.restart")}</span>
            </button>
          </div>

          <div className="w-full max-w-[900px] space-y-6 mt-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {t("game.content.description")}
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="guide" className="border-cyan-200">
                <AccordionTrigger className="text-lg font-medium text-gray-800 hover:text-primary">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    <span>Game Guide</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-white/80 rounded-b-lg p-4">
                  <ul className="space-y-3 list-disc list-inside text-gray-700">
                    {guideItems.map((item: string, index: number) => (
                      <li key={index} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
