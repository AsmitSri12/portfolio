"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center gap-3">
            <User className="w-8 h-8 text-indigo-400" />
            About Me
          </h2>
          <div className="flex-1 h-px bg-slate-800 ml-4 max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-slate-400 text-lg leading-relaxed"
          >
            <p>
              Hello! I&apos;m Asmit, a software developer passionate about creating interactive and efficient digital solutions. My journey in tech started with curiosity about how things work on the web, leading me down the path of full-stack development.
            </p>
            <p>
              I specialize in building scalable web applications with modern technologies like React, Next.js, and Node.js. I thrive in bridging the gap between engineering and design—combining technical proficiency with a keen eye for aesthetics.
            </p>
            <p>
              When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source, and continuously refining my skills to stay ahead in the ever-evolving tech landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square max-w-sm mx-auto relative group">
              <div className="absolute inset-0 border-2 border-indigo-500 rounded-2xl translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="absolute inset-0 bg-slate-800 rounded-2xl overflow-hidden shadow-2xl relative z-10 flex items-center justify-center border border-slate-700">
                {/* Fallback avatar if no image provided */}
                <div className="text-slate-600">
                  <User className="w-32 h-32" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
