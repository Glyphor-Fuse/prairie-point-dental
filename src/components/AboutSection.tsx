import React from 'react';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative">
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
             <div className="grid grid-cols-2 gap-4">
                <div className="pt-12">
                  <div className="aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                    ///IMG:texas ranch landscape limestone rocks|portrait|nature///
                  </div>
                </div>
                <div>
                  <div className="aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                    ///IMG:medical doctor checking notes in a warm natural light office|portrait|professional///
                  </div>
                </div>
             </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl text-primary font-bold">
              The Silence of the Hill Country, <br />
              <span className="text-accent italic font-light">The Clarity of Science.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                In the heart of Texas, we've built more than a clinic. We've built a sanctuary where the frantic pace of modern life stops at the door. Our architecture uses native limestone and oak to ground you, while our medical staff employs the most advanced techniques known to science to heal you.
              </p>
              <p>
                We believe that the environment is a primary care provider. When your surroundings evoke peace, your body is primed for recovery.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="h-16 w-px bg-accent" />
              <div>
                <p className="font-serif text-xl italic text-primary italic">"Healing is as much about the spirit of the place as it is about the medicine provided."</p>
                <p className="text-sm font-bold tracking-widest text-accent mt-2">— DR. ELIAS STERLING, FOUNDER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}