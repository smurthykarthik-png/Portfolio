import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import { educationData } from '../data/karthikData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 block">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
            Education & credentials.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Rigorous engineering education in Electronics & Communication complemented by foundational science schooling.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                
                {/* Badge & Period */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
                    {item.badge}
                  </span>
                  {item.grade && (
                    <span className="text-[11px] font-mono font-bold text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
                      {item.grade}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-emerald-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-zinc-100 leading-snug">
                    {item.degree}
                  </h3>
                  {item.field && (
                    <p className="text-xs text-emerald-400 font-medium">
                      {item.field}
                    </p>
                  )}
                  <div className="text-xs text-zinc-300 font-semibold pt-1">
                    {item.institution}
                  </div>
                </div>

                {/* Coursework if available */}
                {item.keyCoursework && (
                  <div className="pt-2 space-y-1.5 border-t border-zinc-800/80">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      Key Engineering Subject Matter:
                    </div>
                    <ul className="space-y-1">
                      {item.keyCoursework.map((course, cIdx) => (
                        <li key={cIdx} className="text-xs text-zinc-400 flex items-center gap-1.5">
                          <span className="text-emerald-400 text-[10px]">•</span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

              {/* Footer info: Period & Location */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-zinc-500" />
                  {item.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-zinc-500" />
                  {item.location}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
