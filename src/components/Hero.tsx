/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Linkedin, Mail, ChevronRight, FileText } from "lucide-react";
import { PERSONAL_INFO } from "../data";

import AVATAR_PATH from "/src/assets/images/foto2.jpeg";

interface HeroProps {
  onDownloadCV: () => void;
}

export default function Hero({ onDownloadCV }: HeroProps) {
  return (
    <section id="hero" className="relative pt-28 pb-16 bg-[#f8fbff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Text block — 7 of 12 cols */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-poppins font-bold text-[#7EC8FF] tracking-widest uppercase">Hello, I'm</p>

            <h1 id="hero-title" style={{ fontFamily: "Georgia, serif" }} className="text-[56px] sm:text-[72px] lg:text-[84px] leading-[0.92] font-black text-gray-900 tracking-tighter">
              Naela <span className="text-[#FFB4A2] italic">Syifa</span>
            </h1>
            <h2 className="text-2xl font-semibold text-[#7EC8FF] tracking-tight">{PERSONAL_INFO.role}</h2>

            <p className="text-sm text-gray-500">
              Based in <span className="font-semibold text-gray-700">{PERSONAL_INFO.location}</span>
            </p>

            <div className="space-y-4 max-w-[720px]">
              <p className="text-lg opacity-85 leading-relaxed text-gray-800 border-l-4 border-[#7EC8FF] pl-4">{PERSONAL_INFO.tagline}</p>
              <p className="text-sm opacity-65 leading-relaxed text-gray-600">{PERSONAL_INFO.description}</p>

              {/* <p className="text-sm text-gray-500">
                Based in <span className="font-semibold text-gray-700">{PERSONAL_INFO.location}</span> — open to full-time & internship opportunities.
              </p> */}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                id="hero-view-projects"
                href="#projects"
                className="px-8 py-3.5 bg-[#7EC8FF] text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:shadow-xl hover:bg-[#7EC8FF]/95 transition-all duration-200 flex items-center space-x-2"
              >
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <button
                id="hero-download-cv"
                onClick={onDownloadCV}
                className="px-6 py-3.5 bg-white border border-[#DDF1FF] rounded-2xl shadow-sm hover:shadow-md transition-all font-bold text-gray-700 flex items-center space-x-2 cursor-pointer"
              >
                <FileText className="w-4.5 h-4.5 text-[#7EC8FF]" />
                <span>Download CV</span>
              </button>
            </div>

            {/* <p className="text-xs text-gray-400 font-poppins">{PERSONAL_INFO.location} · Open to full-time & internship opportunities</p> */}

            <div className="pt-6 border-t border-gray-100 flex items-center space-x-4">
              <span className="text-xs font-poppins text-gray-400 uppercase tracking-widest">Connect:</span>
              <div className="flex items-center space-x-3">
                <a
                  id="hero-linkedin"
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white shadow-xs border border-gray-100 text-gray-600 hover:text-[#7EC8FF] hover:border-[#7EC8FF]/40 transition-all duration-150"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  id="hero-email"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-full bg-white shadow-xs border border-gray-100 text-gray-600 hover:text-[#7EC8FF] hover:border-[#7EC8FF]/40 transition-all duration-150"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                {/* <a
                  id="hero-portfolio"
                  href={`https://${PERSONAL_INFO.portfolioUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white shadow-xs border border-gray-100 text-gray-600 hover:text-[#7EC8FF] hover:border-[#7EC8FF]/40 transition-all duration-150"
                  title="Design Case Studies Portfolio"
                >
                  <Globe className="w-4 h-4" />
                </a> */}
              </div>
            </div>
          </div>

          {/* Photo block — 5 of 12 cols, no floating badge */}
          <div className="lg:col-span-5 flex flex-col items-end gap-3 lg:mt-10">
            <span className="flex items-center gap-2 text-xs font-poppins font-semibold text-gray-600 pr-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Open to work
            </span>
            <div className="w-full max-w-[320px] aspect-[3/4] bg-gradient-to-tr from-[#A7D8FF] to-[#DDF1FF] rounded-2xl shadow-xl relative overflow-hidden">
              <img id="hero-profile-avatar" src={AVATAR_PATH} alt={PERSONAL_INFO.name} referrerPolicy="no-referrer" className="w-full h-full object-cover object-[center_20%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
