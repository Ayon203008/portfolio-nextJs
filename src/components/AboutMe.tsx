"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    {
      number: "10+",
      label: "Projects Built",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      number: "MERN",
      label: "Specialization",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      number: "100%",
      label: "Code Quality",
      gradient: "from-green-400 to-emerald-400",
    },
    {
      number: "24/7",
      label: "Learning Mindset",
      gradient: "from-orange-400 to-red-400",
    },
  ];

  const techStack = [
    { name: "MongoDB", color: "text-green-400" },
    { name: "Express.js", color: "text-gray-300" },
    { name: "React", color: "text-cyan-400" },
    { name: "Node.js", color: "text-green-500" },
  ];

  return (
    <div
      ref={ref}
      className="relative min-h-screen flex items-center justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Simplified Background - No animations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
        <div
          className={cn(
            "absolute inset-0 opacity-20",
            "[background-size:50px_50px]",
            "[background-image:linear-gradient(to_right,rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.1)_1px,transparent_1px)]"
          )}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left: Code Section - Simple fade in */}
        <motion.div
          className="flex justify-center lg:justify-start order-2 lg:order-1"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full max-w-lg">
            {/* Main Code Container */}
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 sm:p-8 shadow-2xl hover:border-purple-500/50 transition-all duration-300">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-700/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-gray-400 ml-2 font-mono">
                  developer.js
                </span>
              </div>

              {/* Code - No animations */}
              <div className="space-y-2 sm:space-y-3">
                <CodeLine text="const developer = {" color="text-purple-400" />
                <CodeLine
                  text="name: 'Abid Hasan Ayon',"
                  indent={1}
                  color="text-blue-300"
                />
                <CodeLine
                  text="role: 'MERN Stack Developer',"
                  indent={1}
                  color="text-blue-300"
                />
                <CodeLine
                  text="specialization: ['MongoDB', 'Express', 'React', 'Node'],"
                  indent={1}
                  color="text-blue-300"
                />
                <CodeLine
                  text="passion: 'Building Scalable Web Apps',"
                  indent={1}
                  color="text-blue-300"
                />
                <CodeLine
                  text="mindset: 'Always Learning 🚀'"
                  indent={1}
                  color="text-blue-300"
                />
                <CodeLine text="};" color="text-purple-400" />
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700/50">
                {techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className={cn(
                      "text-xs font-mono px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700/50",
                      tech.color
                    )}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Static Badges - No floating animation */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              MERN
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Full Stack
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
            <div className="absolute -z-10 -bottom-8 -right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
          </div>
        </motion.div>

        {/* Right: Content Section - Simple fade in */}
        <motion.div
          className="flex flex-col space-y-6 order-1 lg:order-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300 font-medium">
              Available for opportunities
            </span>
          </div>

          {/* Compact Heading - Single Line Title */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                MERN Stack{" "}
              </span>
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
              Crafting scalable, modern web applications with the MERN stack.
              Passionate about clean code, innovative solutions, and continuous
              learning.
            </p>
          </div>

          {/* Stats Grid - No hover animations */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-default"
              >
                <div
                  className={cn(
                    "text-xl sm:text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                    stat.gradient
                  )}
                >
                  {stat.number}
                </div>
                <div className="text-xs text-gray-400 mt-1.5 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Compact Description */}
          <div className="space-y-3 max-w-2xl">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              I am a passionate full-stack developer specializing in the MERN
              ecosystem. My focus is on building robust, scalable web
              applications that deliver exceptional user experiences. With a
              commitment to writing clean, maintainable code, I transform
              complex problems into elegant solutions.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Currently pursuing my Bachelors in Computer Science &
              Engineering, constantly expanding my skills in modern web
              technologies, system design, and software architecture.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            <a
              href="https://drive.google.com/file/d/173rn7AgMwNY3jR7bl3kHbhw7KI5hJTDB/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Resume
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="#contact"
              className="group px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-white/20 text-white rounded-xl font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-sm sm:text-base"
            >
              <span className="flex items-center gap-2">
                Contact Me
                <svg
                  className="w-4 h-4 group-hover:rotate-45 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Simple Code Line Component - No animations
function CodeLine({
  text,
  indent = 0,
  color = "text-gray-300",
}: {
  text: string;
  indent?: number;
  color?: string;
}) {
  return (
    <div
      className="flex items-start font-mono text-xs sm:text-sm"
      style={{ paddingLeft: `${indent * 20}px` }}
    >
      <span className="text-green-400 mr-2 select-none">{"›"}</span>
      <span className={color}>{text}</span>
    </div>
  );
}