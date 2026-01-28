import React from 'react';
import { motion } from 'framer-motion';
import { EntranceAnimation } from './EntranceAnimation';

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-10">
        <div className="limestone-texture absolute inset-0" />
      </div>
      
      <div className="container mx-auto px-gutter relative z-10">
        <div className="max-w-4xl">
          <EntranceAnimation>
            <h2 className="text-5xl md:text-7xl text-secondary mb-10 leading-[0.9]">
              Ready to redefine <br />
              <span className="italic font-light">your expectations?</span>
            </h2>
            <p className="text-secondary/60 text-xl mb-12 max-w-2xl">
              Schedule a private consultation at our Austin facility and witness the fusion of organic warmth and surgical excellence firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-accent text-secondary px-12 py-6 font-bold tracking-widest uppercase hover:scale-105 transition-all text-sm">
                Inquire Now
              </button>
              <button className="bg-transparent border border-secondary/30 text-secondary px-12 py-6 font-bold tracking-widest uppercase hover:bg-white/10 transition-all text-sm">
                View Gallery
              </button>
            </div>
          </EntranceAnimation>
        </div>
      </div>
    </section>
  );
}