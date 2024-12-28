"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";

export function FloatingParticles() {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const [particleCount, setParticleCount] = useState(25);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      setParticleCount(window.innerWidth > 768 ? 50 : 25);
    }
  }, []);

  if (!isMounted) {
    return null;
  }

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
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
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
}