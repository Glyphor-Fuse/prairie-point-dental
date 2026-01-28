import { Headline } from "./Typography";

export function Footer() {
  return (
    <footer className="bg-muted py-24">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-secondary rounded-sm rotate-45" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tighter">AESTHETICA</span>
            </div>
            <p className="text-muted-foreground max-w-sm text-lg leading-relaxed">
              Redefining aesthetic medicine through clinical excellence and the spirit of the Modern Ranch.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-bold mb-6 text-xl">Sanctuary</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>1200 Lonestar Parkway</li>
              <li>Austin, TX 78701</li>
              <li>(512) 555-0123</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-6 text-xl">Connect</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © 2024 Aesthetica Clinic. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
