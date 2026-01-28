import React from 'react';
import { Hero } from '../components/Hero';
import { Header } from '../components/Header';
import { FeaturesSection } from '../components/FeaturesSection';
import { AboutSection } from '../components/AboutSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';
import { EntranceAnimation } from '../components/EntranceAnimation';

export function Index() {
  return (
    <main className="min-h-screen relative bg-background overflow-hidden">
      <Header />
      <EntranceAnimation>
        <Hero />
        <AboutSection />
        <FeaturesSection />
        <CTASection />
      </EntranceAnimation>
      <Footer />
    </main>
  );
}