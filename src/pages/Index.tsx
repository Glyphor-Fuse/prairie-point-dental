import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturesSection } from "@/components/FeaturesSection";
import { BannerSection } from "@/components/BannerSection";
import { Footer } from "@/components/Footer";
import { EntranceAnimation } from "@/components/EntranceAnimation";
import { Headline } from "@/components/Typography";
import { Orb } from "@/components/ui/orb";

export function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      <section className="py-24 relative overflow-hidden">
        <Orb className="absolute -top-24 -left-24 opacity-20" color="hsl(var(--secondary))" />
        <div className="container px-6">
          <EntranceAnimation className="text-center max-w-3xl mx-auto">
            <Headline as="h4" className="mb-4">Modern Ranch Ethos</Headline>
            <Headline as="h2" className="mb-8">Where high-tech clinical environments meet sun-drenched limestone corridors.</Headline>
          </EntranceAnimation>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <EntranceAnimation direction="left">
               <div className="rounded-3xl overflow-hidden aspect-video relative soft-shadow">
                 ///IMG:modern ranch architectural details|landscape|editorial///
               </div>
            </EntranceAnimation>
            <EntranceAnimation direction="right" delay={0.2}>
               <div className="rounded-3xl overflow-hidden aspect-video relative soft-shadow">
                 ///IMG:minimalist surgical tray|landscape|clinical///
               </div>
            </EntranceAnimation>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <BannerSection />
      <Footer />
    </main>
  );
}
