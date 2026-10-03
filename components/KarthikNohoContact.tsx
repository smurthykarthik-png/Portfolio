import React, { useState } from 'react';
import { personalInfo } from '../data/karthikData';
import { Mail, Phone, ArrowUpRight, Copy, Check, Send, Download, MapPin, Globe } from 'lucide-react';
import { Reveal } from './Reveal';

interface KarthikNohoContactProps {
  onOpenResume: () => void;
}

export const KarthikNohoContact: React.FC<KarthikNohoContactProps> = ({ onOpenResume }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '', roleType: 'Full-Time' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#EDE9E1] border-t border-[#DED8CD]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 space-y-16">
        
        {/* Header in noho style */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#BA4A24] block">
              06 / Get In Touch & Hire
            </span>
          </div>
          <Reveal>
            <h2
              className="text-4xl sm:text-6xl font-extrabold text-[#22211F] leading-tight tracking-tight"
              style={{ fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif" }}
            >
              Let's discuss engineering opportunities.
            </h2>
          </Reveal>
          <p className="text-base sm:text-lg text-[#524E48]">
            I am actively seeking technical interviews and engineering roles in embedded systems, semiconductor fabrication, hardware QA, and cloud systems — with a focused relocation trajectory to Germany.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left 6 Columns: Contact Details & Direct Action */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Quick Cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white border border-[#D5CDBD] shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EDE9E1] text-[#BA4A24] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#736C61]">Direct Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-bold text-[#22211F] hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg hover:bg-neutral-100 text-[#736C61] cursor-pointer"
                  title="Copy email"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#D5CDBD] shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EDE9E1] text-[#545E45] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#736C61]">Telephone / WhatsApp</div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-bold text-[#22211F] hover:underline"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg hover:bg-neutral-100 text-[#736C61] cursor-pointer"
                  title="Copy phone"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social / Repositories */}
            <div className="flex flex-wrap gap-3">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white border border-[#D5CDBD] text-xs font-bold text-[#22211F] flex items-center gap-2 hover:bg-neutral-50 shadow-xs"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#736C61]" />
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white border border-[#D5CDBD] text-xs font-bold text-[#22211F] flex items-center gap-2 hover:bg-neutral-50 shadow-xs"
              >
                <span>GitHub Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#736C61]" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-[#22211F] hover:bg-black text-white text-xs font-bold flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Printable CV</span>
              </button>
            </div>

            {/* Germany Target Callout */}
            <div className="p-6 rounded-2xl bg-[#DED8CD] border border-[#D0C8B9] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#545E45]">
                <Globe className="w-4 h-4" />
                <span>Germany Relocation & Language Milestone</span>
              </div>
              <p className="text-xs text-[#524E48] leading-relaxed">
                Currently holding A1 German proficiency and proactively pursuing intensive courses targeting B2 fluency. Ready for structured engineering onboarding in Munich, Stuttgart, Berlin, Hamburg, or across the DACH industrial belt.
              </p>
            </div>

          </div>

          {/* Right 6 Columns: Direct Dispatch Form */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#D5CDBD] shadow-xs">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#22211F]">Message Received</h3>
                <p className="text-sm text-[#666157] max-w-sm mx-auto">
                  Thank you for reaching out. Karthik will review your note and respond via email or phone promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-[#736C61] uppercase">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Siemens Talent Acquisition / Engineering Lead"
                    className="w-full px-4 py-3 rounded-xl bg-[#EDE9E1] border border-[#D5CDBD] text-sm text-[#22211F] focus:outline-none focus:ring-2 focus:ring-[#22211F]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-[#736C61] uppercase">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. contact@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#EDE9E1] border border-[#D5CDBD] text-sm text-[#22211F] focus:outline-none focus:ring-2 focus:ring-[#22211F]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold text-[#736C61] uppercase">
                    Message / Opportunity Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Discuss technical role requirements, embedded systems project, or schedule an initial conversation..."
                    className="w-full px-4 py-3 rounded-xl bg-[#EDE9E1] border border-[#D5CDBD] text-sm text-[#22211F] focus:outline-none focus:ring-2 focus:ring-[#22211F] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#22211F] hover:bg-black text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
