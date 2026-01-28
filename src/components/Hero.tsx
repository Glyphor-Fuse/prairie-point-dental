import React from 'react';
import { motion } from 'framer-motion';
import { LiquidEther } from '@/components/ui/LiquidEther';
import { Orb } from '@/components/ui/orb';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LiquidEther />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-secondary border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase"
            >
              Precision Practice • Texan Heart
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] text-primary">
              Where <span className="text-accent italic">Precision</span> Meets the <span className="block">Open Sky.</span>
            </h1>
            
            <p className="max-w-xl text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed">
              Lonestar Clinical redefines the healthcare experience. We blend the rigorous precision of modern medicine with the tranquil, restorative expansiveness of a Texas sanctuary.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-primary text-secondary rounded-sm font-bold tracking-premium flex items-center gap-2 hover:bg-accent transition-all duration-300 group">
                RESERVE CONSULTATION
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-primary/20 text-primary rounded-sm font-bold tracking-premium hover:bg-secondary transition-all duration-300">
                OUR PHILOSOPHY
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 aspect-[4/5] rounded-tl-[100px] overflow-hidden border-[12px] border-white shadow-2xl"
            >
              ///IMG:modern minimalist clinic interior with large windows looking at texas hill country|portrait|architectural///
            </motion.div>
            
            <div className="absolute -bottom-10 -left-10 z-0 opacity-40">
              <Orb size={300} color="hsl(var(--accent))" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-accent/20" />
    </section>
  );
}