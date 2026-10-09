import React from 'react';
import { X, CheckCircle2, Layers, MessageSquareCode, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types';
import { COMPANY_CONTACTS } from '../data/companyData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenContact }) => {
  if (!project) return null;

  const whatsappInquiryUrl = `https://wa.me/201557190156?text=${encodeURIComponent(
    `Hello Nexora! I am interested in an architecture similar to "${project.title}". Can we discuss the technical specs?`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Background click handler */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#090d16] border border-slate-800 shadow-2xl z-10 overflow-hidden my-8">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#07090e]">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="text-blue-400 font-semibold">{project.categoryLabel}</span>
            <span>·</span>
            <span>{project.clientIndustry}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Project Title and Hero preview image */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              {project.tagline}
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-800 relative">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-56 sm:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-70" />
            
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-4 text-xs font-mono">
              <span className="px-3 py-1 bg-blue-950/80 border border-blue-800/80 text-blue-300 rounded-md">
                {project.impactMetrics.primary}
              </span>
              <span className="px-3 py-1 bg-slate-900/80 border border-slate-700/80 text-emerald-300 rounded-md">
                {project.impactMetrics.secondary}
              </span>
            </div>
          </div>

          {/* Architecture Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">
                The Engineering Challenge
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.architectureDetails.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                Nexora Architectural Blueprint
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.architectureDetails.solution}
              </p>
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Technology Stack & Infrastructure Components</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.architectureDetails.stack.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-xs font-mono bg-slate-800/90 text-slate-200 border border-slate-700/80 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Measured Outcomes */}
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Measured Production Outcomes
            </div>
            <div className="space-y-2">
              {project.architectureDetails.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="p-6 border-t border-slate-800 bg-[#07090e] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Need a similar architecture deployed for your organisation?
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-all"
            >
              <MessageSquareCode className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <span>Schedule Call</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
