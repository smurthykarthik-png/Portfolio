import React from 'react';
import {
  Award,
  CheckCircle,
  Globe,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Languages
} from 'lucide-react';
import { certificationsData, languagesData } from '../data/karthikData';

export const CertificationsAndLanguages: React.FC = () => {
  const verifiedCerts = certificationsData.filter((c) => c.verified);
  const completedCerts = certificationsData.filter((c) => !c.verified && c.status === 'Completed');
  const inProgressCerts = certificationsData.filter((c) => c.status === 'In Progress');

  return (
    <section id="certifications" className="py-20 sm:py-28 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 block">
            Certifications & Global Linguistic Fluency
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
            Accreditations & language capabilities.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Verified technical skill assessments, specialized VLSI & Cloud coursework, and cross-cultural communication proficiencies.
          </p>
        </div>

        {/* Section 1: Certifications Grid */}
        <div className="space-y-8">
          
          {/* 1. LinkedIn Verified Badges */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h3 className="font-bold text-lg text-zinc-100">
                LinkedIn Verified Skill Assessments
              </h3>
              <span className="text-xs font-mono text-zinc-500">
                Passed Top Percentile Assessment
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {verifiedCerts.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-2xl bg-zinc-900/90 border border-emerald-800/50 hover:border-emerald-500/60 transition-colors space-y-3 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                      Verified Badge
                    </span>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>

                  <div>
                    <h4 className="font-bold text-base text-zinc-100">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Specialized Technical & Academic Certifications */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-zinc-100 flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>VLSI, Embedded, Network & Security Certifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {completedCerts.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors space-y-1.5"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
                    <span>{cert.category}</span>
                    <span className="text-emerald-400 font-bold">✓ Completed</span>
                  </div>
                  <h4 className="font-semibold text-sm text-zinc-200">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. In Progress Certifications */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-zinc-100 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              <span>Target Certifications In Progress (Expected 2026)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {inProgressCerts.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-2xl bg-zinc-900/70 border border-amber-900/40 hover:border-amber-700/60 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950 text-amber-400 border border-amber-800">
                      In Progress
                    </span>
                    <span className="text-xs font-mono font-semibold text-amber-400">
                      {cert.expectedOrYear}
                    </span>
                  </div>
                  <h4 className="font-bold text-base text-zinc-100">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Issued by {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Section 2: Languages Grid */}
        <div className="space-y-6 pt-6 border-t border-zinc-800/80">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
              <Languages className="w-4 h-4" />
              <span>Language Proficiencies</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              Multilingual communication.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {languagesData.map((lang) => (
              <div
                key={lang.language}
                className={`p-5 rounded-2xl border transition-all space-y-3 ${
                  lang.isPrimaryTarget
                    ? 'bg-zinc-900 border-emerald-500/60 shadow-lg shadow-emerald-950/20'
                    : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{lang.flag}</span>
                  {lang.levelTag && (
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      lang.isPrimaryTarget
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                        : 'bg-zinc-800 text-zinc-300'
                    }`}>
                      {lang.levelTag}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-lg text-zinc-100">
                    {lang.language}
                  </h4>
                  <div className={`text-xs font-medium ${lang.isPrimaryTarget ? 'text-emerald-400 font-semibold' : 'text-zinc-300'}`}>
                    {lang.proficiency}
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-normal pt-1 border-t border-zinc-800/80">
                  {lang.statusNote}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
