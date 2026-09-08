/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CaseStudy {
  problemStatement: string;
  userResearch: string;
  userPersona: {
    name: string;
    role: string;
    age: number;
    quote: string;
    behaviors: string[];
    goals: string[];
    painPoints: string[];
    avatarSeed: string;
  };
  userFlow: {
    steps: {
      title: string;
      description: string;
      type: "start" | "action" | "decision" | "end";
    }[];
  };
  wireframes: {
    title: string;
    items: string[];
  }[];
  designSystem: {
    colors: { name: string; hex: string; desc: string }[];
    typography: { name: string; font: string; usage: string }[];
    components: string[];
  };
  finalScreens: {
    title: string;
    description: string;
    accent: string;
    mockupType: "mobile" | "web" | "dashboard" | "game";
    screens: { name: string; feat: string[] }[];
  };
  developmentProcess: string[];
  lessonsLearned: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tools: string[];
  highlight: string;
  imageAccent: string; // Background color gradient for the card
  iconName: string; // Lucide icon reference
  thumbnail?: string;
  filterGroup: "uiux" | "fullstack" | "web" | "game";
  githubUrl?: string;
  figmaUrl?: string;
  moduleUrl?: string;
  // Full in-depth case study (problem statement, research, persona, flow, etc).
  // Only set this for projects with a real documented design/research process.
  caseStudy?: CaseStudy;
  // Lightweight summary used instead of caseStudy for projects without a
  // formal research process — shows a short description + feature bullets.
  simpleSummary?: string;
  keyFeatures?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  isVerified: boolean;
  year: string;
  credentialUrl?: string;
}

export interface Organization {
  name: string;
  role: string;
  responsibilities: string[];
  period: string;
}