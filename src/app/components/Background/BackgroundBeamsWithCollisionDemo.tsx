"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

import { VortexDemo } from "../VortexDiv/VortexDemo";
export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <h2 className="w-full h-[50vh] text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        <div className="relative  mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <VortexDemo/>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
