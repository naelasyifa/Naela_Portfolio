/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Linkedin, Send, CheckCircle, ArrowRight, MessageSquare, Clipboard } from "lucide-react";
import { PERSONAL_INFO } from "../data";

// EmailJS credentials — from your EmailJS dashboard (Account > API keys, and Email Services / Email Templates)
const EMAILJS_SERVICE_ID = "service_e82exfu";
const EMAILJS_TEMPLATE_ID = "template_26w1bwt";
const EMAILJS_PUBLIC_KEY = "NfPHBQL6Kl5bwjP2h";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setError(null);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || "—",
          message: formData.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      )
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setIsSubmitting(false);
        setError("Something went wrong while sending your message. Please try emailing me directly instead.");
      });
  };

  return (
    <section id="contact" className="py-24 bg-[#f8fbff] relative overflow-hidden">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-[#FFB4A2]/10 blur-[80px]"></div>
      <div className="absolute top-1/3 -left-36 w-80 h-80 rounded-full bg-[#7EC8FF]/15 blur-[90px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#7EC8FF] mb-2 font-poppins font-bold text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-[#7EC8FF] rounded-full"></span>
            <span>Let's Connect</span>
          </div>
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-4xl sm:text-5xl font-black text-gray-950 tracking-tighter">
            Let's Build <span className="text-[#FFB4A2] italic font-serif">Something</span> Amazing Together
          </h2>
          <p className="text-gray-500 font-sans text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            I am actively looking for software engineering internships, UI/UX design opportunities, freelance collaborations, and exciting digital product ideas.
          </p>
          <div className="h-1 w-16 bg-[#7EC8FF] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Master columns grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* LEFT: Quick Copy Card Contacts (Grid: 5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="font-poppins font-bold text-lg text-gray-900 mb-2 uppercase tracking-wide flex items-center">
              <MessageSquare className="w-5 h-5 text-[#7EC8FF] mr-2" />
              Direct Contacts
            </h3>

            <div className="space-y-4">
              {/* Card Email */}
              <div className="glass-card p-4 rounded-2xl border border-gray-150 flex items-center justify-between group">
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#DDF1FF] flex items-center justify-center shrink-0 border border-[#A7D8FF]/20">
                    <Mail className="w-5 h-5 text-[#7EC8FF]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold text-gray-400 block">EMAIL ADDRESS</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-sans font-semibold text-gray-800 hover:text-[#7EC8FF]">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  id="copy-email"
                  onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                  className="p-2 rounded-lg bg-gray-50 text-gray-400 hover:text-[#7EC8FF] hover:bg-white transition-all cursor-pointer shadow-5xs"
                  title="Copy Email"
                >
                  <Clipboard className="w-4 h-4" />
                </button>
              </div>

              {/* Card Phone */}
              <div className="glass-card p-4 rounded-2xl border border-gray-150 flex items-center justify-between group">
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFB4A2]/10 flex items-center justify-center shrink-0 border border-[#FFB4A2]/30">
                    <Phone className="w-5 h-5 text-[#FFB4A2]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold text-gray-400 block">TELEPHONE</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs sm:text-sm font-sans font-semibold text-gray-800 hover:text-[#FFB4A2]">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  id="copy-phone"
                  onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                  className="p-2 rounded-lg bg-gray-50 text-gray-400 hover:text-[#FFB4A2] hover:bg-white transition-all cursor-pointer shadow-5xs"
                  title="Copy Phone"
                >
                  <Clipboard className="w-4 h-4" />
                </button>
              </div>

              {/* Card LinkedIn */}
              <div className="glass-card p-4 rounded-2xl border border-gray-150 flex items-center justify-between group">
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#DDF1FF] flex items-center justify-center shrink-0 border border-[#A7D8FF]/20">
                    <Linkedin className="w-5 h-5 text-[#7EC8FF]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold text-gray-400 block">LINKEDIN PROFILE</span>
                    <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-sans font-semibold text-gray-800 hover:text-[#7EC8FF]">
                      /in/{PERSONAL_INFO.linkedin}
                    </a>
                  </div>
                </div>
                <a
                  id="go-linkedin"
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-50 text-gray-400 hover:text-[#7EC8FF] hover:bg-white transition-all shadow-5xs"
                  title="Visit LinkedIn"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick alert feedback */}
            {copiedText && <div className="p-3 text-center rounded-xl bg-emerald-50 text-emerald-800 text-xs font-poppins font-semibold border border-emerald-150 animate-in fade-in slide-in-from-bottom-2">Copied successfully!</div>}
          </div>

          {/* RIGHT: High-Fidelity Interactive Form Component (Grid: 7 cols) */}
          <div className="lg:col-span-7">
            {!isSuccess ? (
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-gray-150 shadow-md">
                <h3 className="font-poppins font-bold text-lg text-gray-950 mb-6 uppercase tracking-wide border-b border-gray-50 pb-2 text-left select-none">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-poppins font-bold text-gray-400 uppercase block mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#7EC8FF] focus:outline-none bg-white text-xs sm:text-sm transition-colors text-gray-800 font-sans"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-poppins font-bold text-gray-400 uppercase block mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#7EC8FF] focus:outline-none bg-white text-xs sm:text-sm transition-colors text-gray-800 font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-poppins font-bold text-gray-400 uppercase block mb-1">
                      Organization / Company <span className="text-gray-300 normal-case font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Acme Studio"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#7EC8FF] focus:outline-none bg-white text-xs sm:text-sm transition-colors text-gray-800 font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-poppins font-bold text-gray-400 uppercase block mb-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Hi Naela, I'd like to talk about an internship opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#7EC8FF] focus:outline-none bg-white text-xs sm:text-sm transition-colors text-gray-800 font-sans"
                    ></textarea>
                  </div>

                  {error && <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-sans border border-red-100">{error}</div>}

                  <button
                    id="submit-contact-form"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gray-950 hover:bg-gray-800 text-white font-poppins font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-gray-950/10 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="glass-card p-8 rounded-3xl border border-emerald-200 bg-emerald-50/50 shadow-lg text-center space-y-6 relative overflow-hidden animate-in zoom-in-95 duration-400">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>

                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-2xl text-gray-950">Message Sent!</h4>
                  <p className="text-xs font-sans text-gray-500 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your message has been sent successfully. I'll get back to you as soon as possible, usually within 24 hours.
                  </p>
                </div>

                <button
                  id="reset-success-ticket"
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ name: "", email: "", company: "", message: "" });
                  }}
                  className="px-5 py-2.5 bg-white border border-gray-200 hover:border-gray-900 rounded-xl text-xs font-poppins font-semibold text-gray-800 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
