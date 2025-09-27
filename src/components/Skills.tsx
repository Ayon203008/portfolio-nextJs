import { HoverEffect } from "./ui/card-hover-effect";
import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
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
    icon: <SiMongodb className="text-green-500 text-4xl" />,
  },
  {
    title: "Express.js",
    description:
      "A minimal and flexible Node.js web application framework for building robust APIs and web apps.",
    link: "https://expressjs.com/",
    icon: <SiExpress className="text-gray-500 text-4xl" />,
  },
  {
    title: "React.js",
    description:
      "A declarative, component-based JavaScript library for building fast and interactive user interfaces.",
    link: "https://reactjs.org/",
    icon: <FaReact className="text-blue-400 text-4xl" />,
  },
  {
    title: "Node.js",
    description:
      "A JavaScript runtime built on Chrome's V8 engine for scalable server-side scripting.",
    link: "https://nodejs.org/",
    icon: <FaNodeJs className="text-green-600 text-4xl" />,
  },
  {
    title: "REST API Development",
    description:
      "Design and implement robust REST APIs for communication between client and server using Express and Node.js.",
    link: "#",
    icon: <FaDatabase className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Fullstack Web Development",
    description:
      "Building complete web applications using MongoDB, Express, React, and Node.js with scalability and performance in mind.",
    link: "#",
    icon: <FaReact className="text-cyan-400 text-4xl" />,
  },
];
