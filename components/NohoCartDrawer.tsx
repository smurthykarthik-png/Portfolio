import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { NohoProduct } from '../data/nohoSiteData';

export interface CartItem {
  id: string;
  product: NohoProduct;
  selectedColor: string;
  quantity: number;
}

interface NohoCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const NohoCartDrawer: React.FC<NohoCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, it) => acc + it.product.price * it.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      <div onClick={onClose} className="fixed inset-0 bg-[#22211F]/50 backdrop-blur-xs" />

      <div className="relative w-full max-w-md bg-[#EDE9E1] h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[#D8D2C5]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#22211F]" />
            <h3
              className="text-2xl font-black text-[#22211F]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Your Bag
            </h3>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-[#E0DACD] text-[#22211F]">
              {items.reduce((acc, it) => acc + it.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white shadow-xs hover:bg-neutral-100 flex items-center justify-center text-[#22211F] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 py-6 overflow-y-auto space-y-4">
          {items.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <ShoppingBag className="w-12 h-12 text-[#B5AEA1] mx-auto" />
              <p className="font-bold text-base text-[#22211F]">Your bag is empty</p>
              <p className="text-xs text-[#6B655B] max-w-xs mx-auto">
                Explore the noho move™ and noho lighty™ chairs engineered from sustainable ocean polymers.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-white border border-[#D5CDBD] flex gap-4 items-center shadow-xs"
              >
                <div className="w-16 h-16 rounded-xl bg-[#EDE9E1] overflow-hidden flex items-center justify-center shrink-0">
                  <img
                    src={
                      item.product.colors.find((c) => c.name === item.selectedColor)?.image ||
                      item.product.colors[0].image
                    }
                    alt={item.product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm text-[#22211F] truncate">
                    {item.product.name}
                  </div>
                  <div className="text-xs text-[#6B655B]">{item.selectedColor}</div>
                  <div className="font-mono text-xs font-bold text-[#BA4A24] mt-1">
                    ${item.product.price}
                  </div>
                </div>

                {/* Quantities */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-[#D5CDBD] rounded-lg overflow-hidden bg-[#EDE9E1]">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-7 h-7 flex items-center justify-center text-xs font-bold text-[#22211F] hover:bg-neutral-200 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-7 text-center text-xs font-bold text-[#22211F]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-7 h-7 flex items-center justify-center text-xs font-bold text-[#22211F] hover:bg-neutral-200 cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout */}
        {items.length > 0 && (
          <div className="pt-4 border-t border-[#D8D2C5] space-y-4">
            <div className="space-y-1.5 text-xs text-[#524E48]">
              <div className="flex items-center justify-between">
                <span>Carbon-Neutral Freight</span>
                <span className="font-mono font-bold text-[#545E45]">FREE</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Ocean Net Surcharge</span>
                <span className="font-mono font-bold">$0.00</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[#D8D2C5] text-base font-extrabold text-[#22211F]">
                <span>Total</span>
                <span className="font-mono">${subtotal}</span>
              </div>
            </div>

            <button
              onClick={onCheckout}
              className="w-full py-4 rounded-xl bg-[#22211F] hover:bg-black text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B655B]">
              <Truck className="w-3.5 h-3.5 text-[#545E45]" />
              <span>Ships in 1-2 business days from Auckland warehouse</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
