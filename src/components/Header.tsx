import { motion } from "framer-motion";
import { Menu, Search } from "lucide-react";

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted px-micro-margin py-6"
    >
      <nav className="flex items-center justify-between max-w-[1600px] mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-sm rotate-45" />
          <span className="text-xl font-serif font-bold tracking-tight text-primary uppercase">
            Austin <span className="font-light">Precision</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-widest uppercase">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#about" className="hover:text-accent transition-colors">Philosophy</a>
          <a href="#location" className="hover:text-accent transition-colors">Sanctuary</a>
          <button className="px-6 py-2 bg-primary text-primary-foreground hover:bg-accent transition-colors">
            Consultation
          </button>
        </div>

        <div className="md:hidden">
          <Menu className="w-6 h-6" />
        </div>
      </nav>
    </motion.header>
  );
}
