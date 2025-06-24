import React from "react";

import { BackgroundBeamsWithCollisionDemo } from "./components/Background/BackgroundBeamsWithCollisionDemo";
import { ThreeDCardDemo } from "./components/Card/ThreeDCardDemo";
import { cardData } from "@/lib/utils";

const page = () => {
  return (
    <>
      <div className="h-[100vh] overflow-scroll">
        <span className=" text-white bg-transparent md:absolute z-10000 px-2 mt-1">
          <span className="flex items-center justify-between">
            <span className='flex items-center cursor-pointer'>
              <img
                className="w-12"
                src="/images/droplet_mini.png"
                alt="droplet logo"
              />

              <span className="font-bold text-2xl">Droplet</span>
            </span>

            <p className="px-2 md:hidden cursor-pointer mr-1 text-white text-sm backdrop-blur-sm border bg-cyan-300/10 border-cyan-500/20 text-center rounded-full relative mt-2">
              Request a demo →
            </p>
          </span>
        </span>
        <div>
          <BackgroundBeamsWithCollisionDemo />
        </div>
        {/* <ThreeDMarqueeDemo/> */}
        <div className="flex items-center justify-center gap-x-2 max-md:flex-col max-md:items-start">
          {cardData?.map((item: any) => {
            return <ThreeDCardDemo key={item?.title} payload={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default page;
