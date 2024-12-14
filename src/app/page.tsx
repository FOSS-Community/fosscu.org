import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";

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
      <div className="h-screen bg-black/[0.96] dark:bg-black"></div>
    </>
  );
}
