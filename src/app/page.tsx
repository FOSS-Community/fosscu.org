// src/app/page.tsx
import dynamic from 'next/dynamic';
import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Suspense } from 'react';
import { NewsletterSection } from '@/components/NewsletterSection';

const WhatWeDoSection = dynamic(() => import('@/components/WhatWeDo').then(mod => mod.WhatWeDoSection), {
  loading: () => <div className="min-h-screen" /> 
});

const ProjectsSection = dynamic(() => import('@/components/Projects').then(mod => mod.ProjectsSection));
const Footer = dynamic(() => import('@/components/Footer').then(mod => mod.Footer));

export default function Home() {

  return (
    <div className="smooth-scroll">

      <FloatingNav/>
      <Hero />
      <Suspense fallback={<div className="h-min" />}>
        <WhatWeDoSection />
      </Suspense>
      <Suspense fallback={<div className="h-min" />}>
        <ProjectsSection />
      </Suspense>
        <Suspense fallback={<div className="h-min" />}>
        <NewsletterSection />
      </Suspense>
      <Suspense fallback={<div className="h-min" />}>
        <Footer />
      </Suspense>
      </div>
    
  );
}