import React from 'react';
import { Header } from '@/components/Header';
import { BannerSection } from '@/components/BannerSection';
import { MaterialitySection } from '@/components/MaterialitySection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export function Index() {
  return (
    <main className="bg-background selection:bg-accent selection:text-white">
      <Header />
      <BannerSection />
      <MaterialitySection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}