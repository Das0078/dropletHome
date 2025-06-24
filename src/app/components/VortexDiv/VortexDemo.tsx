"use client";

import React from "react";
import { Vortex } from "../ui/vortex";
import { ContainerTextFlipDemo } from "../TextFlip/ContainerTextFlipDemo";

export function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] max-md:w-[80vw] h-max rounded-md">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
       <div>

          <ContainerTextFlipDemo />
       </div>
    
        {/* <p className="text-white text-sm font-semibold md:text-2xl mt-6 text-center rounded-md px-[5px] py-2 bg-blue-500 shadow-lg shadow-cyan-500 cursor-pointer mb-2 transition-all transition-discrete hover:bg-cyan-700">
          Request a demo
        </p> */}
        {/* <p className="px-4 cursor-pointer rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white text-2xl font-semibold focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
  Request a demo
</p> */}
        {/* <span className="backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white text-center rounded-full relative mt-2">
          <span className="text-sm"> Join now →
            </span>
</span> */}
        <p className="px-2 max-md:hidden py-2 cursor-pointer text-white text-[2rem] backdrop-blur-sm border bg-cyan-300/10 border-cyan-500/20 text-center rounded-full relative mt-2">
          Request a demo →
        </p>
      </Vortex>
    </div>
  );
}
