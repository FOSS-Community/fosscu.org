"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimate, useInView } from "framer-motion";

export const FloatingParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {isInView && (
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
              className="absolute h-1 w-1 rounded-full bg-white/10"
            />
          ))}
        </div>
      )}
    </div>
  );
};