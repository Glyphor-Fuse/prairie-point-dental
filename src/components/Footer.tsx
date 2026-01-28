import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-background border-t border-muted py-20 px-micro-margin">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
           <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-primary rounded-sm rotate-45" />
            <span className="text-2xl font-serif font-bold tracking-tight text-primary uppercase">
              Austin <span className="font-light">Precision</span>
            </span>
          </div>
          <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
            Revolutionizing personalized healthcare through the integration of modern medical technology and holistic environmental design.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Navigation</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li><a href="#" className="hover:text-accent transition-colors">Philosophy</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Medical Team</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Patient Portal</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Connect</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Direct Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1600px] mx-auto mt-20 pt-8 border-t border-muted flex flex-col md:flex-row justify-between text-xs text-muted-foreground uppercase tracking-widest">
        <p>© 2024 Austin Precision Health. All rights reserved.</p>
        <p>Designed for the Lonestar State.</p>
      </div>
    </footer>
  );
}
