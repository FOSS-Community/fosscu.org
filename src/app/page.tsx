// src/app/page.tsx
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { WhatWeDoSection } from "@/components/WhatWeDo";
import { ProjectsSection } from "@/components/Projects";
import { NewsletterSection } from "@/components/Newsletter";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Team",
      link: "/contact",
    },
    {
      name: "Shipyard",
      link: "/shipyard",
    },
    {
      name: "Resources",
      link: "/resources",
    },
  ];

  return (
    <>
      <FloatingNav navItems={navItems} />
      <Hero />
      <WhatWeDoSection />
      <ProjectsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}