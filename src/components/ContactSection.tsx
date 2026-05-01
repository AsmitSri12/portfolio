"use client";

import { motion } from "motion/react";
import { Mail, Send, Linkedin, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const contactTypes = [
  { id: "hiring", label: "Hiring / Job", icon: "💼" },
  { id: "freelance", label: "Freelance Project", icon: "🚀" },
  { id: "collab", label: "Collaboration", icon: "🤝" },
];

export default function ContactSection() {
  const [selectedType, setSelectedType] = useState("hiring");

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new opportunities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-slate-100 mb-6"
          >
            Let&apos;s Work Together
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Whether you&apos;re hiring, building a product, or exploring an idea — I&apos;d love to hear about it.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <Link
                  href="mailto:asmitsri2182@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-800/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Email Me</p>
                    <p className="text-slate-200 group-hover:text-indigo-400 transition-colors">asmitsri2182@gmail.com</p>
                  </div>
                </Link>

                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-800/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">LinkedIn</p>
                    <p className="text-slate-200 group-hover:text-indigo-400 transition-colors">Connect with me</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 shadow-2xl relative"
          >
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-3">
                {contactTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-3 rounded-xl border text-sm font-medium transition-all duration-300 flex flex-col items-center gap-2 ${
                      selectedType === type.id
                        ? "bg-indigo-500/10 border-indigo-500/50 text-indigo-400 shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]"
                        : "bg-slate-900/50 border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-300"
                    }`}
                  >
                    <span className="text-xl">{type.icon}</span>
                    {type.label}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Your Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Your Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none"
                  />
                </div>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-indigo-500/20 active:scale-[0.98]">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
