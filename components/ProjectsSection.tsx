import React, { useState } from 'react';
import {
  Layers,
  Cpu,
  Terminal,
  ShieldCheck,
  Calendar,
  Tag,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ExternalLink,
  Code2,
  FileCode,
  CheckCircle2
} from 'lucide-react';
import { projectsData } from '../data/karthikData';
import { Project, ProjectCategory } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string>(projectsData[0].id);

  const categories: ProjectCategory[] = [
    'All',
    'Semiconductor & Hardware',
    'Embedded & IoT',
    'DevOps & Automation',
    'ITSM & Enterprise'
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? '' : id);
  };

  return (
    <section id="projects" className="py-20 sm:py-28 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-zinc-800/80">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 block">
              Applied Engineering
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
              Featured engineering projects.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              From thin-film magnetron sputtering in controlled cleanroom labs to embedded microcontroller telemetry and automated Linux deployments.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div
                key={project.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-zinc-900/90 border-emerald-600/50 shadow-xl'
                    : 'bg-zinc-900/50 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                
                {/* Header Band */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                        {project.category}
                      </span>
                      {project.status && (
                        <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800/60 px-2 py-0.5 rounded">
                          {project.status}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{project.period}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                      {project.summary}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-950/80 border border-zinc-800 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Core Achievements / Bullets */}
                  <div className="pt-2 space-y-2">
                    <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                      Key Engineering Outcomes:
                    </div>
                    <ul className="space-y-2">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expand Toggle */}
                  <div className="pt-4 flex items-center justify-between border-t border-zinc-800/80">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Technical Specifications' : 'View Deep Technical Specifications & Architecture'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    <span className="text-[11px] font-mono text-zinc-500">
                      ID: {project.id}
                    </span>
                  </div>
                </div>

                {/* Collapsible Deep Specs & Architecture Drawer */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 bg-zinc-950 border-t border-zinc-800/80 space-y-6 animate-in fade-in duration-200">
                    
                    {/* Deep Highlights */}
                    {project.highlights && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                          Methodological Rigor & Process Highlights:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {project.highlights.map((item, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 leading-relaxed font-normal"
                            >
                              <span className="text-emerald-400 font-mono font-bold block mb-1">
                                [Step 0{idx + 1}]
                              </span>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technical Specifications Table */}
                    {project.specifications && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                          System Specifications:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {Object.entries(project.specifications).map(([key, val]) => (
                            <div
                              key={key}
                              className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs"
                            >
                              <div className="text-[11px] font-mono text-zinc-500">{key}</div>
                              <div className="font-semibold text-zinc-200 mt-0.5">{val}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
