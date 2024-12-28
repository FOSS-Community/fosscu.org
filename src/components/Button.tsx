"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function HoverButton() {
  return (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white bg-opacity-5 text-white dark:text-white flex items-center space-x-2"
      >
        <span>Become a member</span>
      </HoverBorderGradient>
    </div>
  );
}
