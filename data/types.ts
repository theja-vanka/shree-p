export type Profile = {
  name: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  photo: string;
  resume: string;
  certifications: string;
};

export type ExperienceItem = {
  title: string;
  company: string;
  type?: string;
  dates: string;
  bullets: string[];
  tags?: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  field: string;
  dates: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type CategoryKey = "blue" | "aqua" | "yellow" | "green" | "violet";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: CategoryKey;
};

export type StatItem = {
  value: string;
  label: string;
};

export type UiStrings = {
  nav: {
    about: string;
    skills: string;
    projects: string;
    hireMe: string;
  };
  hero: {
    greeting: string;
    getInTouch: string;
    viewProjects: string;
    viewResume: string;
    viewCertifications: string;
    linkedin: string;
    github: string;
    email: string;
  };
  sectionTitles: {
    about: string;
    skills: string;
    projects: string;
  };
  skills: {
    top: string;
  };
  contact: {
    heading: string;
    message: string;
    mailButton: string;
  };
  project: {
    back: string;
    viewDashboard: string;
    overview: string;
    approach: string;
    findings: string;
    recommendations: string;
    technologies: string;
    ctaHeading: string;
    ctaMessage: string;
    ctaButton: string;
  };
};

export type SiteContent = {
  profile: Profile;
  about: string[];
  stats: StatItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  projects: Project[];
  ui: UiStrings;
};
