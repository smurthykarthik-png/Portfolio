import React, { useState, useEffect, useRef } from 'react';
import { nohoHeroTiles, PhotoTile } from '../data/nohoSiteData';

interface NohoHeroProps {
  onOpenMenu: () => void;
  onSelectTile?: (tile: PhotoTile) => void;
}

export const NohoHero: React.FC<NohoHeroProps> = ({ onOpenMenu, onSelectTile }) => {
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
  const [activeTileId, setActiveTileId] = useState<string | null>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);

  // Subtle interactive magnetic dot reaction to cursor movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!leftPanelRef.current) return;
    const rect = leftPanelRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const deltaX = (mouseX - centerX) * 0.05;
    const deltaY = (mouseY - centerY) * 0.05;
    setDotPos({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setDotPos({ x: 0, y: 0 });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#EDE9E1]">
      
      {/* ---------------- LEFT HALF: PALE PUTTY HERO ---------------- */}
      <div
        ref={leftPanelRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full lg:w-1/2 min-h-[550px] lg:min-h-screen bg-[#EDE9E1] px-6 sm:px-12 lg:px-16 pt-8 pb-10 flex flex-col justify-between select-none relative z-10"
      >
        {/* Top: Lowercase 'noho' Logo */}
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-4xl sm:text-5xl font-black tracking-[-0.04em] text-[#22211F] hover:opacity-85 transition-opacity"
            style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
          >
            noho
          </a>

          {/* Mobile Menu trigger on small screens */}
          <button
            onClick={onOpenMenu}
            className="lg:hidden w-11 h-11 bg-white rounded-lg shadow-xs flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:bg-neutral-50 transition-colors"
            aria-label="Open menu"
          >
            <span className="w-5 h-[2px] bg-[#22211F] rounded-full" />
            <span className="w-5 h-[2px] bg-[#22211F] rounded-full" />
            <span className="w-5 h-[2px] bg-[#22211F] rounded-full" />
          </button>
        </div>

        {/* Center: Massive Bold Editorial Headline */}
        <div className="my-auto py-12 sm:py-16">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px] font-extrabold text-[#22211F] leading-[0.98] tracking-[-0.035em]"
            style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
          >
            We make furniture<br />
            that's flexible, and<br />
            playful, to fit<br />
            modern life
          </h1>

          {/* Interactive Floating Black Dot from screenshot */}
          <div className="pt-12 sm:pt-16 pb-4">
            <div
              className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#22211F] transition-transform duration-150 ease-out cursor-pointer shadow-sm hover:scale-125"
              style={{
                transform: `translate(${dotPos.x}px, ${dotPos.y}px)`
              }}
              title="Interactive flex indicator"
            />
          </div>
        </div>

        {/* Bottom Left: Location / Design Origin */}
        <div className="text-base sm:text-lg font-medium text-[#22211F] tracking-tight">
          New design from New Zealand
        </div>
      </div>

      {/* ---------------- RIGHT HALF: KHAKI BACKGROUND & STAGGERED IMAGE GRID ---------------- */}
      <div className="w-full lg:w-1/2 min-h-screen bg-[#DED8CD] relative p-4 sm:p-8 lg:p-12 overflow-hidden flex flex-col">
        
        {/* Top Right: White Square Menu Button (exact match from screenshot) */}
        <div className="hidden lg:flex justify-end mb-6 z-20">
          <button
            onClick={onOpenMenu}
            className="w-12 h-12 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:bg-neutral-50 hover:shadow-md transition-all group"
            aria-label="Toggle menu"
          >
            <span className="w-5 h-[2px] bg-[#22211F] rounded-full group-hover:scale-x-110 transition-transform" />
            <span className="w-5 h-[2px] bg-[#22211F] rounded-full group-hover:scale-x-90 transition-transform" />
            <span className="w-5 h-[2px] bg-[#22211F] rounded-full group-hover:scale-x-110 transition-transform" />
          </button>
        </div>

        {/* Staggered Masonry / Multi-Column Image Grid matching screenshot */}
        <div className="flex-1 overflow-x-auto lg:overflow-visible pb-8 scrollbar-none">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 min-w-[580px] lg:min-w-0">
            
            {/* COLUMN 1 */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Tile 1: Upside down on black chair (Beige) */}
              <div
                onClick={() => onSelectTile?.(nohoHeroTiles[0])}
                onMouseEnter={() => setActiveTileId(nohoHeroTiles[0].id)}
                onMouseLeave={() => setActiveTileId(null)}
                className="relative aspect-square w-full rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 group"
                style={{ backgroundColor: nohoHeroTiles[0].bgColor }}
              >
                <img
                  src={nohoHeroTiles[0].image}
                  alt={nohoHeroTiles[0].alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-white/90 text-[#22211F] opacity-0 group-hover:opacity-100 transition-opacity">
                  {nohoHeroTiles[0].label}
                </span>
              </div>

              {/* Spacer / Stagger gap */}
              <div className="h-6 sm:h-12 hidden sm:block" />

              {/* Tile 6: Person with book on face (Lavender) */}
              <div
                onClick={() => onSelectTile?.(nohoHeroTiles[5])}
                onMouseEnter={() => setActiveTileId(nohoHeroTiles[5].id)}
                onMouseLeave={() => setActiveTileId(null)}
                className="relative aspect-square w-full rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 group"
                style={{ backgroundColor: nohoHeroTiles[5].bgColor }}
              >
                <img
                  src={nohoHeroTiles[5].image}
                  alt={nohoHeroTiles[5].alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-white/90 text-[#22211F] opacity-0 group-hover:opacity-100 transition-opacity">
                  {nohoHeroTiles[5].label}
                </span>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Tile 2: Yellow chair over face (Terracotta) */}
              <div
                onClick={() => onSelectTile?.(nohoHeroTiles[1])}
                onMouseEnter={() => setActiveTileId(nohoHeroTiles[1].id)}
                onMouseLeave={() => setActiveTileId(null)}
                className="relative aspect-square w-full rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 group"
                style={{ backgroundColor: nohoHeroTiles[1].bgColor }}
              >
                <img
                  src={nohoHeroTiles[1].image}
                  alt={nohoHeroTiles[1].alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-white/90 text-[#22211F] opacity-0 group-hover:opacity-100 transition-opacity">
                  {nohoHeroTiles[1].label}
                </span>
              </div>

              {/* Tile 3: Red pleated dress (Beige) */}
              <div
                onClick={() => onSelectTile?.(nohoHeroTiles[2])}
                onMouseEnter={() => setActiveTileId(nohoHeroTiles[2].id)}
                onMouseLeave={() => setActiveTileId(null)}
                className="relative aspect-square w-full rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 group"
                style={{ backgroundColor: nohoHeroTiles[2].bgColor }}
              >
                <img
                  src={nohoHeroTiles[2].image}
                  alt={nohoHeroTiles[2].alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-white/90 text-[#22211F] opacity-0 group-hover:opacity-100 transition-opacity">
                  {nohoHeroTiles[2].label}
                </span>
              </div>

              {/* Tile 7: Stack of yellow chairs (Olive Green) */}
              <div
                onClick={() => onSelectTile?.(nohoHeroTiles[6])}
                onMouseEnter={() => setActiveTileId(nohoHeroTiles[6].id)}
                onMouseLeave={() => setActiveTileId(null)}
                className="relative aspect-square w-full rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 group"
                style={{ backgroundColor: nohoHeroTiles[6].bgColor }}
              >
                <img
                  src={nohoHeroTiles[6].image}
                  alt={nohoHeroTiles[6].alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-white/90 text-[#22211F] opacity-0 group-hover:opacity-100 transition-opacity">
                  {nohoHeroTiles[6].label}
                </span>
              </div>
            </div>

            {/* COLUMN 3 */}
            <div className="flex flex-col gap-4 sm:gap-6 pt-8 sm:pt-14">
              {/* Tile 4: Person walking holding yellow chair (Lavender) */}
              <div
                onClick={() => onSelectTile?.(nohoHeroTiles[3])}
                onMouseEnter={() => setActiveTileId(nohoHeroTiles[3].id)}
                onMouseLeave={() => setActiveTileId(null)}
                className="relative aspect-square w-full rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 group"
                style={{ backgroundColor: nohoHeroTiles[3].bgColor }}
              >
                <img
                  src={nohoHeroTiles[3].image}
                  alt={nohoHeroTiles[3].alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-white/90 text-[#22211F] opacity-0 group-hover:opacity-100 transition-opacity">
                  {nohoHeroTiles[3].label}
                </span>
              </div>

              {/* Tile 5: Moss creature on white chair (Yellow) */}
              <div
                onClick={() => onSelectTile?.(nohoHeroTiles[4])}
                onMouseEnter={() => setActiveTileId(nohoHeroTiles[4].id)}
                onMouseLeave={() => setActiveTileId(null)}
                className="relative aspect-square w-full rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 group"
                style={{ backgroundColor: nohoHeroTiles[4].bgColor }}
              >
                <img
                  src={nohoHeroTiles[4].image}
                  alt={nohoHeroTiles[4].alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-white/90 text-[#22211F] opacity-0 group-hover:opacity-100 transition-opacity">
                  {nohoHeroTiles[4].label}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
