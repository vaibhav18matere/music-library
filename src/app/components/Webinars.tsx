"use client";
import React from "react";
import { featuredWebinars } from "./../../data/content";
import { featuredWebinarsType } from "@/data/types";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";

const Webinars = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar: featuredWebinarsType) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"#!"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View all webinars
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Webinars;
