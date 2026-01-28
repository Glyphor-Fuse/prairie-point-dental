import { Headline } from "./Typography";
import { EntranceAnimation } from "./EntranceAnimation";
import { LimestoneBorder } from "./LimestoneBorder";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Precision Diagnostics",
    description: "State-of-the-art imaging and analysis to tailor every treatment to your unique biology.",
    icon: CheckCircle2
  },
  {
    title: "Curated Recovery",
    description: "Post-treatment protocols designed in a sanctuary-inspired environment for optimal healing.",
    icon: CheckCircle2
  },
  {
    title: "Artistic Refinement",
    description: "Expert injectors who value subtle, natural results that honor your heritage.",
    icon: CheckCircle2
  }
];

export function FeaturesSection() {
  return (
    <section className="py-32 bg-background relative">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 sticky top-32">
            <EntranceAnimation>
              <Headline as="h4" className="mb-4">Our Philosophy</Headline>
              <Headline as="h2" className="mb-8">The Harmony of Science & Soul</Headline>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                We believe that aesthetic excellence shouldn't feel sterile. Our practice bridges the gap between surgical-grade precision and the hospitality of a Texan retreat.
              </p>
              
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden soft-shadow">
                ///IMG:natural sunlight in a modern ranch living room|portrait|cinematic///
              </div>
            </EntranceAnimation>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-24">
            {features.map((feature, idx) => (
              <div key={idx} className="relative pl-12">
                <LimestoneBorder />
                <EntranceAnimation delay={idx * 0.1}>
                  <feature.icon className="w-10 h-10 text-accent mb-6" />
                  <Headline as="h3" className="mb-4">{feature.title}</Headline>
                  <p className="text-lg text-muted-foreground">
                    {feature.description}
                  </p>
                  <div className="mt-8 aspect-video relative rounded-xl overflow-hidden soft-shadow grayscale hover:grayscale-0 transition-all duration-700">
                     ///IMG:medical professional at work|landscape|clinical///
                  </div>
                </EntranceAnimation>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
