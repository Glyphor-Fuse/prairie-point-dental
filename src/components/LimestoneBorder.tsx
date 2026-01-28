import { motion } from "framer-motion";

export function LimestoneBorder() {
  return (
    <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:w-[2px] overflow-hidden">
      <div className="absolute inset-0 limestone-texture" />
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="bg-accent/40 w-full"
      />
    </div>
  );
}
