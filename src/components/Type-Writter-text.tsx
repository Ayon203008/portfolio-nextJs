"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "ABID",
    },
    {
      text: "HASAN",
    },
    {
      text: "AYON",
    },
   
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">

      <TypewriterEffectSmooth words={words} />
 
    </div>
  );
}
