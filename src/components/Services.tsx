import React, { useState } from 'react';
import { 
  Server, 
  Cpu, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  ArrowRight, 
  Check, 
  Calculator,
  MessageSquareCode
} from 'lucide-react';
import { SERVICES_LIST, COMPANY_CONTACTS } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_LIST[0]);
  
  // Interactive Project Estimator State
  const [calcServiceType, setCalcServiceType] = useState('cloud-infrastructure');
  const [calcScale, setCalcScale] = useState<'mvp' | 'growth' | 'enterprise'>('growth');
  const [calcTimeline, setCalcTimeline] = useState<'standard' | 'accelerated'>('standard');

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'cloud-infrastructure':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'distributed-software':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'enterprise-web-apps':
        return <Layers className="w-5 h-5 text-sky-400" />;
      case 'ai-automation':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'cybersecurity':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'edge-mobile':
        return <Smartphone className="w-5 h-5 text-violet-400" />;
      default:
        return <Server className="w-5 h-5 text-blue-400" />;
    }
  };

  // Estimator Calculations
  const scaleEstimates = {
    mvp: { sprints: '3 - 5 Sprints', delivery: '6 - 10 Weeks', team: '2 Senior Engineers' },
    growth: { sprints: '6 - 9 Sprints', delivery: '12 - 18 Weeks', team: '3 Senior Engineers + 1 DevOps Lead' },
    enterprise: { sprints: '10 - 16 Sprints', delivery: '20 - 32 Weeks', team: 'Dedicated Pod (4 Engineers, 1 Architect)' },
  };

  const selectedCalcServiceObj = SERVICES_LIST.find(s => s.id === calcServiceType) || SERVICES_LIST[0];
  const estimate = scaleEstimates[calcScale];

  const generateWhatsAppEstimateUrl = () => {
    const text = encodeURIComponent(
      `Hello Nexora Team! I used your Project Estimator:\n- Service: ${selectedCalcServiceObj.title}\n- Target Scale: ${calcScale.toUpperCase()}\n- Timeline: ${calcTimeline}\nEstimated: ${estimate.sprints} (${estimate.delivery}). Let's discuss!`
    );
    return `https://wa.me/201557190156?text=${text}`;
  };

  return (
    <section id="services" className="py-20 bg-[#07090e] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            Engineering Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            End-to-end technical execution from low-level systems to user interfaces.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            We operate as your dedicated engineering core. Every deliverable is backed by architectural documentation, automated test suites, and strict performance SLAs.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className={`group p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                selectedService.id === service.id
                  ? 'bg-slate-900/90 border-blue-500/60 shadow-lg shadow-blue-900/10'
                  : 'bg-[#0a0e18]/80 hover:bg-slate-900/70 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Header row with editorial number and icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-400 tabular-nums">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs text-blue-300 font-medium">
                  {service.tagline}
                </p>

                <p className="mt-3 text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Deliverables list */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Core Deliverables
                  </div>
                  {service.deliverables.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack inline unboxed metadata */}
                <div className="mt-4 pt-3 border-t border-slate-800/50 flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-slate-400">
                  {service.techStack.map((tech, idx) => (
                    <span key={tech}>
                      {tech}
                      {idx < service.techStack.length - 1 && <span className="ml-2 text-slate-600">/</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service card action row */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-emerald-400">
                  {service.metric}
                </span>

                <button
                  onClick={() => {
                    setSelectedService(service);
                    onSelectServiceForContact(service.title);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <span>Request Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Engineering Scope Estimator Tool */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0b0f19] to-[#07090e] border border-slate-800 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Interactive Architecture Estimator</span>
              </div>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white tracking-tight">
                Model Your Project Scope & Sprint Velocity
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Configure your system parameters to preview delivery timeframes and connect directly with our engineering leads.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Control Inputs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Target Engineering Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES_LIST.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => setCalcServiceType(srv.id)}
                      className={`p-3 text-left rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                        calcServiceType === srv.id
                          ? 'bg-blue-600/20 border-blue-500 text-white'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-semibold">{srv.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5 truncate">{srv.metric}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* System Scale */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  System Architecture Scale
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'mvp', label: 'Early Stage / MVP', sub: 'Single Region' },
                    { id: 'growth', label: 'Growth Scale', sub: 'High Availability' },
                    { id: 'enterprise', label: 'Enterprise Mesh', sub: 'Multi-Region SLA' },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setCalcScale(tier.id as any)}
                      className={`p-3 rounded-lg text-center border transition-all cursor-pointer ${
                        calcScale === tier.id
                          ? 'bg-blue-600/20 border-blue-500 text-white'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-semibold">{tier.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{tier.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Velocity */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Sprint Cadence
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCalcTimeline('standard')}
                    className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                      calcTimeline === 'standard'
                        ? 'bg-blue-600/20 border-blue-500 text-white'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-semibold">Standard Bi-Weekly Sprints</div>
                    <div className="text-[11px] text-slate-400">Predictable milestone cadence</div>
                  </button>

                  <button
                    onClick={() => setCalcTimeline('accelerated')}
                    className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                      calcTimeline === 'accelerated'
                        ? 'bg-blue-600/20 border-blue-500 text-white'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-semibold">Accelerated Sprint Velocity</div>
                    <div className="text-[11px] text-slate-400">Dedicated parallel pod</div>
                  </button>
                </div>
              </div>

            </div>

            {/* Live Estimation Output Card */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase text-slate-400">
                  Model Output
                </div>
                
                <h4 className="mt-2 text-lg font-bold text-white">
                  {selectedCalcServiceObj.title}
                </h4>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs text-slate-400">Estimated Duration:</span>
                    <span className="text-sm font-semibold text-white font-mono">{estimate.delivery}</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs text-slate-400">Estimated Sprint Count:</span>
                    <span className="text-sm font-semibold text-blue-400 font-mono">{estimate.sprints}</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs text-slate-400">Engineering Staffing:</span>
                    <span className="text-xs font-medium text-slate-200">{estimate.team}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Standard SLA Guarantee:</span>
                    <span className="text-xs font-mono text-emerald-400">{selectedCalcServiceObj.metric}</span>
                  </div>
                </div>

                <div className="mt-6 p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-400">
                  Includes continuous code review, automated regression tests, deployment runbooks, and 30-day post-launch hypercare.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-2.5">
                <a
                  href={generateWhatsAppEstimateUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-md transition-all cursor-pointer"
                >
                  <MessageSquareCode className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp (01557190156)</span>
                </a>

                <button
                  onClick={() => onSelectServiceForContact(selectedCalcServiceObj.title)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-all cursor-pointer"
                >
                  <span>Pre-fill in Web Contact Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
