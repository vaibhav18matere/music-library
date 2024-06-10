"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { musicSchoolContent } from "@/data/content";

export const WhyChooseUs = () => {
  return <StickyScroll content={musicSchoolContent} />;
};
