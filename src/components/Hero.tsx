"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
import { BackgroundGrid } from "./ui/background-grid";
import { FloatingParticles } from "./ui/floating-particles";
import Image from "next/image";
import { motion } from "framer-motion";
import { HoverButton } from "./Button";

export function Hero() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black/[0.96] antialiased relative overflow-hidden">
      <BackgroundGrid />
      <FloatingParticles />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="green"
      />
      <div className="relative z-10 flex flex-col items-center p-4 max-w-7xl w-full mt-60">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          className="mb-8"
        >
          <Image
            src="/fosscu-white.png"
            alt="FOSSCU Logo"
            width={100}
            height={100}
            className="w-14 md:w-26 opacity-85"
          />
        </motion.div>
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Join the talent <br /> layer of open source
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center">
          Free and open source software community united
        </p>
        <div className="-mt-28">
          <HoverButton />
        </div>
      </div>
    </div>
  );
}
