"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F5F7F6]/80 backdrop-blur-md border-b border-[#022B1C]/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-display text-2xl text-[#022B1C] uppercase">ARGHIRI BIANCA</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-[#0E4A3A]">
          <a className="hover:text-[#022B1C] transition-colors" href="#about">About</a>
          <a className="hover:text-[#022B1C] transition-colors" href="#projects">Projects</a>
          <a className="hover:text-[#022B1C] transition-colors" href="#ideas">Ideas</a>
          <a className="hover:text-[#022B1C] transition-colors" href="#timeline">Journey</a>
          <a className="hover:text-[#022B1C] transition-colors" href="#contact">Contact</a>
          <a className="hover:text-[#022B1C] transition-colors" href="/cv">Download CV</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#022B1C]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#F5F7F6]/95 backdrop-blur-md border-t border-[#022B1C]/10">
          <div className="px-6 py-4 space-y-3 text-sm font-medium text-[#0E4A3A]">
            <a 
              className="block hover:text-[#022B1C] transition-colors" 
              href="#about"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              className="block hover:text-[#022B1C] transition-colors" 
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              className="block hover:text-[#022B1C] transition-colors" 
              href="#ideas"
              onClick={() => setIsMenuOpen(false)}
            >
              Ideas
            </a>
            <a 
              className="block hover:text-[#022B1C] transition-colors" 
              href="#timeline"
              onClick={() => setIsMenuOpen(false)}
            >
              Journey
            </a>
            <a 
              className="block hover:text-[#022B1C] transition-colors" 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              className="block hover:text-[#022B1C] transition-colors" 
              href="/cv"
              onClick={() => setIsMenuOpen(false)}
            >
              Download CV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
