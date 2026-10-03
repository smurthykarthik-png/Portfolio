import React from 'react';
import {
  Cpu,
  Layers,
  Zap,
  Server,
  Globe,
  CheckCircle2,
  Check,
  Award,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/karthikData';

export const SummarySection: React.FC = () => {
  const pillars = [
    {
      title: 'Embedded Systems & IoT',
      icon: Cpu,
      color: 'emerald',
      description:
        'Hands-on microcontroller programming (ESP32, C/C++), real-time sensor node integration (DHT11), and end-to-end cloud telematics dashboarding.'
    },
    {
      title: 'VLSI & Semiconductor Fabrication',
      icon: Layers,
      color: 'cyan',
      description:
        'Controlled laboratory RF magnetron sputtering deposition of WO3 thin films, UV photodetector optimization, and NPTEL/VSD VLSI interconnect design flows.'
    },
    {
      title: 'High-Voltage Electrical QA',
      icon: Zap,
      color: 'amber',
      description:
        'On-floor industrial manufacturing, wiring, and QA functional testing of 11KV switchgear panels and circuit breakers at Mysore Electrical Industry Limited.'
    },
    {
      title: 'Enterprise Production Engineering',
      icon: Server,
      color: 'blue',
      description:
        'Active System Engineer at TCS: Root cause analysis (RCA), Oxygen XML Editor defect resolution, SLA compliance (>99%), and ITIL change governance.'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 block">
            Executive Summary & Foundation
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
            Bridging hardware reality with software discipline.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            An Electronics & Communication Engineering graduate who combines hands-on cleanroom semiconductor fabrication with enterprise-scale production IT reliability.
          </p>
        </div>

        {/* 4 Core Competency Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-zinc-100">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Competency</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Germany Relocation & Career Goal Callout Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-emerald-950/40 border border-emerald-900/40 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-700/40 text-xs font-mono text-emerald-300">
                <Globe className="w-3.5 h-3.5" />
                <span>German Career Objective • Fachkraft Trajectory</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
                Preparing for hands-on engineering roles in Germany.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl font-normal">
                Currently holding an A1 foundation in German and actively targeting B2 proficiency. Eager to contribute technical knowledge, rigorous hardware discipline, and embedded systems problem-solving to Germany's world-class industrial, semiconductor, or automotive manufacturing sectors.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-1">
                <span className="text-[11px] font-mono text-zinc-400 block uppercase">Language Progress</span>
                <div className="text-base font-bold text-emerald-400 font-mono">German A1 Active → B2 Target</div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden mt-1.5">
                  <div className="bg-emerald-500 h-full rounded-full w-[25%]" />
                </div>
              </div>

              <a
                href="#contact"
                className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
              >
                <span>Discuss Opportunities in Germany</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
