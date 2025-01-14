import { Badge } from "./Badge";


const projectItems = [
  {
    title: "Check Your Reputation",
    url: "https://reputation.fosscu.org"
  },
  {
    title: "Get FOSSCU Sub-Domains",
    url: "https://subdomain.fosscu.org"
  },
  {
    title: "paste.fosscu.org",
    url: "https://paste.fosscu.org"
  },
  {
    title: "Linkliberte",
    url: "https://github.com/foss-community/linkliberte"
  },
  {
    title: "FOSSConf",
    url: "https://conference.fosscu.org"
  },
  {
    title: "How we begin",
    url: "/about"
  },
  {
    title: "How to contribute",
    url: "https://github.com/foss-community"
  },
  {
    title: "🧙‍♂️Wand 🪄",
    url: "https://github.com/foss-community/wand"
  },
];

export const ProjectsSection = () => {
  return (
    <section className=" bg-black/[0.96] relative overflow-hidden pb-10">
      {/* <BackgroundGrid />
      <FloatingParticles /> */}
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-2">
          Our Projects, Services and More
        </h2>
      {/* <FlipWordsComponent /> */}

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Explore our open source projects and tools. From developer utilities to community platforms, 
          these projects are built by the community, for the community.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projectItems.map((item, index) => (
            <a 
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
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
                  {item.title}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <Badge text="View all projects on GitHub" href="https://github.com/foss-community" />
        </div>
      </div>
    </section>
  );
};