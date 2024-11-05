import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Star, Code2 } from 'lucide-react';
import Header from '../../components/Navbar';
import Footer from '../../components/Footer';
import CountdownTimer from '../../components/CountdownTimer';

const projects = [
  {
    title: 'CHINO',
    description: 'Chino is a terminal-based chatbot based on ChatGPT.',
    stars: 21,
    techStack: 'Python',
    githubLink: 'https://github.com/SAMAD101/Chino',
    liveLink: 'https://pypi.org/project/chinoai/',
    creator: {
      name: 'Sam',
      avatar: 'https://avatars.githubusercontent.com/u/71956678?v=4',
      role: 'Developer'
    }
  },
  {
    title: 'Quickfire',
    description: 'auth, Bloc, onboarding, Payment, UI and Play Store deployment, effortlessly woven for an elevated development experience.',
    stars: 19,
    techStack: 'Dart',
    githubLink: 'https://github.com/FOSS-Community/quickfire',
    liveLink: '/',
    creator: {
      name: 'Utkarsh Srivastava',
      avatar: 'https://avatars.githubusercontent.com/u/71646773?v=4',
      role: 'Developer'
    }
  },
  {
    title: 'djangocraft_cli',
    description: 'djangocraft is a very powerfull and easy way to set up your Django project',
    stars: 8,
    techStack: 'Python',
    githubLink: 'https://github.com/YashRaj1506/djangocraft_cli',
    liveLink: 'https://pypi.org/project/djangocraft/',
    creator: {
      name: 'Yash Raj',
      avatar: 'https://avatars.githubusercontent.com/u/144276098?v=4',
      role: 'Developer'
    }
  },
  {
    title: 'TSDiffTool',
    description: 'A tool for seamless sequence comparison, crafting patches, and effortless synchronization',
    stars: 20,
    techStack: 'TypeScript',
    githubLink: 'https://github.com/codecShivam/TSDiffTool',
    liveLink: '/',
    creator: {
      name: 'Shivam Yadav',
      avatar: 'https://avatars.githubusercontent.com/u/118369445?v=4',
      role: 'Developer'
    }
  },
  {
    title: 'LinkLiberate',
    description: 'A libre url shortner',
    stars: 9,
    techStack: 'HTML, Dockerfile, Python',
    githubLink: 'https://github.com/FOSS-Community/LinkLiberate',
    liveLink: 'https://ll.fosscu.org/',
    creator: {
      name: 'FOSS-Community',
      avatar: 'https://camo.githubusercontent.com/ddad628acaed8472a1cee9d340499a273515978bf2f0bc2d53781cc00b8ca54a/68747470733a2f2f692e6962622e636f2f4c6747344d76312f69636f6e2d72632e706e67',
      role: 'Community'
    }
  }
];

function SpotlightButton() {
  return (
    <a
      href="https://airtable.com/embed/appBKWHmWLpuOD6Nn/paggk8gryswLeXbzs/form"
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-gradient-green text-white rounded-lg border border-green-400 hover:bg-green-600 transition-all duration-300 flex items-center gap-2 shadow-glow"
      >
        Submit project <ExternalLink size={20} />
      </motion.button>
    </a>
  );
}

interface Project {
  title: string;
  description: string;
  stars: number;
  techStack: string;
  githubLink: string;
  liveLink: string;
  creator: {
    name: string;
    avatar: string;
    role: string;
  };
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 + index * 0.2, duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="relative bg-gradient-green rounded-xl p-8 backdrop-blur-sm border border-green-500 hover:border-[#0DFF1C] hover:shadow-glow transition-all duration-300"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Creator Profile */}
      <div className="absolute top-6 right-6 flex items-center gap-2">
        <div className="text-right">
          <p className="text-white text-sm">{project.creator.name}</p>
          <p className="text-white/60 text-xs">{project.creator.role}</p>
        </div>
        <img
          src={project.creator.avatar}
          alt={project.creator.name}
          className="w-8 h-8 rounded-full border border-green-400"
        />
      </div>

      <motion.div
        animate={{ y: isHovered ? -5 : 0 }}
        transition={{ duration: 0.2 }}
        className="space-y-6"
      >
        <h3 className="text-xl font-bold text-white pr-24">{project.title}</h3>
        <p className="text-white/70">{project.description}</p>
        
        <div className="flex items-center gap-2">
          <Code2 size={16} className="text-green-400" />
          <span className="text-white/70">Tech Stack:</span>
          <span className="text-white bg-white/10 px-2 py-1 rounded-md text-sm">{project.techStack}</span>
        </div>

        <div className="flex items-center gap-2 text-white/70">
          <Star size={16} className="text-yellow-400" />
          <span>{project.stars}</span>
        </div>

        <motion.div 
          className="flex justify-between pt-2"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          <motion.a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-[#0DFF1C] transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Github size={18} />
            <span>GitHub</span>
          </motion.a>
          
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-[#0DFF1C] transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Globe size={18} />
            <span>Live Demo</span>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 -z-10 rounded-xl opacity-0"
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'linear-gradient(45deg, #0DFF1C, #4caf50, #1ed760)',
          filter: 'blur(8px)',
        }}
      />
    </motion.div>
  );
};

const ShipyardContent = () => {
  return (
    <div className="max-h-screen overflow-hidden bg-black flex flex-col items-center">
      <div className="relative overflow-scroll z-10 w-full">
        <Header />
        <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">What is Shipyard?</h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl text-center"
            >
              Shipyard is an innovative initiative where creators, problem-solvers, and visionaries come together
              from all local chapters to design, develop, and deploy solutions for real-world challenges. Imagine
              a space where collaboration trumps competition—a community that builds together rather than competes
              against each other. Here, we focus on teamwork, combining in-person and remote efforts to create
              meaningful, lasting impact.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-glow">SHIPYARD</h2>
            <CountdownTimer />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-12"
            >
              <SpotlightButton />
            </motion.div>
          </motion.div>

          <div className="w-full mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#00FF00] via-[#008500] to-[#006900] text-center mb-2">
              Sip coffee and have a look at the projects shipped:
            </h2>
            <p className="text-lg md:text-xl text-white text-center mb-4">
              {/* Additional description or context can go here */}
            </p>
            <div className="w-full h-1 bg-gradient-white mb-4"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ShipyardContent;