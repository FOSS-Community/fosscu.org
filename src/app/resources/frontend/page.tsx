"use client";
import dynamic from "next/dynamic";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BackgroundLines } from "@/components/ui/background-lines";
import frontendData from "@/data/resources/frontend/index.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowRight, LuArrowDown } from "react-icons/lu";

const FloatingParticles = dynamic(
  () =>
    import("@/components/ui/floating-particles").then(
      (mod) => mod.FloatingParticles
    ),
  {
    ssr: false,
  }
);

const Spotlight = dynamic(
  () => import("@/components/ui/spotlight").then((mod) => mod.Spotlight),
  {
    ssr: false,
  }
);

export default function FrontendResources() {
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
              Frontend Development Path
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              {frontendData.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {frontendData.path.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Link
                  href={`/resources/frontend/${item.title
                    .toLowerCase()
                    .replace(".js", "js")
                    .replace("/", "")
                    .replace(" ", "")
                    .replace("-", "")}`}
                >
                  <div className="p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 bg-black/40 h-full">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <span className="text-sm text-gray-400 uppercase">
                        {item.status}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Right arrow (between cards in same row) */}
                {index < frontendData.path.length - 1 &&
                  (index + 1) % 3 !== 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: (index + 0.5) * 0.1 }}
                      className="absolute hidden md:block"
                      style={{
                        right: "-1.5rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black/70 border border-white/10">
                        <LuArrowRight className="w-5 h-5 text-white/70" />
                      </div>
                    </motion.div>
                  )}

                {/* Bottom arrow for mobile view (except last card) */}
                {index < frontendData.path.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: (index + 0.5) * 0.1 }}
                    className="flex md:hidden justify-center w-full mt-4"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black/70 border border-white/10">
                      <LuArrowDown className="w-5 h-5 text-white/70" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="md:hidden flex justify-center mt-4">
            <div className="text-purple-500 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
