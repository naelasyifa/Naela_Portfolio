/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import OrganizationsEducation from "./components/OrganizationsEducation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { PERSONAL_INFO } from "./data";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased selection:bg-[#7EC8FF] selection:text-white relative">
      {/* Prime Float Header Navbar */}
      <Navbar onDownloadCV={() => window.open(PERSONAL_INFO.cvUrl, "_blank")} />

      {/* Hero Header Presentation */}
      <Hero onDownloadCV={() => window.open(PERSONAL_INFO.cvUrl, "_blank")} />

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
    </div>
  );
}
