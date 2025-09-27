"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";
import Image from "next/image";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export function WorldMap({
  dots = [],
  lineColor = "#ff6ec7", // Stylish color
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 200, grid: "diagonal" }); // zoom-out by increasing height

  const { theme } = useTheme();

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#FFFFFF20", // Light dots in dark mode
    shape: "circle",
    backgroundColor: "#0a0a0a", // dark background
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (1600 / 360); // adjust for zoom-out
    const y = (90 - lat) * (800 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] rounded-lg relative font-sans overflow-hidden bg-black">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full object-cover pointer-events-none select-none"
        alt="world map"
        height="800"
        width="1600"
        draggable={false}
      />

      <svg
        ref={svgRef}
        viewBox="0 0 1600 800" // Zoom-out effect
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient-dark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6ec7" />
            <stop offset="50%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#a29bfe" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);

          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient-dark)"
                strokeWidth="1.5" // thinner line
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
              />
            </g>
          );
        })}

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);

          return (
            <g key={`points-group-${i}`}>
              {[startPoint, endPoint].map((point, idx) => (
                <g key={idx}>
                  <circle cx={point.x} cy={point.y} r="3" fill={lineColor} />
                  <circle cx={point.x} cy={point.y} r="3" fill={lineColor} opacity="0.5">
                    <animate
                      attributeName="r"
                      from="3"
                      to="8"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
