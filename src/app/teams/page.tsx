"use client"
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import teamsData from "@/data/teams.json";
import Image from "next/image";

export default function Teams() {


  return (
    <div className="min-h-screen w-full bg-black/[0.96] antialiased relative overflow-hidden">
      <FloatingNav/>
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
              The People Behind FOSSCU
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Meet the dedicated individuals who make our community thrive
            </p>
          </motion.div>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Steering Council</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamsData[0]["Steering Council"]?.map((member, index) => (
                <motion.a
                  href={member.link.url}
                  target={member.link.target}
                  rel={member.link.rel}
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-1 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                >
                  <div className="relative flex flex-col items-center bg-black/40 rounded-lg p-6">
                    <div className="w-32 h-32 mb-4 overflow-hidden rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-300">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-400 text-center">
                      {member.position}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Volunteers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamsData[1]["Volunteer"]?.map((member, index) => (
                <motion.a
                  href={member.link.url}
                  target={member.link.target}
                  rel={member.link.rel}
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-1 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                >
                  <div className="relative flex flex-col items-center bg-black/40 rounded-lg p-4">
                    <div className="w-24 h-24 mb-3 overflow-hidden rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-300">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1 text-center">
                      {member.name}
                    </h3>
                    <p className="text-xs text-gray-400 text-center">
                      {member.position}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
