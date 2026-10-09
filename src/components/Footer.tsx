import React from 'react';
import { MessageSquareCode, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/companyData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#05070b] border-t border-slate-900 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-mono text-sm font-bold">
                N
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Nexora</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Nexora is a technology and software company engineering resilient cloud architectures, high-throughput distributed systems, and modern digital applications.
            </p>
            <div className="text-[11px] text-slate-400">
              Offices in Zurich · London · Cairo
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2">
              {['#home', '#services', '#projects', '#about', '#contact'].map((href) => (
                <li key={href}>
                  <button
                    onClick={() => handleScrollTo(href)}
                    className="hover:text-white transition-colors cursor-pointer capitalize"
                  >
                    {href.replace('#', '')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Col */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Specializations
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>Cloud & Kubernetes Mesh</li>
              <li>Distributed Go/Rust Backends</li>
              <li>Enterprise Web Systems</li>
              <li>Applied AI & Workflows</li>
              <li>Zero-Trust Cyber Resilience</li>
            </ul>
          </div>

          {/* Direct Communication Channels Col */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Direct Contact
            </div>
            <div className="space-y-2.5">
              <a
                href={COMPANY_CONTACTS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquareCode className="w-3.5 h-3.5" />
                <span>WhatsApp: {COMPANY_CONTACTS.whatsappNumber}</span>
              </a>

              <a
                href={COMPANY_CONTACTS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram: {COMPANY_CONTACTS.instagramHandle}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-3.5 h-3.5" />
                <span>{COMPANY_CONTACTS.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {currentYear} Nexora Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Confidentiality & NDA Guaranteed</span>
            <span>·</span>
            <span>Terms of Service</span>
            <span>·</span>
            <span>Security Whitepaper</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
