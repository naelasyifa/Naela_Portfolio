/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Pipette, Code2, Layers, Wrench, Languages } from "lucide-react";
import { SKILL_CATEGORIES } from "../data";

export default function Skills() {
  const config = (title: string) => {
    switch (title) {
      case "Design Tools":
        return { icon: <Pipette className="w-5 h-5 text-[#7EC8FF]" />, bg: "bg-[#DDF1FF]", chip: "border-[#A7D8FF]/50 hover:bg-[#DDF1FF]/40" };
      case "Frontend Development":
        return { icon: <Code2 className="w-5 h-5 text-[#FFB4A2]" />, bg: "bg-[#FFB4A2]/15", chip: "border-[#FFB4A2]/40 hover:bg-[#FFB4A2]/10" };
      case "Technical Skills":
        return { icon: <Wrench className="w-5 h-5 text-[#FFB4A2]" />, bg: "bg-[#FFB4A2]/15", chip: "border-[#FFB4A2]/40 hover:bg-[#FFB4A2]/10" };
      case "Languages":
        return { icon: <Languages className="w-5 h-5 text-[#7EC8FF]" />, bg: "bg-[#DDF1FF]", chip: "border-[#A7D8FF]/50 hover:bg-[#DDF1FF]/40" };
      default:
        return { icon: <Layers className="w-5 h-5 text-[#7EC8FF]" />, bg: "bg-[#A7D8FF]/15", chip: "border-[#A7D8FF]/40 hover:bg-[#A7D8FF]/10" };
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#f8fbff]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center space-x-2 text-[#7EC8FF] mb-2 font-poppins font-bold text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-[#7EC8FF] rounded-full"></span>
            <span>Technical Capabilities</span>
          </div>
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-4xl sm:text-5xl font-black text-gray-950 tracking-tighter">
            Skills & <span className="text-[#FFB4A2] italic">Expertise</span>
          </h2>
        </div>

        <div className="space-y-10">
          {SKILL_CATEGORIES.map((category) => {
            const { icon, bg, chip } = config(category.title);
            return (
              <div key={category.title} id={`skills-card-${category.title.toLowerCase().replace(/\s+/g, "-")}`} className="flex flex-col sm:flex-row sm:items-center gap-6 pb-10 border-b border-gray-200 last:border-0">
                <div className="flex items-center gap-3 sm:w-48 shrink-0">
                  <span className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center shrink-0`}>{icon}</span>
                  <h3 className="text-lg font-poppins font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 flex-1">
                  {category.skills.map((skill) => (
                    <span key={skill} className={`px-3.5 py-1.5 rounded-full bg-white border font-poppins font-medium text-xs text-gray-700 transition-colors ${chip}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages - konsisten dengan struktur kategori skill di atas */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-10 border-t border-gray-200">
          <div className="flex items-center gap-3 sm:w-48 shrink-0">
            <span className="w-10 h-10 rounded-full bg-[#DDF1FF] flex items-center justify-center shrink-0">
              <Languages className="w-5 h-5 text-[#7EC8FF]" />
            </span>
            <h3 className="text-lg font-poppins font-bold text-gray-900">Languages</h3>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 flex-1">
            <span className="text-sm font-sans text-gray-700">
              <span className="font-semibold">Bahasa Indonesia</span> <span className="text-gray-400">— Fluent</span>
            </span>
            <span className="text-sm font-sans text-gray-700">
              <span className="font-semibold">English</span> <span className="text-gray-400">— Basic</span>
            </span>
            <span className="text-sm font-sans text-gray-700">
              <span className="font-semibold">Javanese</span> <span className="text-gray-400">— Fluent</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
