"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { FloatingDockDemo } from "./FloatingBar";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { motion } from "framer-motion";

interface Word {
  text: string;
  className: string;
}

interface TechStack {
  name: string;
  icon: string;
  color: string;
}

interface Stat {
  value: string;
  label: string;
  gradient: string;
}

export function SpotlightPreview() {
  const words: Word[] = [
    { text: "ABID", className: "text-white" },
    { text: "HASAN", className: "text-blue-400" },
    { text: "AYON", className: "text-cyan-400" },
  ];

  const techStack: TechStack[] = [
    { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-teal-600" },
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-indigo-600" }
  ];

  const stats: Stat[] = [
    { value: "10+", label: "Projects", gradient: "from-purple-500 to-pink-500" },
    { value: "100%", label: "Quality", gradient: "from-green-500 to-emerald-500" },
    { value: "24/7", label: "Learning", gradient: "from-cyan-500 to-blue-500" }
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full overflow-hidden bg-black antialiased items-center justify-center py-16 md:py-20 lg:py-24">
      
      {/* Simplified Background - No heavy animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/15 rounded-full blur-3xl" />
        <div className={cn(
          "absolute inset-0 [background-size:60px_60px] opacity-20",
          "[background-image:linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)]"
        )} />
      </div>

      {/* Single Spotlight */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Section */}
          <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-white/5 to-white/10 rounded-full border border-white/20 backdrop-blur-xl shadow-lg"
            >
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping" />
              </div>
              <span className="text-sm text-gray-200 font-medium">Available for opportunities</span>
            </motion.div>

            {/* Name with Typewriter */}
            <div className="space-y-4">
              <TypewriterEffectSmooth
                words={words}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight whitespace-nowrap justify-center lg:justify-start"
              />
              
              {/* Title - Single Line */}
              <div className="text-lg sm:text-xl md:text-2xl">
                <span className="text-gray-300 font-semibold">MERN Stack </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                  Developer
                </span>
              </div>
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              Building scalable web applications with modern technologies. 
              Passionate about clean code and innovative solutions.
            </motion.p>

            {/* Stats Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className={cn("text-xl sm:text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent", stat.gradient)}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-3"
            >
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative px-3 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                  >
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <span className="text-base">{tech.icon}</span>
                      <span className="text-gray-200">{tech.name}</span>
                    </span>
                    <div className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-opacity duration-300",
                      `bg-gradient-to-r ${tech.color}`
                    )} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Dock */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-4 flex justify-center lg:justify-start"
            >
              <FloatingDockDemo />
            </motion.div>
          </div>

          {/* Right Image Section */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Simple glow - no animation */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Image Container - Smaller */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-1 shadow-2xl">
                <div className="relative rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  <Image
                    src="https://i.postimg.cc/fTcgR0JJ/Generated-Image-November-18-2025-9-12AM.png"
                    alt="Abid Hasan Ayon - MERN Stack Developer"
                    width={300}
                    height={300}
                    className="rounded-lg sm:rounded-xl object-cover w-[240px] sm:w-[280px] md:w-[300px] lg:w-[320px]"
                    priority
                  />
                </div>
              </div>

              {/* Compact Code Terminal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -top-3 -left-3 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border border-gray-600/50 rounded-lg sm:rounded-xl p-3 shadow-2xl max-w-[180px]"
              >
                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-700/50">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <span className="text-gray-500 text-[10px] font-mono">dev.js</span>
                </div>
                <div className="space-y-1 text-[10px] sm:text-xs font-mono">
                  <div className="text-purple-400">{"const dev = {"}</div>
                  <div className="text-blue-300 pl-2">{"  stack: 'MERN'"}</div>
                  <div className="text-purple-400">{"}"}</div>
                </div>
              </motion.div>

              {/* Static badges - no animation */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-2xl border-2 border-white/30">
                MERN
              </div>
              
              <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-green-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-2xl border-2 border-white/30">
                Full Stack
              </div>

              {/* Decorative blur elements */}
              <div className="absolute -z-10 top-1/4 -left-8 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl" />
              <div className="absolute -z-10 bottom-1/4 -right-8 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>

        {/* Simple Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 gap-2"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}