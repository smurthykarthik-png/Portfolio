import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Heart, Globe, Cpu } from 'lucide-react';
import { personalInfo } from '../data/karthikData';

interface NohoFooterProps {
  onOpenKarthikProfile: () => void;
  onOpenResumeModal: () => void;
}

export const NohoFooter: React.FC<NohoFooterProps> = ({
  onOpenKarthikProfile,
  onOpenResumeModal
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#EDE9E1] border-t border-[#DED8CD] py-20 px-6 sm:px-12 lg:px-16 text-[#22211F]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Newsletter & Big Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start justify-between">
          <div className="lg:col-span-7 space-y-4">
            <span
              className="text-4xl sm:text-6xl font-black tracking-tighter"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              noho
            </span>
            <p className="text-xl sm:text-2xl font-bold text-[#3B3833] max-w-lg leading-tight">
              Furniture designed to move with your body and tread lightly on the planet.
            </p>
            <p className="text-sm text-[#666157] max-w-md">
              Engineered and crafted in Aotearoa New Zealand using renewable hydro and geothermal energy.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#BA4A24] block">
              Dispatches & Circular News
            </span>

            {subscribed ? (
              <div className="p-4 rounded-2xl bg-[#E2DDD3] border border-[#D5CDBD] text-xs font-semibold text-[#545E45] flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#545E45]" />
                <span>Thank you for joining our circular design movement.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-white border border-[#D5CDBD] text-sm text-[#22211F] placeholder-[#8C8578] focus:outline-none focus:ring-2 focus:ring-[#22211F]"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-[#22211F] hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="text-[11px] text-[#736C61]">
              Zero spam. Unsubscribe anytime with one click.
            </div>
          </div>
        </div>

        {/* Engineering Attribution & Links */}
        <div className="p-6 rounded-2xl bg-[#E2DDD3] border border-[#D5CDBD] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#22211F] text-white flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#22211F]">
                Full Stack & Hardware Systems: {personalInfo.name}
              </div>
              <div className="text-[11px] text-[#615B52]">
                TCS System Engineer • ECE Graduate • Embedded Systems & VLSI Lab
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenKarthikProfile}
              className="px-4 py-2 rounded-xl bg-[#22211F] hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Explore Engineer Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenResumeModal}
              className="px-4 py-2 rounded-xl bg-white hover:bg-neutral-100 border border-[#C5BCAB] text-[#22211F] text-xs font-bold cursor-pointer"
            >
              CV / Resume
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#DED8CD] flex flex-col sm:flex-row items-center justify-between text-xs text-[#736C61] gap-4">
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Noho Home Inc.</span>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Accessibility</span>
          </div>

          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#545E45]" />
            <span className="font-medium text-[#22211F]">New Zealand • Aotearoa</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
