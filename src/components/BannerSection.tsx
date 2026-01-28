import React from 'react';
import { motion } from 'framer-motion';
import { LiquidEther } from '@/components/ui/LiquidEther';
import { Orb } from '@/components/ui/orb';
import { EntranceAnimation } from './EntranceAnimation';

export function BannerSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-secondary to-background">
      <LiquidEther />
      <Orb className="top-1/4 -right-20 opacity-40" color="bg-accent/20" />
      <Orb className="bottom-1/4 -left-20 opacity-20" size="w-96 h-96" />
      
      <div className="container mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10">
          <EntranceAnimation>
            <span className="inline-block text-accent font-bold tracking-[0.3em] uppercase mb-6 text-sm">
              The Texas Standard of Care
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-primary leading-[0.9] mb-8 lg:pr-12">
              Sanctuary Meets <br />
              <span className="italic font-light text-foreground">Surgical Precision</span>
            </h1>
            <p className="text-xl text-foreground/60 max-w-xl mb-12 leading-relaxed">
              Experience a surgical environment designed with limestone warmth, light oak materiality, and clinical clarity. Where your transformation is handled with architectural grace.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-primary text-secondary px-10 py-5 font-bold tracking-widest uppercase hover:bg-accent transition-all shadow-xl shadow-primary/20">
                Book Consultation
              </button>
              <button className="border-2 border-primary/20 text-primary px-10 py-5 font-bold tracking-widest uppercase hover:bg-primary/5 transition-all">
                The Methodology
              </button>
            </div>
          </EntranceAnimation>
        </div>

        <div className="lg:col-span-5 relative">
          <EntranceAnimation delay={0.2}>
            <div className="relative aspect-[3/4] overflow-hidden grayscale-[0.3] hover:grayscale-0 transition-all duration-1000">
              <div className="absolute inset-0 border-[20px] border-white/30 z-20 pointer-events-none" />
              <img 
                src="///IMG:modern clinical minimal architectural interior limestone|portrait|editorial///" 
                alt="Austin Surgical Arts Interior"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[3s]"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 bg-white p-12 shadow-2xl z-30 hidden xl:block">
              <p className="font-editorial italic text-2xl text-primary">"The intersection of <br />organic and clinical."</p>
            </div>
          </EntranceAnimation>
        </div>
      </div>
    </section>
  );
}