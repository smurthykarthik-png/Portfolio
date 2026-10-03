import React, { useState } from 'react';
import { X, ExternalLink, Mail, Phone, MapPin, Award, CheckCircle, Cpu, Download, ArrowLeft, ArrowUpRight } from 'lucide-react';
import {
  personalInfo,
  skillGroups,
  projectsData,
  experienceData,
  educationData,
  certificationsData,
  languagesData
} from '../data/karthikData';
import { InteractiveHardwareLab } from './InteractiveHardwareLab';

interface KarthikPortfolioOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal: () => void;
}

export const KarthikPortfolioOverlay: React.FC<KarthikPortfolioOverlayProps> = ({
  isOpen,
  onClose,
  onOpenResumeModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedContact(type);
    setTimeout(() => setCopiedContact(null), 2000);
  };

  const categories = ['All', ...skillGroups.map((g) => g.domain)];
  const allSkills = skillGroups.flatMap((g) =>
    g.skills.map((s) => ({ ...s, domain: g.domain }))
  );
  const filteredSkills =
    activeCategory === 'All'
      ? allSkills
      : allSkills.filter((s) => s.domain === activeCategory);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#EDE9E1] text-[#22211F]">
      
      {/* Top Bar with Return to Noho & Resume Download */}
      <header className="sticky top-0 z-40 bg-[#EDE9E1]/90 backdrop-blur-md border-b border-[#D8D2C5] px-6 sm:px-12 py-4 flex items-center justify-between">
        <button
          onClick={onClose}
          className="flex items-center gap-2 font-bold text-sm text-[#22211F] hover:text-[#BA4A24] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Return to noho.ink</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResumeModal}
            className="px-4 py-2 rounded-xl bg-[#22211F] hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV (PDF)</span>
          </button>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white shadow-xs hover:bg-neutral-100 flex items-center justify-center text-[#22211F] cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-6xl mx-auto px-6 sm:px-12 py-16 space-y-24">
        
        {/* Hero Identity Block in Noho Style */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#545E45]">
              Active System Engineer @ Tata Consultancy Services
            </span>
          </div>

          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#22211F] leading-[0.98] tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {personalInfo.name}
          </h1>

          <p className="text-xl sm:text-2xl text-[#4A453E] max-w-3xl leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Quick Contact & Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => handleCopy(personalInfo.email, 'email')}
              className="px-4 py-2 rounded-xl bg-white border border-[#D5CDBD] text-xs font-semibold text-[#22211F] flex items-center gap-2 hover:bg-neutral-50 cursor-pointer shadow-xs"
            >
              <Mail className="w-3.5 h-3.5 text-[#BA4A24]" />
              <span>{copiedContact === 'email' ? 'Copied Email ✓' : personalInfo.email}</span>
            </button>

            <button
              onClick={() => handleCopy(personalInfo.phone, 'phone')}
              className="px-4 py-2 rounded-xl bg-white border border-[#D5CDBD] text-xs font-semibold text-[#22211F] flex items-center gap-2 hover:bg-neutral-50 cursor-pointer shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#545E45]" />
              <span>{copiedContact === 'phone' ? 'Copied Phone ✓' : personalInfo.phone}</span>
            </button>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white border border-[#D5CDBD] text-xs font-semibold text-[#22211F] flex items-center gap-1.5 hover:bg-neutral-50 shadow-xs"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#6E675C]" />
            </a>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white border border-[#D5CDBD] text-xs font-semibold text-[#22211F] flex items-center gap-1.5 hover:bg-neutral-50 shadow-xs"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#6E675C]" />
            </a>

            <span className="text-xs font-mono px-3 py-2 rounded-xl bg-[#E2DDD3] text-[#4A453E] border border-[#D0C8B9]">
              🇩🇪 German Target: A1 → B2
            </span>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#DED8CD] border border-[#D0C8B9] space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#BA4A24]">
            Engineering Profile & Core Objectives
          </span>
          <p className="text-base sm:text-lg text-[#302D29] leading-relaxed">
            {personalInfo.summary}
          </p>
        </section>

        {/* Technical Skills Matrix */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D8D2C5] pb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#BA4A24]">
                Technical Competencies
              </span>
              <h2
                className="text-3xl sm:text-5xl font-extrabold text-[#22211F]"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Skills Matrix & Certifications
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#E2DDD3] rounded-2xl border border-[#D5CDBD]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#22211F] text-white shadow-xs'
                      : 'text-[#615B52] hover:text-[#22211F]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((sk) => (
              <div
                key={sk.name}
                className="p-5 rounded-2xl bg-white border border-[#D5CDBD] shadow-xs flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#22211F]">{sk.name}</span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#EDE9E1] text-[#545E45]">
                      {sk.tag}
                    </span>
                  </div>
                  <span className="text-xs text-[#736C61] block mt-1">{sk.domain}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="space-y-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#545E45] block mb-2">
              Applied Engineering
            </span>
            <h2
              className="text-3xl sm:text-5xl font-extrabold text-[#22211F]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Hardware, IoT & Semiconductor Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((proj) => (
              <div
                key={proj.id}
                className="p-8 rounded-3xl bg-[#DED8CD] border border-[#D0C8B9] flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#EDE9E1] text-[#22211F]">
                      {proj.category}
                    </span>
                    <span className="text-xs font-mono text-[#615B52]">{proj.period}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#22211F] leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-[#45413B] leading-relaxed">
                    {proj.summary}
                  </p>

                  <ul className="space-y-1.5 pt-2">
                    {proj.bullets.map((bullet, i) => (
                      <li key={i} className="text-xs text-[#3D3A35] flex items-start gap-2">
                        <span className="text-[#BA4A24] font-bold mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#C7BEAD] flex flex-wrap gap-1.5">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-[#EDE9E1] text-[10px] font-mono text-[#4A453E] border border-[#D5CDBD]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Workbench / Simulation Lab */}
        <div className="border-t border-[#D8D2C5] pt-12">
          <InteractiveHardwareLab />
        </div>

        {/* Experience & Education */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-[#D8D2C5] pt-12">
          
          {/* Work Experience */}
          <div className="space-y-6">
            <h3
              className="text-2xl sm:text-3xl font-bold text-[#22211F]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Work Experience
            </h3>

            <div className="space-y-6">
              {experienceData.map((exp) => (
                <div
                  key={exp.id}
                  className="p-6 rounded-2xl bg-white border border-[#D5CDBD] space-y-3 shadow-xs"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-bold text-base text-[#22211F]">{exp.role}</div>
                      <div className="text-xs font-semibold text-[#BA4A24]">{exp.company}</div>
                    </div>
                    <span className="text-[11px] font-mono text-[#736C61]">{exp.period}</span>
                  </div>

                  <p className="text-xs text-[#524E48] leading-relaxed">
                    {exp.summary}
                  </p>

                  <ul className="space-y-1 text-xs text-[#45413B]">
                    {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Languages */}
          <div className="space-y-6">
            <h3
              className="text-2xl sm:text-3xl font-bold text-[#22211F]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Academic Background
            </h3>

            <div className="space-y-4">
              {educationData.map((edu, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-[#D5CDBD] space-y-2 shadow-xs"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-bold text-sm text-[#22211F]">{edu.degree}</div>
                      <div className="text-xs font-semibold text-[#545E45]">{edu.institution}</div>
                    </div>
                    <span className="text-[11px] font-mono text-[#736C61]">{edu.period}</span>
                  </div>
                  <p className="text-xs text-[#666157]">{edu.grade || edu.location}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="p-6 rounded-2xl bg-[#DED8CD] border border-[#D0C8B9] space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#BA4A24]">
                Languages
              </span>
              <div className="grid grid-cols-2 gap-3">
                {languagesData.map((l) => (
                  <div key={l.language} className="p-3 rounded-xl bg-white border border-[#D5CDBD]">
                    <div className="text-xs font-bold text-[#22211F] flex items-center gap-1.5">
                      <span>{l.flag}</span>
                      <span>{l.language}</span>
                    </div>
                    <div className="text-[11px] text-[#6E675C]">{l.proficiency}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#D8D2C5] py-12 text-center text-xs text-[#736C61]">
        <span>{personalInfo.name} • {personalInfo.email} • {personalInfo.phone}</span>
      </footer>

    </div>
  );
};
