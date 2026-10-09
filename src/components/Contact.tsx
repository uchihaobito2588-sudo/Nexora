import React, { useState } from 'react';
import { 
  MessageSquareCode, 
  Instagram, 
  Mail, 
  Copy, 
  Check, 
  Send, 
  ExternalLink,
  ShieldCheck,
  Clock,
  Sparkles
} from 'lucide-react';
import { COMPANY_CONTACTS, SERVICES_LIST } from '../data/companyData';
import { ContactFormData } from '../types';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    service: preselectedService || SERVICES_LIST[0].title,
    budget: '$25,000 – $50,000',
    message: '',
  });

  const [copiedNumber, setCopiedNumber] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Synchronize when preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(COMPANY_CONTACTS.whatsappNumber);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please provide a valid work email address.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleWhatsAppDirectSend = () => {
    const text = encodeURIComponent(
      `Hello Nexora Engineering Team!\n\nName: ${formData.name || 'Prospective Client'}\nCompany: ${formData.company || 'N/A'}\nEmail: ${formData.email || 'N/A'}\nService Needed: ${formData.service}\nBudget: ${formData.budget}\n\nProject Scope:\n${formData.message || 'I would like to schedule an architecture discovery discussion.'}`
    );
    window.open(`https://wa.me/201557190156?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-[#090d16] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            Initiate Engagement
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            Let’s discuss your technical architecture and engineering goals.
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Reach out via our direct messaging channels on WhatsApp or Instagram, or submit an architectural request below. Our systems team responds within 4 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Communication Channels (WhatsApp & Instagram Featured) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct Featured Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-[#0a1215] to-[#0a0e18] border border-emerald-800/60 shadow-xl relative overflow-hidden group">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <MessageSquareCode className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  Direct Line
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-bold text-white">WhatsApp Official Contact</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Connect immediately with our solutions team for project discovery, quotes, and technical specs.
                </p>
              </div>

              <div className="mt-5 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Phone / WhatsApp Number</div>
                  <div className="text-base font-bold text-white font-mono mt-0.5">
                    {COMPANY_CONTACTS.whatsappNumber}
                  </div>
                </div>

                <button
                  onClick={handleCopyNumber}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy WhatsApp number"
                >
                  {copiedNumber ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedNumber && (
                <div className="mt-2 text-xs text-emerald-400 font-medium">
                  Copied {COMPANY_CONTACTS.whatsappNumber} to clipboard!
                </div>
              )}

              <div className="mt-5">
                <a
                  href={COMPANY_CONTACTS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-md shadow-emerald-700/20 transition-all cursor-pointer"
                >
                  <MessageSquareCode className="w-4 h-4" />
                  <span>Start WhatsApp Chat Now</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Instagram Profile Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-950/20 via-[#0e0c15] to-[#0a0e18] border border-pink-900/40 shadow-xl group">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-pink-400 bg-pink-950/80 px-2 py-0.5 rounded border border-pink-900/60">
                  Social Channel
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-bold text-white">Instagram Profile</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Follow development logs, engineering culture, UI showcases, and team updates.
                </p>
              </div>

              <div className="mt-5 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Instagram Handle</div>
                  <div className="text-sm font-semibold text-white font-mono mt-0.5">
                    {COMPANY_CONTACTS.instagramHandle}
                  </div>
                </div>
                <Instagram className="w-4 h-4 text-pink-400" />
              </div>

              <div className="mt-5">
                <a
                  href={COMPANY_CONTACTS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 rounded-lg shadow-md shadow-pink-700/20 transition-all cursor-pointer"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Open Instagram Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Response Time & Security SLA Note */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-200 font-medium">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Response SLA: Within 4 Business Hours</span>
              </div>
              <p>
                NDA provided upfront for proprietary intellectual property discussions. All conversations are handled under strict confidentiality.
              </p>
            </div>

          </div>

          {/* Interactive Request / Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0e18] border border-slate-800 shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                    <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your architectural inquiry has been logged with our senior technical staff.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 max-w-md mx-auto text-left text-xs space-y-2">
                    <div className="flex justify-between text-slate-400">
                      <span>Service Requested:</span>
                      <span className="font-medium text-white">{formData.service}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Budget Tier:</span>
                      <span className="font-medium text-white">{formData.budget}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Contact Email:</span>
                      <span className="font-medium text-white">{formData.email}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={COMPANY_CONTACTS.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm"
                    >
                      <MessageSquareCode className="w-4 h-4" />
                      <span>Follow-up on WhatsApp (01557190156)</span>
                    </a>
                    
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Project Specification Form
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Complete this form or click "Direct to WhatsApp" to chat immediately with an engineer.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-800 text-xs text-rose-300">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexander Cole"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alexander@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Company / Organisation
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company Name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        {SERVICES_LIST.map((srv) => (
                          <option key={srv.id} value={srv.title} className="bg-slate-900 text-white">
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Estimated Project Investment
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['$15k – $30k', '$30k – $75k', '$75k+ / Custom'].map((tier) => (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => setFormData({ ...formData, budget: tier })}
                          className={`py-2 px-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                            formData.budget === tier
                              ? 'bg-blue-600/20 border-blue-500 text-white'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Technical Scope & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current infrastructure bottlenecks, goals, target scale, or desired delivery timeline..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Architecture Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirectSend}
                      className="flex-1 py-3 px-4 text-xs font-semibold text-emerald-400 bg-emerald-950/60 hover:bg-emerald-950/90 border border-emerald-800/80 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                      title="Send this scope directly to WhatsApp 01557190156"
                    >
                      <MessageSquareCode className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Send Direct via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
