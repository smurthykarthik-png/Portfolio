import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Check,
  Copy,
  Send,
  MapPin,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/karthikData';

export const ContactSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepare mailto link
    const mailSubject = encodeURIComponent(formSubject || `Portfolio Inquiry from ${formName}`);
    const mailBody = encodeURIComponent(
      `Hi Karthik,\n\nName: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 block">
            Initiate Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
            Let's discuss engineering opportunities.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Open to structured hands-on hardware, embedded systems, and systems engineering opportunities in Germany and internationally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Relocation Readiness */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-6">
              
              <div className="space-y-1">
                <h3 className="font-bold text-xl text-zinc-100">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-mono text-emerald-400">
                  {personalInfo.title}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Direct channels */}
              <div className="space-y-3 pt-3 border-t border-zinc-800">
                
                {/* Phone */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/80 flex items-center justify-center text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-zinc-500">Phone / WhatsApp</div>
                      <a href={`tel:${personalInfo.phone}`} className="text-xs font-mono font-bold text-zinc-200 hover:text-emerald-400 transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/80 flex items-center justify-center text-emerald-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-zinc-500">Email Address</div>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs font-mono font-bold text-zinc-200 hover:text-emerald-400 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800/80 flex items-center justify-center text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-zinc-500">LinkedIn Profile</div>
                      <div className="text-xs font-mono font-bold text-zinc-200 group-hover:text-blue-400 transition-colors">
                        {personalInfo.linkedin}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300" />
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-zinc-500">GitHub Profile</div>
                      <div className="text-xs font-mono font-bold text-zinc-200 group-hover:text-zinc-100 transition-colors">
                        {personalInfo.github}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300" />
                </a>

              </div>

              {/* Germany Relocation Card */}
              <div className="p-4 rounded-2xl bg-zinc-950 border border-emerald-900/50 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-mono">
                  <span>🇩🇪</span>
                  <span>Relocation & Target Profile</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                  Actively studying German (A1 targeting B2). Fully prepared for technical interviews and relocation to Germany under the Skilled Immigration framework (Fachkräfteeinwanderungsgesetz).
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-6">
              
              <div className="space-y-1">
                <h3 className="font-bold text-xl text-zinc-100 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs text-zinc-400">
                  Fill out the form below to initiate an email directly to smurthykarthik@gmail.com.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Thomas Weber"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. weber@engineering-firm.de"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Subject / Engineering Role
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Embedded Systems Engineer Position / Discussion"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe the opportunity, organization, or technical challenge..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors resize-y"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500">
                    Direct routing to smurthykarthik@gmail.com
                  </span>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-2 transition-all shadow-md shadow-emerald-950 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {isSent && (
                  <div className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-700/80 text-xs font-medium text-emerald-300 flex items-center gap-2 animate-in fade-in duration-200">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Email client launched! Thank you for getting in touch with Karthik.</span>
                  </div>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
