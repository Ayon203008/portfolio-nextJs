"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import Image from "next/image";

export function AllProjects() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {projects.map((item, index) => (
          <div
            key={`content-${index}`}
            className="mb-10 p-6 bg-neutral-900 rounded-lg shadow-lg"
          >
            {/* Badge */}
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            {/* Title */}
            <p className={twMerge("text-2xl font-semibold mb-4 text-white")}>
              {item.title}
            </p>

            {/* Description + Image */}
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

            {/* Buttons */}
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
    title: "UserEcho",
    description: (
      <>
        <p>
          UserEcho is a convenient platform where users can easily find and
          book reliable services tailored to their needs.
        </p>
        <p>
          <strong>Challenges:</strong> Ensuring smooth UX, reliable providers,
          secure payments, and real-time availability.
        </p>
        <p>
          <strong>Future Plans:</strong> Build a mobile app, add reviews, use AI
          recommendations, expand services, and enable live chat.
        </p>
        <p>
          <strong>Technology Used:</strong> React Js, MongoDB, Tailwind CSS,
          Express Js, DaisyUI
        </p>
      </>
    ),
    badge: "React, MongoDB, Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1200",
    live: "https://userecho.vercel.app/",
    github: "https://github.com/Ayon203008/userecho",
  },
  {
    title: "GreenNest",
    description: (
      <>
        <p>
          GreenNest connects you with skilled gardeners to keep your green
          space thriving.
        </p>
        <p>
          <strong>Challenges:</strong> Designing a user-friendly platform with
          secure data handling and payments.
        </p>
        <p>
          <strong>Future Plans:</strong> Mobile app, reviews, AI matching,
          subscriptions, and expanded service areas.
        </p>
        <p>
          <strong>Technology Used:</strong> React Js, MongoDB, Tailwind CSS,
          Express Js, DaisyUI
        </p>
      </>
    ),
    badge: "React, MongoDB, Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
    live: "https://greennest.vercel.app/",
    github: "https://github.com/Ayon203008/greennest",
  },
];
