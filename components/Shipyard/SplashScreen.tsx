'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background portal rings */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full border-2 border-green-500/30 animate-portal-ring-1" />
          <div className="absolute inset-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full border-2 border-green-400/30 animate-portal-ring-2" />
          <div className="absolute inset-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full border-2 border-green-300/30 animate-portal-ring-3" />
        </div>
      </div>
      
      {/* Center portal glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-gradient-to-r from-green-600 via-green-500 to-green-400 animate-portal-pulse blur-2xl opacity-30" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl md:text-9xl font-bold mb-4 tracking-tight">
            <div className="mb-6">
              <span className="text-white">We don't </span>
              <span className="relative inline-block">
                <span className="text-white">talk</span>
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1.5 bg-red-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <span 
                className="inline-block"
                style={{
                  background: 'linear-gradient(180deg, #00FF00 0%, #008500 99.99%, #006900 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                we ship!
              </span>
            </motion.div>
          </h1>
        </motion.div>
      </div>

      {/* Add your tailwind.config.js animation keyframes */}
      <style jsx>{`
        @keyframes portal-ring-1 {
          0% { transform: translate(-50%, -50%) scale(0.5) rotate(0deg); opacity: 0; }
          100% { transform: translate(-50%, -50%) scale(1.5) rotate(180deg); opacity: 0; }
        }
        @keyframes portal-ring-2 {
          0% { transform: scale(0.5) rotate(0deg); opacity: 0; }
          100% { transform: scale(1.5) rotate(-180deg); opacity: 0; }
        }
        @keyframes portal-ring-3 {
          0% { transform: scale(0.5) rotate(0deg); opacity: 0; }
          100% { transform: scale(1.5) rotate(360deg); opacity: 0; }
        }
        @keyframes portal-pulse {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.3; }
          100% { transform: scale(0.8); opacity: 0.5; }
        }
        .animate-portal-ring-1 {
          animation: portal-ring-1 3s infinite;
        }
        .animate-portal-ring-2 {
          animation: portal-ring-2 3s infinite;
        }
        .animate-portal-ring-3 {
          animation: portal-ring-3 3s infinite;
        }
        .animate-portal-pulse {
          animation: portal-pulse 3s infinite;
        }
      `}</style>
    </motion.div>
  );
}