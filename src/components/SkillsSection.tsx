"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Postman"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center gap-3">
            <Code2 className="w-8 h-8 text-indigo-400" />
            Skills
          </h2>
          <div className="flex-1 h-px bg-slate-800 ml-4 max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((categoryGroup, index) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors"
            >
              <h3 className="text-xl font-semibold text-slate-200 mb-6 pb-4 border-b border-slate-700/50">
                {categoryGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categoryGroup.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-900 text-slate-300 rounded-lg text-sm font-medium border border-slate-800 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
