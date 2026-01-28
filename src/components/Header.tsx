import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-accent/10">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-accent rotate-45" />
          </div>
          <span className="text-xl font-serif font-bold tracking-ultra-tight text-primary">LONESTAR <span className="text-accent">CLINICAL</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Expertise', 'The Sanctuary', 'Patient Portal', 'Contact'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm font-bold tracking-widest uppercase text-primary/70 hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="px-6 py-2 border-2 border-primary text-primary text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-white transition-all">
            Book Now
          </button>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-secondary pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="text-3xl font-serif">Lonestar Clinical</h2>
            <p className="max-w-sm text-secondary/70 font-light leading-relaxed">
              Leading the evolution of regional healthcare by marrying world-class clinical standards with the distinct peace of the Texas Hill Country.
            </p>
            <div className="flex gap-4">
              <Instagram size={20} className="hover:text-accent cursor-pointer transition-colors" />
              <Linkedin size={20} className="hover:text-accent cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-widest uppercase text-accent">Contact</h4>
            <ul className="space-y-4 text-sm text-secondary/70">
              <li className="flex items-center gap-3"><Mail size={16} /> info@lonestarclinical.com</li>
              <li className="flex items-center gap-3"><Phone size={16} /> +1 (512) 555-0192</li>
              <li className="flex items-center gap-3"><MapPin size={16} /> Austin, TX • Hill Country</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-widest uppercase text-accent">Links</h4>
            <ul className="space-y-4 text-sm text-secondary/70">
              <li className="hover:text-accent cursor-pointer">Patient Privacy</li>
              <li className="hover:text-accent cursor-pointer">Terms of Service</li>
              <li className="hover:text-accent cursor-pointer">Careers</li>
              <li className="hover:text-accent cursor-pointer">Press Inquiries</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:row justify-between items-center gap-4 text-xs font-bold tracking-widest opacity-50">
          <p>© 2024 LONESTAR CLINICAL GROUP. ALL RIGHTS RESERVED.</p>
          <p>ESTABLISHED IN THE HEART OF TEXAS.</p>
        </div>
      </div>
    </footer>
  );
}

export function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="relative rounded-sm overflow-hidden bg-primary p-12 md:p-24 text-center">
          <div className="absolute inset-0 opacity-20">
             ///IMG:abstract medical pattern blue and cream|landscape|pattern///
          </div>
          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl text-secondary">Ready to experience <br /><span className="text-accent italic">elevated</span> care?</h2>
            <p className="text-secondary/80 text-lg md:text-xl font-light">
              Join our patient community and discover what happens when medical excellence is combined with a sanctuary environment.
            </p>
            <button className="bg-accent text-secondary px-12 py-5 font-bold tracking-widest uppercase hover:bg-secondary hover:text-primary transition-all duration-300 transform hover:scale-105">
              Request Your Initial Consult
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}