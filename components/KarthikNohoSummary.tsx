import React, { useState } from 'react';
import { personalInfo } from '../data/karthikData';
import { ArrowRight, CheckCircle2, Cpu, Wrench, Shield, Globe } from 'lucide-react';
import { Reveal } from './Reveal';

export const KarthikNohoSummary: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      title: 'Semiconductor & Thin Films',
      category: 'Materials & Fabrication',
      icon: '🔬',
      badgeColor: '#BA4A24',
      description:
        'Hands-on expertise in RF magnetron sputtering, tungsten trioxide (WO3) thin-film characterization, and UV photodetector optimization under clean laboratory conditions.',
      bullets: [
        'RF Sputtering deposition parameter optimization',
        'Optical bandgap (Eg) and UV responsivity analysis',
        'Cleanroom protocol and precision scientific instrumentation'
      ]
    },
    {
      title: 'Embedded Systems & IoT',
      category: 'Microcontrollers & Sensors',
      icon: '📟',
      badgeColor: '#545E45',
      description:
        'Complete end-to-end telemetry system development using ESP32 dual-core architectures, DHT11 digital sensors, and Arduino Cloud MQTT brokers.',
      bullets: [
        'ESP32 microcontroller programming in C/C++',
        'Sensor integration with threshold warning automation',
        'Cloud telemetry dashboarding and remote telematics'
      ]
    },
    {
      title: 'Enterprise IT & Cloud Support',
      category: 'Tata Consultancy Services',
      icon: '🐧',
      badgeColor: '#22211F',
      description:
        'Active professional reliability in 24x7 production computing environments. Structured root cause analysis (RCA), ITIL change governance, and Oxygen XML Editor application support.',
      bullets: [
        'Production application uptime and incident resolution within SLA',
        'ServiceNow ITSM configuration, CMDB & CSDM data models',
        'Automated CI/CD pipeline deployment to Linux servers'
      ]
    }
  ];

  return (
    <section id="summary" className="py-24 sm:py-32 bg-[#EDE9E1] border-t border-[#DED8CD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-16">
        
        {/* Section intro — proper hierarchy: eyebrow, a real headline, then the illustrated statement as support */}
        <div className="max-w-4xl space-y-5">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#BA4A24] block">
            01 / Engineering Profile & Specialization
          </span>

          <Reveal>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#22211F] leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
            >
              Hands-on across hardware, firmware & infrastructure
            </h2>
          </Reveal>

          <p className="text-lg sm:text-xl text-[#3D3A35] font-medium leading-snug">
            My engineering practice is forged with hands-on disciplines like RF sputtering 🔬, ESP32 microcontrollers 📟, and production Linux servers 🐧
          </p>

          <p className="text-base text-[#524E48] font-normal leading-relaxed max-w-2xl">
            {personalInfo.summary}
          </p>
        </div>

        {/* 3 Interactive Material / Discipline Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const isSelected = selectedPillar === idx;
            return (
              <Reveal key={pillar.title} delay={idx * 100}>
              <div
                onClick={() => setSelectedPillar(idx)}
                className={`p-8 rounded-3xl transition-all duration-300 cursor-pointer border flex flex-col justify-between space-y-6 ${
                  isSelected
                    ? 'bg-[#E3DDD1] border-[#22211F] shadow-lg -translate-y-1'
                    : 'bg-[#EDE9E1] border-[#DED8CD] hover:border-[#B5AEA1]'
                }`}
              >
                <div className="space-y-4">
                  <div className="text-5xl">{pillar.icon}</div>

                  <div>
                    <span
                      className="text-xs font-mono uppercase tracking-wider font-bold block"
                      style={{ color: pillar.badgeColor }}
                    >
                      {pillar.category}
                    </span>
                    <h3 className="text-2xl font-bold text-[#22211F] mt-1">
                      {pillar.title}
                    </h3>
                  </div>

                  {isSelected && (
                    <>
                      <p className="text-sm text-[#524E48] leading-relaxed">
                        {pillar.description}
                      </p>

                      <ul className="space-y-1.5 pt-2 border-t border-[#D5CFBF]">
                        {pillar.bullets.map((b, i) => (
                          <li key={i} className="text-xs text-[#3D3A35] flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <div className="pt-4 border-t border-[#D5CFBF] flex items-center justify-between text-xs font-semibold text-[#22211F]">
                  <span>Pillar 0{idx + 1}</span>
                  <div className="flex items-center gap-1 text-[#BA4A24]">
                    <span>{isSelected ? 'Selected' : 'View details'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>

        {/* Industrial Metrics & German Trajectory Bar */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#DED8CD] border border-[#D0C8B9] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#545E45]">
              International Career Objective
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#22211F] tracking-tight">
              Actively targeting hands-on hardware engineering roles in Germany.
            </h3>
            <p className="text-sm text-[#524E48] max-w-xl">
              Studying German language (currently A1, targeting professional B2 fluency). Eager to contribute technical proficiency in embedded systems, semiconductor fabrication, and automation to Germany's advanced industrial ecosystem.
            </p>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <Reveal delay={0} className="text-center px-4">
              <div className="text-4xl sm:text-5xl font-black text-[#22211F]">&gt;99%</div>
              <div className="text-xs font-mono text-[#666157] mt-1">TCS SLA Adherence</div>
            </Reveal>
            <div className="h-12 w-px bg-[#C4BCAB]" />
            <Reveal delay={120} className="text-center px-4">
              <div className="text-4xl sm:text-5xl font-black text-[#BA4A24]">11 kV</div>
              <div className="text-xs font-mono text-[#666157] mt-1">Switchgear QA</div>
            </Reveal>
            <div className="h-12 w-px bg-[#C4BCAB]" />
            <Reveal delay={240} className="text-center px-4">
              <div className="text-4xl sm:text-5xl font-black text-[#545E45]">A1→B2</div>
              <div className="text-xs font-mono text-[#666157] mt-1">German Language</div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
};
