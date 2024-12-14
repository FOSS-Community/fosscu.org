"use client";

import {useRef } from "react";
import { motion, useInView } from "framer-motion";

export const FloatingParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  
  const particleCount = window?.innerWidth > 768 ? 50 : 25;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {isInView && (
        <div className="absolute inset-0">
          {[...Array(particleCount)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute h-1 w-1 rounded-full bg-white/10"
            />
          ))}
        </div>
      )}
    </div>
  );
};