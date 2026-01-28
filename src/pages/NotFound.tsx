import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-8vw">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md text-center"
      >
        <h1 className="text-6xl font-serif text-primary mb-6">404</h1>
        <p className="text-xl text-muted-foreground mb-8">The trail ends here. Let's get you back to the sanctuary.</p>
        <Link 
          to="/" 
          className="px-8 py-3 bg-primary text-primary-foreground hover:bg-accent transition-colors duration-300"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
