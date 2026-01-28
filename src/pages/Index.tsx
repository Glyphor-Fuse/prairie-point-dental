import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { BannerSection } from "../components/BannerSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { ProcessSection } from "../components/ProcessSection";
import { LocationSection } from "../components/LocationSection";
import { Footer } from "../components/Footer";
import { LiquidEther } from "@/components/ui/LiquidEther";

export function Index() {
  return (
    <div className="relative min-h-screen">
      <LiquidEther className="opacity-40" />
      <Header />
      <main>
        <BannerSection />
        <FeaturesSection />
        <ProcessSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
