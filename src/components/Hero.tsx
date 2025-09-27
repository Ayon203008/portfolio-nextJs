import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { FloatingDockDemo } from "./FloatingBar";

export function SpotlightPreview() {
  return (
    <div className="relative flex h-auto md:h-[42rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased items-center justify-center pt-32 md:pt-40 pb-20 md:pb-0">
      {/* Background Grid */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-40" fill="white" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight uppercase">
              Abid Hasan Ayon
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Obsessed with{" "}
              <span className="font-semibold text-white">MERN stack development</span>, improving 1% every day.
              I believe in thinking differently and love taking on tough challenges. Passionate about delivering{" "}
              <span className="text-white">phenomenal websites</span> to customers.
            </p>

            {/* Floating Dock Button / Links */}
            <div className="pt-4">
              <FloatingDockDemo />
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="https://i.ibb.co.com/Kzs6cTsq/profile.jpg" // 👉 Replace with your image link
              alt="Abid Hasan Ayon"
              width={420}
              height={420}
              className="rounded-2xl shadow-2xl border border-neutral-800 object-cover max-w-[300px] sm:max-w-[350px] md:max-w-[400px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
