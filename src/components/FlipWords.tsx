import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsComponent() {
  const words = [
    "Our Projects",
    "Our Services",
    "Our Events",
    "and more",
  ];

  return (
    <div className="h-min flex justify-center items-center px-4  bg-transparent">
      <div className="text-4xl mx-auto font-normal text-white dark:text-gray-200 mb-10">
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
