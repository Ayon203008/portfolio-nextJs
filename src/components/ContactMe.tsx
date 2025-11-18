"use client";

import React, { useState } from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from 'emailjs-com';
import { Loader2, CheckCircle, AlertCircle, Send } from 'lucide-react';

type FormStatus = 'idle' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export function ConnectMe() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      await emailjs.send(
        'service_1cjtgky',
        'template_bs4puma',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Abidayon',
          reply_to: formData.email
        },
        'MWl00vPPx47k38-wK'
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');
      
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: "📧",
      label: "Email",
      value: "abidayon.tech@gmail.com",
      href: "mailto:abidayon.tech@gmail.com"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+8801782431428",
      href: "tel:+8801782431428"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Rangpur, Bangladesh",
      href: "#"
    }
  ];

  return (
    <section className="relative w-full bg-black text-white py-20 md:py-28 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <Spotlight />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black to-black" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Info Section - Simplified animations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                Let&apos;s Connect
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-200">
                Ready to Bring Your Ideas to Life
              </h3>
            </div>

            <p className="text-neutral-400 leading-relaxed text-base sm:text-lg max-w-lg">
              I&apos;m currently available for new projects and collaborations. Whether you have a specific project in mind or just want to explore possibilities, I&apos;d love to hear from you.
            </p>

            {/* Contact Info */}
            <div className="pt-6 space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800/50 transition-all duration-300 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-neutral-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Form Section - Simplified */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Form Background Effects */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20" />
            
            <form
              onSubmit={handleSubmit}
              className="relative bg-neutral-900/90 border border-neutral-800 shadow-2xl rounded-2xl p-6 sm:p-8 space-y-6 backdrop-blur-sm"
            >
              {/* Status Message */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center space-x-2 p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-medium">Message sent successfully!</span>
                  </motion.div>
                )}
                
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center space-x-2 p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-400 font-medium">Failed to send message. Please try again.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-300 mb-3">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 sm:py-4 rounded-xl bg-neutral-800/50 border border-neutral-700 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-300 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 sm:py-4 rounded-xl bg-neutral-800/50 border border-neutral-700 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-300 mb-3">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  required
                  className="w-full px-4 py-3 sm:py-4 rounded-xl bg-neutral-800/50 border border-neutral-700 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none transition-all duration-300"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 sm:py-4 px-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-xl text-white font-semibold shadow-lg relative overflow-hidden group"
              >
                <div className="relative z-10 flex items-center justify-center space-x-2">
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </div>
                
                {/* Button Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}