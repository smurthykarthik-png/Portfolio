import React, { useState } from 'react';
import { nohoReviews, nohoFaqs } from '../data/nohoSiteData';
import { Star, ChevronDown, Quote, MapPin } from 'lucide-react';

export const NohoReviewsAndStory: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 bg-[#DED8CD] border-t border-[#D0C8B9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-24">
        
        {/* Editorial Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#BA4A24]">
              Design from Aotearoa
            </span>
            <h2
              className="text-4xl sm:text-6xl font-extrabold text-[#22211F] leading-[1.05] tracking-tight"
              style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
            >
              Created for the way we actually live, eat, and work today.
            </h2>
            <p className="text-base sm:text-lg text-[#524E48] leading-relaxed">
              Traditional chairs are static, heavy, and forced into rigid postures. We spent three years researching biomechanics with ergonomic scientists in Wellington to formulate a chair that breathes and flexes with you intuitively throughout the day.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-lg border border-[#C5BCAB]">
              <img
                src="/src/assets/images/noho_red_pleat_1790071212449.jpg"
                alt="Sculptural noho design presentation"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md text-xs font-medium text-[#22211F] flex items-center justify-between">
                <span>Wellington Design Studio</span>
                <span className="font-mono text-[#BA4A24]">41.2865° S, 174.7762° E</span>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Grid */}
        <div className="space-y-10">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#545E45] block mb-2">
              Loved Worldwide
            </span>
            <h3
              className="text-3xl sm:text-5xl font-extrabold text-[#22211F] tracking-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What people say about sitting in noho
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nohoReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-8 rounded-3xl bg-[#EDE9E1] border border-[#D5CDBD] flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#BA4A24]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#BA4A24]" />
                    ))}
                  </div>
                  <p className="text-sm text-[#383530] italic leading-relaxed">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D5CFBF]">
                  <div className="font-bold text-sm text-[#22211F]">{rev.author}</div>
                  <div className="text-xs text-[#6B655B]">{rev.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-8 pt-12 border-t border-[#C7BEAD]">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#BA4A24]">
              Common Questions
            </span>
            <h3
              className="text-3xl sm:text-4xl font-extrabold text-[#22211F]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Everything you need to know
            </h3>
          </div>

          <div className="space-y-4">
            {nohoFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-[#EDE9E1] border border-[#D5CDBD] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#22211F] cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#6B655B] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#BA4A24]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#524E48] leading-relaxed border-t border-[#E0DACD] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
