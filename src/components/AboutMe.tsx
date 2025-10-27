"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    { number: "10+", label: "Projects Built" },
    { number: "MERN", label: "Specialization" },
    { number: "100%", label: "Code Quality" },
    { number: "24/7", label: "Learning Mindset" }
  ];

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex items-center justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        
        <div
          className={cn(
            "absolute inset-0 opacity-20",
            "[background-size:50px_50px]",
            "[background-image:linear-gradient(to_right,rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.1)_1px,transparent_1px)]"
          )}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Lottie/Code Animation Section */}
        <motion.div
          className="flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-md">
            {/* Code Animation Container */}
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 shadow-2xl">
              {/* Animated Code Blocks */}
              <div className="space-y-4">
                <CodeLine text="const developer = {" delay={0} />
                <CodeLine text="  name: 'Abid Hasan Ayon'," delay={0.2} indent={2} />
                <CodeLine text="  specialization: 'MERN Stack'," delay={0.4} indent={2} />
                <CodeLine text="  passion: 'Clean Code & Scalable Apps'" delay={0.6} indent={2} />
                <CodeLine text="};" delay={0.8} />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                MERN
              </div>
              <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Developer
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Section - Simplified */}
        <motion.div
          className="flex flex-col space-y-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, duration: 0.6 }
            }
          }}
        >
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300 font-medium">Open for opportunities</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                MERN Stack
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Specializing in MongoDB, Express.js, React, and Node.js to build 
              scalable, modern web applications with clean, efficient code.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              As a dedicated MERN stack developer, I focus on creating robust, scalable web applications 
              using cutting-edge technologies. My passion lies in solving complex problems and delivering 
              exceptional user experiences through clean, maintainable code.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://drive.google.com/file/d/173rn7AgMwNY3jR7bl3kHbhw7KI5hJTDB/view"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Resume
            </a>
            
            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 text-white rounded-lg font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Code Line Component
function CodeLine({ text, delay = 0, indent = 0 }: { text: string; delay?: number; indent?: number }) {
  return (
    <motion.div
      className="flex items-center font-mono text-sm"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{ marginLeft: `${indent * 8}px` }}
    >
      <span className="text-green-400 mr-2">{">"}</span>
      <span className="text-gray-300">{text}</span>
    </motion.div>
  );
}