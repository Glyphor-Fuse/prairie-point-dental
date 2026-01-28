import { motion, useScroll, useTransform } from "framer-motion";
import { Headline } from "./Typography";
import { EntranceAnimation } from "./EntranceAnimation";
import { LiquidEther } from "@/components/ui/LiquidEther";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Depth */}
      <div className="absolute inset-0 z-0">
        <LiquidEther />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <EntranceAnimation direction="down">
            <span className="text-accent uppercase tracking-premium font-semibold text-sm mb-6 block">
              Established in the Heart of Texas
            </span>
          </EntranceAnimation>
          
          <EntranceAnimation delay={0.2}>
            <Headline as="h1" className="mb-8">
              Clinical <span className="italic font-normal">Precision</span> <br />
              <span className="text-secondary">Texan Sanctuary</span>
            </Headline>
          </EntranceAnimation>

          <EntranceAnimation delay={0.4}>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the intersection of advanced aesthetic medicine and the grounded serenity of the high plains.
            </p>
          </EntranceAnimation>

          <EntranceAnimation delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-12 py-8 text-lg font-medium tracking-wide">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none px-12 py-8 text-lg font-medium tracking-wide">
                Our Services
              </Button>
            </div>
          </EntranceAnimation>
        </div>
      </div>

      {/* Floating Image Accent */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute -bottom-24 -right-12 w-64 h-96 hidden lg:block rounded-2xl overflow-hidden soft-shadow border-[12px] border-white/50"
      >
        <div className="w-full h-full relative">
          ///IMG:modern minimalist clinic interior|portrait|editorial///
        </div>
      </motion.div>
    </section>
  );
}
