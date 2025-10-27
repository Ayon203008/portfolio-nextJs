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
    { text: "ABID", className: "text-white" },
    { text: "HASAN", className: "text-blue-400" },
    { text: "AYON", className: "text-cyan-400" },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black antialiased items-center justify-center py-12 md:py-16">
      
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static Gradient Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        
        {/* Static Grid */}
        <div className={cn(
          "absolute inset-0 [background-size:50px_50px] opacity-20",
          "[background-image:linear-gradient(to_right,rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.1)_1px,transparent_1px)]"
        )} />
      </div>

      {/* Single Spotlight Effect */}
      <Spotlight className="-top-20 left-0 md:left-40" fill="white" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Text Section - Optimized */}
          <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300 font-medium">Available for opportunities</span>
            </motion.div>

            {/* Name - Typewriter in One Line */}
            <div className="space-y-3">
              <TypewriterEffectSmooth
                words={words}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight whitespace-nowrap justify-center lg:justify-start"
              />
              
              {/* Title */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-xl md:text-2xl text-gray-300">
                <span>MERN Stack</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full hidden sm:block" />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                  Developer
                </span>
              </div>
            </div>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4 max-w-2xl"
            >
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                Crafting digital experiences with modern technologies. 
                Passionate about building scalable applications and solving complex problems through clean code.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {["React", "Node.js", "MongoDB", "TypeScript", "Next.js"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Floating Dock */}
            <div className="pt-6 flex justify-center lg:justify-start">
              <FloatingDockDemo />
            </div>
          </div>

          {/* Optimized Image Section with Code */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 relative"
          >
            <div className="relative group">
              {/* Gradient Border */}
              <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
              
              {/* Compact Image Container */}
              <div className="relative rounded-xl overflow-hidden border-2 border-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-origin-border p-0.5 shadow-xl">
                <Image
                  src="https://i.postimg.cc/sf4f3qrK/ayon.png"
                  alt="Abid Hasan Ayon - MERN Stack Developer"
                  width={320}
                  height={320}
                  className="rounded-lg object-cover w-[240px] sm:w-[280px] md:w-[320px]"
                  priority
                />
              </div>

              {/* Code Element */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-3 -left-3 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-3 text-xs font-mono text-green-400 shadow-lg"
              >
                <div>{"const developer = {"}</div>
                <div>{"  passion: 'coding',"}</div>
                <div>{"  stack: 'MERN'"}</div>
                <div>{"}"}</div>
              </motion.div>

              {/* Minimal Badges */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg border border-white/20">
                MERN
              </div>
              
              <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-green-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg border border-white/20">
                Developer
              </div>
            </div>
          </motion.div>
        </div>

        {/* Simple Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
        >
          <div className="text-xs mb-1">Scroll down</div>
          <div className="w-4 h-6 border border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-gray-400 rounded-full mt-1"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}