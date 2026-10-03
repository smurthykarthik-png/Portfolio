import React from 'react';
import {
  X,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  ExternalLink,
  Cpu,
  FileText
} from 'lucide-react';
import { personalInfo } from '../data/karthikData';

interface NohoNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuiz: () => void;
  onOpenKarthikProfile: () => void;
  onOpenResumeModal: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const NohoNavDrawer: React.FC<NohoNavDrawerProps> = ({
  isOpen,
  onClose,
  onOpenQuiz,
  onOpenKarthikProfile,
  onOpenResumeModal,
  cartCount,
  onOpenCart
}) => {
  if (!isOpen) return null;

  const scrollToSection = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#22211F]/50 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-lg bg-[#EDE9E1] h-full shadow-2xl p-6 sm:p-10 flex flex-col justify-between overflow-y-auto z-10 transition-transform duration-300">
        
        {/* Header: Logo and Close Button */}
        <div className="flex items-center justify-between pb-6 border-b border-[#D8D2C5]">
          <span
            className="text-3xl font-black text-[#22211F] tracking-tight"
            style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
          >
            noho
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenCart();
              }}
              className="relative p-2 rounded-full hover:bg-[#E0DACD] text-[#22211F] transition-colors cursor-pointer"
              title="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#BA4A24] text-white text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white shadow-xs hover:bg-neutral-100 flex items-center justify-center text-[#22211F] transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Nav Links in massive editorial typography */}
        <div className="py-8 space-y-5">
          <nav className="space-y-4">
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left text-3xl sm:text-4xl font-extrabold text-[#22211F] hover:text-[#BA4A24] transition-colors tracking-tight cursor-pointer"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              noho move™
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left text-3xl sm:text-4xl font-extrabold text-[#22211F] hover:text-[#545E45] transition-colors tracking-tight cursor-pointer"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              noho lighty™
            </button>
            <button
              onClick={() => scrollToSection('sustainability')}
              className="block w-full text-left text-3xl sm:text-4xl font-extrabold text-[#22211F] hover:text-[#BA4A24] transition-colors tracking-tight cursor-pointer"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Sustainability
            </button>
            <button
              onClick={() => scrollToSection('studio')}
              className="block w-full text-left text-3xl sm:text-4xl font-extrabold text-[#22211F] hover:text-[#968EC7] transition-colors tracking-tight cursor-pointer"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              3D Chair Studio
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuiz();
              }}
              className="block w-full text-left text-3xl sm:text-4xl font-extrabold text-[#22211F] hover:text-[#BA4A24] transition-colors tracking-tight cursor-pointer"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Chair Finder Quiz
            </button>
          </nav>
        </div>

        {/* Highlight Card: Karthik Murthy S Engineering Profile */}
        <div className="p-5 rounded-2xl bg-[#E2DCCE] border border-[#D5CDBD] space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#22211F] text-white flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#22211F]">
                Engineer Spotlight
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
              Active @ TCS
            </span>
          </div>

          <div>
            <div className="font-bold text-base text-[#22211F]">
              {personalInfo.name}
            </div>
            <div className="text-xs text-[#524E48] mt-0.5">
              Electronics & Communication Engineer • Embedded Systems & VLSI
            </div>
            <div className="text-[11px] font-mono text-[#524E48] mt-1">
              🇩🇪 German Target A1 → B2 • {personalInfo.email}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => {
                onClose();
                onOpenKarthikProfile();
              }}
              className="flex-1 py-2 px-3 rounded-lg bg-[#22211F] hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenResumeModal();
              }}
              className="py-2 px-3 rounded-lg bg-white hover:bg-neutral-50 border border-[#CFC6B5] text-[#22211F] text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-6 border-t border-[#D8D2C5] flex items-center justify-between text-xs text-[#635E55]">
          <span>© {new Date().getFullYear()} noho. Designed in Aotearoa.</span>
          <span className="font-medium text-[#22211F]">noho.ink</span>
        </div>

      </div>
    </div>
  );
};
