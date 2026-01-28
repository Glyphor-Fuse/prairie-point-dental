import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Microscope, Waves } from 'lucide-react';
import { EntranceAnimation } from './EntranceAnimation';

const features = [
  {
    icon: <Microscope className="w-8 h-8 text-accent" />,
    title: "Surgical Clarity",
    description: "High-key surgical environments utilize the latest in medical lighting and ultra-sterile airflow systems."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: "Clinical Precision",
    description: "Board-certified expertise meeting the highest standards of Texas medical licensure and safety protocols."
  },
  {
    icon: <Waves className="w-8 h-8 text-accent" />,
    title: "Aesthetic Rhythm",
    description: "A patient journey designed for flow, reducing anxiety through architectural layout and ambient soundscapes."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-32 bg-secondary/50">
      <div className="container mx-auto px-gutter">
        <EntranceAnimation>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-5xl mb-6">Built for Excellence</h2>
            <p className="text-foreground/60">Modern surgery demands more than just technology. It requires an atmosphere of trust, precision, and tranquility.</p>
          </div>
        </EntranceAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, idx) => (
            <EntranceAnimation key={idx} delay={idx * 0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 p-6 bg-white shadow-xl shadow-primary/5 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-2xl mb-4 font-bold tracking-tight">{feature.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{feature.description}</p>
              </div>
            </EntranceAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}