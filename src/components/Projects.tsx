import React, { useState } from 'react';
import { ArrowUpRight, BarChart3, ChevronRight } from 'lucide-react';
import { PROJECTS_LIST } from '../data/companyData';
import { ProjectItem } from '../types';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Deployments' },
    { id: 'distributed', label: 'Distributed Systems' },
    { id: 'cloud', label: 'Cloud Infrastructure' },
    { id: 'web', label: 'Enterprise Web' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-[#090d16] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
              Shipped Production Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
              Verifiable proof of high-performance engineering.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Each architecture is built to withstand real-world volume, unpredicted spikes, and rigorous security audits.
            </p>
          </div>

          {/* Interactive filter tabs (functional buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0a0e18] border border-slate-800 overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Visual Image container with fallback and measured overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-transparent to-transparent opacity-80" />
                  
                  {/* Category metadata kicker */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 text-[11px] font-semibold text-slate-300 bg-slate-950/80 px-2.5 py-1 rounded backdrop-blur-md border border-slate-800">
                    <span>{project.categoryLabel}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-400">{project.clientIndustry}</span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-xs text-blue-300 font-medium">
                    {project.tagline}
                  </p>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Quantified impact metric callout */}
                  <div className="mt-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2">
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      <BarChart3 className="w-3.5 h-3.5 text-blue-400" />
                      <span>Verified Production Impact</span>
                    </div>

                    <div className="text-base font-bold text-emerald-400 font-mono">
                      {project.impactMetrics.primary}
                    </div>

                    <div className="text-xs text-slate-400">
                      {project.impactMetrics.secondary}
                    </div>
                  </div>

                  {/* Stack tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400">
                    {project.architectureDetails.stack.slice(0, 4).map((tech) => (
                      <span key={tech} className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="p-6 pt-0 mt-4">
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 rounded-lg transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>Explore Architecture Breakdown</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
