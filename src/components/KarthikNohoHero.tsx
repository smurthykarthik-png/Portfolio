import React, { useEffect, useState } from 'react';
import { personalInfo, projectsData, certificationsData, experienceData } from '../data/karthikData';
import { ArrowUpRight, FileText, ChevronRight } from 'lucide-react';
import { smoothScrollToId } from '../lib/smoothScroll';

interface KarthikNohoHeroProps {
  onOpenMenu: () => void;
  onOpenResume: () => void;
  onSelectProject?: (projectId: string) => void;
}

const HEADLINE = ["I", "build", "hardware", "that's", "hands-on,", "and", "rigorous,", "to", "power", "critical", "systems"];

const PROFILE_LINES = [
  { key: 'role', value: 'Electronics & Systems Engineer' },
  { key: 'based', value: personalInfo.location },
  { key: 'focus', value: 'Embedded · VLSI · Semiconductor Fab' },
  { key: 'status', value: 'Available for full-time roles' },
  { key: 'target', value: 'Germany (A1 → B2)' }
];

export const KarthikNohoHero: React.FC<KarthikNohoHeroProps> = ({
  onOpenMenu,
  onOpenResume,
  onSelectProject
}) => {
  const [mounted, setMounted] = useState(false);
  const scrollToSection = (id: string) => smoothScrollToId(id);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { value: String(projectsData.length).padStart(2, '0'), label: 'Engineering Projects', color: '#BA4A24', onClick: () => scrollToSection('projects') },
    { value: String(certificationsData.length).padStart(2, '0'), label: 'Certifications', color: '#545E45', onClick: () => scrollToSection('experience') },
    { value: String(experienceData.length).padStart(2, '0'), label: 'Professional Roles', color: '#968EC7', onClick: () => scrollToSection('experience') }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#EDE9E1]">

      {/* ---------------- LEFT HALF: HEADLINE, WORD-STAGGER REVEAL, CTAs ---------------- */}
      <div className="w-full lg:w-1/2 min-h-[620px] lg:min-h-screen bg-[#EDE9E1] px-6 sm:px-12 lg:px-16 pt-24 sm:pt-28 pb-10 flex flex-col relative z-10">

        <div className="py-6 sm:py-8">
          {/* Availability eyebrow */}
          <div className="mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#545E45]">
              Open to hire — Full-time & relocation
            </span>
          </div>

          {/* Headline — each word slides/fades in with a staggered delay on mount */}
          <h1
            className="text-5xl sm:text-6xl md:text-[64px] lg:text-[68px] font-extrabold text-[#22211F] leading-[0.98] tracking-[-0.035em]"
            style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
          >
            {HEADLINE.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.28em]">
                <span
                  className="inline-block transition-all ease-out"
                  style={{
                    transitionDuration: '650ms',
                    transitionDelay: `${i * 45}ms`,
                    transform: mounted ? 'translateY(0)' : 'translateY(110%)',
                    opacity: mounted ? 1 : 0
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p className="pt-5 sm:pt-6 text-xs sm:text-sm text-[#736C61]">
            {personalInfo.title} — {personalInfo.location}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 pt-5">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-4 py-2.5 rounded-xl bg-[#22211F] hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer transition-colors"
            >
              <span>View Projects</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenResume}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-neutral-50 border border-[#D5CDBD] text-xs font-bold text-[#545E45] flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2.5 text-xs font-bold text-[#BA4A24] flex items-center gap-1.5 cursor-pointer hover:underline"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Left: Portfolio Coordinates — pinned to the bottom regardless of headline height */}
        <div className="mt-auto pt-10 flex items-center justify-between text-xs sm:text-sm font-medium text-[#22211F] tracking-tight border-t border-[#D5CDBD]">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-[#736C61]">© {new Date().getFullYear()}</span>
            <span className="text-[#545E45] font-bold">Karthik Murthy S</span>
          </div>
          <a
            href={`https://${personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-mono font-bold text-[#BA4A24] hover:underline"
          >
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* ---------------- RIGHT HALF: ENGINEER SIGNATURE CONSOLE + STAT TILES ---------------- */}
      <div className="w-full lg:w-1/2 min-h-screen bg-[#DED8CD] relative p-4 sm:p-8 lg:p-12 pt-24 sm:pt-28 overflow-hidden flex flex-col">

        <div className="flex-1 flex flex-col justify-center gap-5 sm:gap-6 max-w-xl mx-auto w-full">

          {/* Signature console card — a monospace "profile card" in place of generic emoji tiles */}
          <div className="rounded-2xl bg-[#1B1A18] text-[#E7E2D6] p-6 sm:p-8 shadow-lg font-mono text-xs sm:text-sm space-y-3">
            <div className="flex items-center gap-1.5 pb-3 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5533D]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F2C94C]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#6FCF97]" />
              <span className="ml-3 text-[#8A8578] text-[11px]">engineer.profile</span>
            </div>

            {PROFILE_LINES.map((line) => (
              <div key={line.key} className="flex items-start gap-3">
                <span className="text-[#6FCF97] shrink-0">{line.key}:</span>
                <span className="text-[#E7E2D6]">{line.value}</span>
              </div>
            ))}

            <div className="flex items-center gap-1 pt-1 text-[#8A8578]">
              <span>$</span>
              <span className="w-1.5 h-4 bg-[#E7E2D6] animate-pulse" />
            </div>
          </div>

          {/* Stat tiles — real counts from the data, not decoration */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <button
                key={stat.label}
                onClick={stat.onClick}
                className="rounded-2xl bg-white/60 hover:bg-white border border-[#D0C8B9] p-4 sm:p-5 text-left cursor-pointer transition-colors group"
              >
                <div
                  className="text-3xl sm:text-4xl font-black leading-none"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-[#545E45] mt-2 leading-tight group-hover:text-[#22211F] transition-colors">
                  {stat.label}
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
