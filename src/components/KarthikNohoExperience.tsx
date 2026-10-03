import React, { useState } from 'react';
import { experienceData, educationData, certificationsData, languagesData } from '../data/karthikData';
import { CheckCircle2, Building2, GraduationCap, Award, Globe2, ShieldCheck, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const KarthikNohoExperience: React.FC = () => {
  const [activeCertCategory, setActiveCertCategory] = useState<string>('All');
  const [expandedExpId, setExpandedExpId] = useState<string | null>(experienceData[0]?.id ?? null);

  const certCategories = [
    'All',
    'Verified Assessment',
    'VLSI & Semiconductor',
    'Embedded & IoT',
    'Cloud & Enterprise'
  ];

  const filteredCerts =
    activeCertCategory === 'All'
      ? certificationsData
      : certificationsData.filter((c) => c.category === activeCertCategory);

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#EDE9E1] border-t border-[#DED8CD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-24">
        
        {/* ---------------- 1. PROFESSIONAL WORK EXPERIENCE ---------------- */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C5] pb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#BA4A24]">
                  05 / Career Trajectory & Qualifications
                </span>
              </div>
              <Reveal>
                <h2
                  className="text-4xl sm:text-6xl font-extrabold text-[#22211F] tracking-tight"
                  style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
                >
                  Work Experience & Academic Track
                </h2>
              </Reveal>
              <p className="text-base sm:text-lg text-[#524E48] max-w-xl">
                Industry engineering roles at Tata Consultancy Services and Mysore Electrical Industry, paired with academic honors and continuous technical certifications.
              </p>
            </div>

            <div className="text-xs font-mono text-[#545E45] font-bold">
              Current: System Engineer @ TCS
            </div>
          </div>

          <div className="space-y-4">
            {experienceData.map((exp, idx) => {
              const isExpanded = expandedExpId === exp.id;
              return (
                <div
                  key={exp.id}
                  className="rounded-3xl bg-[#DED8CD] border border-[#D0C8B9] shadow-xs overflow-hidden"
                >
                  {/* Header — always visible, toggles the card */}
                  <button
                    onClick={() => setExpandedExpId(isExpanded ? null : exp.id)}
                    className="w-full text-left p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#22211F] text-white">
                          0{idx + 1} • {exp.type}
                        </span>
                        <span className="text-xs font-mono text-[#666157]">{exp.location}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#22211F]">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-bold text-[#BA4A24]">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-sm font-mono font-bold text-[#22211F] sm:text-right">
                        {exp.period}
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 text-[#22211F] shrink-0 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                      />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-8 sm:px-12 pb-8 sm:pb-12 space-y-8 border-t border-[#C7BEAD] pt-8">
                      {/* Summary narrative */}
                      <p className="text-base text-[#45413B] leading-relaxed max-w-4xl">
                        {exp.summary}
                      </p>

                      {/* Bullet points from resume */}
                      <div className="space-y-3">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#22211F] block">
                          Core Responsibilities & Technical Impact
                        </span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {exp.responsibilities.map((resp, i) => (
                            <div
                              key={i}
                              className="p-4 rounded-2xl bg-white border border-[#D5CDBD] shadow-2xs flex items-start gap-3 text-xs text-[#302D29] leading-relaxed"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies used */}
                      <div className="pt-4 border-t border-[#C7BEAD] flex flex-wrap gap-2 items-center">
                        <span className="text-xs font-mono text-[#736C61] mr-2">Environment:</span>
                        {exp.technologiesUsed.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-xl bg-white text-[#22211F] text-xs font-mono font-semibold border border-[#D5CDBD]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------- 2. EDUCATION & ACADEMIC CREDENTIALS ---------------- */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C5] pb-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#545E45]">
                Academic Foundations
              </span>
              <Reveal>
                <h2
                  className="text-4xl sm:text-6xl font-extrabold text-[#22211F] tracking-tight"
                  style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
                >
                  Education History
                </h2>
              </Reveal>
            </div>
            <div className="text-xs font-mono text-[#736C61]">
              First Class Honors Track
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#D5CDBD] shadow-xs flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#BA4A24] font-bold">0{idx + 1}</span>
                    <span className="text-[#736C61]">{edu.period}</span>
                  </div>

                  <h3 className="font-extrabold text-lg text-[#22211F] leading-snug">
                    {edu.degree}
                  </h3>

                  <div className="text-xs font-bold text-[#545E45]">
                    {edu.institution}
                  </div>

                  <div className="text-xs text-[#736C61]">
                    {edu.location}
                  </div>

                  {edu.grade && (
                    <div className="pt-2 text-xs font-mono font-semibold text-[#BA4A24]">
                      Result: {edu.grade}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-neutral-100 text-[11px] text-[#736C61] flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#22211F]" />
                  <span>Verified Academic Credential</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- 3. CERTIFICATIONS REPOSITORY ---------------- */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C5] pb-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#BA4A24]">
                Continuous Learning
              </span>
              <Reveal>
                <h2
                  className="text-4xl sm:text-6xl font-extrabold text-[#22211F] tracking-tight"
                  style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
                >
                  Certifications & Programs
                </h2>
              </Reveal>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-[#E2DDD3] rounded-2xl border border-[#D5CDBD]">
              {certCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCertCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeCertCategory === cat
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
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-white border border-[#D5CDBD] shadow-xs flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#736C61]">
                      {cert.issuer}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        cert.verified
                          ? 'bg-emerald-100 text-emerald-800'
                          : cert.status === 'In Progress'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-[#EDE9E1] text-[#22211F]'
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-sm text-[#22211F] mt-2">
                    {cert.name}
                  </h4>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-[#736C61]">
                  <span>{cert.category}</span>
                  {cert.verified && (
                    <span className="font-bold text-emerald-700 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  )}
                  {cert.expectedOrYear && (
                    <span className="font-mono text-[#BA4A24]">{cert.expectedOrYear}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- 4. LANGUAGES & RELOCATION READINESS ---------------- */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#DED8CD] border border-[#D0C8B9] space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#BA4A24]">
              Multilingual Capabilities
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#22211F]">
              Languages & Global Mobility
            </h3>
            <p className="text-sm text-[#524E48] max-w-xl">
              Targeting engineering roles in Germany with structured A1 to B2 language acquisition alongside native and professional English communication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {languagesData.map((lang) => (
              <div
                key={lang.language}
                className="p-6 rounded-2xl bg-white border border-[#D5CDBD] shadow-xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-extrabold text-sm text-[#22211F]">{lang.language}</span>
                  </div>
                  {lang.levelTag && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#EDE9E1] text-[#BA4A24]">
                      {lang.levelTag}
                    </span>
                  )}
                </div>

                <div className="text-xs font-semibold text-[#545E45]">
                  {lang.proficiency}
                </div>

                <p className="text-[11px] text-[#736C61] pt-1">
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
