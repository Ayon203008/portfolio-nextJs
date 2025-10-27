"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import Image from "next/image";

export function AllProjects() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <h2 className="mb-10 text-center pb-5 text-4xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-600 bg-clip-text text-transparent">
          My Projects
        </h2>

        {projects.map((item, index) => (
          <div
            key={`content-${index}`}
            className="mb-10 p-6 bg-neutral-900 rounded-lg shadow-lg"
          >
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-2xl font-semibold mb-4 text-white")}>{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="project thumbnail"
                  height={600}
                  width={1000}
                  className="rounded-lg mb-6 object-cover"
                />
              )}
              {item.description}
            </div>

            <div className="mt-4 flex gap-4">
              {item.live && (
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Live Link
                </a>
              )}
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                >
                  GitHub Link
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const projects = [
  {
    title: "TrustZen",
    description: (
      <>
        <p>
          TrustZen is a service marketplace where users can explore various local services, read and post reviews,
          and book trustworthy providers easily.
        </p>
        <p>
          <strong>Main Features:</strong> Service browsing, user dashboard, add services, review and update reviews.
        </p>
        <p>
          <strong>Challenges:</strong> Implementing secure authentication, dashboard functionality, and smooth UX.
        </p>
        <p>
          <strong>Future Plans:</strong> Admin routes & authorization, enhanced functionality, and UI improvements.
        </p>
        <p>
          <strong>Technology Used:</strong> React.js, Firebase, TailwindCSS, Express.js, Node.js, MongoDB, Framer Motion.
        </p>
      </>
    ),
    badge: "React, MongoDB, Tailwind CSS, Firebase, Express.js, Node.js, Framer Motion",
    image: "https://i.postimg.cc/MG8S8pgH/Trustzen.png",
    live: "https://trustzen-8e0c3.web.app/",
    github: "https://github.com/Ayon203008/TrustZen-client-update-",
  },
  {
    title: "Soulmate",
    description: (
      <>
        <p>
          Soulmate is a matrimony platform helping users find their perfect life partner through detailed biodata
          browsing and profile features.
        </p>
        <p>
          <strong>Main Features:</strong> Profile listing, biodata upload, favorite system, admin dashboard to manage users
          and premium requests.
        </p>
        <p>
          <strong>Challenges:</strong> Building a fully functional admin panel with role-based management.
        </p>
        <p>
          <strong>Future Plans:</strong> UI enhancements, increased responsiveness, and new matchmaking functionalities.
        </p>
        <p>
          <strong>Technology Used:</strong> React.js, Firebase, TailwindCSS, Express.js, Node.js, MongoDB.
        </p>
      </>
    ),
    badge: "React, MongoDB, Tailwind CSS, Node.js, Express.js, Firebase",
    image: "https://i.postimg.cc/nhVHsz3p/Screenshot-2025-10-27-223814.png",
    live: "https://last-try-f6ea0.web.app/",
    github: "https://github.com/Ayon203008/Soulmate_client-update-",
  },
];
