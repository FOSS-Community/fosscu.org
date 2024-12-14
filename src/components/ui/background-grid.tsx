"use client";

import { useEffect, useRef } from "react";

export const BackgroundGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createGrid = () => {
      const grid = document.createElement("div");
      grid.className = "absolute inset-0";

      // Create a grid pattern
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          const dot = document.createElement("div");
          dot.className =
            "h-0.5 w-0.5 rounded-full bg-white/[0.2] blur-[0.5px]";
          dot.style.position = "absolute";
          dot.style.top = `${(i + 1) * 5}%`;
          dot.style.left = `${(j + 1) * 5}%`;
          grid.appendChild(dot);
        }
      }

      container.appendChild(grid);
    };

    createGrid();

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" />;
};