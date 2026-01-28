import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface OrbProps {
  className?: string;
  color?: string;
  size?: string;
  delay?: number;
}

export function Orb({ className, color = "bg-primary/20", size = "w-64 h-64", delay = 0 }: OrbProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      className={cn(
        "absolute rounded-full blur-3xl",
        size,
        color,
        className
      )}
    />
  );
}