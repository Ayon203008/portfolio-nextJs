import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

export function Education() {
  const data = [
    {
      title: "2024 - Present",
      subtitle: "Bachelor's Degree",
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
            Currently pursuing Bachelors degree in CSE with focus on modern web technologies, 
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

  const mobileData = [
    {
      year: "2024 - Present",
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Hajee Mohammad Danesh Science & Technology University",
      type: "Bachelor's Degree",
      icon: <FaUniversity className="text-2xl" />,
      gradient: "from-purple-500 to-blue-500",
      description: "Currently pursuing Bachelor's degree in CSE with focus on modern web technologies, software architecture, and advanced programming concepts.",
      skills: ["Full Stack Development", "Data Structures", "Algorithms", "System Design"],
      skillColors: ["purple", "blue", "cyan", "indigo"]
    },
    {
      year: "2022 - 2023",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Gaibandha Govt College - Science Group",
      type: "College",
      icon: <FaGraduationCap className="text-2xl" />,
      gradient: "from-green-500 to-emerald-500",
      description: "Built strong analytical foundation with advanced mathematics and physics, while exploring programming fundamentals and computational thinking.",
      skills: ["Advanced Mathematics", "Physics", "Programming Logic", "Problem Solving"],
      skillColors: ["green", "emerald", "cyan", "lime"]
    },
    {
      year: "2019 - 2021",
      degree: "Secondary School Certificate (SSC)",
      institution: "Ahmmaduddin Shah Shishu Niketan School and College",
      type: "School",
      icon: <FaSchool className="text-2xl" />,
      gradient: "from-pink-500 to-rose-500",
      description: "Developed foundational interest in technology and programming, participated in science fairs and coding competitions, establishing the groundwork for computer science journey.",
      skills: ["Computer Science", "Mathematics", "Science Projects", "Tech Events"],
      skillColors: ["pink", "rose", "orange", "red"]
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-neutral-950">
      {/* Desktop/Tablet View - Timeline */}
      <div className="hidden md:block">
        <Timeline data={data} />
      </div>

      {/* Mobile View - Card Stack */}
      <div className="md:hidden px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Education Journey
        </h2>
        
        <div className="space-y-6">
          {mobileData.map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-5 border border-neutral-700/50 shadow-xl overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient}`} />
              
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg`}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      {item.type}
                    </span>
                    <span className="text-xs text-neutral-500">•</span>
                    <span className="text-xs font-medium text-neutral-400">
                      {item.year}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent leading-tight`}>
                    {item.degree}
                  </h3>
                  <p className="text-sm text-neutral-300 mt-1 leading-snug">
                    {item.institution}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 bg-${item.skillColors[idx]}-500/20 text-${item.skillColors[idx]}-300 rounded-full text-xs border border-${item.skillColors[idx]}-500/30 font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r ${item.gradient} opacity-30`} />
            </div>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 rounded-full border border-neutral-800">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-neutral-400">Currently Studying</span>
          </div>
        </div>
      </div>
    </div>
  );
}