"use client";
import { ContainerTextFlip } from "../ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "../../../lib/utils";

export function ContainerTextFlipDemo() {
  const words = ["Loud", "smooth", "Drop"];
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative mb-6 max-w-2xl text-left text-4xl leading-normal font-bold tracking-tight text-zinc-700 md:text-7xl dark:text-zinc-100",
      )}
      layout
    >
      <div className="inline-block max-md:w-[60vw] md:w-[45vw]">
       <span className='text-amber-100'>Listen your inside world, let it</span> <ContainerTextFlip words={words} />
         <p className="text-white text-sm md:text-2xl max-md:text-[1.2rem] max-w-xl mt-6 text-center">
          A web based music platform that let you store your local songs and let you listen without any headache and 
          let you browse songs as you wish.

        </p>
        {/* <Blips /> */}
      </div>
    </motion.h1>
  );
}
