"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { motion, useInView } from "framer-motion";

export function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, duration: 1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div
      ref={ref}
      className="relative flex flex-col lg:flex-row items-center justify-center w-full overflow-hidden px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Background Grid */}
      <div
        className={cn(
          "absolute inset-0 animate-pulse-slow",
          "[background-size:30px_30px] sm:[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-black/70" />

      {/* Left Image */}
      <motion.div
        className="lg:w-1/2 flex justify-center mb-8 lg:mb-0 relative z-20"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="https://i.ibb.co/Kzs6cTsq/profile.jpg"
          alt="My Photo"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-xl shadow-2xl border-4 border-indigo-500 object-cover"
          whileHover={{ scale: 1.08, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="lg:w-1/2 flex flex-col items-start text-left max-w-2xl relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1
          variants={itemVariants}
          className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-4"
        >
          Building modern, scalable web applications with the MERN stack.
          Turning ideas into reality.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-gray-400 mb-6"
        >
          I’m a passionate MERN stack developer with expertise in React,
          Node.js, Express.js, and MongoDB. I create functional, intuitive,
          and responsive web applications. My mission is to deliver clean,
          efficient, and maintainable software.
        </motion.p>

        {/* Skill Icons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-6 mb-6 text-3xl sm:text-4xl text-indigo-500"
        >
          <SkillIcon icon={<FaReact />} name="React" />
          <SkillIcon icon={<SiExpress />} name="Express.js" />
          <SkillIcon icon={<FaNodeJs />} name="Node.js" />
          <SkillIcon icon={<SiMongodb />} name="MongoDB" />
          <SkillIcon icon={<FaDatabase />} name="Databases" />
        </motion.div>

        {/* Achievements */}
        <motion.ul
          variants={itemVariants}
          className="space-y-2 mb-6 text-gray-400 text-sm sm:text-base"
        >
          <li>🚀 Built 15+ MERN applications</li>
          <li>💡 Experienced in REST APIs & GraphQL</li>
          <li>🌐 Deployed projects using Vercel & Netlify</li>
          <li>🔧 Skilled in performance optimization & responsive design</li>
        </motion.ul>

        {/* CTA Button */}
        <motion.a
          variants={itemVariants}
          href="https://drive.google.com/file/d/173rn7AgMwNY3jR7bl3kHbhw7KI5hJTDB/view"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-sm sm:text-base"
        >
          Resume
        </motion.a>
      </motion.div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-10 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-indigo-500 rounded-full opacity-20"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-4 sm:right-20 w-28 h-28 sm:w-48 sm:h-48 bg-pink-500 rounded-full opacity-20"
        animate={{ scale: [1, 1.3, 1], rotate: [0, -45, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </div>
  );
}

// Skill Icon Component
function SkillIcon({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, color: "#8b5cf6" }}
      className="flex flex-col items-center min-w-[60px]"
      title={name}
    >
      {icon}
      <span className="text-xs sm:text-sm text-gray-400 mt-1">{name}</span>
    </motion.div>
  );
}
