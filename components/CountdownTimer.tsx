import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const NEXT_SHIPYARD_DATE = new Date('2024-11-05T13:40:00');

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    sec: 0,
  });

  const [isCountdownEnded, setIsCountdownEnded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = NEXT_SHIPYARD_DATE.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setIsCountdownEnded(true);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          sec: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2 md:gap-4 text-white justify-center flex-wrap md:flex-nowrap">
      {isCountdownEnded ? (
        <div className="max-w-4xl mx-auto p-8">
          <div className="relative overflow-hidden bg-black/80 backdrop-blur-lg rounded-2xl p-12 border border-green-500/50">
            <div className="absolute -left-20 -top-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" />
            <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" />
            <div className="relative text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-[#0DFF1C]">
                  We will be back with Shipyard soon...
                </span>
              </h2>
              <div className="flex justify-center gap-2 mt-8">
                <div className="w-16 h-1 bg-emerald-500/50 rounded-full"></div>
                <div className="w-16 h-1 bg-cyan-500/50 rounded-full"></div>
                <div className="w-16 h-1 bg-emerald-500/50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="text-center bg-gradient-green backdrop-blur-sm rounded-lg p-2 md:p-4 min-w-[60px] md:min-w-[80px] border border-green-500 shadow-glow hover:shadow-glow-lg transition-shadow duration-300"
          >
            <div className="text-xl md:text-2xl font-bold text-white text-glow">{value}</div>
            <div className="text-xs md:text-sm uppercase text-white/70">{unit}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default CountdownTimer;
