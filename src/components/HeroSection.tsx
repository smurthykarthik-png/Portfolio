import React, { useState } from 'react';
import {
  Cpu,
  Mail,
  Phone,
  Linkedin,
  Github,
  Check,
  Copy,
  FileText,
  ArrowRight,
  ShieldCheck,
  Terminal,
  Radio,
  Layers,
  MapPin,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/karthikData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onExploreProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onOpenContact,
  onExploreProjects
}) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-zinc-800/80 bg-zinc-950 overflow-hidden">
      
      {/* Background Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Tata Consultancy Services (TCS) • System Engineer</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <span className="text-base">🇩🇪</span>
            <span className="text-zinc-200">German Language: A1 (Targeting B2)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            <span>Bengaluru, India → Open to Germany Relocation</span>
          </div>
        </div>

        {/* Main Header & Name */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 block">
                Engineering Portfolio & Resume
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-zinc-100 tracking-tight leading-[1.05]">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-zinc-300 max-w-2xl leading-snug">
                Electronics & Communication Engineer bridging <span className="text-emerald-400">Embedded Systems</span>, <span className="text-cyan-400">VLSI Design</span>, and <span className="text-amber-400">Semiconductor Fabrication</span>.
              </p>
            </div>

            {/* Concise Summary Paragraph */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl font-normal">
              {personalInfo.summary}
            </p>

            {/* Direct Contact & Social Action Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              
              {/* Phone pill */}
              <div className="inline-flex items-center rounded-xl bg-zinc-900 border border-zinc-800 p-1 text-xs text-zinc-200">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-1.5 px-2.5 py-1 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-mono">{personalInfo.phone}</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
                  title="Copy Phone Number"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Email pill */}
              <div className="inline-flex items-center rounded-xl bg-zinc-900 border border-zinc-800 p-1 text-xs text-zinc-200">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1.5 px-2.5 py-1 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-mono">{personalInfo.email}</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
                  title="Copy Email Address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-200 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-mono">LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-200 hover:text-zinc-100 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span className="font-mono">GitHub</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>

            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreProjects}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md shadow-emerald-950/50 cursor-pointer"
              >
                <span>Explore Technical Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 text-xs sm:text-sm font-medium flex items-center gap-2 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>View / Print Resume</span>
              </button>

              <a
                href="#hardware-lab"
                className="px-4 py-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 text-zinc-400 hover:text-cyan-400 border border-zinc-800 text-xs sm:text-sm font-mono flex items-center gap-1.5 transition-colors"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Launch Interactive Lab</span>
              </a>
            </div>

          </div>

          {/* Right Column: Key Metric Tiles */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Engineering Profile
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Ready to Relocate
                </span>
              </div>

              {personalInfo.highlights.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-lg font-bold text-zinc-100">
                    {item.value}
                  </div>
                  <div className="text-xs text-zinc-400">
                    {item.sublabel}
                  </div>
                </div>
              ))}

              <div className="pt-3 border-t border-zinc-800">
                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Skill Assessments</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    LinkedIn Verified Badges in <strong>Python</strong>, <strong>C++</strong>, and <strong>MS PowerPoint</strong>.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
