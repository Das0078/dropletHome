"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { GlowingEffect } from "../ui/glowing-effect";
import Image from "next/image";

{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
export function ThreeDCardDemo({payload}:any) {
  return (


 
    <CardContainer className="inter-var border-1 border-slate-800 rounded-md">
      <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
      <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {payload?.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {payload?.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
          width={500}
          height={100}
            src={payload?.imgUrl}
            className="h-60 rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer> 

 
  );
}
