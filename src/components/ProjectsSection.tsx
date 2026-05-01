"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const projectsData = [
  {
    title: "Backend Ledger (Banking System)",
    description: "A robust backend system for banking operations. Handles secure transactions, user accounts, and ledger maintenance with a focus on reliability and data integrity.",
    tech: ["Node.js", "Express", "REST API", "Database"],
    github: "https://github.com/AsmitSri12/Backend-Ledger-main",
    demo: "https://backend-ledger-main-cyvs.vercel.app",
  },
  {
    title: "Campgrounds",
    description: "A full-stack web application allowing users to discover, create, and review campgrounds. Features user authentication, interactive maps, and image uploads.",
    tech: ["Node.js", "Express", "MongoDB", "Web Technologies"],
    github: "https://github.com/AsmitSri12/campgrounds",
    demo: "https://campgrounds-ihao.onrender.com/",
  },
  {
    title: "Diabetes Prediction App",
    description: "A Federated Learning-based machine learning application to predict diabetes risk. Built with a scalable architecture separating the machine learning backend and user interface.",
    tech: ["PyTorch", "Python", "Next.js", "Machine Learning"],
    github: "https://github.com/AsmitSri12/diabetes-prediction-app",
    demo: "https://fl-diabetes-api.onrender.com",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center gap-3">
            <FolderGit2 className="w-8 h-8 text-indigo-400" />
            Featured Projects
          </h2>
          <div className="flex-1 h-px bg-slate-800 ml-4 max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-800/40 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 border border-slate-700/50 hover:border-indigo-500/30 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <FolderGit2 className="w-10 h-10 text-indigo-400" />
                <div className="flex gap-4">
                  <Link href={project.github} target="_blank" className="text-slate-400 hover:text-indigo-400 transition-colors">
                    <FaGithub className="w-6 h-6" />
                  </Link>
                  <Link href={project.demo} target="_blank" className="text-slate-400 hover:text-indigo-400 transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </Link>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-200 mb-4 group-hover:text-indigo-300 transition-colors">
                <Link href={project.demo} target="_blank">
                  {project.title}
                </Link>
              </h3>
              
              <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-sm font-medium text-slate-500">
                    {tech}
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
