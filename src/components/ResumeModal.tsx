import React, { useState, useEffect } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  ExternalLink
} from 'lucide-react';
import {
  personalInfo,
  skillGroups,
  projectsData,
  experienceData,
  educationData,
  certificationsData,
  languagesData
} from '../data/karthikData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${personalInfo.name}
${personalInfo.phone} | ${personalInfo.email} | ${personalInfo.linkedin} | ${personalInfo.github}

SUMMARY
${personalInfo.summary}

TECHNICAL SKILLS
${skillGroups.map((g) => `${g.domain}: ${g.skills.map((s) => s.name + (s.verified ? ' (Verified)' : '')).join(', ')}`).join('\n')}

PROJECTS
${projectsData
  .map(
    (p) => `
${p.title} (${p.period})
Technologies: ${p.technologies.join(', ')}
${p.bullets.map((b) => `• ${b}`).join('\n')}
`
  )
  .join('\n')}

EXPERIENCE
${experienceData
  .map(
    (e) => `
${e.company} (${e.period})
${e.role} | ${e.location}
${e.responsibilities.map((r) => `• ${r}`).join('\n')}
`
  )
  .join('\n')}

EDUCATION
${educationData.map((ed) => `${ed.degree} - ${ed.institution} (${ed.period}) ${ed.field ? `| ${ed.field}` : ''}`).join('\n')}

CERTIFICATIONS
${certificationsData.map((c) => `• ${c.name} - ${c.issuer} (${c.status})`).join('\n')}

LANGUAGES
${languagesData.map((l) => `• ${l.language}: ${l.proficiency}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto">
      
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-zinc-950 text-zinc-100 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden">
        
        {/* Top Action Bar (hidden when printing) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/90 no-print">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-zinc-100">Curriculum Vitae</span>
            <span className="text-xs font-mono text-zinc-400">• Karthik Murthy S</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Full CV' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors cursor-pointer ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-zinc-950 print:bg-white print:text-black print:p-0">
          
          {/* Resume Header */}
          <div className="text-center space-y-2 border-b border-zinc-800 print:border-zinc-300 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100 print:text-black">
              {personalInfo.name}
            </h1>
            <p className="text-xs sm:text-sm font-mono text-zinc-300 print:text-zinc-800 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-emerald-400 print:text-black underline">
                {personalInfo.email}
              </a>
              <span>•</span>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="text-emerald-400 print:text-black underline">
                {personalInfo.linkedin}
              </a>
              <span>•</span>
              <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" className="text-emerald-400 print:text-black underline">
                {personalInfo.github}
              </a>
            </p>
          </div>

          {/* Section: Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 print:text-zinc-900 border-b border-zinc-800 print:border-zinc-300 pb-1">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 print:text-zinc-800 leading-relaxed font-normal">
              {personalInfo.summary}
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 print:text-zinc-900 border-b border-zinc-800 print:border-zinc-300 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              {skillGroups.map((g) => (
                <div key={g.domain} className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <div className="sm:col-span-4 font-semibold text-zinc-200 print:text-black">
                    {g.domain}:
                  </div>
                  <div className="sm:col-span-8 text-zinc-300 print:text-zinc-800">
                    {g.skills
                      .map((s) => s.name + (s.verified ? ' [LinkedIn Verified]' : ''))
                      .join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 print:text-zinc-900 border-b border-zinc-800 print:border-zinc-300 pb-1">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {experienceData.map((e) => (
                <div key={e.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-zinc-100 print:text-black">
                      {e.company}
                    </span>
                    <span className="font-mono text-zinc-400 print:text-zinc-600">
                      {e.period}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs italic text-emerald-400 print:text-zinc-700">
                    <span>{e.role}</span>
                    <span className="font-mono not-italic text-zinc-400 print:text-zinc-600">
                      {e.location}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 print:text-zinc-800 pl-1">
                    {e.responsibilities.map((r, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 print:text-zinc-900 border-b border-zinc-800 print:border-zinc-300 pb-1">
              Key Engineering Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map((p) => (
                <div key={p.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-zinc-100 print:text-black">
                      {p.title}
                    </span>
                    <span className="font-mono text-zinc-400 print:text-zinc-600">
                      {p.period}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400 print:text-zinc-700">
                    Technologies: {p.technologies.join(', ')}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 print:text-zinc-800 pl-1">
                    {p.bullets.map((b, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 print:text-zinc-900 border-b border-zinc-800 print:border-zinc-300 pb-1">
              Education
            </h2>
            <div className="space-y-2">
              {educationData.map((ed) => (
                <div key={ed.id} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-zinc-100 print:text-black">{ed.institution}</span>
                    <span className="text-zinc-400 print:text-zinc-700"> — {ed.degree} {ed.field ? `(${ed.field})` : ''}</span>
                    {ed.grade && <span className="text-amber-400 print:text-zinc-900 font-mono text-xs"> [{ed.grade}]</span>}
                  </div>
                  <span className="font-mono text-zinc-400 print:text-zinc-600 text-xs">{ed.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Certifications & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="space-y-1.5">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 print:text-zinc-900 border-b border-zinc-800 print:border-zinc-300 pb-1">
                Certifications
              </h2>
              <ul className="space-y-1 text-xs text-zinc-300 print:text-zinc-800">
                {certificationsData.map((c) => (
                  <li key={c.id}>
                    • <strong>{c.name}</strong> – {c.issuer} {c.verified ? ' [Verified]' : ''} {c.status === 'In Progress' ? `(In Progress - ${c.expectedOrYear})` : ''}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 print:text-zinc-900 border-b border-zinc-800 print:border-zinc-300 pb-1">
                Languages
              </h2>
              <ul className="space-y-1 text-xs text-zinc-300 print:text-zinc-800">
                {languagesData.map((l) => (
                  <li key={l.language}>
                    • <strong>{l.language}</strong>: {l.proficiency}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
