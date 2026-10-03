import React, { useEffect, useState } from 'react';

interface KarthikNohoTopNavProps {
  onOpenMenu: () => void;
}

export const KarthikNohoTopNav: React.FC<KarthikNohoTopNavProps> = ({ onOpenMenu }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-10 pt-4 sm:pt-5">
      {/* A distinct, solid floating bar — not a transparent overlay — so scrolling content never bleeds through it */}
      <div className="max-w-7xl mx-auto rounded-2xl bg-[#EDE9E1]/95 backdrop-blur-md border border-[#D5CDBD] shadow-sm overflow-hidden">
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4">
          <a
            href="/"
            className="min-w-0 truncate text-lg sm:text-2xl font-black tracking-[-0.04em] text-[#22211F] hover:opacity-85 transition-opacity flex items-center gap-3"
            style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
          >
            karthik murthy s
            <span className="hidden sm:inline-block text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-white text-[#545E45] border border-[#D5CDBD]">
              portfolio / '26
            </span>
          </a>

          <button
            onClick={onOpenMenu}
            className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:bg-neutral-50 hover:shadow-md transition-all group"
            aria-label="Open menu"
          >
            <span className="w-4 h-[2px] bg-[#22211F] rounded-full group-hover:scale-x-110 transition-transform" />
            <span className="w-4 h-[2px] bg-[#22211F] rounded-full group-hover:scale-x-90 transition-transform" />
            <span className="w-4 h-[2px] bg-[#22211F] rounded-full group-hover:scale-x-110 transition-transform" />
          </button>
        </div>

        {/* Reading-progress hairline along the bottom edge of the bar */}
        <div className="h-[2px] w-full bg-[#D5CDBD]/60">
          <div
            className="h-full bg-[#BA4A24] transition-[width] duration-150 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
