"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact Me", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Detect scroll for shrinking effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Highlight active section
      const sections = navLinks.map((link) =>
        document.querySelector(link.href) as HTMLElement
      );
      const scrollPos = window.scrollY + 200; // offset
      for (const sec of sections) {
        if (sec && scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
          setActiveSection(sec.id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <motion.div
        animate={{
          paddingTop: isScrolled ? "0.5rem" : "1rem",
          paddingBottom: isScrolled ? "0.5rem" : "1rem",
          backgroundColor: isScrolled
            ? "rgba(10,10,10,0.75)"
            : "rgba(10,10,10,0.55)",
          boxShadow: isScrolled
            ? "0 4px 20px rgba(0,0,0,0.3)"
            : "0 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3 }}
        className="relative backdrop-blur-lg border-b border-neutral-800"
      >
        <div className="absolute inset-0 -z-10 opacity-30">
          <BackgroundBeams />
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <Link
            href="#home"
            className="text-2xl font-extrabold bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent tracking-tight"
          >
            MyPortfolio
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-lg font-medium transition group ${
                  activeSection === link.href.replace("#", "")
                    ? "text-white"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-teal-400 to-indigo-400 transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-200 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex flex-col items-center space-y-6 py-6 bg-neutral-950/90 backdrop-blur-lg border-t border-neutral-800"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium ${
                    activeSection === link.href.replace("#", "")
                      ? "text-white font-semibold"
                      : "text-neutral-300 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
