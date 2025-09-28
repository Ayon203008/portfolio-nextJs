"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function TabsDemo() {
  const tabs = [
    {
      title: "UserEcho",
      value: "userecho",
      content: (
        <ProjectContent
          title="UserEcho"
          image="https://i.ibb.co.com/dwTQj0c4/Grand-Theft-Auto-IV-cover.jpg"
          desc="UserEcho is a convenient platform where users can easily find and book reliable services tailored to their needs."
          challenges="Ensuring smooth UX, reliable providers, secure payments, and real-time availability."
          future="Build a mobile app, add reviews, use AI recommendations, expand services, and enable live chat."
          tech={["React Js", "MongoDB", "Tailwind CSS", "Express Js", "DaisyUI"]}
          live="https://userecho.vercel.app/"
          github="https://github.com/Ayon203008/userecho"
          bgGradient="from-indigo-900 via-zinc-900 to-black"
        />
      ),
    },
    {
      title: "GreenNest",
      value: "greennest",
      content: (
        <ProjectContent
          title="GreenNest"
          image="https://i.ibb.co.com/ksqJF1Jn/Grand-Theft-Auto-V.png"
          desc="GreenNest connects you with skilled gardeners to keep your green space thriving."
          challenges="Designing a user-friendly platform with secure data handling and payments."
          future="Mobile app, reviews, AI matching, subscriptions, and expanded service areas."
          tech={["React Js", "MongoDB", "Tailwind CSS", "Express Js", "DaisyUI"]}
          live="https://greennest.vercel.app/"
          github="https://github.com/Ayon203008/greennest"
          bgGradient="from-green-900 via-zinc-900 to-black"
        />
      ),
    },
    {
      title: "SoulMate",
      value: "soulmate",
      content: (
        <ProjectContent
          title="SoulMate"
          image="https://i.ibb.co.com/RTym8QL9/MV5-BMTZl-Mm-Ix-M2-Et-N2-Y4-Zi00-M2-Zh-LTk3-Nzgt-Nj-Jm-ZTU0-MTQ3-Yjcw-Xk-Ey-Xk-Fqc-Gc-V1.jpg"
          desc="Soulmate is a trusted platform where users can find their perfect partner through personalized matchmaking."
          challenges="Ensuring privacy, accurate matches, profile trust, and engaging UX."
          future="Add AI partner recommendations, enable video calls, launch a mobile app."
          tech={["React Js", "MongoDB", "Tailwind CSS", "Express Js"]}
          live="https://soulmate.vercel.app/"
          github="https://github.com/Ayon203008/soulmate"
          bgGradient="from-pink-900 via-zinc-900 to-black"
        />
      ),
    },
  ];

  return (
    <div className="h-auto md:h-[45rem] pb-20 perspective relative flex flex-col max-w-6xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

function ProjectContent({
  title,
  image,
  desc,
  challenges,
  future,
  tech,
  live,
  github,
  bgGradient,
}: {
  title: string;
  image: string;
  desc: string;
  challenges: string;
  future: string;
  tech: string[];
  live: string;
  github: string;
  bgGradient: string;
}) {
  return (
    <div
      className={`relative w-full h-full rounded-2xl p-6 md:p-10 
      bg-gradient-to-br ${bgGradient}
      text-white flex flex-col md:flex-row gap-6 shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      {/* Left: Image */}
      <div className="relative w-full md:w-1/2 h-56 md:h-full rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Right: Details */}
      <div className="flex flex-col justify-between w-full md:w-1/2">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-3">{desc}</p>

          <p className="text-sm mb-2">
            <span className="font-semibold text-indigo-400">Challenges:</span> {challenges}
          </p>
          <p className="text-sm mb-4">
            <span className="font-semibold text-indigo-400">Future Plans:</span> {future}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t, i) => (
              <Badge key={i} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Button asChild size="sm" variant="outline">
            <a href={live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" /> Live
            </a>
          </Button>
          <Button asChild size="sm">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" /> GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
