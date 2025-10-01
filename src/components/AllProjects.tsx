"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import Image from "next/image";

export function AllProjects() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
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
                  height={1000}
                  width={1000}
                  className="rounded-lg mb-6 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Modern React App",
    description: (
      <>
        <p>
          Built a fully responsive and scalable React application with modern
          hooks, context API, and TailwindCSS for styling.
        </p>
        <p>
          Features include authentication, state management, and REST API
          integration for real-world use cases.
        </p>
      </>
    ),
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Product Launch Platform",
    description: (
      <>
        <p>
          A platform designed for showcasing and launching new products with
          marketing automation and user engagement tracking.
        </p>
        <p>
          Integrated analytics dashboards and dynamic landing pages powered by
          Next.js for SEO optimization.
        </p>
      </>
    ),
    badge: "Next.js",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Changelog & Docs Site",
    description: (
      <>
        <p>
          Developed a documentation site with a live changelog, dark/light mode,
          and markdown support using MDX.
        </p>
        <p>
          Deployed with Vercel for blazing-fast performance and edge caching.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200",
  },
];
