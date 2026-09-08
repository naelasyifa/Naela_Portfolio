/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import OrganizationsEducation from "./components/OrganizationsEducation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { X, Printer, Download, Mail, Phone, MapPin, GraduationCap, Award, FileCheck2, ShieldAlert } from "lucide-react";
import { PERSONAL_INFO, CERTIFICATIONS } from "./data";

export default function App() {
  const [isCVPdfOpen, setIsCVPdfOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const triggerDownloadAction = () => {
    setDownloadSuccess(true);
    // Simulate natural PDF downloading trigger
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased selection:bg-[#7EC8FF] selection:text-white relative">
      {/* Prime Float Header Navbar */}
      <Navbar onDownloadCV={() => setIsCVPdfOpen(true)} />

      {/* Hero Header Presentation */}
      <Hero onDownloadCV={() => setIsCVPdfOpen(true)} />

      {/* Section 1: About Me Story & Figma Workspace Simulator */}
      <About />

      {/* Section 2: Education details, PCC organizational leadership, and Badges */}
      <OrganizationsEducation />

      {/* Section 3: PT Data Andalan Utama Timeline & Sprint logs */}
      <Experience />

      {/* Section 4: Technical Skills Grid */}
      <Skills />

      {/* Section 5: Featured Portfolio Projects with Case Studies modals */}
      <Projects />

      {/* Section 6: Contact links, Email copy triggers and Transmission form */}
      <Contact />

      {/* Footer copyright and crafted signatures */}
      <Footer />

      {/* INTERACTIVE PREMIUM CV RESUME POPUP OVERLAY */}
      {isCVPdfOpen && (
        <div id="cv-overlay-backdrop" className="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
          <div id="cv-overlay-panel" className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-[#A7D8FF]/20 animate-in zoom-in-95 duration-300">
            {/* CV Modal Toolbar Header */}
            <div className="sticky top-0 bg-gray-900 text-white px-6 py-4 flex items-center justify-between z-10 selection:bg-[#FFB4A2] selection:text-black">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 select-none"></span>
                <span className="text-sm font-poppins font-bold uppercase tracking-wider text-gray-300">Naela Syifa CV Document</span>
              </div>

              <div className="flex items-center space-x-2">
                {/* Print simulator */}
                <button
                  id="cv-print-opt"
                  onClick={() => window.print()}
                  className="p-2 sm:px-4 sm:py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-100 font-poppins font-semibold text-xs flex items-center space-x-2 transition-colors cursor-pointer"
                  title="Print this CV document"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">Print Document</span>
                </button>

                {/* Download simulator */}
                <button
                  id="cv-download-opt"
                  onClick={triggerDownloadAction}
                  className="p-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#7EC8FF] hover:bg-[#7EC8FF]/90 text-white font-poppins font-semibold text-xs flex items-center space-x-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download PDF</span>
                </button>

                {/* Close modal */}
                <button id="cv-close-opt" onClick={() => setIsCVPdfOpen(false)} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 cursor-pointer" title="Close and return">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable CV Sheet Area -- Styled to imitate a clean, premium visual Swiss grid CV print layout */}
            <div className="overflow-y-auto grow p-6 sm:p-12 bg-white print:p-0">
              {/* Alert prompt indicating download success */}
              {downloadSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-poppins font-semibold border border-emerald-150 animate-in fade-in slide-in-from-top-4 text-left">
                  📥 <strong>File Compiled:</strong> Naela_Syifa_CV_Resume.pdf prepared successfully. Download sequence launched on local workspace directory...
                </div>
              )}

              {/* Printable container */}
              <div className="max-w-3xl mx-auto border border-gray-100 p-8 sm:p-10 rounded-2xl shadow-inner select-none print:shadow-none print:border-none print:p-0">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b-2 border-gray-100 pb-6 mb-8 text-left">
                  <div>
                    <h2 className="text-3xl font-serif text-gray-950 font-bold leading-none">{PERSONAL_INFO.name}</h2>
                    <h3 className="text-base font-poppins font-semibold text-gray-600 mt-2">{PERSONAL_INFO.role}</h3>
                    <p className="text-xs text-gray-500 font-sans mt-1.5 max-w-md">{PERSONAL_INFO.bio}</p>
                  </div>

                  {/* Detailed metadata */}
                  <div className="space-y-1.5 text-xs font-sans text-gray-500 shrink-0">
                    <p className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 mr-2" />
                      <span>{PERSONAL_INFO.location}</span>
                    </p>
                    <p className="flex items-center">
                      <Mail className="w-3.5 h-3.5 text-gray-400 mr-2" />
                      <span>{PERSONAL_INFO.email}</span>
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-3.5 h-3.5 text-gray-400 mr-2" />
                      <span>{PERSONAL_INFO.phone}</span>
                    </p>
                    <p className="flex items-center">
                      <Award className="w-3.5 h-3.5 text-gray-400 mr-2" />
                      <span>{PERSONAL_INFO.portfolioUrl}</span>
                    </p>
                  </div>
                </div>

                {/* Grid contents */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
                  {/* Left Column: Education & Skills */}
                  <div className="sm:col-span-1 space-y-6">
                    {/* Education block */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-poppins font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-1">EDUCATION</h4>
                      <div className="space-y-1">
                        <p className="font-poppins font-bold text-xs text-gray-950 leading-tight">Politeknik Negeri Semarang</p>
                        <p className="text-[10px] font-sans text-gray-500 leading-tight">D3 Informatics Engineering</p>
                        <p className="text-[10px] font-mono text-gray-400 mt-1">GPA: {PERSONAL_INFO.gpa}</p>
                        <p className="text-[10px] font-sans text-gray-400">Exp. Grad 2026</p>
                      </div>
                    </div>

                    {/* Keys skills */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-poppins font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-1">CORE TOOLKITS</h4>
                      <div className="flex flex-col gap-1.5">
                        <p className="text-[10px] font-poppins font-bold text-gray-500 uppercase tracking-tight">DESIGN</p>
                        <p className="text-[11px] font-sans text-gray-600">Figma, Adobe XD, Canva, UI Wireframes, Design Systems</p>

                        <p className="text-[10px] font-poppins font-bold text-gray-500 uppercase tracking-tight mt-1">DEVELOPMENT</p>
                        <p className="text-[11px] font-sans text-gray-600">TypeScript, HTML/CSS, React, PHP, Flutter Mobile, MySQL</p>

                        <p className="text-[10px] font-poppins font-bold text-gray-500 uppercase tracking-tight mt-1">METHODS</p>
                        <p className="text-[11px] font-sans text-gray-600">User research, Wireframes, Agile Scrum, REST integrations</p>
                      </div>
                    </div>

                    {/* Certifications credentials summary */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-poppins font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-1">CREDENTIALS</h4>
                      <ul className="space-y-1.5">
                        {CERTIFICATIONS.map((cert) => (
                          <li key={cert.id} className="text-[10px] font-sans text-gray-600 flex items-start leading-tight">
                            <span className="text-[#7EC8FF] mr-1">•</span>
                            <span>{cert.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Corporate Internships & Leadership (Grid: 2 cols) */}
                  <div className="sm:col-span-2 space-y-6">
                    {/* Work experiences */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-poppins font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-1">WORK EXPERIENCE</h4>

                      <div className="space-y-2">
                        <div className="flex justify-between items-start leading-none">
                          <div>
                            <h5 className="font-poppins font-extrabold text-sm text-gray-950">PT Data Andalan Utama</h5>
                            <p className="text-[11px] font-sans font-semibold text-gray-500 mt-1">UI/UX Designer & Fullstack Developer Intern</p>
                          </div>
                          <span className="text-[9px] text-gray-400 font-mono">Aug — Dec 2025</span>
                        </div>

                        <ul className="space-y-1.5 pl-3 list-disc text-[11px] leading-relaxed text-gray-600">
                          <li>Designed point of sale systems using wireframes, prototyping, and layout analysis.</li>
                          <li>Formulated custom reusable design systems inside Figma, boosting visual consistency guidelines.</li>
                          <li>Synthesized responsive frontend interfaces using HTML, CSS, and structural JavaScript.</li>
                          <li>Integrated REST APIs with backend systems. Worked and thrived in Agile Scrum sprint frameworks.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Organization leadership */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-poppins font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-1">ORGANIZATIONS</h4>

                      <div className="space-y-2">
                        <div className="flex justify-between items-start leading-none">
                          <div>
                            <h5 className="font-poppins font-extrabold text-xs text-gray-950 leading-tight">Polytechnic Computer Club (PCC)</h5>
                            <p className="text-[10px] font-sans text-gray-500">Human Resource Development Section</p>
                          </div>
                          <span className="text-[9px] text-gray-400 font-mono">2024 — Present</span>
                        </div>
                        <ul className="space-y-1 pl-3 list-disc text-[10px] leading-relaxed text-gray-600">
                          <li>Oversaw student onboarding, teaching design thinking parameters and training mentors.</li>
                          <li>Administered member database metrics and organized execution schedules.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Project summaries */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-poppins font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-1">FEATURED CASE WORKS</h4>
                      <div className="grid grid-cols-2 gap-3 text-[10px] font-sans text-gray-500 leading-normal">
                        <div>
                          <p className="font-semibold text-gray-800 leading-none">POS System (UX & FE)</p>
                          <p className="mt-1">Interactive retail cashier UI connected to SQL services.</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 leading-none">Arena Connect (Dart/Flutter)</p>
                          <p className="mt-1">Active mobile timeslot organizer for athletic field rentals.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stamp verify */}
                <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between text-[9px] text-gray-400 font-sans uppercase">
                  <span>Compiled at Kudus, Central Java</span>
                  <div className="flex items-center space-x-1">
                    <FileCheck2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Digitally certified verified CV</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer feedback disclaimer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 select-none">
              <span>Press Close or Esc to exit document zoom view</span>
              <button id="cv-close-bottom" onClick={() => setIsCVPdfOpen(false)} className="px-4 py-1.5 rounded-lg bg-gray-900 border text-white font-poppins font-semibold text-[10px] cursor-pointer">
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
