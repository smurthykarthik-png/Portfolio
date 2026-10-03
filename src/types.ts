export type ProjectCategory = 
  | 'All' 
  | 'Semiconductor & Hardware' 
  | 'Embedded & IoT' 
  | 'DevOps & Automation' 
  | 'ITSM & Enterprise';

export interface Project {
  id: string;
  title: string;
  period: string;
  status?: string;
  category: 'Semiconductor & Hardware' | 'Embedded & IoT' | 'DevOps & Automation' | 'ITSM & Enterprise';
  technologies: string[];
  summary: string;
  bullets: string[];
  problem?: string;
  approach?: string;
  result?: string;
  highlights?: string[];
  architecture?: {
    layer: string;
    description: string;
  }[];
  specifications?: Record<string, string>;
}

export interface SkillItem {
  name: string;
  verified?: boolean;
  tag?: string;
  badge?: string;
}

export interface SkillGroup {
  domain: string;
  icon: string;
  color: string;
  summary: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Internship';
  department?: string;
  summary: string;
  responsibilities: string[];
  technologiesUsed: string[];
  metrics?: { label: string; value: string }[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  period: string;
  location: string;
  grade?: string;
  badge?: string;
  keyCoursework?: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  verified: boolean;
  status: 'Completed' | 'In Progress';
  expectedOrYear?: string;
  category: 'Verified Assessment' | 'VLSI & Semiconductor' | 'Embedded & IoT' | 'Cloud & Enterprise';
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  statusNote: string;
  flag: string;
  levelTag?: string;
  isPrimaryTarget?: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
  location: string;
  targetRole: string;
  targetLocation: string;
  summary: string;
  highlights: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}
