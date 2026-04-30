"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Senior Full Stack Developer",
    company: "TechNova Solutions",
    duration: "2021 - Present",
    description: [
      "Led the development of a microservices-based platform, improving system scalability by 40%.",
      "Mentored junior developers and established CI/CD pipelines using GitHub Actions.",
      "Optimized frontend performance, achieving a Lighthouse score of 95+ across all core pages."
    ],
  },
  {
    role: "Software Engineer",
    company: "Innova Web Agency",
    duration: "2019 - 2021",
    description: [
      "Developed and maintained robust client-facing web applications using React and Node.js.",
      "Collaborated with UX/UI designers to implement responsive, pixel-perfect interfaces.",
      "Integrated third-party APIs and payment gateways, enhancing overall product functionality."
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "StartUp Inc.",
    duration: "2018 - 2019",
    description: [
      "Assisted in rebuilding the legacy company website using modern web technologies.",
      "Implemented accessibility standards to ensure WCAG compliance.",
      "Participated in agile ceremonies and code reviews."
    ],
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-slate-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-indigo-400" />
            Experience
          </h2>
          <div className="flex-1 h-px bg-slate-800 ml-4 max-w-xs" />
        </motion.div>

        <div className="space-y-12">
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 md:col-span-1 md:text-right mt-1">
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                    {job.duration}
                  </span>
                </div>
                
                <div className="md:col-span-3 relative">
                  {/* Timeline dot (Mobile) */}
                  <div className="absolute -left-10 top-2 h-4 w-4 rounded-full bg-slate-800 border-2 border-indigo-500 md:hidden" />
                  
                  {/* Timeline dot (Desktop) - Optional, complex to align perfectly without full timeline line, keeping it simple */}

                  <h3 className="text-xl font-bold text-slate-200 mb-1">
                    {job.role}
                  </h3>
                  <h4 className="text-lg font-medium text-indigo-400 mb-4">
                    {job.company}
                  </h4>
                  
                  <ul className="space-y-3">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-slate-400 flex gap-3">
                        <span className="text-indigo-500 mt-1.5 shrink-0">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
