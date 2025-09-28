import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

export function Education() {
  const data = [
    {
      title: "2024 - Present",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaUniversity className="text-indigo-500 text-xl md:text-2xl" />
            <h3 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100">
              B.Sc. in Computer Science & Engineering
            </h3>
          </div>
          <p className="text-sm md:text-base font-medium text-neutral-600 dark:text-neutral-300">
            Hajee Mohammad Danesh Science & Technology University
          </p>
          <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-400 leading-relaxed">
            Currently pursuing my Bachelor&apos;s degree in CSE, focusing on{" "}
            <span className="font-semibold text-white">
              MERN stack development
            </span>
            , algorithms, and problem-solving.
          </p>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaGraduationCap className="text-green-500 text-xl md:text-2xl" />
            <h3 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-100">
              Higher Secondary Certificate (HSC)
            </h3>
          </div>
          <p className="text-sm md:text-base font-medium text-neutral-600 dark:text-neutral-300">
            Gaibandha Govt College
          </p>
          <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-400 leading-relaxed">
            Specialized in Science group, developed a strong foundation in{" "}
            <span className="font-semibold text-white">
              mathematics and programming fundamentals
            </span>
            .
          </p>
        </div>
      ),
    },
    {
      title: "2019 - 2021",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaSchool className="text-pink-500 text-xl md:text-2xl" />
            <h3 className="text-2xl md:text-xl font-semibold text-neutral-800 dark:text-neutral-100">
              Secondary School Certificate (SSC)
            </h3>
          </div>
          <p className="text-sm md:text-base font-medium text-neutral-600 dark:text-neutral-300">
            Ahmmaduddin Shah Shishu Niketan School and College
          </p>
          <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-400 leading-relaxed">
            Focused on science subjects, participated in{" "}
            <span className="font-semibold text-white">
              coding competitions and tech-related events
            </span>
            .
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
