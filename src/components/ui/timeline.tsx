"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiNextdotjs, SiMongodb } from "react-icons/si";

interface TimelineEntry {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  gradient: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full items-center justify-center overflow-hidden bg-neutral-950"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center py-20 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent"
          >
            Education Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-400 max-w-2xl mx-auto"
          >
            From foundational learning to specialized computer science education
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative pb-32">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex justify-start pt-20"
            >
              {/* Timeline Node */}
              <div className="sticky z-40 flex items-center top-40 self-start min-w-[120px] md:min-w-[200px]">
                <div className={`relative h-12 w-12 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-lg shadow-current/30`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.gradient} blur-sm opacity-50`} />
                </div>
                
                {/* Date */}
                <div className="absolute left-16 md:left-20">
                  <h3 className="text-lg md:text-2xl font-bold text-white whitespace-nowrap">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Content Card */}
              <div className="relative pl-24 md:pl-32 pr-4 w-full">
                <div className="group relative">
                  {/* Card Glow */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300`} />
                  
                  {/* Main Card */}
                  <div className="relative bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 shadow-2xl">
                    {item.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Animated Timeline Line */}
          <div
            style={{ height: height + "px" }}
            className="absolute left-6 top-0 overflow-hidden w-1 
            bg-gradient-to-b from-transparent via-neutral-700 to-transparent
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pb-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 px-6 py-3 bg-neutral-900/50 backdrop-blur-sm rounded-full border border-neutral-800"
          >
            <div className="flex gap-3">
              <SiJavascript className="text-yellow-400 text-xl" />
              <SiTypescript className="text-blue-500 text-xl" />
              <SiReact className="text-cyan-400 text-xl" />
              <SiNextdotjs className="text-white text-xl" />
              <SiNodedotjs className="text-green-500 text-xl" />
              <SiMongodb className="text-green-600 text-xl" />
            </div>
            <span className="text-neutral-300 font-medium">Tech Stack</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};