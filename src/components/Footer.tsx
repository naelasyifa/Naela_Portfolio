/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Heart } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Footer() {
  return (
    <footer id="footer-stamp" className="bg-gray-50 border-t border-gray-150 py-12 relative overflow-hidden text-center selection:bg-[#7EC8FF] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Brand signatures */}
        <div className="flex items-center space-x-2">
          <span className="w-8 h-8 rounded-lg bg-gray-950 flex items-center justify-center font-poppins font-bold text-white text-sm select-none">NS</span>
          <div className="text-left">
            <p className="font-poppins font-bold text-sm text-gray-950 leading-none">{PERSONAL_INFO.name}</p>
            <p className="font-sans text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Designing experiences • Since 2024</p>
          </div>
        </div>

        {/* Center: Interactive credits with soft anims */}
        {/* <div className="text-xs font-poppins font-medium text-gray-500 flex items-center justify-center space-x-1.5 select-none">
          <span>Crafted with</span>
          <Heart className="w-4 h-4 text-[#FFB4A2] fill-[#FFB4A2] animate-pulse" />
          <span>incorporating Apple, Stripe, and Linear designs</span>
        </div> */}

        {/* Right Side: Simple copyright anchors */}
        <div className="text-xs font-mono text-gray-400">
          <span>© {new Date().getFullYear()} Naela Syifa.</span>
        </div>
      </div>
    </footer>
  );
}
