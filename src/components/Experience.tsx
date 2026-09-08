/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Calendar, CheckCircle2 } from "lucide-react";
import { EXPERIENCE_HISTORY } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#f8fbff]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16 max-w-2xl">
          <div className="flex items-center space-x-2 text-[#7EC8FF] mb-2 font-poppins font-bold text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-[#7EC8FF] rounded-full"></span>
            <span>Corporate History</span>
          </div>
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-4xl sm:text-5xl font-black text-gray-950 tracking-tighter">
            Professional <span className="text-[#7EC8FF] italic">Experience</span>
          </h2>
        </div>

        <div className="space-y-8">
          {EXPERIENCE_HISTORY.map((exp) => (
            <div key={exp.company} className="relative pl-8 sm:pl-10 before:absolute before:left-3 before:top-4 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-[#7EC8FF] before:to-transparent last:before:hidden">
              <div className="absolute left-0 top-1 w-6.5 h-6.5 rounded-full bg-white border-2 border-[#7EC8FF] flex items-center justify-center shadow-xs z-10">
                <span className="w-2 h-2 rounded-full bg-[#FFB4A2]"></span>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="px-3 py-1 text-[11px] font-poppins font-bold uppercase tracking-wider text-[#7EC8FF] bg-[#DDF1FF] rounded-full">Internship</span>
                    <h3 className="text-2xl font-serif text-gray-900 mt-2">{exp.company}</h3>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="flex items-center text-xs font-poppins text-gray-400 font-semibold uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-sm font-poppins font-bold text-gray-700 mt-1">{exp.role}</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-left">
                      <CheckCircle2 className="w-5 h-5 text-[#7EC8FF] shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-sans text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
