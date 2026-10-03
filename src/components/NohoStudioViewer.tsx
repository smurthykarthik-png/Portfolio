import React, { useState } from 'react';
import { RotateCw, Maximize2, Shield, Leaf, Award } from 'lucide-react';
import { nohoHeroTiles } from '../data/nohoSiteData';

export const NohoStudioViewer: React.FC = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [selectedBg, setSelectedBg] = useState<'putty' | 'terracotta' | 'olive' | 'lavender'>('putty');

  const bgStyles = {
    putty: 'bg-[#EDE9E1]',
    terracotta: 'bg-[#BA4A24]',
    olive: 'bg-[#545E45]',
    lavender: 'bg-[#968EC7]'
  };

  return (
    <section id="studio" className="py-24 sm:py-32 bg-[#EDE9E1] border-t border-[#DED8CD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#BA4A24]">
              3D Interactive Studio
            </span>
            <h2
              className="text-4xl sm:text-6xl font-extrabold text-[#22211F] tracking-tight"
              style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
            >
              Every angle, reconsidered.
            </h2>
          </div>

          {/* Palette selector */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#666157]">Studio Backdrop:</span>
            <div className="flex items-center gap-2 p-1.5 bg-[#E2DDD3] rounded-xl border border-[#D5CDBD]">
              {(['putty', 'terracotta', 'olive', 'lavender'] as const).map((bg) => (
                <button
                  key={bg}
                  onClick={() => setSelectedBg(bg)}
                  className={`w-6 h-6 rounded-lg transition-transform cursor-pointer ${
                    selectedBg === bg ? 'ring-2 ring-[#22211F] scale-110' : 'opacity-70 hover:opacity-100'
                  } ${bgStyles[bg]}`}
                  title={bg}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 3D Canvas Stage */}
        <div
          className={`relative w-full h-[450px] sm:h-[550px] rounded-3xl overflow-hidden shadow-lg transition-colors duration-500 border border-[#D0C8B9] flex flex-col items-center justify-center select-none ${bgStyles[selectedBg]}`}
        >
          {/* Main Visual Image Rotatable */}
          <div
            className="relative w-72 sm:w-96 aspect-square transition-transform duration-100 flex items-center justify-center cursor-grab active:cursor-grabbing"
            style={{ transform: `rotateY(${rotationAngle}deg)` }}
            onMouseDown={() => setIsRotating(true)}
            onMouseUp={() => setIsRotating(false)}
          >
            <img
              src="/src/assets/images/noho_stack_chairs_1790071285391.jpg"
              alt="noho 3D rotatable model"
              className="max-h-full max-w-full object-contain drop-shadow-2xl rounded-2xl"
            />
          </div>

          {/* Control overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#22211F]">
              <RotateCw className="w-4 h-4 text-[#BA4A24]" />
              <span>360° Studio Orbit:</span>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-72">
              <span className="text-[11px] font-mono text-[#666157]">0°</span>
              <input
                type="range"
                min="-180"
                max="180"
                value={rotationAngle}
                onChange={(e) => setRotationAngle(Number(e.target.value))}
                className="w-full h-1.5 bg-[#D5CDBD] rounded-lg appearance-none cursor-pointer accent-[#22211F]"
              />
              <span className="text-[11px] font-mono text-[#666157]">360°</span>
            </div>

            <div className="text-xs font-mono font-bold text-[#22211F]">
              Angle: {rotationAngle}°
            </div>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[#DED8CD]">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#22211F] text-white flex items-center justify-center">
              <Leaf className="w-5 h-5 text-[#968EC7]" />
            </div>
            <h3 className="text-xl font-bold text-[#22211F]">Ghost Net Recovery</h3>
            <p className="text-sm text-[#524E48] leading-relaxed">
              Every chair purges 3.5 kilograms of abandoned oceanic drift nets that threaten marine life across the southern hemisphere.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#22211F] text-white flex items-center justify-center">
              <Award className="w-5 h-5 text-[#BA4A24]" />
            </div>
            <h3 className="text-xl font-bold text-[#22211F]">Global Design Honours</h3>
            <p className="text-sm text-[#524E48] leading-relaxed">
              Awarded the Red Dot Best of the Best and Best Award Gold for breakthrough industrial ergonomic engineering.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#22211F] text-white flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#545E45]" />
            </div>
            <h3 className="text-xl font-bold text-[#22211F]">10-Year Built to Last</h3>
            <p className="text-sm text-[#524E48] leading-relaxed">
              Engineered and tested to withstand over 200,000 continuous flex cycles under rigorous commercial BIFMA standards.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
