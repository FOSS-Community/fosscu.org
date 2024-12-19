"use client"
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { motion } from "framer-motion";
import { Badge } from "@/components/Badge";
import { Footer } from "@/components/Footer";

const features = [
  {
    icon: "🤝",
    title: "Collaborate",
    description: "Work with fellow developers",
  },
  {
    icon: "🚀",
    title: "Ship",
    description: "Launch your open source projects",
  },
  {
    icon: "🎉",
    title: "Celebrate",
    description: "Share your achievements",
  },
];

export default function Shipyard() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Team",
      link: "/teams",
    },
    {
      name: "Shipyard",
      link: "/shipyard",
    },
    {
      name: "Resources",
      link: "/resources",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black/[0.96] antialiased relative overflow-hidden">
      <FloatingNav navItems={navItems} />
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
              Welcome to Shipyard
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              FOSSCU's monthly gathering where open source enthusiasts come together to build, ship, and celebrate amazing projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group p-1 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="relative h-full flex flex-col items-center bg-black/40 rounded-lg p-8">
                  <span className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </span>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-center">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <button
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              onClick={() => {
                // window.open('', '_blank');
              }}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Submit Your Project 🛠️
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 text-center"
          >
         
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
