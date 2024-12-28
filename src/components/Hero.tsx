"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight";
import { FloatingParticles } from "./ui/floating-particles";
import { BackgroundLines } from "./ui/background-lines";
import Image from "next/image";
import { motion } from "framer-motion";
import { PrimaryButton } from "./PrimaryButton";

export function Hero() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black/[0.96] antialiased relative overflow-hidden">
     
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <BackgroundLines className="h-full bg-transparent">
          <></>
        </BackgroundLines>
      </div>
      <div className="absolute inset-0 z-[2]">
        <FloatingParticles />
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="green"
        />
      </div>
      <div className="relative z-[3] flex flex-col items-center p-4 max-w-7xl w-full mt-20">
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
            src="/fosscu-green.png"
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

        <div className="mt-10">
        <PrimaryButton onClick={() => {
          if (typeof window !== 'undefined') {
            window.open('https://dub.sh/fosscu');
          }
        }}>
          Become a member
        </PrimaryButton>

        </div>
      </div>
    </div>
  );
}
