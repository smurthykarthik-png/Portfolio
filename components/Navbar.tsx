import React, { useState } from 'react';
import {
  Cpu,
  FileText,
  Mail,
  Linkedin,
  Github,
  Menu,
  X,
  Phone,
  Terminal,
  ExternalLink,
  Languages,
  Check
} from 'lucide-react';
import { personalInfo } from '../data/karthikData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Hardware Lab', href: '#hardware-lab' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' }
  ];

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Current Status */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors shadow-sm">
                <Cpu className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg tracking-tight text-zinc-100 group-hover:text-emerald-400 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="text-[11px] font-mono text-zinc-400 hidden sm:block">
                  ECE • Embedded & Systems Engineer
                </span>
              </div>
            </a>

            {/* Target & Status Pill */}
            <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-zinc-800 text-[11px] text-zinc-400 font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Active @ TCS</span>
              <span className="text-zinc-600">•</span>
              <span className="inline-flex items-center gap-1 text-emerald-400/90 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                <span>🇩🇪</span> Target Germany (A1 → B2)
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-zinc-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/60 hover:border-zinc-600 text-xs font-medium flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
              title="Open Printable Resume"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume CV</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onOpenContact();
              }}
              className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center gap-1.5 transition-all shadow-sm hover:shadow-emerald-900/30 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1.5 rounded-lg bg-zinc-900 text-zinc-200 border border-zinc-800 text-xs font-medium flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-zinc-100 border border-zinc-800 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pb-2 border-b border-zinc-800/80">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>System Engineer @ TCS</span>
            <span>•</span>
            <span className="text-emerald-400">🇩🇪 German A1 Target B2</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md hover:bg-zinc-900 hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-800 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:text-zinc-100 flex items-center justify-center gap-2"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:text-zinc-100 flex items-center justify-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Karthik</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
