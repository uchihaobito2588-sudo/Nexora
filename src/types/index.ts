export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  metric: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'cloud' | 'distributed' | 'web' | 'ai';
  categoryLabel: string;
  clientIndustry: string;
  tagline: string;
  description: string;
  impactMetrics: {
    primary: string;
    secondary: string;
  };
  image: string;
  architectureDetails: {
    problem: string;
    solution: string;
    stack: string[];
    outcomes: string[];
  };
}

export interface TeamMember {
  name: string;
  role: string;
  expertise: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}
