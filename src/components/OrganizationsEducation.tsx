/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { GraduationCap, Award, ShieldCheck, Users, CheckCircle2, ExternalLink } from "lucide-react";
import { CERTIFICATIONS, ORGANIZATION_HISTORY, PERSONAL_INFO } from "../data";

export default function OrganizationsEducation() {
  return (
    <section id="education" className="py-24 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center space-x-2 text-[#7EC8FF] mb-2 font-poppins font-bold text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-[#7EC8FF] rounded-full"></span>
            <span>Academic Foundation</span>
          </div>
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tighter">
            Education & <span className="text-[#FFB4A2] italic">Organization</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: Education & Organization */}
          <div className="space-y-10">
            <div className="border-l-2 border-[#7EC8FF] pl-6 space-y-4">
              <div className="flex items-start space-x-4">
                <GraduationCap className="w-6 h-6 text-[#7EC8FF] shrink-0 mt-1" />
                <div className="space-y-1 flex-1">
                  <div className="flex items-center flex-wrap gap-x-3 gap-y-1">
                    <h3 className="text-xl font-serif text-gray-950 leading-snug">{PERSONAL_INFO.college}</h3>
                    <span className="text-xs font-poppins font-bold text-gray-900 bg-[#DDF1FF] px-2.5 py-1 rounded-md">GPA {PERSONAL_INFO.gpa}</span>
                  </div>
                  <p className="text-gray-700 font-poppins font-semibold text-sm">{PERSONAL_INFO.degree}</p>
                  <p className="text-gray-500 text-sm">August 2023 – August 2026</p>
                </div>
              </div>

              {/* Baris terpisah cuma buat status excellence */}
              <div className="pt-1">
                <span className="text-xs font-poppins font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md">Active Excellence</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {["UI/UX Design", "Front-End Development", "REST API", "Database Systems", "Computer Networks"].map((c) => (
                  <span key={c} className="px-3 py-1 bg-white border border-gray-200 text-xs text-gray-600 font-poppins font-semibold rounded-lg">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex items-center space-x-2 text-gray-700">
                <Users className="w-5 h-5 text-[#FFB4A2]" />
                <h3 className="font-poppins font-bold text-base uppercase tracking-tight">Organization Experience</h3>
              </div>

              {ORGANIZATION_HISTORY.map((org) => (
                <div key={org.name} className="border-l-2 border-[#FFB4A2] pl-6 space-y-2">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <h4 className="font-serif text-lg text-gray-900 leading-tight">{org.name}</h4>
                    <span className="text-[10px] text-gray-400 font-mono font-bold tracking-wider uppercase">{org.period}</span>
                  </div>
                  <p className="font-poppins font-semibold text-xs text-gray-500">{org.role}</p>

                  <ul className="space-y-1.5 pt-1">
                    {org.responsibilities.map((resp, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2.5 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#A7D8FF] shrink-0 mt-0.5" />
                        <span className="text-gray-600 leading-relaxed font-sans">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Certifications — bold numbers as the visual anchor, alternating accent bar */}
          <div>
            <h3 className="font-poppins font-bold text-sm text-gray-400 uppercase tracking-widest mb-6">Verified Credentials ({CERTIFICATIONS.length})</h3>

            <div className="space-y-5">
              {CERTIFICATIONS.map((cert, idx) => {
                const CardWrapper = cert.credentialUrl ? "a" : "div";
                const wrapperProps = cert.credentialUrl ? { href: cert.credentialUrl, target: "_blank", rel: "noopener noreferrer" } : {};
                const accent = idx % 2 === 0 ? "#7EC8FF" : "#FFB4A2";
                const accentBg = idx % 2 === 0 ? "bg-[#EAF6FF]" : "bg-[#FFF1EE]";
                const accentText = idx % 2 === 0 ? "text-[#3A9BE0]" : "text-[#E8836A]";

                return (
                  <CardWrapper
                    key={cert.id}
                    id={`cert-item-${cert.id}`}
                    {...wrapperProps}
                    className="flex gap-5 items-start p-5 rounded-2xl bg-white border border-gray-150 hover:border-[#7EC8FF]/40 hover:shadow-md transition-all duration-300 cursor-pointer"
                    style={{ borderLeftWidth: "4px", borderLeftColor: idx % 2 === 0 ? "#7EC8FF" : "#FFB4A2" }}
                  >
                    {/* Bold number anchor */}
                    <div className={`w-11 h-11 rounded-xl ${accentBg} ${accentText} flex items-center justify-center font-poppins font-black text-lg shrink-0`}>{String(idx + 1).padStart(2, "0")}</div>

                    <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-serif text-base text-gray-900 leading-snug">{cert.title}</h4>
                        {cert.credentialUrl && <ExternalLink className="w-4 h-4 text-gray-300 shrink-0 mt-0.5" />}
                      </div>

                      <p className="text-sm text-gray-500 font-poppins">{cert.issuer}</p>

                      <div className="flex items-center gap-3 pt-1">
                        <span className="text-[11px] font-mono font-bold text-gray-400 tracking-wider uppercase">{cert.year}</span>
                        {cert.isVerified && (
                          <span className="flex items-center gap-1 text-[11px] font-poppins font-bold text-emerald-700">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
            <div className="mt-6 p-4.5 rounded-2xl bg-gray-50 border border-gray-150 text-xs text-gray-500 text-left flex items-start space-x-2.5">
              <ShieldCheck className="w-5 h-5 text-[#7EC8FF] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                All certifications listed above are verifiable through their respective issuing institutions including BNSP, Oracle Academy, Politeknik Negeri Semarang, IYSA, and MikroTik or via the credential links provided.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
