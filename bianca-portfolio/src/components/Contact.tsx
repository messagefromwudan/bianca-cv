"use client";

import { useState } from 'react';
import { useToast } from '@/contexts/ToastContext';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitButton.innerHTML;
    
    // Show loading state
    setIsSubmitting(true);
    submitButton.innerHTML = 'Sending...';
    submitButton.disabled = true;
    
    // Submit form using fetch
    const formData = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        // Show success popup immediately
        showToast();
        form.reset();
      } else {
        alert('Oops! There was a problem submitting your form');
      }
    }).catch(error => {
      alert('Oops! There was a problem submitting your form');
    }).finally(() => {
      // Reset button state immediately
      setIsSubmitting(false);
      submitButton.innerHTML = originalText;
      submitButton.disabled = false;
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[#022B1C] text-white relative">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #3DDC97 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Content & Socials */}
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.1]">
                Let&apos;s <span className="text-[#3DDC97]">Connect</span>
              </h2>
              <p className="text-lg text-[#F5F7F6]/70 max-w-lg leading-relaxed">
                I&apos;m always open to discussing visionary projects, AI ethics, or potential collaborations that push the boundaries of what&apos;s possible in the digital frontier.
              </p>
            </div>

            <div className="grid gap-4">
              {/* Email Card */}
              <a 
                href="mailto:arghiribianca@gmail.com" 
                className="group flex items-center gap-4 p-4 rounded-xl border border-[#3DDC97]/10 bg-white/5 hover:border-[#3DDC97]/40 hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#3DDC97]/10 text-[#3DDC97] group-hover:bg-[#3DDC97]/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#3DDC97]">Email</p>
                  <p className="font-display text-lg font-medium">arghiribianca@gmail.com</p>
                </div>
                <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#3DDC97]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              {/* LinkedIn Card */}
              <a 
                href="https://www.linkedin.com/in/bianca-arghiri-84b020308/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-[#3DDC97]/10 bg-white/5 hover:border-[#3DDC97]/40 hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#3DDC97]/10 text-[#3DDC97] group-hover:bg-[#3DDC97]/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#3DDC97]">LinkedIn</p>
                  <p className="font-display text-lg font-medium">Bianca Arghiri</p>
                </div>
                <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#3DDC97]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              {/* GitHub Card */}
              <a 
                href="https://github.com/arghiribianca-gif" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-[#3DDC97]/10 bg-white/5 hover:border-[#3DDC97]/40 hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#3DDC97]/10 text-[#3DDC97] group-hover:bg-[#3DDC97]/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#3DDC97]">GitHub</p>
                  <p className="font-display text-lg font-medium">arghiribianca-gif</p>
                </div>
                <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#3DDC97]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              {/* Instagram Card */}
              <a 
                href="https://www.instagram.com/arghiri.bianca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-[#3DDC97]/10 bg-white/5 hover:border-[#3DDC97]/40 hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#3DDC97]/10 text-[#3DDC97] group-hover:bg-[#3DDC97]/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#3DDC97]">Instagram</p>
                  <p className="font-display text-lg font-medium">Bianca Arghiri</p>
                </div>
                <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#3DDC97]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-[#3DDC97] animate-pulse" />
              <span className="text-sm font-bold text-[#F5F7F6]">Currently based in Chișinău, Moldova</span>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-[#1a2e25] p-8 md:p-10 rounded-2xl shadow-xl shadow-[#3DDC97]/5 border border-[#3DDC97]/10">
            <form 
              action="https://formspree.io/f/mreypydb" 
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              {/* Honeypot field for spam protection */}
              <input type="text" name="_gotcha" style={{display: 'none'}} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#F5F7F6]/80" htmlFor="name">Name</label>
                  <input 
                    className="w-full bg-transparent border border-[#3DDC97]/20 rounded-lg px-4 py-3 focus:border-[#3DDC97] focus:ring-4 focus:ring-[#3DDC97]/10 transition-all placeholder:text-[#F5F7F6]/40 text-white outline-none" 
                    id="name"
                    name="name"
                    placeholder="John Doe" 
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#F5F7F6]/80" htmlFor="email">Email</label>
                  <input 
                    className="w-full bg-transparent border border-[#3DDC97]/20 rounded-lg px-4 py-3 focus:border-[#3DDC97] focus:ring-4 focus:ring-[#3DDC97]/10 transition-all placeholder:text-[#F5F7F6]/40 text-white outline-none" 
                    id="email"
                    name="email"
                    placeholder="john@example.com" 
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#F5F7F6]/80" htmlFor="subject">Subject</label>
                <input 
                  className="w-full bg-transparent border border-[#3DDC97]/20 rounded-lg px-4 py-3 focus:border-[#3DDC97] focus:ring-4 focus:ring-[#3DDC97]/10 transition-all placeholder:text-[#F5F7F6]/40 text-white outline-none" 
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry" 
                  type="text"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#F5F7F6]/80" htmlFor="message">Message</label>
                <textarea 
                  className="w-full bg-transparent border border-[#3DDC97]/20 rounded-lg px-4 py-3 focus:border-[#3DDC97] focus:ring-4 focus:ring-[#3DDC97]/10 transition-all placeholder:text-[#F5F7F6]/40 text-white outline-none resize-none" 
                  id="message"
                  name="message"
                  placeholder="Tell me about your vision..." 
                  rows={5}
                  required
                />
              </div>
              <button 
                className="w-full py-4 bg-[#3DDC97] text-[#022B1C] font-bold rounded-lg hover:bg-[#3DDC97]/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed" 
                type="submit"
              >
                <span className="button-text">Send Message</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 -960 960 960" fill="currentColor">
                  <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                </svg>
              </button>
              <div className="text-center text-xs text-[#F5F7F6]/50 space-y-1">
                <p>By sending this message, you agree to the privacy policy.</p>
                <p>Average response time: <span className="text-[#3DDC97] font-bold">24 hours</span>.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
