import React from 'react';
import { ArrowRight, MessageSquareCode, CheckCircle2 } from 'lucide-react';
import { CORE_METRICS, COMPANY_CONTACTS } from '../data/companyData';

interface HeroProps {
  onOpenContact: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreServices }) => {
  return (
    <section id="home" className="relative pt-12 pb-16 lg:pt-18 lg:pb-24 overflow-hidden">
      {/* Background radial gradient accent */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent blur-3xl -z-10 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Subtitle / Domain identification */}
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-4">
          <span>Enterprise Software Engineering</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Distributed Systems</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Cloud Infrastructure</span>
        </div>

        {/* Hero Headline & Lead Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.12] [text-wrap:balance]">
              Engineering resilient software platforms for mission-critical operations.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Nexora designs, deploys, and maintains high-throughput distributed backends, zero-downtime Kubernetes infrastructure, and modern enterprise applications that scale without failure under peak load.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Deterministic low-latency architectures</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Zero-downtime multi-cloud infrastructure</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>SOC 2 & ISO compliant engineering standard</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Rapid sprint delivery & continuous support</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Schedule Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 rounded-lg transition-all cursor-pointer"
              >
                <span>Explore Capabilities</span>
              </button>

              <a
                href={COMPANY_CONTACTS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-950/80 border border-emerald-800/60 rounded-lg transition-all"
              >
                <MessageSquareCode className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Direct: 01557190156</span>
              </a>
            </div>
          </div>

          {/* Visual Showcase Carrier */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/90 bg-slate-900 shadow-2xl group">
              <img
                src="/src/assets/images/hero_nexora_tech_1791586886543.jpg"
                alt="Nexora software engineering hub and distributed operations control"
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#090d16]/90 border border-slate-800 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="font-medium text-slate-200">Nexora Engineering Lab</span>
                  <span className="text-emerald-400 font-mono">Distributed Operations</span>
                </div>
                <p className="text-xs text-slate-300">
                  Global engineering team shipping mission-critical systems across 4 time zones.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Adjacency Proof Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {CORE_METRICS.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-400">
                  {metric.context}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
