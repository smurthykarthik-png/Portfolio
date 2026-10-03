import React from 'react';
import { personalInfo } from '../data/karthikData';
import { ArrowUpRight, ArrowUp, Download, Mail, Phone, Cpu, Globe } from 'lucide-react';
import { smoothScrollToId } from '../lib/smoothScroll';

interface KarthikNohoFooterProps {
  onOpenResume: () => void;
}

export const KarthikNohoFooter: React.FC<KarthikNohoFooterProps> = ({ onOpenResume }) => {
  return (
    <footer className="bg-[#EDE9E1] border-t border-[#DED8CD] py-20 px-6 sm:px-12 lg:px-16 text-[#22211F]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Statement in noho style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start justify-between">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span
                className="text-3xl sm:text-5xl font-black tracking-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                karthik murthy s
              </span>
              <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-[#E2DDD3] text-[#545E45]">
                portfolio / '26
              </span>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-[#3B3833] max-w-lg leading-tight">
              Engineering hardware and systems that are rigorous, practical, and built for high-reliability production.
            </p>
            <p className="text-sm text-[#666157] max-w-md">
              Electronics & Communication Engineering graduate from Nitte Meenakshi Institute of Technology. System Engineer at Tata Consultancy Services (TCS).
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#BA4A24] block">
              Direct Contact & Coordinates
            </span>

            <div className="p-6 rounded-2xl bg-white border border-[#D5CDBD] space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#736C61]">Phone:</span>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="font-bold text-[#22211F] hover:underline">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#736C61]">Email:</span>
                <a href={`mailto:${personalInfo.email}`} className="font-bold text-[#22211F] hover:underline">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#736C61]">LinkedIn:</span>
                <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-[#22211F] hover:underline flex items-center gap-1">
                  <span>karthik-murthy-s</span>
                  <ArrowUpRight className="w-3 h-3 text-[#736C61]" />
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#736C61]">GitHub:</span>
                <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-[#22211F] hover:underline flex items-center gap-1">
                  <span>smurthykarthik-png</span>
                  <ArrowUpRight className="w-3 h-3 text-[#736C61]" />
                </a>
              </div>
            </div>

            <button
              onClick={onOpenResume}
              className="w-full py-3.5 rounded-xl bg-[#22211F] hover:bg-black text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Printable Resume (PDF)</span>
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#DED8CD] flex flex-col sm:flex-row items-center justify-between text-xs text-[#736C61] gap-4">
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Karthik Murthy S</span>
            <span>Bengaluru, India</span>
            <span>Targeting Germany (A1 → B2)</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#545E45]" />
              <span className="font-medium text-[#22211F]">Available for Global & German Roles</span>
            </div>
            <button
              onClick={() => smoothScrollToId('top')}
              className="flex items-center gap-1 font-bold text-[#22211F] hover:text-[#BA4A24] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
