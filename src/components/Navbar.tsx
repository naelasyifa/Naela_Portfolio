/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Mail, Linkedin, FileText } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface NavbarProps {
  onDownloadCV: () => void;
}

export default function Navbar({ onDownloadCV }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <nav id="main-navbar" className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-3 bg-white/75 backdrop-blur-md shadow-sm border-b border-[#A7D8FF]/20" : "py-5 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a id="nav-logo" href="#" className="flex items-center space-x-2 group focus:outline-none">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7EC8FF] to-[#FFB4A2] flex items-center justify-center shadow-md shadow-[#A7D8FF]/30 transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-poppins font-bold text-lg select-none">NS</span>
            </span>
            <div className="flex flex-col">
              <span className="text-gray-900 font-poppins font-bold text-base tracking-tight leading-none">{PERSONAL_INFO.name}</span>
              <span className="text-[#7EC8FF] font-sans font-medium text-xs tracking-wider uppercase mt-0.5">UI/UX & FE Dev</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a key={link.name} id={`nav-${link.name.toLowerCase()}`} href={link.href} className="px-4 py-2 rounded-full text-gray-600 font-poppins font-medium text-sm hover:text-gray-950 hover:bg-[#DDF1FF]/50 transition-all duration-200">
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              id="social-linkedin-top"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-500 hover:text-[#7EC8FF] hover:bg-[#DDF1FF]/30 transition-all duration-150"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              id="download-cv-btn-top"
              onClick={onDownloadCV}
              className="px-5 py-2 rounded-full bg-[#7EC8FF] hover:bg-[#7EC8FF]/90 text-white font-poppins font-semibold text-sm shadow-md shadow-[#7EC8FF]/20 flex items-center space-x-2 transition-transform duration-200 active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button id="download-cv-btn-mob" onClick={onDownloadCV} className="p-2 rounded-full bg-[#7EC8FF] text-white shadow-sm" title="Download CV">
              <FileText className="w-4 h-4" />
            </button>
            <button id="mobile-menu-trigger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-[#DDF1FF]/40 focus:outline-none transition-colors duration-200">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden px-4 pt-2 pb-6 bg-white/95 border-b border-[#A7D8FF]/20 space-y-1 block animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-mob-${link.name.toLowerCase()}`}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-gray-700 font-poppins font-medium text-base hover:text-gray-950 hover:bg-[#DDF1FF]/50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#A7D8FF]/10 flex items-center justify-between px-4">
            <a id="social-linkedin-top-mob" href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-[#7EC8FF]">
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-poppins font-medium">LinkedIn</span>
            </a>
            <button
              id="download-cv-btn-mob-drawer"
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadCV();
              }}
              className="px-5 py-2 rounded-full bg-[#7EC8FF] text-white font-poppins font-semibold text-sm flex items-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
