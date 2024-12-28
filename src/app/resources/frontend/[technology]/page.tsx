"use client"
import { BackgroundLines } from "@/components/ui/background-lines";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { motion } from "framer-motion";
import { use } from 'react';
import Link from 'next/link';

import htmlcssData from "@/data/resources/frontend/htmlcss.json";
import jsData from "@/data/resources/frontend/js.json";
import reactData from "@/data/resources/frontend/react.json";
import nextjsData from "@/data/resources/frontend/nextjs.json";
import vuejsData from "@/data/resources/frontend/vuejs.json";
import threejsData from "@/data/resources/frontend/threejs.json";
import tailwindData from "@/data/resources/frontend/tailwind.json";
import reactNativeData from "@/data/resources/frontend/react-native.json";
import electronData from "@/data/resources/frontend/electronjs.json";

interface ResourceItem {
  superehead?: string;
  head: string;
  para1?: string;
  para2?: string;
  para3?: string;
  link?: string;
  videoLink?: string;
}

const resourcesMap: { [key: string]: { data: ResourceItem[], title: string } } = {
  'htmlcss': { data: htmlcssData, title: 'HTML & CSS' },
  'tailwindcss': { data: tailwindData, title: 'Tailwind CSS' },
  'javascript': { data: jsData, title: 'JavaScript' },
  'reactjs': { data: reactData, title: 'React.js' },
  'nextjs': { data: nextjsData, title: 'Next.js' },
  'vuejs': { data: vuejsData, title: 'Vue.js' },
  'threejs': { data: threejsData, title: 'Three.js' },
  'reactnative': { data: reactNativeData, title: 'React Native' },
  'electron': { data: electronData, title: 'Electron' }
};



export default function TechnologyResources({ params }: { params: Promise<{ technology: string }> }) {
  const resolvedParams = use(params);
  const resource = resourcesMap[resolvedParams.technology];
  
  if (!resource) {
    return (
      <div className="min-h-screen w-full bg-black/[0.96] flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Resource Not Found</h1>
          <p className="text-gray-400 mb-8">The requested resource could not be found.</p>
          <Link href="/resources/frontend" className="text-purple-500 hover:text-purple-400">
            ← Back to Frontend Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-black/[0.96] antialiased relative overflow-hidden">
      <FloatingNav/>
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <BackgroundLines className="h-full bg-transparent">
          <></>
        </BackgroundLines>
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
              Learning Resources
            </h1>
          </motion.div>

          <div className="space-y-12">
            {resource.data.map((item: ResourceItem, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-1 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="relative bg-black/40 rounded-lg p-8">
                  {item.superehead && (
                    <p className="text-sm text-purple-400 mb-2">{item.superehead}</p>
                  )}
                  <h2 className="text-2xl font-semibold text-white mb-4">{item.head}</h2>
                  
                  <div className="space-y-4 text-gray-300">
                    {item.para1 && <p>{item.para1}</p>}
                    {item.para2 && <p>{item.para2}</p>}
                    {item.para3 && <p>{item.para3}</p>}
                  </div>

                  <div className="mt-6 space-y-4">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-white transition-colors duration-200"
                      >
                        View Resource
                      </a>
                    )}

                    {item.videoLink && (
                      <div className="relative pt-[56.25%] w-full mt-6">
                        <iframe
                          src={item.videoLink}
                          className="absolute top-0 left-0 w-full h-full rounded-lg"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}