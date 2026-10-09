import React from 'react';
import { ShieldCheck, Cpu, Terminal, Globe, Award } from 'lucide-react';
import { ENGINEERING_PILLARS, TEAM_MEMBERS, COMPANY_CONTACTS } from '../data/companyData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#07090e] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase">
              About Nexora
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
              We are an engineering-led software company building for resilience.
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 text-base text-slate-300 leading-relaxed">
            <p>
              Founded by distributed systems researchers and enterprise architects, Nexora replaces fragile boilerplate with resilient, mathematically grounded software systems.
            </p>
            <p className="text-sm text-slate-400">
              We reject arbitrary technical hype. Whether deploying multi-region Kubernetes meshes or architecting sub-millisecond transaction gateways, we test our work against rigorous simulated failure conditions before handing off production keys.
            </p>
          </div>
        </div>

        {/* 4 Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {ENGINEERING_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 rounded-2xl bg-[#090d16] border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <div className="font-mono text-xs font-bold text-blue-400 tabular-nums mb-3">
                {pillar.number}.
              </div>
              <h3 className="text-base font-semibold text-white tracking-tight mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Engineering Leadership */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              Leadership & Architecture Council
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Led by seasoned systems architects
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2"
              >
                <div className="text-sm font-bold text-white tracking-tight">
                  {member.name}
                </div>
                <div className="text-xs font-medium text-blue-400">
                  {member.role}
                </div>
                <div className="text-xs text-slate-400 pt-1 leading-relaxed">
                  {member.expertise}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Operations & Trust Signals */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <Globe className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Global Engineering Hubs</div>
              <div className="text-xs text-slate-400 mt-0.5">
                {COMPANY_CONTACTS.officeLocations.join(' · ')}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>ISO 27001 Security Standard</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span>100% Code-Audited</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
