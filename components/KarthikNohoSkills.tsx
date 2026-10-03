import React, { useState } from 'react';
import { skillGroups } from '../data/karthikData';
import { Cpu, Radio, Code2, Layers, Terminal, ShieldCheck, Wrench, Check } from 'lucide-react';
import { Reveal, RevealGroup } from './Reveal';

const ICONS: Record<string, React.ElementType> = {
  Cpu, Radio, Code2, Layers, Terminal, ShieldCheck, Wrench
};

const DOMAIN_COLORS: Record<string, { bg: string; text: string; ring: string }> = {
  emerald: { bg: '#545E45', text: '#545E45', ring: '#B7C3AC' },
  cyan: { bg: '#3E7C7C', text: '#3E7C7C', ring: '#A9CFCF' },
  amber: { bg: '#BA4A24', text: '#BA4A24', ring: '#E8B79A' },
  violet: { bg: '#968EC7', text: '#7A70B5', ring: '#D2CCEB' },
  blue: { bg: '#4C6E9E', text: '#4C6E9E', ring: '#B4C7DE' },
  rose: { bg: '#B5556A', text: '#B5556A', ring: '#E5BFC7' },
  teal: { bg: '#3D8C7B', text: '#3D8C7B', ring: '#AFDACF' }
};

export const KarthikNohoSkills: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<string>(skillGroups[0].domain);
  const activeGroup = skillGroups.find((g) => g.domain === activeDomain) || skillGroups[0];
  const palette = DOMAIN_COLORS[activeGroup.color] || DOMAIN_COLORS.emerald;

  const verifiedCount = skillGroups.reduce(
    (sum, g) => sum + g.skills.filter((s) => s.verified).length,
    0
  );

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#EDE9E1] border-t border-[#DED8CD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-12">

        {/* Section Heading */}
        <div className="space-y-3 border-b border-[#D8D2C5] pb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#BA4A24]">
            02 / Technical Skills & Arsenal
          </span>
          <Reveal>
            <h2
              className="text-4xl sm:text-6xl font-extrabold text-[#22211F] tracking-tight"
              style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
            >
              Technical Arsenal & Verified Proficiencies
            </h2>
          </Reveal>
          <p className="text-base sm:text-lg text-[#524E48] max-w-xl">
            Cross-disciplinary competencies spanning physical hardware, semiconductor thin-film fabrication, microcontroller firmware, and production enterprise infrastructure — {verifiedCount} LinkedIn-verified.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">

          {/* Domain rail — pick one discipline at a time instead of a flat wall of cards */}
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible scrollbar-none pb-2 lg:pb-0">
            {skillGroups.map((group) => {
              const Icon = ICONS[group.icon] || Cpu;
              const isActive = group.domain === activeDomain;
              const c = DOMAIN_COLORS[group.color] || DOMAIN_COLORS.emerald;
              return (
                <button
                  key={group.domain}
                  onClick={() => setActiveDomain(group.domain)}
                  className={`shrink-0 lg:w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#22211F] border-[#22211F] shadow-lg'
                      : 'bg-white border-[#D5CDBD] hover:border-[#8C8578]'
                  }`}
                >
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: isActive ? 'rgba(255,255,255,0.12)' : c.ring + '55' }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color: isActive ? '#fff' : c.text }} />
                  </span>
                  <div className="min-w-0">
                    <div className={`text-sm font-bold leading-tight ${isActive ? 'text-white' : 'text-[#22211F]'}`}>
                      {group.domain}
                    </div>
                    <div className={`text-[11px] font-mono ${isActive ? 'text-white/60' : 'text-[#8C8578]'}`}>
                      {group.skills.length} skills
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active domain panel — narrative summary + pill cloud, not a repeated card grid */}
          <div className="lg:col-span-8">
            <Reveal key={activeGroup.domain}>
              <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#D5CDBD] shadow-xs h-full">
                <div className="flex items-start gap-4 pb-6 border-b border-neutral-100">
                  <span
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: palette.ring + '55' }}
                  >
                    {React.createElement(ICONS[activeGroup.icon] || Cpu, { className: 'w-5 h-5', style: { color: palette.text } })}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#22211F]">
                      {activeGroup.domain}
                    </h3>
                    <p className="text-sm text-[#666157] leading-relaxed mt-1">
                      {activeGroup.summary}
                    </p>
                  </div>
                </div>

                {/* Skill pill cloud — sized to content, no repeated boilerplate */}
                <div className="flex flex-wrap gap-2.5 pt-6">
                  <RevealGroup stagger={30} maxDelay={250}>
                    {activeGroup.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 pl-4 pr-3.5 py-2 rounded-full border text-sm font-semibold transition-colors ${
                          skill.verified
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                            : 'bg-[#EDE9E1] border-[#D5CDBD] text-[#22211F] hover:border-[#8C8578]'
                        }`}
                      >
                        {skill.verified && <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                        <span>{skill.name}</span>
                        {skill.tag && (
                          <span className={`text-[11px] font-mono font-normal ${skill.verified ? 'text-emerald-700/70' : 'text-[#8C8578]'}`}>
                            · {skill.tag}
                          </span>
                        )}
                      </span>
                    ))}
                  </RevealGroup>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};
