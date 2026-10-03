import React from 'react';
import { X, ArrowRight, Download, Mail, Phone, ArrowUpRight, Cpu } from 'lucide-react';
import { personalInfo } from '../data/karthikData';
import { smoothScrollToId } from '../lib/smoothScroll';

interface KarthikNohoDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const KarthikNohoDrawer: React.FC<KarthikNohoDrawerProps> = ({
  isOpen,
  onClose,
  onOpenResume
}) => {
  if (!isOpen) return null;

  const navLinks = [
    { label: 'Portfolio Intro', href: '#', tag: '01' },
    { label: 'Engineering Pillars', href: '#summary', tag: '02' },
    { label: 'Skills & Arsenal', href: '#skills', tag: '03' },
    { label: 'Selected Projects', href: '#projects', tag: '04' },
    { label: 'Interactive Lab', href: '#lab', tag: '05' },
    { label: 'Career & Credentials', href: '#experience', tag: '06' },
    { label: 'Engineering Notes', href: '#stories', tag: '07' },
    { label: 'Contact & Hire', href: '#contact', tag: '08' }
  ];

  const handleNavClick = (href: string) => {
    onClose();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const id = href.replace('#', '');
    setTimeout(() => smoothScrollToId(id), 150);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#22211F]/50 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#EDE9E1] h-full shadow-2xl p-6 sm:p-10 flex flex-col justify-between overflow-y-auto z-10 border-l border-[#D8D2C5]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#D8D2C5]">
          <div className="flex items-center gap-2">
            <span
              className="text-2xl font-black tracking-tight text-[#22211F]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              karthik murthy s
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#E2DDD3] text-[#545E45]">
              portfolio / '26
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white shadow-xs hover:bg-neutral-100 flex items-center justify-center text-[#22211F] cursor-pointer transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Editorial Navigation Links in noho style */}
        <div className="my-auto py-8 space-y-4">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="w-full group flex items-center justify-between py-2 text-left cursor-pointer"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-mono font-bold text-[#BA4A24]">
                  {item.tag}
                </span>
                <span
                  className="text-2xl sm:text-3xl font-bold text-[#22211F] group-hover:text-[#BA4A24] transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {item.label}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#22211F] group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-[#D8D2C5] space-y-4">
          <button
            onClick={() => {
              onClose();
              onOpenResume();
            }}
            className="w-full py-4 rounded-xl bg-[#22211F] hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Printable CV (PDF)</span>
          </button>

          <div className="p-4 rounded-2xl bg-white border border-[#D5CDBD] space-y-2 text-xs text-[#22211F]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#736C61]">Email:</span>
              <a href={`mailto:${personalInfo.email}`} className="font-bold hover:underline">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#736C61]">Phone:</span>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="font-bold hover:underline">
                {personalInfo.phone}
              </a>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-neutral-100">
              <span className="font-mono text-[11px] text-[#736C61]">Target:</span>
              <span className="font-semibold text-[#545E45]">Germany (A1 → B2)</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
