"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuArrowRight, LuArrowDown } from "react-icons/lu";
import React from "react";

const resourceCategories = [
  {
    title: "Frontend Development",
    description: "Learn to build beautiful and interactive user interfaces",
    link: "/resources/frontend",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend Development",
    description: "Master server-side programming and APIs",
    link: "/resources/backend",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Web3 Development",
    description: "Dive into blockchain and decentralized applications",
    link: "/resources/web3",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "App Development",
    description: "Create mobile applications for iOS and Android",
    link: "/resources/app",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "AI & Machine Learning",
    description: "Explore artificial intelligence and ML concepts",
    link: "/resources/ai",
    color: "from-teal-500 to-cyan-500",
  },
];

export default function Resources() {
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
              Developer Resources
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Curated learning paths and resources to help you master different
              aspects of development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {resourceCategories.map((category, index) => (
              <React.Fragment key={index}>
                <div className="relative">
                  <Link href={category.link} className="block h-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative group cursor-pointer h-full"
                    >
                      <div
                        className="absolute inset-0 rounded-lg bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${
                            category.color.split(" ")[0]
                          }, ${category.color.split(" ")[1]})`,
                        }}
                      />
                      <div className="relative p-1 rounded-lg backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                        <div className="relative h-full flex flex-col bg-black/40 rounded-lg p-8">
                          <h3 className="text-2xl font-semibold text-white mb-4">
                            {category.title}
                          </h3>
                          <p className="text-gray-400">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>

                  {/* Desktop horizontal arrows (only between cards in the same row) */}
                  {index < resourceCategories.length - 1 &&
                    (index + 1) % 3 !== 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: (index + 0.5) * 0.1,
                        }}
                        className="absolute hidden lg:block"
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

                  {/* Tablet horizontal arrows (only between cards in the same row) */}
                  {index < resourceCategories.length - 1 && index % 2 === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: (index + 0.5) * 0.1 }}
                      className="absolute hidden md:block lg:hidden"
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

                  {/* Mobile vertical arrows (after each card except the last) */}
                  {index < resourceCategories.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: (index + 0.5) * 0.1 }}
                      className="flex md:hidden justify-center w-full mt-2 mb-4"
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black/70 border border-white/10">
                        <LuArrowDown className="w-5 h-5 text-white/70" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
