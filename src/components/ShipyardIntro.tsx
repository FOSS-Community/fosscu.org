"use client";

import { motion } from "framer-motion";

export const ShipyardIntro = () => {
  return (
    <div className="text-center max-w-4xl mx-auto px-4">
      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
          What is Shipyard?
        </h2>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
          Shipyard is FOSSCU&apos;s flagship monthly initiative, designed to bring together open-source enthusiasts from around the world to build, launch, and celebrate incredible projects.
          Whether you&apos;re just getting started or you&apos;re a seasoned developer, Shipyard offers an inclusive platform where everyone can contribute, collaborate, and showcase their creativity.
        </p>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto mt-6">
          Join us in shaping the future of open source — one project at a time! 🚀
        </p>
      </motion.div>

      {/* How to Submit Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-left bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg 
                  hover:scale-[1.02] hover:border-white/20 transition duration-300"
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
          How to Submit Your Project 🚀
        </h3>
        <ol className="list-decimal list-inside space-y-5 text-neutral-300 text-base md:text-lg">
          <li>Click on the <strong>&quot;Submit Your Project&quot;</strong> button below.</li>
          <li>You will be redirected to the Shipyard GitHub repository&apos;s README file.</li>
          <li>Fork the repository to your own GitHub account.</li>
          <li>Clone the forked repository to your local machine.</li>
          <li>Create a new folder inside the <code>projects/</code> directory, using your project name.</li>
          <li>Add your project files and update the <code>README.md</code> inside your folder with the following details:
            <ul className="list-disc list-inside ml-6 mt-3 space-y-2">
              <li><strong>Project Title</strong></li>
              <li><strong>Short Description</strong></li>
              <li><strong>Tech Stack Used</strong></li>
              <li><strong>Installation Steps</strong> (if any)</li>
              <li><strong>Optional:</strong> Screenshots or Demo Links</li>
            </ul>
          </li>
          <li>Push your changes to your GitHub fork.</li>
          <li>Create a Pull Request (PR) to submit your project.</li>
          <li>Wait for our team to review your submission and merge it! 🎉</li>
        </ol>

      </motion.div>

    </div>
  );
};
