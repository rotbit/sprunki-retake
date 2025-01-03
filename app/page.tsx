import { Hero } from "@/components/hero";
import { Game } from "@/components/game";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Game />
      <Features />
      <Testimonials />
      <FAQ />
    </>
  );
}
