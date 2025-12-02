"use client";

import React from "react";
import { Button } from "../../../components/ui/button";

const navigationLinks = [
  { label: "Benefits" },
  { label: "Solutions" },
  { label: "Intelligence" },
];

export const NavigationSection = () => {
  return (
    <header className="flex w-full bg-white border-b border-[#0000001f] translate-y-[-1rem] animate-fade-in opacity-0 min-h-[80px]">
      <div className="flex items-center justify-between w-full min-h-[80px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-4">
        <div className="flex items-center">
          <img
            className="w-auto h-[40px] sm:h-[55px] object-contain"
            alt="Brewly Logo"
            src="https://c.animaapp.com/min8qdk7rRnsOg/img/group-39541-1.png"
          />
        </div>

        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navigationLinks.map((link, index) => (
            <button
              key={index}
              className="h-[71px] px-3 pt-7 pb-6 border-b-4 border-transparent hover:border-[#1a5d4a] transition-colors"
            >
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#212121] text-[13.8px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                {link.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="flex items-center">
          <Button className="flex flex-col items-center py-[10px] px-4 sm:px-[22px] w-auto sm:w-[127px] h-10 bg-[#1a5d4a] hover:bg-[#1a5d4a]/90 rounded-xl border-2 border-solid border-[#1a5d4a] transition-colors flex-none order-0">
            <span className="[font-family:'Source_Sans_Pro',Helvetica] font-semibold text-white text-sm sm:text-base text-center tracking-[0] leading-4 whitespace-nowrap">
              Get a Demo
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};
