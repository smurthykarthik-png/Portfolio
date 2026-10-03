import React from 'react';
import { projectsData } from '../data/karthikData';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { smoothScrollToId } from '../lib/smoothScroll';

const CARD_COLORS = ['#E6E0D5', '#DED8CD', '#E3DDD1', '#E6E0D5'];

export const KarthikNohoStories: React.FC = () => {
  const scrollToSection = (id: string) => smoothScrollToId(id);

  return (
    <section id="stories" className="py-24 sm:py-32 bg-[#EDE9E1] border-t border-[#DED8CD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <Reveal>
          <h2
            className="text-4xl sm:text-6xl font-extrabold text-[#22211F] tracking-tight"
            style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
          >
            Engineering notes
          </h2>
        </Reveal>
      </div>

      {/* Full-bleed horizontal scroll strip, cards bleed off the right edge — matches noho.ink's "Noho stories" */}
      <div className="mt-12 overflow-x-auto scrollbar-none">
        <div
          className="flex gap-6 pl-6 sm:pl-12 lg:pl-16 pr-6 sm:pr-12 snap-x snap-mandatory"
          style={{ scrollPaddingLeft: '1.5rem' }}
        >
          {projectsData.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => scrollToSection('projects')}
              className="relative shrink-0 w-[300px] sm:w-[380px] rounded-2xl p-7 text-left flex flex-col justify-between gap-10 snap-start cursor-pointer hover:-translate-y-1 transition-transform duration-300 group"
              style={{ backgroundColor: CARD_COLORS[idx % CARD_COLORS.length] }}
            >
              <span className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#22211F]" />

              <div className="space-y-3 pr-6">
                <h3 className="font-extrabold text-lg sm:text-xl text-[#22211F] leading-snug group-hover:text-[#BA4A24] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#524E48] leading-relaxed line-clamp-4">
                  {project.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-black/10">
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#736C61]">
                  <span>{project.period.split('–')[0].trim()}</span>
                  <span className="text-[#8C8578]">·</span>
                  <span>{project.category}</span>
                </div>
                <span className="flex items-center gap-1 text-xs font-bold text-[#22211F] group-hover:translate-x-1 transition-transform">
                  Read
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
