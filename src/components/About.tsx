/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Palette, Cpu, Award, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "../data";

const ABOUT_PHOTO = "/src/assets/images/foto3.jpeg";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#f8fbff]">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-1/3 -left-36 w-80 h-80 rounded-full bg-[#DDF1FF]/40 blur-[100px] z-0"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#FFB4A2]/10 blur-[110px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-16 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-[#7EC8FF] mb-2 font-poppins font-bold text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-[#7EC8FF] rounded-full"></span>
            <span>Who I Am</span>
          </div>
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-4xl sm:text-5xl font-black text-gray-950 tracking-tighter">
            About <span className="text-[#FFB4A2] italic">Me</span>
          </h2>
          <div className="h-1 w-20 bg-[#7EC8FF] mt-4 rounded-full"></div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: Profile photo card */}
          <div className="lg:col-span-5 relative">
            <div className="w-full max-w-[340px] mx-auto lg:mx-0 relative">
              {/* Accent decorative ring behind the photo, tying it to the portfolio palette */}
              <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#7EC8FF]/30 to-[#FFB4A2]/20 -z-10"></div>

              <div className="rounded-2xl overflow-hidden border border-gray-200/80 bg-white shadow-xl">
                <img id="about-profile-photo" src={ABOUT_PHOTO} alt="Naela Syifa" className="w-full h-auto object-cover aspect-[4/5]" />
              </div>

              {/* Small badge, echoes the "Open to work" indicator used in the Hero */}
              {/* <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-2.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-xs font-poppins font-bold text-gray-800">Open to work</span>
              </div> */}
            </div>
          </div>

          {/* RIGHT: Biography & achievements */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <h3 style={{ fontFamily: "Georgia, serif" }} className="text-3xl font-black text-gray-950 tracking-tight leading-snug">
                Where Design Thinking Meets <span className="text-[#7EC8FF] italic">Clean</span> Code
              </h3>
              <p className="text-gray-600 font-sans text-base leading-relaxed">
                Naela Syifa is a D3 Informatics Engineering graduate with experience as a UI/UX Designer and Fullstack Developer at PT Data Andalan Utama. Passionate about creating user-centered digital products, she specializes in
                transforming complex problems into intuitive, aesthetic, and impactful solutions.
              </p>
              <p className="text-gray-600 font-sans text-base leading-relaxed">
                As a graduate of Informatics Engineering, I don't just stop at designing beautiful mockups in Figma. I write modular, well-tested code to bring those experiences into fully realized products that communicate with backends
                and scale efficiently.
              </p>
            </div>

            {/* Achievements — one large highlight tile + compact list */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 pt-4">
              <div className="sm:col-span-2 glass-card p-6 rounded-2xl border border-[#7EC8FF]/30 bg-gradient-to-br from-[#DDF1FF]/60 to-white flex flex-col justify-center">
                <span style={{ fontFamily: "Georgia, serif" }} className="text-5xl font-black text-gray-950 leading-none">
                  3.82
                </span>
                <p className="text-xs font-sans text-gray-500 mt-2">GPA at Politeknik Negeri Semarang</p>
              </div>

              <div className="sm:col-span-3 glass-card rounded-2xl border border-gray-100 divide-y divide-gray-100">
                <div className="flex items-center gap-3 p-3.5">
                  <Palette className="w-4 h-4 text-[#FFB4A2] shrink-0" />
                  <div>
                    <p className="text-sm font-poppins font-bold text-gray-900 leading-tight">UI/UX Specialist</p>
                    <p className="text-xs text-gray-500">Deep research, wireframing & custom interfaces</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3.5">
                  <Cpu className="w-4 h-4 text-[#7EC8FF] shrink-0" />
                  <div>
                    <p className="text-sm font-poppins font-bold text-gray-900 leading-tight">Front-End Developer</p>
                    <p className="text-xs text-gray-500">Figma layers into clean React & Flutter setups</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3.5">
                  <Award className="w-4 h-4 text-[#FFB4A2] shrink-0" />
                  <div>
                    <p className="text-sm font-poppins font-bold text-gray-900 leading-tight">BNSP Certified</p>
                    <p className="text-xs text-gray-500">Official multimedia & interface designer credentials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
