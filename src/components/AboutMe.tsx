"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center h-[50rem] w-full overflow-hidden px-6 lg:px-20">
      {/* Stylish Background Grid Pattern */}
      <div
        className={cn(
          "absolute inset-0 animate-pulse-slow",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Left: Profile Image */}
      <motion.div
        className="lg:w-1/2 flex justify-center mb-10 lg:mb-0 relative z-20"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="https://i.ibb.co.com/Kzs6cTsq/profile.jpg"
          alt="My Photo"
          className="w-80 h-80 rounded-xl shadow-2xl border-4 border-indigo-500 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>

      {/* Right: Content */}
      <motion.div
        className="lg:w-1/2 flex flex-col items-start text-left max-w-2xl relative z-20"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <h1 className="mb-4 text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h1>

        {/* Tagline */}
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
          Building modern, scalable web applications with the MERN stack.
          Turning ideas into reality.
        </p>

        {/* Short Bio */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          I’m a passionate MERN stack developer with expertise in React,
          Node.js, Express.js, and MongoDB. I create functional, intuitive, and
          responsive web applications. My mission is to deliver clean,
          efficient, and maintainable software.
        </p>

        {/* Skill Icons */}
        <motion.div
          className="flex gap-6 mb-6 text-4xl text-indigo-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <FaReact title="React" />
          <SiExpress title="Express.js" />
          <FaNodeJs title="Node.js" />
          <SiMongodb title="MongoDB" />
          <FaDatabase title="Databases" />
        </motion.div>

        {/* Achievements */}
        <motion.ul
          className="space-y-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <li>🚀 Built 15+ MERN applications</li>
          <li>💡 Experienced in REST APIs & GraphQL</li>
          <li>🌐 Deployed projects using Vercel & Netlify</li>
          <li>🔧 Skilled in performance optimization & responsive design</li>
        </motion.ul>

        {/* Call-to-Action */}
        <motion.a
          href="https://drive.google.com/file/d/173rn7AgMwNY3jR7bl3kHbhw7KI5hJTDB/view"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          Resume
        </motion.a>
      </motion.div>

      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-300 rounded-full opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink-300 rounded-full opacity-20 animate-pulse-slow"></div>
    </div>
  );
}
