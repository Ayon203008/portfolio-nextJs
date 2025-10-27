"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { FaNodeJs, FaReact, FaFire } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs } from "react-icons/si";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-900/80 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            {item.icon && (
              <div className="flex justify-center mb-4 text-white">
                {item.icon}
              </div>
            )}
            <div className="text-center">
              <CardTitle>{item.title}</CardTitle>
            </div>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-neutral-900 border border-transparent group-hover:border-gray-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-white font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-white tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export function CardHoverEffectDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animation only once

  return (
    <div className="max-w-5xl lg:pt-40 mx-auto px-8" ref={ref}>
      {/* Animated Title: Scroll triggered */}
      {isInView && (
        <motion.h2
          className="mb-6 pb-5 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Proficiency
        </motion.h2>
      )}

      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "MongoDB",
    description:
      "A powerful, flexible NoSQL database for building scalable applications with dynamic schemas.",
    link: "https://www.mongodb.com/",
    icon: <SiMongodb className="text-green-500 text-5xl" />,
  },
  {
    title: "Express.js",
    description:
      "A minimal and flexible Node.js web application framework for building robust APIs and web apps.",
    link: "https://expressjs.com/",
    icon: <SiExpress className="text-gray-500 text-5xl" />,
  },
  {
    title: "React.js",
    description:
      "A declarative, component-based JavaScript library for building fast and interactive user interfaces.",
    link: "https://reactjs.org/",
    icon: <FaReact className="text-blue-400 text-5xl" />,
  },
  {
    title: "Node.js",
    description:
      "A JavaScript runtime built on Chrome's V8 engine for scalable server-side scripting.",
    link: "https://nodejs.org/",
    icon: <FaNodeJs className="text-green-600 text-5xl" />,
  },
  {
    title: "Next.js",
    description:
      "A React framework with hybrid static & server rendering, route pre-fetching, and incredible developer experience.",
    link: "https://nextjs.org/",
    icon: <SiNextdotjs className="text-white text-5xl" />,
  },
  {
    title: "Firebase",
    description:
      "A platform by Google offering hosting, authentication, real-time database, cloud functions, and more.",
    link: "https://firebase.google.com/",
    icon: <FaFire className="text-orange-500 text-5xl" />,
  },
];
