"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { motion } from "framer-motion";
import { LuArrowRight, LuArrowDown } from "react-icons/lu";

export default function Web3Resources() {
  return (
    <div className="min-h-screen w-full bg-black/[0.96] antialiased relative overflow-hidden">
      <FloatingNav />
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

      <div className="relative z-[3] pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
              Web3 Development Path
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              We&apos;re currently curating the best resources for Web3
              development. Check back soon for comprehensive guides and
              tutorials.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="p-8 rounded-lg backdrop-blur-sm border border-white/10 max-w-2xl">
                <p className="text-gray-400 text-center">
                  Our team is working hard to bring you high-quality Web3
                  development resources.
                </p>
              </div>

              {/* Right arrow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute hidden md:block"
                style={{
                  right: "-2rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black/70 border border-white/10">
                  <LuArrowRight className="w-5 h-5 text-white/70" />
                </div>
              </motion.div>

              {/* Bottom arrow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-center w-full mt-4"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black/70 border border-white/10">
                  <LuArrowDown className="w-5 h-5 text-white/70" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
