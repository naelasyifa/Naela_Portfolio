/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ShoppingBag, MapPin, Recycle, CheckCircle, Flame, Sparkles, FolderOpen, ExternalLink, ChevronRight, Grid, Shield } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import CaseStudyModal from "./CaseStudyModal";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Dynamic filter tabs
  const filters = [
    { label: "All Works", id: "All" },
    { label: "UI/UX Case Studies", id: "UI/UX Design" },
    { label: "Fullstack & Mobile", id: "Development" },
    { label: "Websites & Games", id: "Others" },
  ];

  // Map database tags to user classification
  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "UI/UX Design") return proj.filterGroup === "uiux";
    if (selectedFilter === "Development") return proj.filterGroup === "fullstack";
    if (selectedFilter === "Others") return proj.filterGroup === "web" || proj.filterGroup === "game";
    return true;
  });

  // Custom Icon Mapper using Lucide references
  const renderProjectIcon = (iconName: string) => {
    switch (iconName) {
      case "shopping-bag":
        return <ShoppingBag className="w-5 h-5 text-gray-950" />;
      case "map-pin":
        return <MapPin className="w-5 h-5 text-gray-950" />;
      case "recycle":
        return <Recycle className="w-5 h-5 text-gray-950" />;
      case "check-circle":
        return <CheckCircle className="w-5 h-5 text-gray-950" />;
      case "flame":
        return <Flame className="w-5 h-5 text-gray-950" />;
      case "sparkles":
        return <Sparkles className="w-5 h-5 text-gray-950" />;
      case "shield":
        return <Shield className="w-5 h-5 text-gray-950" />;
      default:
        return <FolderOpen className="w-5 h-5 text-gray-950" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#f8fbff] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#A7D8FF]/10 blur-[80px] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#7EC8FF] mb-2 font-poppins font-bold text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-[#7EC8FF] rounded-full"></span>
            <span>Design & Development Gallery</span>
          </div>
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-4xl sm:text-5xl font-black text-gray-950 tracking-tighter">
            Featured <span className="text-[#FFB4A2] italic">Projects</span>
          </h2>
          <p className="text-gray-500 font-sans text-sm mt-3">Click any project to read its detailed problem statement, design system, and full implementation code walk-throughs.</p>
          <div className="h-1 w-16 bg-[#7EC8FF] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Dynamic Filter Navigation Rails */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              id={`filter-btn-${f.id.toLowerCase()}`}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-5 py-2 rounded-full font-poppins font-semibold text-xs border transition-all duration-200 cursor-pointer ${
                selectedFilter === f.id ? "bg-gray-950 text-white border-transparent shadow-md shadow-gray-950/10" : "bg-white text-gray-600 border-gray-200 hover:text-gray-950 hover:bg-[#DDF1FF]/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-3xl overflow-hidden border border-gray-150/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Visual Thumbnail Top banner using beautiful project background gradients */}
                <div className={`relative h-48 overflow-hidden border-b border-gray-100 ${!project.thumbnail ? `flex items-center justify-center bg-gradient-to-br ${project.imageAccent}` : ""}`}>
                  {project.thumbnail ? (
                    <>
                      <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
                    </>
                  ) : (
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: "radial-gradient(circle, #000 1.2px, transparent 1.2px)",
                        backgroundSize: "16px 16px",
                      }}
                    ></div>
                  )}

                  <div
                    className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white shadow-xl shadow-gray-900/10 border border-gray-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 z-10 ${
                      !project.thumbnail ? "static bottom-auto left-auto w-14 h-14" : ""
                    }`}
                  >
                    {renderProjectIcon(project.iconName)}
                  </div>
                </div>

                {/* Project Body details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-[#7EC8FF] font-bold uppercase tracking-wider">{project.category}</span>
                    <span className="text-[10px] text-gray-400 font-mono">0{index + 1}</span>
                  </div>

                  <h3 className="text-xl font-poppins font-bold text-gray-900 mb-2 leading-tight tracking-tight group-hover:text-[#7EC8FF] transition-colors">{project.title}</h3>

                  <p className="text-gray-600 font-sans text-xs sm:text-sm leading-relaxed mb-4">{project.highlight}</p>
                </div>
              </div>

              {/* Bottom Card Footer: Skills Tag lists & Expand buttons */}
              <div className="p-6 pt-0 border-t border-gray-50 mt-auto">
                <div className="flex flex-wrap gap-1.5 pt-4 mb-4">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="text-[9px] font-mono font-semibold bg-gray-50 text-gray-500 border border-gray-100 px-2 py-0.5 rounded">
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && <span className="text-[9px] font-mono font-semibold bg-gray-50 text-gray-500 border border-gray-100 px-2 py-0.5 rounded">+{project.tools.length - 3}</span>}
                </div>

                <div className="flex items-center justify-between text-xs font-poppins font-bold text-gray-900 leading-none group-hover:text-[#7EC8FF] transition-colors">
                  <span className="underline decoration-transparent group-hover:decoration-current transition-all">Examine Case Study</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty layout case */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-gray-5c0/30 rounded-3xl border-2 border-dashed border-gray-200 max-w-sm mx-auto">
            <span className="text-2xl">🔍</span>
            <h4 className="font-poppins font-bold text-sm text-gray-700 mt-2">No projects found</h4>
            <p className="text-xs text-gray-550 mt-1">Try resetting the gallery category filter above.</p>
          </div>
        )}
      </div>

      {/* Selected case study drawer modal backdrop */}
      {selectedProject && <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
