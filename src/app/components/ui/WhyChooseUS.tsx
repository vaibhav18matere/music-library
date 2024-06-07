"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";
import { musicSchoolContent } from "@/data/music-school-content";

function WhyChooseUs() {
  return <StickyScroll content={musicSchoolContent} />;
}

export default WhyChooseUs;
