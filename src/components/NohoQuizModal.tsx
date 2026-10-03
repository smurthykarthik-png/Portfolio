import React, { useState } from 'react';
import { X, Check, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { nohoProducts } from '../data/nohoSiteData';

interface NohoQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (productId: string) => void;
}

export const NohoQuizModal: React.FC<NohoQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct
}) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const questions = [
    {
      id: 'space',
      title: 'Where will you spend the most time with your chair?',
      subtitle: 'Select your primary daily environment',
      options: [
        { label: 'Home Office & Deep Focus Desk', score: 'noho-move' },
        { label: 'Dining Table & Shared Gathering Space', score: 'noho-move' },
        { label: 'Multi-use Living Room / Flexible Studio', score: 'noho-lighty' },
        { label: 'Outdoor Patio & Creative Workshop', score: 'noho-lighty' }
      ]
    },
    {
      id: 'movement',
      title: 'How do you prefer to sit throughout the day?',
      subtitle: 'Our auxetic seats adapt to your posture',
      options: [
        { label: 'I constantly lean forward to write and recline back to reflect', score: 'noho-move' },
        { label: 'I prefer lightweight stackability and quick portability', score: 'noho-lighty' },
        { label: 'I need relief from lower back fatigue and stiff hips', score: 'noho-move' },
        { label: 'I want clean, casual dining comfort for family & guests', score: 'noho-lighty' }
      ]
    }
  ];

  const handleSelectOption = (optionScore: string) => {
    const nextAnswers = { ...answers, [questions[step].id]: optionScore };
    setAnswers(nextAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Results step
    }
  };

  const recommendedId = answers.movement === 'noho-lighty' ? 'noho-lighty' : 'noho-move';
  const recommendedProduct = nohoProducts.find((p) => p.id === recommendedId) || nohoProducts[0];

  const handleReset = () => {
    setStep(0);
    setAnswers({});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div onClick={onClose} className="fixed inset-0 bg-[#22211F]/60 backdrop-blur-xs" />

      <div className="relative w-full max-w-xl bg-[#EDE9E1] rounded-3xl shadow-2xl p-6 sm:p-10 border border-[#D5CDBD] z-10 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#D8D2C5]">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#BA4A24] block">
              Ergonomic Matchmaker
            </span>
            <h3
              className="text-2xl font-black text-[#22211F]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Chair Finder Quiz
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white shadow-xs hover:bg-neutral-100 flex items-center justify-center text-[#22211F] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-8">
          {step < questions.length ? (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#666157]">
                  Question 0{step + 1} of 0{questions.length}
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#22211F]">
                  {questions[step].title}
                </h4>
                <p className="text-xs text-[#524E48]">{questions[step].subtitle}</p>
              </div>

              <div className="space-y-3">
                {questions[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full p-4 rounded-2xl bg-white hover:bg-[#EBE5D8] border border-[#D5CDBD] text-left text-sm font-semibold text-[#22211F] flex items-center justify-between group transition-all cursor-pointer"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#BA4A24] group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Quiz Result */
            <div className="text-center space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-[#22211F] text-[#EDE9E1] flex items-center justify-center mx-auto shadow-md">
                <Sparkles className="w-7 h-7 text-[#BA4A24]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#BA4A24]">
                  98% Compatibility Match
                </span>
                <h4
                  className="text-3xl font-black text-[#22211F]"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {recommendedProduct.name}
                </h4>
                <p className="text-sm text-[#524E48] max-w-md mx-auto">
                  {recommendedProduct.description}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#D5CDBD] flex items-center justify-between">
                <span className="font-bold text-sm text-[#22211F]">
                  Starts at ${recommendedProduct.price}
                </span>
                <span className="text-xs text-[#545E45] font-semibold">
                  100-Day In-Home Trial
                </span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="py-3 px-4 rounded-xl bg-white hover:bg-neutral-100 border border-[#D5CDBD] text-xs font-bold text-[#22211F] flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restart</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onSelectProduct(recommendedProduct.id);
                  }}
                  className="flex-1 py-3 px-6 rounded-xl bg-[#22211F] hover:bg-black text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>View {recommendedProduct.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
