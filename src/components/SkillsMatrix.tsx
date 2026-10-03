import React, { useState } from 'react';
import {
  Cpu,
  Radio,
  Code2,
  Layers,
  Terminal,
  ShieldCheck,
  Wrench,
  Search,
  CheckCircle,
  Sparkles,
  Filter
} from 'lucide-react';
import { skillGroups } from '../data/karthikData';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Radio,
  Code2,
  Layers,
  Terminal,
  ShieldCheck,
  Wrench
};

export const SkillsMatrix: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('All');

  const domains = ['All', ...skillGroups.map((g) => g.domain)];

  const filteredGroups = skillGroups
    .map((group) => {
      const matchesDomain = selectedDomain === 'All' || group.domain === selectedDomain;
      if (!matchesDomain) return null;

      const filteredSkills = group.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.tag && skill.tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (skill.badge && skill.badge.toLowerCase().includes(searchQuery.toLowerCase()))
      );

      if (filteredSkills.length === 0 && searchQuery) return null;

      return {
        ...group,
        skills: filteredSkills
      };
    })
    .filter(Boolean) as typeof skillGroups;

  const totalSkillCount = skillGroups.reduce((acc, g) => acc + g.skills.length, 0);

  return (
    <section id="skills" className="py-20 sm:py-28 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-zinc-800/80">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 block">
                Technical Taxonomy
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400">
                {totalSkillCount} Core Skills
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
              Technical skills & competencies.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Spanning physical cleanroom semiconductor deposition to enterprise cloud orchestration and ITIL service governance.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Python, VLSI, ESP32)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-zinc-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-zinc-500 shrink-0 hidden sm:block" />
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedDomain === domain
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => {
            const Icon = iconMap[group.icon] || Cpu;
            return (
              <div
                key={group.domain}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-emerald-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-base text-zinc-100">
                        {group.domain}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {group.skills.length} skills
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {group.summary}
                  </p>

                  {/* Individual Skills Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs transition-colors border ${
                          skill.verified
                            ? 'bg-emerald-950/40 border-emerald-700/60 text-emerald-300 font-semibold shadow-xs'
                            : 'bg-zinc-950/80 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        <span>{skill.name}</span>
                        {skill.verified && (
                          <span
                            className="inline-flex items-center gap-0.5 text-[10px] font-mono text-emerald-400 bg-emerald-900/60 px-1 py-0.5 rounded"
                            title="LinkedIn Skill Assessment – Verified Badge"
                          >
                            <CheckCircle className="w-2.5 h-2.5" />
                            <span>Verified</span>
                          </span>
                        )}
                        {skill.tag && !skill.verified && (
                          <span className="text-[10px] font-mono text-zinc-500">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Domain verified</span>
                  <span className="text-zinc-600">●</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredGroups.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
            <p className="text-sm text-zinc-400">
              No technical skills matched your search: "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDomain('All');
              }}
              className="text-xs text-emerald-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
