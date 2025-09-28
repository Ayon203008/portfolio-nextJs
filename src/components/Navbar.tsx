"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string>("home");

  const sections = ["home", "about", "skills", "projects", "education", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-4xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {sections.map((section) => (
          <MenuItem
            key={section}
            setActive={setActive}
            active={active}
            item={section.charAt(0).toUpperCase() + section.slice(1)}
            onClick={() => handleScrollTo(section)}
          />
        ))}
      </Menu>
    </div>
  );
}
