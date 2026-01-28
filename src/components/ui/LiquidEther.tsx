import React from 'react';
import { motion } from 'framer-motion';

export function LiquidEther() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-primary/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
          x: [0, -40, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[30%] -right-[10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-[20%] w-[80%] h-[40%] bg-secondary/30 rounded-full blur-[150px]"
      />
    </div>
  );
}