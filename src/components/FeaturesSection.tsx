import React from 'react';
import { motion } from 'framer-motion';
import { StaggerChildren, FadeInUp } from './EntranceAnimation';

const FEATURES = [
  {
    title: "Clinical Rigor",
    description: "Evidence-based protocols managed with meticulous attention to detail and surgical precision.",
    icon: "01"
  },
  {
    title: "Organic Recovery",
    description: "Holistic environments designed to lower cortisol and promote natural healing through nature.",
    icon: "02"
  },
  {
    title: "Advanced Tech",
    description: "Cutting-edge diagnostic suites integrated seamlessly into a warm, limestone-clad architecture.",
    icon: "03"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <StaggerChildren>
          <div className="grid md:grid-cols-3 gap-12">
            {FEATURES.map((feature, idx) => (
              <FadeInUp key={idx}>
                <div className="p-8 limestone-layer h-full flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500">
                  <div>
                    <span className="text-4xl font-serif text-accent/20 block mb-6 group-hover:text-accent/40 transition-colors">
                      {feature.icon}
                    </span>
                    <h3 className="text-2xl text-primary mb-4 font-bold tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-sans leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-8 oak-divider" />
                </div>
              </FadeInUp>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}