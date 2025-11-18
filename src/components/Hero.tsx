"use client";

import React, { useState, useEffect, useMemo, memo } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { FloatingDockDemo } from "./FloatingBar";
import { motion } from "framer-motion";

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

// Memoized Typewriter Component
const CustomTypewriter = memo(() => {
  const fullText = "ABID HASAN AYON";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      } else if (!isDeleting && currentIndex === fullText.length) {
        setIsDeleting(true);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(fullText.slice(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
      }
    }, isDeleting ? 40 : currentIndex === fullText.length ? 2500 : 80);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, fullText]);

  const coloredText = useMemo(() => {
    return displayText.split("").map((char, index) => {
      let colorClass = "text-white";
      if (char === " ") colorClass = "text-white/20";
      else if (index >= 5 && index < 10) colorClass = "text-blue-400";
      else if (index >= 10) colorClass = "text-cyan-400";
      
      return (
        <span key={index} className={colorClass}>
          {char}
        </span>
      );
    });
  }, [displayText]);

  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight whitespace-nowrap">
      {coloredText}
      <span className="inline-block w-0.5 h-[0.8em] bg-cyan-400 ml-1 animate-pulse" />
    </h1>
  );
});

CustomTypewriter.displayName = "CustomTypewriter";

// Memoized Status Badge
const StatusBadge = memo(() => (
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/20 backdrop-blur-sm">
    <div className="relative">
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping" />
    </div>
    <span className="text-sm text-gray-200 font-medium">Available for opportunities</span>
  </div>
));

StatusBadge.displayName = "StatusBadge";

// Memoized Stat Card
const StatCard = memo(({ stat }: { stat: Stat }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
    <div className={cn("text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent", stat.gradient)}>
      {stat.value}
    </div>
    <div className="text-xs text-gray-400">{stat.label}</div>
  </div>
));

StatCard.displayName = "StatCard";

// Memoized Tech Badge
const TechBadge = memo(({ tech }: { tech: TechStack }) => (
  <div className="group px-3 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
    <span className="flex items-center gap-2 text-sm font-medium text-gray-200">
      <span>{tech.icon}</span>
      <span>{tech.name}</span>
    </span>
  </div>
));

TechBadge.displayName = "TechBadge";

// Memoized Profile Image Section
const ProfileImage = memo(() => (
  <div className="relative group">
    {/* Glow Effect - Using CSS only */}
    <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
    
    {/* Image Container */}
    <div className="relative rounded-xl overflow-hidden border border-white/20 bg-gradient-to-br from-gray-900 to-gray-800 p-1">
      <Image
        src="https://i.postimg.cc/fTcgR0JJ/Generated-Image-November-18-2025-9-12AM.png"
        alt="Abid Hasan Ayon"
        width={320}
        height={320}
        className="rounded-lg object-cover w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px]"
        priority
        loading="eager"
      />
    </div>

    {/* Code Terminal */}
    <div className="absolute -top-2 -left-2 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg p-2 max-w-[140px] sm:max-w-[160px]">
      <div className="flex items-center gap-1.5 mb-1.5 pb-1.5 border-b border-gray-700">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
        </div>
        <span className="text-gray-500 text-[9px] font-mono">dev.js</span>
      </div>
      <div className="space-y-0.5 text-[9px] sm:text-[10px] font-mono">
        <div className="text-purple-400">{"const dev = {"}</div>
        <div className="text-blue-300 pl-2">{"  stack: 'MERN'"}</div>
        <div className="text-purple-400">{"}"}</div>
      </div>
    </div>

    {/* Badges */}
    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold border-2 border-white/30">
      MERN
    </div>
    
    <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-green-500 to-cyan-500 text-white px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold border-2 border-white/30">
      Full Stack
    </div>
  </div>
));

ProfileImage.displayName = "ProfileImage";

// Memoized Scroll Indicator
const ScrollIndicator = memo(() => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 gap-2">
    <span className="text-xs tracking-widest uppercase">Scroll</span>
    <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center p-1">
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-1 h-2 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"
      />
    </div>
  </div>
));

ScrollIndicator.displayName = "ScrollIndicator";

export function SpotlightPreview() {
  // Static data - memoized to prevent recreation
  const techStack: TechStack[] = useMemo(() => [
    { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-teal-600" },
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-indigo-600" }
  ], []);

  const stats: Stat[] = useMemo(() => [
    { value: "10+", label: "Projects", gradient: "from-purple-500 to-pink-500" },
    { value: "100%", label: "Quality", gradient: "from-green-500 to-emerald-500" },
    { value: "24/7", label: "Learning", gradient: "from-cyan-500 to-blue-500" }
  ], []);

  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-black antialiased items-center justify-center py-12 md:py-16 lg:py-20">
      
      {/* Optimized Background - Static, no animations */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-5 order-2 lg:order-1">
            
            <StatusBadge />

            {/* Name & Title */}
            <div className="space-y-3 flex flex-col items-center lg:items-start">
              <CustomTypewriter />
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
                <span className="text-gray-300 font-semibold">MERN Stack </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                  Developer
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Building scalable web applications with modern technologies. 
              Passionate about clean code and innovative solutions.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {techStack.map((tech) => (
                  <TechBadge key={tech.name} tech={tech} />
                ))}
              </div>
            </div>

            {/* Floating Dock */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <FloatingDockDemo />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <ProfileImage />
          </div>
        </div>

        <ScrollIndicator />
      </div>
    </div>
  );
}