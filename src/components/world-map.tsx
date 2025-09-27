"use client";

import { WorldMap } from "./ui/world-map";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

export function WorldMapDemo() {
  const { theme } = useTheme();

  const dots = [
 
    { start: { lat: 23.8103, lng: 90.4125 }, end: { lat: 35.8617, lng: 104.1954 } }, // Dhaka → China
    { start: { lat: 35.8617, lng: 104.1954 }, end: { lat: 20.5937, lng: 78.9629 } }, // China → India
    { start: { lat: 20.5937, lng: 78.9629 }, end: { lat: 61.5240, lng: 105.3188 } }, // India → Russia (Asia part)

    { start: { lat: 61.5240, lng: 105.3188 }, end: { lat: 55.7558, lng: 37.6173 } }, // Russia → Russia (Europe)
    { start: { lat: 55.7558, lng: 37.6173 }, end: { lat: 51.1657, lng: 10.4515 } },  // Russia → Germany
    { start: { lat: 51.1657, lng: 10.4515 }, end: { lat: 46.2276, lng: 2.2137 } },   // Germany → France

    { start: { lat: 46.2276, lng: 2.2137 }, end: { lat: 28.0339, lng: 1.6596 } },    // France → Algeria
    { start: { lat: 28.0339, lng: 1.6596 }, end: { lat: -4.0383, lng: 21.7587 } },   // Algeria → DRC
    { start: { lat: -4.0383, lng: 21.7587 }, end: { lat: 12.8628, lng: 30.2176 } },  // DRC → Sudan

    { start: { lat: 12.8628, lng: 30.2176 }, end: { lat: 37.0902, lng: -95.7129 } }, // Sudan → USA
    { start: { lat: 37.0902, lng: -95.7129 }, end: { lat: 56.1304, lng: -106.3468 } },// USA → Canada
    { start: { lat: 56.1304, lng: -106.3468 }, end: { lat: 23.6345, lng: -102.5528 } },// Canada → Mexico

    { start: { lat: 23.6345, lng: -102.5528 }, end: { lat: -14.2350, lng: -51.9253 } },// Mexico → Brazil
    { start: { lat: -14.2350, lng: -51.9253 }, end: { lat: -38.4161, lng: -63.6167 } },// Brazil → Argentina
    { start: { lat: -38.4161, lng: -63.6167 }, end: { lat: -9.189967, lng: -75.015152 } },// Argentina → Peru

    { start: { lat: -9.189967, lng: -75.015152 }, end: { lat: -25.2744, lng: 133.7751 } }, // Peru → Australia
    { start: { lat: -25.2744, lng: 133.7751 }, end: { lat: -6.314993, lng: 143.95555 } }, // Australia → PNG
    { start: { lat: -6.314993, lng: 143.95555 }, end: { lat: -40.9006, lng: 174.8860 } }, // PNG → New Zealand
  ];

  const lineColor = theme === "dark" ? "url(#gradient-dark)" : "url(#gradient-light)";

  return (
    <div className="py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Connect me from anywhere
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          From Dhaka to the world's largest countries — connecting continents.
        </p>
      </div>

      <WorldMap dots={dots} lineColor={lineColor} />

      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient-dark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0080" />
            <stop offset="50%" stopColor="#7928ca" />
            <stop offset="100%" stopColor="#00f" />
          </linearGradient>
          <linearGradient id="gradient-light" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f" />
            <stop offset="50%" stopColor="#0ff" />
            <stop offset="100%" stopColor="#0f0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
