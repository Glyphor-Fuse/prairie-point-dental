import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Practices', href: '#' },
    { name: 'Experience', href: '#' },
    { name: 'Materials', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-gutter">
        <a href="/" className="text-xl font-bold tracking-widest text-primary uppercase">
          ASA <span className="font-light text-foreground/40">/ Surgical Arts</span>
        </a>

        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-primary text-secondary px-8 py-3 text-xs tracking-widest uppercase font-bold hover:bg-accent transition-all">
            Inquire
          </button>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary border-b overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-lg font-editorial">
                  {link.name}
                </a>
              ))}
              <button className="bg-primary text-secondary p-4 flex items-center justify-center gap-2">
                Inquire <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}