"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  text: string;
  href: string;
}

export function Footer() {
  const navLinks: NavLink[] = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/Ayon203008",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/abidayon/",
      label: "LinkedIn",
    },
    {
      icon: <FaFacebook size={20} />,
      href: "https://facebook.com/",
      label: "Facebook",
    },
    {
      icon: <FaTwitter size={20} />,
      href: "https://twitter.com/",
      label: "Twitter",
    },
  ];

  const contactInfo: ContactInfo[] = [
    {
      icon: <HiMail className="w-4 h-4" />,
      text: "abidayon.tech@gmail.com",
      href: "mailto:abidayon.tech@gmail.com",
    },
    {
      icon: <HiPhone className="w-4 h-4" />,
      text: "+880 1782-431428",
      href: "tel:+8801782431428",
    },
    {
      icon: <HiLocationMarker className="w-4 h-4" />,
      text: "Rangpur, Bangladesh",
      href: "#",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-gradient-to-br from-gray-950 via-black to-gray-950 border-t border-neutral-800/50">
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Abid Hasan Ayon
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              Full-stack MERN developer passionate about building scalable web
              applications and solving complex problems.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative p-2.5 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:bg-neutral-800 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <span className="text-neutral-400 group-hover:text-cyan-400 transition-colors duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-cyan-400 hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.text}>
                  <a
                    href={info.href}
                    className="flex items-center gap-3 text-sm text-neutral-400 hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <span className="text-cyan-500 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </span>
                    <span className="text-xs sm:text-sm">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter or CTA */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Stay Connected
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Open to new opportunities and collaborations. Let&apos;s build
              something amazing together!
            </p>
            <a
              href="#contact"
              className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg shadow-lg transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800/50" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-sm text-neutral-500">
          <p className="text-center sm:text-left">
            © {currentYear} Abid Hasan Ayon. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-center sm:text-right">
            <span>Built with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>using React & TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}