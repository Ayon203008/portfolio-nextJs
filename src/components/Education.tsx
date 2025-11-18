import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

export function Education() {
  const data = [
    {
      title: "2024 - Present",
      // এখানে 's কে &apos; দিয়ে পরিবর্তন করা হয়েছে
      subtitle: "Bachelor&apos;s Degree",
      icon: <FaUniversity className="text-xl" />,
      gradient: "from-purple-500 to-blue-500",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              B.Sc. in Computer Science & Engineering
            </h3>
            <p className="text-neutral-300 font-medium mt-1">
              Hajee Mohammad Danesh Science & Technology University
            </p>
          </div>
          <p className="text-neutral-400 leading-relaxed">
       
            Currently pursuing Bachelor&apos;s degree in CSE with focus on modern web technologies, 
            software architecture, and advanced programming concepts.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
              Full Stack Development
            </span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
              Data Structures
            </span>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
              Algorithms
            </span>
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30">
              System Design
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      subtitle: "College",
      icon: <FaGraduationCap className="text-xl" />,
      gradient: "from-green-500 to-emerald-500",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-neutral-300 font-medium mt-1">
              Gaibandha Govt College - Science Group
            </p>
          </div>
          <p className="text-neutral-400 leading-relaxed">
            Built strong analytical foundation with advanced mathematics and physics, 
            while exploring programming fundamentals and computational thinking.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
              Advanced Mathematics
            </span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
              Physics
            </span>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
              Programming Logic
            </span>
            <span className="px-3 py-1 bg-lime-500/20 text-lime-300 rounded-full text-sm border border-lime-500/30">
              Problem Solving
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2021",
      subtitle: "School",
      icon: <FaSchool className="text-xl" />,
      gradient: "from-pink-500 to-rose-500",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Secondary School Certificate (SSC)
            </h3>
            <p className="text-neutral-300 font-medium mt-1">
              Ahmmaduddin Shah Shishu Niketan School and College
            </p>
          </div>
          <p className="text-neutral-400 leading-relaxed">
            Developed foundational interest in technology and programming, participated in 
            science fairs and coding competitions, establishing the groundwork for computer science journey.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30">
              Computer Science
            </span>
            <span className="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-full text-sm border border-rose-500/30">
              Mathematics
            </span>
            <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">
              Science Projects
            </span>
            <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm border border-red-500/30">
              Tech Events
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-neutral-950">
      <Timeline data={data} />
    </div>
  );
}