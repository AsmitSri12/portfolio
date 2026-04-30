"use client";

import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex justify-center items-center gap-3 mb-6">
            <Mail className="w-8 h-8 text-indigo-400" />
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Although I&apos;m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center px-8 py-4 border border-indigo-500/50 text-lg font-medium rounded-xl text-indigo-400 hover:bg-indigo-500/10 transition-colors"
          >
            Say Hello
            <Send className="ml-3 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
