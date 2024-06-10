"use client";
import React from "react";
import { musicSchoolTestimonials } from "@/data/content";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export const MusicTestimonials = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.3] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-6 z-10 text-white">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};
