"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
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

      // Highlight active section with optimized logic
      const sections = navLinks.map((link) => ({
        id: link.href.replace("#", ""),
        element: document.getElementById(link.href.replace("#", ""))
      })).filter(s => s.element);

      const scrollPos = window.scrollY + 100;
      
      for (const { id, element } of sections) {
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    handleScroll(); // Initial call
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking links
  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    
    // Smooth scroll with offset for fixed navbar
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, []);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navbarAnimation = useMemo(() => ({
    paddingTop: isScrolled ? "0.5rem" : "1rem",
    paddingBottom: isScrolled ? "0.5rem" : "1rem",
    backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.8)" : "rgba(10, 10, 10, 0.6)",
  }), [isScrolled]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <motion.div
        animate={navbarAnimation}
        transition={{ duration: 0.3 }}
        className="relative backdrop-blur-xl border-b border-neutral-800/50"
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900/5 via-transparent to-cyan-900/5" />

        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
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
                onClick={(e) => handleLinkClick(e, link.href)}
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
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="hidden md:block px-4 lg:px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-neutral-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <>
              {/* Backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                style={{ top: "var(--navbar-height, 64px)" }}
                onClick={toggleMenu}
              />
              
              {/* Mobile menu panel */}
              <motion.nav
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 h-screen w-[280px] bg-black/95 backdrop-blur-xl border-l border-neutral-800/50 md:hidden overflow-y-auto"
              >
                {/* Close button in mobile menu */}
                <div className="flex justify-end p-4">
                  <button
                    onClick={toggleMenu}
                    className="p-2 text-neutral-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col space-y-1 px-4 pb-6">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                        activeSection === link.href.replace("#", "")
                          ? "text-white bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30"
                          : "text-neutral-300 hover:text-white hover:bg-neutral-800"
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  
                  {/* Mobile CTA */}
                  <motion.a
                    href="#contact"
                    onClick={(e) => handleLinkClick(e, "#contact")}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="mt-4 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center text-base font-semibold rounded-lg shadow-lg hover:from-cyan-600 hover:to-blue-700 active:scale-95 transition-all duration-300"
                  >
                    Hire Me
                  </motion.a>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}