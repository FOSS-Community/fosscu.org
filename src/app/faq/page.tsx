"use client"
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

const faqItems = [
  {
    question: "What do you mean by 'Open Source'?",
    answer: "Open source refers to a software development model in which the source code of a program is made freely available to the public, allowing anyone to view, modify, and distribute the code as they see fit."
  },
  {
    question: "How do I make my first contribution to an open source project?",
    answer: "One common approach is to look for 'good first issue' or 'beginner-friendly' labels on open issues, which can provide a good entry point for new contributors. Feel free to contact us and we'll help you out as soon as we can."
  },
  {
    question: "Can I contribute to an open source project even if I am not a developer?",
    answer: "Yes, open source projects often need help with documentation, testing, design, and other non-coding tasks. Check the project's documentation or contact the maintainers to see how you can contribute."
  },
  {
    question: "What is the open source community?",
    answer: "The open source community is a group of individuals and organizations that collaborate on the development and maintenance of open source software. The community is typically characterized by a spirit of collaboration, transparency, and openness."
  },
  {
    question: "What are some benefits of being part of the open source community?",
    answer: "The opportunity to collaborate with like-minded individuals, build your skills and experience in software development, and make meaningful contributions to important software projects. Join us now."
  },
  {
    question: "How can I get involved in the open source community?",
    answer: "There are many ways to get involved in the open source community, including contributing to open source projects, attending events and conferences, participating in online forums and discussion groups, and joining open source communities on social media platforms."
  },
  {
    question: "What are some ways to contribute to open source projects?",
    answer: "Some ways to contribute to open source projects include submitting bug reports, suggesting new features, creating documentation, writing code, improving existing code, providing feedback on issues, or helping with community management."
  },
  {
    question: "What is a pull request in open source contribution?",
    answer: "A pull request is a proposed change to the codebase of an open source project that is submitted by a contributor for review and potential inclusion in the project."
  }
];

export default function FAQ() {
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Find answers to common questions about open source and getting started with contributions
            </p>
          </motion.div>

          <div className="grid gap-8">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group p-1 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="relative h-full flex flex-col bg-black/40 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {item.question}
                  </h3>
                  <p className="text-gray-300">
                    {item.answer}
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
