import { motion } from "framer-motion";
import { Shield, Activity, Heart, Wind } from "lucide-react";

const features = [
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Precision Diagnostics",
    description: "Utilizing state-of-the-art laboratory analysis to build your unique biological map."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Preventative Architecture",
    description: "Medical care designed around longevity, not just recovery."
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Sanctuary Environment",
    description: "Our clinics are designed with natural limestone, native flora, and acoustic perfection."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Concierge Wellness",
    description: "24/7 access to your care team with a dedicated medical coordinator."
  }
];

export function FeaturesSection() {
  return (
    <section id="services" className="py-32 px-micro-margin bg-secondary">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Built for those who demand precision.</h2>
            <div className="h-1 w-24 bg-accent" />
          </motion.div>
          <p className="text-muted-foreground max-w-md uppercase tracking-[0.2em] text-sm">Our Core Pillars</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-background border border-muted hover:border-accent transition-colors group"
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-primary mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
