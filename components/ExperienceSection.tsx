import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  FileCheck,
  ShieldCheck,
  Zap,
  Server
} from 'lucide-react';
import { experienceData } from '../data/karthikData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 block">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
            Professional work experience.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Proven professional track record from high-voltage manufacturing assembly floors to enterprise 24x7 production cloud systems.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800/90 hover:border-zinc-700/80 transition-all space-y-6 shadow-md"
            >
              
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-emerald-950 text-emerald-400 border border-emerald-800">
                      {exp.type}
                    </span>
                    {exp.department && (
                      <span className="text-xs font-mono text-zinc-400">
                        {exp.department}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-100 tracking-tight">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 text-base font-semibold text-emerald-400">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col lg:items-end gap-1.5 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {exp.summary}
              </p>

              {/* Responsibilities */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                  Core Responsibilities & Technical Contributions:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-850 flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used & Metrics Strip */}
              <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-zinc-500 mr-1 uppercase">Stack:</span>
                  {exp.technologiesUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-950 border border-zinc-800 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.metrics && (
                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                    {exp.metrics.map((m) => (
                      <div key={m.label} className="text-right">
                        <span className="text-[10px] text-zinc-500 uppercase block">{m.label}</span>
                        <span className="text-emerald-400 font-bold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
