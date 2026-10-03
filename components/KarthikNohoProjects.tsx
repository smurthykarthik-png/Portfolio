import React, { useState } from 'react';
import { projectsData } from '../data/karthikData';
import { ArrowUpRight, Cpu, Layers, Radio, Terminal, CheckCircle2, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const KarthikNohoProjects: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projectsData[0].id);

  const selectedProject = projectsData.find((p) => p.id === selectedProjectId) || projectsData[0];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#EDE9E1] border-t border-[#DED8CD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-16">
        
        {/* Section Header in noho style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D8D2C5] pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#545E45]">
                03 / Selected Works & Case Studies
              </span>
            </div>
            <Reveal>
              <h2
                className="text-4xl sm:text-6xl font-extrabold text-[#22211F] tracking-tight"
                style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
              >
                Featured Engineering Projects
              </h2>
            </Reveal>
            <p className="text-base sm:text-lg text-[#524E48] max-w-xl">
              Detailed case studies covering cleanroom semiconductor thin-film optimization, dual-core embedded firmware, automated deployment pipelines, and enterprise ITIL architecture.
            </p>
          </div>

          <div className="text-xs font-mono text-[#736C61]">
            Portfolio Works • 2023–Present
          </div>
        </div>

        {/* Project Selector Cards Grid (like noho product selector) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projectsData.map((project, idx) => {
            const isSelected = selectedProjectId === project.id;
            return (
              <Reveal key={project.id} delay={idx * 80}>
              <button
                onClick={() => setSelectedProjectId(project.id)}
                className={`w-full p-6 rounded-3xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer space-y-4 ${
                  isSelected
                    ? 'bg-[#22211F] text-white border-[#22211F] shadow-lg -translate-y-1'
                    : 'bg-white text-[#22211F] border-[#D5CDBD] hover:border-[#8C8578] shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono mb-3">
                    <span
                      className={`font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#EDE9E1] text-[#BA4A24]'
                      }`}
                    >
                      0{idx + 1} • {project.category}
                    </span>
                    <span className={isSelected ? 'text-white/70' : 'text-[#736C61]'}>
                      {project.period.split('–')[0].trim()}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base leading-snug">
                    {project.title}
                  </h3>

                  {project.result && (
                    <p
                      className={`text-xs mt-2 leading-relaxed line-clamp-2 ${
                        isSelected ? 'text-white/70' : 'text-[#736C61]'
                      }`}
                    >
                      {project.result}
                    </p>
                  )}
                </div>

                <div
                  className={`pt-3 border-t text-xs font-mono flex items-center justify-between ${
                    isSelected ? 'border-white/20 text-white/90' : 'border-neutral-100 text-[#545E45]'
                  }`}
                >
                  <span>View project</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
              </Reveal>
            );
          })}
        </div>

        {/* Selected Project In-Depth Editorial Showcase */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#DED8CD] border border-[#D0C8B9] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 7 Columns: Core narrative, bullets, achievements */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#22211F] text-white">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-mono font-semibold text-[#666157]">
                  {selectedProject.period}
                </span>
              </div>

              <h3
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#22211F] leading-tight"
                style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
              >
                {selectedProject.title}
              </h3>

              <p className="text-base text-[#45413B] leading-relaxed">
                {selectedProject.summary}
              </p>

              {/* Case study: problem → approach → result — the "so what" behind the bullets */}
              {(selectedProject.problem || selectedProject.approach || selectedProject.result) && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {selectedProject.problem && (
                    <div className="p-4 rounded-2xl bg-white border border-[#D5CDBD] space-y-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#BA4A24] block">
                        Problem
                      </span>
                      <p className="text-xs text-[#3D3A35] leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </div>
                  )}
                  {selectedProject.approach && (
                    <div className="p-4 rounded-2xl bg-white border border-[#D5CDBD] space-y-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#545E45] block">
                        Approach
                      </span>
                      <p className="text-xs text-[#3D3A35] leading-relaxed">
                        {selectedProject.approach}
                      </p>
                    </div>
                  )}
                  {selectedProject.result && (
                    <div className="p-4 rounded-2xl bg-[#22211F] text-white space-y-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#F2C94C] block">
                        Result
                      </span>
                      <p className="text-xs text-white/90 leading-relaxed">
                        {selectedProject.result}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Exact bullets from user resume */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#BA4A24] block">
                  Technical Highlights
                </span>
                <ul className="space-y-2.5">
                  {selectedProject.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#302D29]">
                      <span className="w-5 h-5 rounded-full bg-white text-[#22211F] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-2xs">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology tags */}
              <div className="pt-4 border-t border-[#C7BEAD] flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-white text-[#22211F] text-xs font-mono font-semibold border border-[#D5CDBD] shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Specifications & Technical Architecture */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#D5CDBD] shadow-xs space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-neutral-100">
                <Cpu className="w-5 h-5 text-[#BA4A24]" />
                <span className="font-extrabold text-sm text-[#22211F]">
                  Technical Specifications
                </span>
              </div>

              <div className="space-y-4">
                {Object.entries(selectedProject.specifications || {}).map(([key, val]) => (
                  <div key={key} className="space-y-1">
                    <div className="text-[11px] font-mono text-[#736C61] uppercase tracking-wider">
                      {key}
                    </div>
                    <div className="text-xs font-bold text-[#22211F]">
                      {val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Lab simulation hint */}
              {selectedProject.id === 'iot-esp32-dht11' && (
                <div className="p-4 rounded-xl bg-[#EDE9E1] border border-[#D5CDBD] space-y-2">
                  <div className="text-xs font-bold text-[#22211F]">
                    Interactive Node Available
                  </div>
                  <p className="text-[11px] text-[#666157]">
                    Simulate real-time temperature fluctuations, humidity thresholds, and serial UART telemetry in the Interactive Hardware Lab below.
                  </p>
                  <a
                    href="#lab"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#BA4A24] hover:underline"
                  >
                    <span>Launch Telemetry Workbench</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {selectedProject.id === 'tungsten-trioxide-thin-film' && (
                <div className="p-4 rounded-xl bg-[#EDE9E1] border border-[#D5CDBD] space-y-2">
                  <div className="text-xs font-bold text-[#22211F]">
                    Deposition Model Available
                  </div>
                  <p className="text-[11px] text-[#666157]">
                    Experiment with RF power and Ar:O2 flow ratios in the lab simulator below to calculate the resulting bandgap and UV responsivity.
                  </p>
                  <a
                    href="#lab"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#BA4A24] hover:underline"
                  >
                    <span>Open Sputtering Calculator</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
