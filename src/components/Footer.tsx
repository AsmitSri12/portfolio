import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-xl font-bold text-slate-100 mb-6">Asmit Srivastava</h2>
        
        <div className="flex space-x-6 mb-8">
          <Link href="https://github.com/AsmitSri12" target="_blank" className="text-slate-400 hover:text-indigo-400 transition-colors">
            <FaGithub className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/asmit-srivastava-4a5011269/" target="_blank" className="text-slate-400 hover:text-indigo-400 transition-colors">
            <FaLinkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:asmitsri2182@gmail.com" className="text-slate-400 hover:text-indigo-400 transition-colors">
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        <p className="text-slate-500 text-sm text-center">
          &copy; {currentYear} Asmit Srivastava. All rights reserved. <br className="sm:hidden" />
          Built with Next.js, Tailwind CSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
