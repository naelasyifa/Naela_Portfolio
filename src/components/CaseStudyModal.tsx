/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { X, ArrowRight, Layers, Palette, ShieldAlert, Users, Search, Play, CheckCircle2, ChevronRight, HelpCircle, Code2, Heart, Sparkles } from "lucide-react";
import { Project } from "../types";

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const cs = project.caseStudy;

  return (
    <div id="case-study-modal-backdrop" className="fixed inset-0 z-50 overflow-y-auto bg-gray-900/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      <div id="case-study-modal-content" className="relative bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] border border-[#A7D8FF]/20 animate-in zoom-in-95 duration-300">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-start justify-between z-20 gap-4">
          <div className="min-w-0">
            <div className="flex items-center space-x-3 flex-wrap gap-y-1">
              <span className="text-xs font-poppins font-bold uppercase tracking-wider text-[#7EC8FF] bg-[#DDF1FF] px-3 py-1 rounded-full">{project.category}</span>
              <h3 className="text-lg font-poppins font-bold text-gray-900 truncate max-w-sm sm:max-w-md">{project.title}</h3>
            </div>

            {(project.figmaUrl || project.githubUrl || project.moduleUrl) && (
              <div className="flex items-center gap-4 mt-2">
                {project.figmaUrl ? (
                  <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-poppins font-semibold text-gray-500 hover:text-[#7EC8FF] transition-colors underline underline-offset-2">
                    View Figma
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-poppins font-semibold text-gray-500 hover:text-[#7EC8FF] transition-colors underline underline-offset-2">
                    View on GitHub
                  </a>
                ) : null}
                {project.moduleUrl ? (
                  <a href={project.moduleUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-poppins font-semibold text-gray-500 hover:text-[#7EC8FF] transition-colors underline underline-offset-2">
                    View Module
                  </a>
                ) : null}
              </div>
            )}
          </div>

          <button id="close-case-study-modal" onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-900 transition-colors cursor-pointer shrink-0" title="Close Case Study">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        {cs ? (
          <div className="overflow-y-auto p-6 sm:p-10 space-y-12">
            <div className={`p-8 sm:p-12 rounded-3xl bg-gradient-to-br ${project.imageAccent} relative overflow-hidden flex flex-col justify-end min-h-[220px] shadow-inner`}>
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
                  backgroundSize: "24px 24px",
                }}
              ></div>
              <div className="relative z-10 space-y-3">
                <span className="text-gray-950 font-poppins font-semibold text-xs tracking-widest uppercase">CASE SUMMARY</span>
                <h1 className="text-3xl sm:text-4xl font-serif text-gray-900 tracking-tight">{project.title}</h1>
                <p className="text-gray-700 max-w-2xl font-sans text-sm sm:text-base leading-normal">{project.highlight}</p>
              </div>
              <div className="absolute bottom-4 right-6 hidden sm:flex items-center space-x-1 font-mono text-[10px] text-gray-400 font-bold">
                <span>DESIGNED BY NAELA SYIFA</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 object-top">
              <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-3">
                <div className="flex items-center space-x-2 text-rose-500">
                  <ShieldAlert className="w-5 h-5" />
                  <h4 className="font-poppins font-bold text-sm uppercase tracking-wider">Problem Statement</h4>
                </div>
                <p className="text-gray-700 font-sans text-sm leading-relaxed">{cs.problemStatement}</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#DDF1FF]/40 border border-[#A7D8FF]/35 space-y-3">
                <div className="flex items-center space-x-2 text-[#7EC8FF]">
                  <Search className="w-5 h-5" />
                  <h4 className="font-poppins font-bold text-sm uppercase tracking-wider">User Research</h4>
                </div>
                <p className="text-gray-700 font-sans text-sm leading-relaxed">{cs.userResearch}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-[#FFB4A2]" />
                <h4 className="text-lg font-poppins font-bold text-gray-900 uppercase tracking-wide">Target User Persona</h4>
              </div>

              <div className="glass-card rounded-3xl border border-gray-100 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-xs">
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-150">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#7EC8FF] to-[#FFB4A2] flex items-center justify-center font-serif text-white font-bold text-2xl select-none">{cs.userPersona.name[0]}</div>
                    <div>
                      <h5 className="font-poppins font-bold text-base text-gray-900">{cs.userPersona.name}</h5>
                      <p className="text-xs font-sans text-gray-500">
                        {cs.userPersona.role} • Age {cs.userPersona.age}
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-[#FFB4A2] pl-3 italic text-gray-600 font-sans text-xs leading-relaxed">"{cs.userPersona.quote}"</div>

                  <div className="space-y-1 pt-2">
                    <span className="text-[10px] font-poppins font-bold text-gray-400 uppercase tracking-widest block">BEHAVIORS</span>
                    <div className="flex flex-col gap-1.5">
                      {cs.userPersona.behaviors.map((item, id) => (
                        <span key={id} className="text-[11px] font-sans text-gray-600 flex items-center">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <span className="px-3 py-1 text-[9px] font-poppins font-bold text-emerald-800 bg-emerald-50 rounded-full select-none">GOALS & MOTIVATIONS</span>
                    <ul className="space-y-2">
                      {cs.userPersona.goals.map((goal, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-left">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-xs font-sans text-gray-700 leading-normal">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <span className="px-3 py-1 text-[9px] font-poppins font-bold text-rose-800 bg-rose-50 rounded-full select-none">PAIN POINTS & FRUSTRATIONS</span>
                    <ul className="space-y-2">
                      {cs.userPersona.painPoints.map((pain, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-left">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5"></span>
                          <span className="text-xs font-sans text-gray-700 leading-normal">{pain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-[#7EC8FF]" />
                <h4 className="text-lg font-poppins font-bold text-gray-900 uppercase tracking-wide">Interaction User Flow</h4>
              </div>

              <div className="relative p-6 sm:p-8 bg-gray-50/50 rounded-3xl border border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
                  {cs.userFlow.steps.map((step, idx) => (
                    <div key={step.title} className="p-4 rounded-xl bg-white border border-gray-150 shadow-5xs relative flex flex-col justify-between">
                      <div>
                        {/* <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold text-gray-400">0{idx + 1}</span>
                          <span
                            className={`w-2 h-2 rounded-full ${step.type === "start" ? "bg-emerald-400" : step.type === "decision" ? "bg-amber-400 animate-pulse" : step.type === "end" ? "bg-indigo-400" : "bg-[#7EC8FF]"}`}
                            title={step.type}
                          ></span>
                        </div> */}
                        <h5 className="font-poppins font-bold text-xs text-gray-900 leading-snug">{step.title}</h5>
                      </div>
                      <p className="text-[10px] font-sans text-gray-500 mt-2 leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-[#7EC8FF]" />
                <h4 className="text-lg font-poppins font-bold text-gray-900 uppercase tracking-wide">Low-Fidelity Screen Wireframes</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cs.wireframes.map((wf) => (
                  <div key={wf.title} className="p-6 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/40 space-y-4">
                    <h5 className="font-poppins font-bold text-sm text-gray-800 flex items-center">
                      <span className="w-2.5 h-2.5 bg-[#A7D8FF] rounded-full mr-2"></span>
                      {wf.title}
                    </h5>
                    <ul className="space-y-2">
                      {wf.items.map((item, index) => (
                        <li key={index} className="text-xs font-sans text-gray-600 flex items-start">
                          <span className="text-gray-400 mr-2 font-mono">{index + 1}.</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Palette className="w-5 h-5 text-[#FFB4A2]" />
                <h4 className="text-lg font-poppins font-bold text-gray-900 uppercase tracking-wide">Interface Design System</h4>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 space-y-4">
                  <span className="text-[10px] font-poppins font-bold text-gray-400 uppercase tracking-widest block">BRAND COLOUR TOKENS</span>
                  <div className="space-y-3.5">
                    {cs.designSystem.colors.map((color) => (
                      <div key={color.hex} className="flex items-center space-x-3 bg-white p-2.5 rounded-xl border border-gray-150">
                        <span className="w-10 h-10 rounded-lg shrink-0 border border-gray-100 shadow-2xs" style={{ backgroundColor: color.hex }}></span>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-poppins font-bold text-gray-900">{color.name}</span>
                            <span className="text-[9px] font-mono font-bold text-gray-400">{color.hex}</span>
                          </div>
                          <p className="text-[10px] font-sans text-gray-500 mt-0.5 leading-tight">{color.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 space-y-4">
                  <span className="text-[10px] font-poppins font-bold text-gray-400 uppercase tracking-widest block">TYPOGRAPHIC SCALES</span>
                  <div className="space-y-3">
                    {cs.designSystem.typography.map((type) => (
                      <div key={type.name} className="bg-white p-3.5 rounded-xl border border-gray-150 space-y-1">
                        <span className="text-[9px] font-mono font-bold text-[#7EC8FF]">{type.font}</span>
                        <h6 className="text-sm font-poppins font-bold text-gray-900 leading-none">{type.name}</h6>
                        <p className="text-[10px] font-sans text-gray-500 mt-1 leading-normal">Usage: {type.usage}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 space-y-4">
                  <span className="text-[10px] font-poppins font-bold text-gray-400 uppercase tracking-widest block">REUSABLE EMBED COMPONENTS</span>
                  <div className="flex flex-col gap-2">
                    {cs.designSystem.components.map((comp) => (
                      <div key={comp} className="px-3.5 py-2.5 rounded-xl bg-white border border-gray-150 text-xs font-sans font-semibold text-gray-700 flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-[#FFB4A2] rounded-full shrink-0 mt-1.5"></span>
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-[#7EC8FF]" />
                <h4 className="text-lg font-poppins font-bold text-gray-950 uppercase tracking-wide">Custom Interface Prototypes</h4>
              </div>

              <div className="glass-card rounded-3xl border border-gray-100 p-6 sm:p-8 space-y-6 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
                  <div>
                    <h5 className="font-poppins font-bold text-base text-gray-800">{cs.finalScreens.title}</h5>
                    <p className="text-xs font-sans text-gray-500 mt-0.5">{cs.finalScreens.description}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-poppins font-bold uppercase tracking-wider text-[#FFB4A2] bg-[#FFB4A2]/10 w-fit shrink-0 select-none">{cs.finalScreens.mockupType} layout</span>
                </div>

                <div id="simulated-workspace-screens-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {cs.finalScreens.screens.map((screen, sIdx) => (
                    <div key={screen.name} className="p-5.5 rounded-2xl bg-slate-50 border border-gray-150 shadow-5xs hover:shadow-2xs transition-all duration-300 group flex flex-col justify-between min-h-[170px]">
                      <div>
                        <div className="flex items-center space-x-2 text-[#7EC8FF] mb-2 font-mono text-[10px] font-bold">
                          <span>SCREEN 0{sIdx + 1}</span>
                        </div>
                        <h6 className="font-poppins font-bold text-sm text-gray-900 group-hover:text-[#7EC8FF] transition-colors">{screen.name}</h6>
                        <ul className="mt-3.5 space-y-1.5">
                          {screen.feat.map((f, fIdx) => (
                            <li key={fIdx} className="text-[11px] font-sans text-gray-500 flex items-center">
                              <span className="w-1 h-1 bg-[#FFB4A2] rounded-full mr-1.5 shrink-0"></span>
                              <span className="truncate">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="h-1.5 w-1/4 rounded-full bg-[#A7D8FF] mt-4 opacity-50 group-hover:w-full transition-all duration-500"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 pb-4">
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-2 text-gray-800">
                  <Code2 className="w-5 h-5 text-[#FFB4A2]" />
                  <h4 className="text-lg font-poppins font-bold uppercase tracking-wide">Development Process</h4>
                </div>
                <ul className="space-y-3.5 pl-1">
                  {cs.developmentProcess.map((step, idx) => (
                    <li key={idx} className="flex items-start space-x-3 bg-gray-50/50 p-3 rounded-xl border border-gray-150">
                      <span className="w-6 h-6 rounded-lg bg-gray-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">{idx + 1}</span>
                      <span className="text-xs font-sans text-gray-600 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-2 text-gray-800">
                  <Heart className="w-5 h-5 text-rose-400" />
                  <h4 className="text-lg font-poppins font-bold uppercase tracking-wide">Lessons & Takeaways</h4>
                </div>
                <div className="space-y-3">
                  {cs.lessonsLearned.map((lesson, idx) => (
                    <div key={idx} className="bg-rose-50/30 p-4 rounded-xl border border-rose-100 flex items-start space-x-3">
                      <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 shrink-0"></span>
                      <p className="text-xs font-sans text-gray-700 leading-relaxed">{lesson}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Simple summary body — used for projects without a documented research process */
          <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
              {project.thumbnail ? (
                <img src={project.thumbnail} alt={project.title} className="w-full h-64 sm:h-80 object-cover object-top" />
              ) : (
                <div className={`w-full h-64 sm:h-80 bg-gradient-to-br ${project.imageAccent} flex items-center justify-center`}>
                  <Sparkles className="w-10 h-10 text-gray-950/40" />
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl font-serif text-gray-900 tracking-tight">{project.title}</h1>
              <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed max-w-3xl">{project.simpleSummary || project.highlight}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="text-xs font-mono font-semibold bg-gray-50 text-gray-600 border border-gray-150 px-3 py-1 rounded-full">
                  {tool}
                </span>
              ))}
            </div>

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-[#FFB4A2]" />
                  <h4 className="text-sm font-poppins font-bold text-gray-900 uppercase tracking-wide">Key Features</h4>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 bg-gray-50/60 border border-gray-150 rounded-xl p-3.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7EC8FF] shrink-0 mt-0.5" />
                      <span className="text-xs font-sans text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-[11px] text-gray-400 font-sans italic pt-2">This project doesn't have a full documented case study yet — check the Figma or GitHub link above for the design and code details.</p>
          </div>
        )}

        {/* Sticky footer with close */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between z-20">
          <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-sans">
            <CheckCircle2 className="w-4 h-4 text-[#7EC8FF]" />
            <span>{cs ? "Figma designs + Clean Code blocks verified" : "Figma / GitHub links available above"}</span>
          </div>
          <button id="modal-footer-close" onClick={onClose} className="px-5 py-2 rounded-full bg-gray-900 border hover:bg-gray-800 text-white font-poppins font-semibold text-xs cursor-pointer active:scale-95 transition-transform">
            Done Reviewing
          </button>
        </div>
      </div>
    </div>
  );
}
