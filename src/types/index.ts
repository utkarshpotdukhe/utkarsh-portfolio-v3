export interface Project {
  id: string;
  title: string;
  stack: string[];
  impact: string;
  impactLabel: string;
  description: string;
  iconType: 'ecom' | 'appointment' | 'linkedin' | 'whatsapp' | 'backend' | 'voice' | 'restaurant' | 'copywriting';
  images?: string[];
  // Extended fields for detailed case studies
  problemSolution?: string;
  modules?: { title: string; description: string; highlights?: string[] }[];
  capabilities?: string[];
  highlights?: string[];
  businessImpact?: string[];
  liveUrl?: string;
  showSheetUI?: boolean;
}


export interface Job {
  id: string;
  company: string;
  location: string;
  role: string;
  type: 'Full-Time' | 'Part-Time';
  period: string;
  current: boolean;
  bullets: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  year: string;
  cgpa: string;
}

export interface Skill {
  label: string;
  category: 'automation' | 'frontend' | 'backend' | 'professional';
}

export interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}
