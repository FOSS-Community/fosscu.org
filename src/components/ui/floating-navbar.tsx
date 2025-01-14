"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
    link: "/teams",
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

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export const FloatingNav = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="sm:hidden fixed top-4 left-4 z-[5001] text-white p-2 bg-black/50 rounded-full backdrop-blur-sm border border-white/[0.2]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="fixed sm:hidden top-16 left-4 w-64 p-4 bg-black/90 backdrop-blur-lg rounded-lg border border-white/[0.2] z-[5000]"
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((navItem: NavItem, idx: number) => (
              <Link
                key={`mobile-link-${idx}`}
                href={navItem.link}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-white hover:text-neutral-300 transition-colors text-sm py-2 px-4 rounded hover:bg-white/10"
                )}
              >
                {navItem.name}
              </Link>
            ))}
            <button 
              onClick={() => {setIsOpen(false);
                window.open('https://docs.fosscu.org/', '_blank');
              }}
              className="text-left px-4 py-2 text-sm text-white hover:text-neutral-300 hover:bg-white/10 transition-colors rounded"
            >
              Handbook
            </button>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
        }}
        className={cn(
          "hidden sm:flex max-w-fit fixed top-4 inset-x-0 mx-auto border border-white/[0.2] rounded-full backdrop-blur-lg bg-black bg-opacity-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-8 pl-8 py-2 items-center justify-between",
          className
        )}
      >
        <div className="flex items-center space-x-4">
          {navItems.map((navItem: NavItem, idx: number) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-sm text-white hover:text-neutral-300 transition-colors"
              )}
            >
              {navItem.name}
            </Link>
          ))}
        </div>

        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-4 py-2 rounded-full ml-4" onClick={() => window.open('https://docs.fosscu.org/', '_blank')}>
          <span>Handbook</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </>
  );
};
