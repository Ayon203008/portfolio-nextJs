"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { FloatingDockDemo } from "./FloatingBar";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { motion } from "framer-motion";

export function SpotlightPreview() {
  const words = [
    { text: "ABID" },
    { text: "HASAN" },
    { text: "AYON" },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased items-center justify-center pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-12 sm:pb-16">
      
      {/* Grid Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight Effect */}
      <Spotlight className="-top-32 left-0 md:-top-20 md:left-40" fill="white" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Image Section */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="rounded-2xl shadow-2xl border border-neutral-800 overflow-hidden">
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
              >
                <Image
                  src="https://i.ibb.co.com/Kzs6cTsq/profile.jpg"
                  alt="Abid Hasan Ayon"
                  width={420}
                  height={420}
                  className="rounded-2xl object-cover w-[240px] sm:w-[300px] md:w-[350px] lg:w-[420px]"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Section */}
          <div className="text-center md:text-left space-y-6 order-2 md:order-1">
            
            {/* Animated Name */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* এখানে responsive font size দেওয়া হলো */}
              <TypewriterEffectSmooth
                words={words}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white tracking-wide glow-text leading-tight"
              />
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-md sm:max-w-lg md:max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              Obsessed with{" "}
              <span className="font-semibold text-white">MERN stack development</span>, improving 1% every day.
              I believe in thinking differently and love taking on tough challenges. Passionate about delivering{" "}
              <span className="text-white">phenomenal websites</span> to customers.
            </motion.p>

            {/* Floating Dock Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="pt-4 flex justify-center md:justify-start"
            >
              <FloatingDockDemo />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
