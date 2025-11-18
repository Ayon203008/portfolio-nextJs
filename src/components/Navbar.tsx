"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Highlight active section
      const sections = navLinks.map((link) =>
        document.querySelector(link.href) as HTMLElement | null
      );
      const scrollPos = window.scrollY + 200;
      
      for (const sec of sections) {
        if (
          sec &&
          scrollPos >= sec.offsetTop &&
          scrollPos < sec.offsetTop + sec.offsetHeight
        ) {
          setActiveSection(sec.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <motion.div
        animate={{
          paddingTop: isScrolled ? "0.5rem" : "1rem",
          paddingBottom: isScrolled ? "0.5rem" : "1rem",
          backgroundColor: isScrolled
            ? "rgba(10, 10, 10, 0.8)"
            : "rgba(10, 10, 10, 0.6)",
        }}
        transition={{ duration: 0.3 }}
        className="relative backdrop-blur-xl border-b border-neutral-800/50"
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900/5 via-transparent to-cyan-900/5" />

        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="#home"
            className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tight hover:opacity-80 transition-opacity duration-300"
          >
            Abid Hasan Ayon
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-colors duration-300 group ${
                  activeSection === link.href.replace("#", "")
                    ? "text-white"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <a
            href="#contact"
            className="hidden md:block px-4 lg:px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-200 hover:text-white focus:outline-none transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-neutral-800/50"
            >
              <div className="flex flex-col space-y-1 py-4 px-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-colors duration-300 ${
                      activeSection === link.href.replace("#", "")
                        ? "text-white bg-neutral-800"
                        : "text-neutral-300 hover:text-white hover:bg-neutral-900"
                    }`}
                    onClick={handleMobileMenuClick}
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* Mobile CTA */}
                <a
                  href="#contact"
                  className="mt-4 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center text-base font-semibold rounded-lg shadow-lg"
                  onClick={handleMobileMenuClick}
                >
                  Hire Me
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}