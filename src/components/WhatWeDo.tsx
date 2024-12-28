import { Badge } from "./Badge";

const whatWeDoItems = [
  {
    icon: "🎪",
    title: "Annual FOSS Conf",
    description: "Our flagship conference bringing together open source enthusiasts from around the world. Experience talks, workshops, and networking opportunities that shape the future of open source.",
  },
  {
    icon: "🤝",
    title: "Community Events",
    description: "Regular meetups and events to foster collaboration between developers, designers, and enthusiasts. Join us for hackathons, code sprints, and knowledge sharing sessions.",
  },
  {
    icon: "🌟",
    title: "Open Source Contributions",
    description: "Active participation in global open source projects that make a difference. We help members contribute to meaningful projects and develop their skills in the process.",
  },
  {
    icon: "🛠️",
    title: "Community Workshops",
    description: "Hands-on learning sessions for skill development in various technologies. From beginner to advanced levels, we ensure everyone has the opportunity to grow.",
  },
];

export const WhatWeDoSection = () => {
  return (
    <section className=" bg-black/[0.96] relative overflow-hidden min-h-screen">
      {/* <BackgroundGrid /> */}
      {/* <FloatingParticles /> */}

      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-2">
          What We Do
        </h2>
        <h2 className="text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-16">
          Empowering the Open Source Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whatWeDoItems.map((item, index) => (
            <div 
              key={index} 
              className={`
                relative group
                p-1 h-[400px]
                rounded-xl
                backdrop-blur-sm
                border border-white/10
                hover:border-white/20
                transition-all duration-500
                ${index % 2 === 0 ? 'mt-0' : 'mt-12'}
              `}
            >
              <div className="relative h-full flex flex-col bg-black/40 rounded-lg p-6">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 flex-grow">
                  {item.description}
                </p>
             
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16"  >
        <Badge text="Learn More"  href="https://docs.fosscu.org"/>

        </div>
      </div>
    </section>
  );
};