"use client";

import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { motion } from "framer-motion";

export function ConnectMe() {
  return (
    <section className="relative w-full bg-black/[0.96] text-white py-20 md:py-28 overflow-hidden">
      {/* Spotlight Background */}
      <Spotlight />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-200">
              Let&apos;s Talk
            </h3>
            <p className="text-neutral-400 leading-relaxed max-w-md">
              I&apos;m currently available for new projects. Feel free to send me a
              message about anything you want me to work on. <br />
              You can contact me anytime.
            </p>

            <div className="pt-4 space-y-2 text-neutral-300">
              <p>
                📧 <span className="font-medium text-white">abidayon2025@gmail.com</span>
              </p>
              <p>
                📱 <span className="font-medium text-white">+8801782431428</span>
              </p>
              <p>
                📍 <span className="font-medium text-white">Rangpur, Bangladesh</span>
              </p>
            </div>
          </motion.div>

          {/* Right Form Section */}
          <motion.form
            initial={{ opacity: 0, x: 100 }} // Start from right
            animate={{ opacity: 1, x: 0 }} // Slide to original position
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-neutral-900/80 border border-neutral-800 shadow-2xl rounded-2xl p-8 space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-neutral-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-neutral-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-neutral-300 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-xl text-white font-semibold shadow-lg"
            >
              Send Message 🚀
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
