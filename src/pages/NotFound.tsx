import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-gutter">
      <div className="max-w-md w-full text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-9xl font-black text-primary/10 mb-[-2rem]"
        >
          404
        </motion.h1>
        <h2 className="text-3xl font-editorial mb-6">Page Not Found</h2>
        <p className="text-foreground/60 mb-10">The clinical precision you seek is not at this address. Please return to the sanctuary.</p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 font-bold tracking-widest uppercase hover:bg-accent transition-all"
        >
          <ArrowLeft size={16} /> Back to Home
        </a>
      </div>
    </div>
  );
}