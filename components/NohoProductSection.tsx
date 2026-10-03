import React, { useState } from 'react';
import { nohoProducts, NohoProduct } from '../data/nohoSiteData';
import { Check, ShoppingBag, Rotate3d, Sparkles, ShieldCheck, Heart } from 'lucide-react';

interface NohoProductSectionProps {
  onAddToCart: (product: NohoProduct, selectedColor: string) => void;
}

export const NohoProductSection: React.FC<NohoProductSectionProps> = ({ onAddToCart }) => {
  const [selectedProductId, setSelectedProductId] = useState<string>('noho-move');
  const [selectedColorIndex, setSelectedColorIndex] = useState<{ [key: string]: number }>({
    'noho-move': 0,
    'noho-lighty': 0
  });
  const [chairTilt, setChairTilt] = useState<number>(0);
  const [isAddedFeedback, setIsAddedFeedback] = useState<boolean>(false);

  const currentProduct = nohoProducts.find((p) => p.id === selectedProductId) || nohoProducts[0];
  const activeColor = currentProduct.colors[selectedColorIndex[currentProduct.id] || 0];

  const handleAdd = () => {
    onAddToCart(currentProduct, activeColor.name);
    setIsAddedFeedback(true);
    setTimeout(() => setIsAddedFeedback(false), 2000);
  };

  return (
    <section id="products" className="py-24 sm:py-32 bg-[#DED8CD] border-t border-[#D0C8B9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#C7BEAD] pb-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#BA4A24] block mb-2">
              Signature Seating
            </span>
            <h2
              className="text-4xl sm:text-6xl font-extrabold text-[#22211F] tracking-tight"
              style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
            >
              Engineered for natural movement
            </h2>
          </div>

          {/* Product Switcher Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-[#EDE9E1] rounded-2xl border border-[#D5CDBD] shrink-0">
            {nohoProducts.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedProductId(p.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold tracking-tight transition-all cursor-pointer ${
                  selectedProductId === p.id
                    ? 'bg-[#22211F] text-white shadow-xs'
                    : 'text-[#615B52] hover:text-[#22211F]'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Details & Interactive Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Area / Interactive Flex Viewer (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div
              className="relative w-full aspect-square sm:aspect-4/3 rounded-3xl overflow-hidden shadow-md flex items-center justify-center transition-all duration-500 p-8 sm:p-12 border border-[#C5BCAB]"
              style={{ backgroundColor: activeColor.hex === '#1F1E1D' ? '#EDE9E1' : '#E8E3D8' }}
            >
              {/* Product Image with Interactive Tilt Simulator */}
              <div
                className="relative w-full h-full flex items-center justify-center transition-transform duration-200"
                style={{
                  transform: `rotate(${chairTilt * 0.4}deg) translateY(${Math.abs(chairTilt) * -1.5}px)`
                }}
              >
                <img
                  src={activeColor.image}
                  alt={`${currentProduct.name} in ${activeColor.name}`}
                  className="max-h-full max-w-full object-contain drop-shadow-2xl transition-all duration-500 rounded-xl"
                />
              </div>

              {/* Flex Tilt Badge */}
              <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs text-xs font-semibold text-[#22211F] shadow-xs flex items-center gap-1.5">
                <Rotate3d className="w-3.5 h-3.5 text-[#BA4A24]" />
                <span>Auxetic Dynamic Flex</span>
              </div>

              {/* Material Origin Pill */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-xs text-xs text-[#22211F] shadow-xs font-medium">
                {currentProduct.sustainabilityRating}
              </div>
            </div>

            {/* Interactive Tilt Slider to simulate chair flexing */}
            <div className="p-5 rounded-2xl bg-[#EDE9E1] border border-[#D5CDBD] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#22211F]">
                <Rotate3d className="w-4 h-4 text-[#BA4A24]" />
                <span>Simulate Dynamic Flex:</span>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-64">
                <span className="text-[11px] font-mono text-[#6B655B]">Recline</span>
                <input
                  type="range"
                  min="-15"
                  max="15"
                  value={chairTilt}
                  onChange={(e) => setChairTilt(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#D2CAB8] rounded-lg appearance-none cursor-pointer accent-[#22211F]"
                />
                <span className="text-[11px] font-mono text-[#6B655B]">Forward</span>
              </div>

              <button
                onClick={() => setChairTilt(0)}
                className="text-[11px] font-mono text-[#BA4A24] hover:underline cursor-pointer"
              >
                Reset (0°)
              </button>
            </div>
          </div>

          {/* Right Spec & Purchasing Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3
                  className="text-3xl sm:text-4xl font-extrabold text-[#22211F] tracking-tight"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {currentProduct.name}
                </h3>
                <span className="text-2xl sm:text-3xl font-black text-[#22211F]">
                  ${currentProduct.price}
                </span>
              </div>
              <p className="text-sm font-medium text-[#BA4A24]">
                {currentProduct.tagline}
              </p>
              <p className="text-sm text-[#524E48] leading-relaxed">
                {currentProduct.description}
              </p>
            </div>

            {/* Colorway Selection */}
            <div className="space-y-3 pt-2 border-t border-[#C7BEAD]">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#22211F]">Color:</span>
                <span className="font-medium text-[#6B655B]">{activeColor.name}</span>
              </div>

              <div className="flex items-center gap-3">
                {currentProduct.colors.map((c, idx) => {
                  const isColorActive = (selectedColorIndex[currentProduct.id] || 0) === idx;
                  return (
                    <button
                      key={c.name}
                      onClick={() =>
                        setSelectedColorIndex((prev) => ({
                          ...prev,
                          [currentProduct.id]: idx
                        }))
                      }
                      className={`w-10 h-10 rounded-full transition-all flex items-center justify-center cursor-pointer shadow-xs ${
                        isColorActive
                          ? 'ring-3 ring-[#22211F] scale-110 shadow-md'
                          : 'hover:scale-105 opacity-80 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {isColorActive && (
                        <Check
                          className={`w-4 h-4 ${
                            c.hex === '#1F1E1D' || c.hex === '#545E45' || c.hex === '#BA4A24'
                              ? 'text-white'
                              : 'text-[#22211F]'
                          }`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Key Engineering Features */}
            <div className="space-y-2.5 pt-2 border-t border-[#C7BEAD]">
              <span className="text-xs font-bold text-[#22211F] uppercase tracking-wider block">
                Features & Construction
              </span>
              <ul className="space-y-2">
                {currentProduct.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#45413B]">
                    <div className="w-4 h-4 rounded-full bg-[#E5DFD2] text-[#22211F] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Purchase CTA */}
            <div className="space-y-3 pt-4">
              <button
                onClick={handleAdd}
                className="w-full py-4 px-6 rounded-2xl bg-[#22211F] hover:bg-black text-white font-bold text-base flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>
                  {isAddedFeedback ? 'Added to Bag ✓' : `Add ${currentProduct.name} to Bag • $${currentProduct.price}`}
                </span>
              </button>

              <div className="flex items-center justify-center gap-6 text-[11px] text-[#696358] pt-1">
                <span>Free Express Shipping</span>
                <span>•</span>
                <span>100-Day Home Trial</span>
                <span>•</span>
                <span>10-Yr Guarantee</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
