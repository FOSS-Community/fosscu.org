// src/components/Projects.tsx
import { UiButton } from "@/components/UiButton";
import { BackgroundGrid } from "./ui/background-grid";
import { FloatingParticles } from "./ui/floating-particles";
import { Badge } from "./Badge";

const projectItems = [
  "Check Your Reputation",
  "Get FOSSCU Sub-Domains",
  "paste.fosscu.org",
  "Linkliberte",
  "FOSSConf",
  "How we begin",
  "How to contribute",
  "🧙‍♂️Wand 🪄",
];

export const ProjectsSection = () => {
  return (
    <section className=" bg-black/[0.96] relative overflow-hidden min-h-screen">
      <BackgroundGrid />
      <FloatingParticles />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-2">
          Our Projects, Services and More
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Explore our open source projects and tools. From developer utilities to community platforms, 
          these projects are built by the community, for the community.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projectItems.map((item, index) => (
            <div 
              key={index} 
              className={`
                relative group
                p-1 h-[100px]
                rounded-xl
                backdrop-blur-sm
                border border-white/10
                hover:border-white/20
                transition-all duration-500
                ${index % 2 === 0 ? 'mt-0' : 'mt-12'}
              `}
            >
              <div className="relative h-full flex flex-col bg-black/40 rounded-lg">
                <div className="w-full h-full text-lg font-medium text-white/80 hover:text-white group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  {item}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <Badge text="View all projects on GitHub" />
        </div>
      </div>
    </section>
  );
};