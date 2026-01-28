import React from 'react';
import { motion } from 'framer-motion';
import { EntranceAnimation } from './EntranceAnimation';

export function MaterialitySection() {
  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-gutter">
        <div className="editorial-grid">
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
            <EntranceAnimation>
              <h2 className="text-5xl font-bold mb-8 leading-tight">Organic <br />Materiality</h2>
              <div className="h-px w-24 bg-accent mb-8" />
              <p className="text-lg text-foreground/70 mb-8">
                Our facility is built using hand-picked Texas limestone and sustainable light oak. This tactile environment is designed to lower cortisol levels and provide a serene 'palate cleanser' before and after procedures.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-primary mb-2">Limestone</h4>
                  <p className="text-sm text-foreground/50 leading-relaxed">Natural acoustic dampening and thermal regulation for patient comfort.</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Light Oak</h4>
                  <p className="text-sm text-foreground/50 leading-relaxed">Sustainable textures that bring warmth to clinical environments.</p>
                </div>
              </div>
            </EntranceAnimation>
          </div>
          
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-6 pt-12 lg:pt-0">
            <EntranceAnimation delay={0.1}>
              <div className="aspect-square bg-muted overflow-hidden">
                <img 
                  src="///IMG:raw limestone texture close up|square|organic///" 
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                  alt="Limestone" 
                />
              </div>
            </EntranceAnimation>
            <EntranceAnimation delay={0.3}>
              <div className="aspect-[4/5] bg-muted overflow-hidden mt-12">
                <img 
                  src="///IMG:light oak wood texture architect|portrait|editorial///" 
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                  alt="Light Oak" 
                />
              </div>
            </EntranceAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}