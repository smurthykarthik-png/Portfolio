import React from 'react';
import {
  Cpu,
  ArrowUp,
  Linkedin,
  Github,
  Mail,
  Phone,
  Heart
} from 'lucide-react';
import { personalInfo } from '../data/karthikData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800/80 py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Cpu className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="font-bold text-base text-zinc-100">
                {personalInfo.name}
              </div>
              <div className="text-[11px] font-mono text-zinc-400">
                {personalInfo.title} • {personalInfo.location}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-200 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-[11px] font-mono">Back to top</span>
          </button>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All technical rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Electronics & Communication Engineering</span>
            <span>•</span>
            <span className="text-emerald-400/90">German Language A1 → B2 Trajectory</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
