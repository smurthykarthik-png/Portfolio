import React, { useState } from 'react';
import { nohoSustainabilityCards } from '../data/nohoSiteData';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const NohoSustainability: React.FC = () => {
  const [selectedIngredient, setSelectedIngredient] = useState<number>(0);

  return (
    <section id="sustainability" className="py-24 sm:py-32 bg-[#EDE9E1] border-t border-[#DED8CD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-16">
        
        {/* Massive Statement with signature emojis as seen on noho.ink */}
        <div className="max-w-5xl space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#BA4A24] block">
            Pure Circular Design
          </span>
          <h2
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#22211F] leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
          >
            Our furniture 🪑 is made from sustainable ingredients 🦶 like castor 🌰 beans, old carpets 🧶 and recycled fishing nets 🐟
          </h2>
          <p className="text-base sm:text-xl text-[#524E48] font-normal leading-relaxed max-w-3xl">
            Most chairs sit in landfills for centuries. We re-engineered polymer chemistry so that industrial waste and discarded ocean drift nets become high-performance, dynamic flex chairs built to last decades.
          </p>
        </div>

        {/* 3 Interactive Material Ingredient Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {nohoSustainabilityCards.map((card, idx) => {
            const isSelected = selectedIngredient === idx;
            return (
              <div
                key={card.title}
                onClick={() => setSelectedIngredient(idx)}
                className={`p-8 rounded-3xl transition-all duration-300 cursor-pointer border flex flex-col justify-between space-y-6 ${
                  isSelected
                    ? 'bg-[#E3DDD1] border-[#22211F] shadow-lg -translate-y-1'
                    : 'bg-[#EDE9E1] border-[#DED8CD] hover:border-[#B5AEA1]'
                }`}
              >
                <div className="space-y-4">
                  <div className="text-5xl">{card.icon}</div>
                  
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#666157] block">
                      {card.material}
                    </span>
                    <h3 className="text-2xl font-bold text-[#22211F] mt-1">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#524E48] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D5CFBF] flex items-center justify-between text-xs font-semibold text-[#22211F]">
                  <span>Ingredient 0{idx + 1}</span>
                  <div className="flex items-center gap-1 text-[#BA4A24]">
                    <span>Explore Chemistry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Bar */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#DED8CD] border border-[#D0C8B9] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#545E45]">
              Zero Compromise Lifecycle
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#22211F] tracking-tight">
              3.5 kilograms of ocean ghost nets saved in every single chair.
            </h3>
            <p className="text-sm text-[#524E48] max-w-xl">
              Manufactured with 100% renewable geothermal & hydro energy in New Zealand. 100% circular and fully recyclable at the end of its lifespan.
            </p>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <div className="text-center px-4">
              <div className="text-4xl sm:text-5xl font-black text-[#22211F]">99%</div>
              <div className="text-xs font-mono text-[#666157] mt-1">Recycled Polymers</div>
            </div>
            <div className="h-12 w-px bg-[#C4BCAB]" />
            <div className="text-center px-4">
              <div className="text-4xl sm:text-5xl font-black text-[#BA4A24]">10 YR</div>
              <div className="text-xs font-mono text-[#666157] mt-1">Full Warranty</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
