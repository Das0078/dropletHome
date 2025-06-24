import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const cardData:any[]=
[
  {
    title:"Listen Ad Free",
    description:"No ad interruptions while playing songs",
    imgUrl:"/images/droplet1.png"
  },
  {
    title:"Store your songs from local to cloud",
    description:"Where you can make your playlist from the songs you store in your local device",
    imgUrl:"/images/droplet2.png"
  },
  {
    title:"Browse million of songs",
    description:"Find top trending songs",
    imgUrl:"/images/droplet3.png"
  }
]
