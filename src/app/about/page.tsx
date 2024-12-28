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
    title: "Open to all",
    description: "We are a community, not a club. Anyone who is eager to start using or contributing to open source software or who wants to learn something new. We are available to all of you at any moment to assist you.",
    icon: "🌍"
  },
  {
    title: "Mentorship to beginners",
    description: "We will assist you at every step of your Open Source Journey, guiding you along the way and assisting you anytime you need any help whenever you are stuck.",
    icon: "👥"
  },
  {
    title: "Regular Meetups",
    description: "We will be organising regular meet-ups that will undoubtedly help you connect with others who share your interests and spread your knowledge, which also fosters confidence.",
    icon: "🤝"
  },
  {
    title: "Events and Bootcamps",
    description: "We conduct Events and Bootcamps regularly get you more involved with the Open Source Culture and to improve your networking.",
    icon: "🎯"
  }
];

export default function About() {


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
          <div className="flex flex-col items-center">
            <Badge text="Connect with us" href="https://dub.sh/fosscu" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
              About FOSSCU
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              We at FOSSCU (Free and Open-Source Software Community United) are a Group of individuals who are constantly working to promote Open-Source Culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group p-1 h-[300px] rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="relative h-full flex flex-col bg-black/40 rounded-lg p-6">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 flex-grow">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}