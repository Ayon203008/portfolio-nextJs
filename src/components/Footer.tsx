"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
            Abid Hasan Ayon
          </h2>

          {/* Navigation Links */}
          <ul className="flex gap-6 text-sm font-medium text-neutral-400">
            <li>
              <a href="#about" className="hover:text-indigo-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-indigo-500 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-indigo-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-500 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 text-neutral-400">
            <a
              href="https://github.com/Ayon203008"
              target="_blank"
              className="hover:text-indigo-500 transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abidayon/"
              target="_blank"
              className="hover:text-indigo-500 transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              className="hover:text-indigo-500 transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="hover:text-indigo-500 transition"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-neutral-800" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Abid Hasan Ayon. All rights reserved.</p>
          <p className="hover:text-indigo-500 transition cursor-pointer">
            Designed with ❤️ using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
