import { Headline } from "./Typography";
import { EntranceAnimation } from "./EntranceAnimation";
import { Button } from "@/components/ui/button";

export function BannerSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 limestone-texture" />
      <div className="container px-6 relative z-10 text-center">
        <EntranceAnimation>
          <Headline as="h2" className="text-secondary mb-6">
            Begin Your Journey to <span className="italic font-normal">Refined Vitality</span>
          </Headline>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-10 font-light">
            Our private consultations are designed to understand your goals and craft a bespoke path to rejuvenation.
          </p>
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-none px-12 py-8 text-lg">
            Request an Invitation
          </Button>
        </EntranceAnimation>
      </div>
    </section>
  );
}
