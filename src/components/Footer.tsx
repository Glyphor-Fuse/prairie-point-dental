import React from 'react';

export function Footer() {
  return (
    <footer className="bg-background border-t pt-24 pb-12">
      <div className="container mx-auto px-gutter">
        <div className="editorial-grid mb-24">
          <div className="col-span-12 lg:col-span-4">
            <a href="/" className="text-2xl font-bold tracking-widest text-primary uppercase mb-8 block">
              ASA <span className="font-light text-foreground/40">/ Surgical Arts</span>
            </a>
            <p className="text-foreground/50 max-w-xs mb-8">
              A synthesis of Texan sanctuary and clinical precision in the heart of Austin.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'LinkedIn', 'Journal'].map(social => (
                <a key={social} href="#" className="text-xs uppercase tracking-widest font-bold hover:text-accent transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-span-6 lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-black mb-8 opacity-40">Practices</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>Facial Sculpting</li>
              <li>Surgical Aesthetics</li>
              <li>Post-Op Wellness</li>
              <li>Material Studies</li>
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-black mb-8 opacity-40">Facility</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>The Sanctuary</li>
              <li>Surgical Suite</li>
              <li>Austin HQ</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-4 mt-12 lg:mt-0">
            <h4 className="text-xs uppercase tracking-widest font-black mb-8 opacity-40">Location</h4>
            <address className="not-italic text-sm leading-relaxed text-foreground/70">
              1200 Congress Avenue<br />
              Austin, Texas 78701<br />
              +1 (512) 555-0198
            </address>
          </div>
        </div>
        
        <div className="pt-12 border-t flex flex-col md:flex-row justify-between gap-6">
          <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/30">
            © 2024 Austin Surgical Arts. Built with clinical precision.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-foreground/30">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}