import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ProjectItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    scrollToSection('#contact');
  };

  const handleExploreServices = () => {
    scrollToSection('#services');
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    scrollToSection('#contact');
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      {/* Strict 3-zone Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenContact={handleOpenContact}
          onExploreServices={handleExploreServices}
        />

        {/* Services & Capabilities Section */}
        <Services 
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        {/* Shipped Projects & Case Studies */}
        <Projects 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* About Company & Engineering Philosophy */}
        <About />

        {/* Contact Us Section with WhatsApp & Instagram Featured */}
        <Contact 
          preselectedService={preselectedService}
        />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Project Deep Architecture Breakdown Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={handleOpenContact}
      />

      {/* Floating Direct WhatsApp Access */}
      <WhatsAppFloatingButton />
    </div>
  );
}
