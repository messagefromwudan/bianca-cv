export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 px-6 bg-[#022B1C] overflow-hidden">
      {/* Circuit Board Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Horizontal lines */}
              <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
              <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
              <line x1="0" y1="80" x2="100" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
              {/* Vertical lines */}
              <line x1="20" y1="0" x2="20" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
              <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
              <line x1="80" y1="0" x2="80" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
              {/* Connection nodes */}
              <circle cx="20" cy="20" r="1.5" fill="rgba(255,255,255,0.4)"/>
              <circle cx="50" cy="50" r="1.5" fill="rgba(255,255,255,0.4)"/>
              <circle cx="80" cy="80" r="1.5" fill="rgba(255,255,255,0.4)"/>
              <circle cx="20" cy="80" r="1.5" fill="rgba(255,255,255,0.4)"/>
              <circle cx="80" cy="20" r="1.5" fill="rgba(255,255,255,0.4)"/>
              {/* Diagonal connections */}
              <line x1="20" y1="20" x2="50" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
              <line x1="50" y1="50" x2="80" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="max-w-4xl w-full text-center mb-20 mx-auto">
          <h1 className="font-display text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-white">
            Builder <span className="text-[#3DDC97]">Timeline</span>
          </h1>
          <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            A visionary journey of innovation and AI entrepreneurship, tracking the evolution from curious student to tech founder.
          </p>
        </div>
      
      <div className="w-full max-w-6xl relative px-4">
        {/* Timeline Track */}
        <div className="absolute top-[120px] left-0 w-full h-[2px] bg-[#0E4A3A]/50 hidden lg:block">
          <div className="h-full bg-[#3DDC97] shadow-[0_0_15px_rgba(61,220,151,0.4)] w-full opacity-60"></div>
        </div>
        
        {/* Timeline Items */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative">
          {/* 2019 Milestone */}
          <div className="flex flex-col items-center group">
            <div className="mb-4 lg:mb-0 lg:h-[120px] flex flex-col items-center justify-end">
              <div className="text-[#3DDC97] bg-[#3DDC97]/10 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="hidden lg:block w-4 h-4 rounded-full bg-[#3DDC97] border-4 border-[#F5F7F6] z-10 shadow-[0_0_15px_rgba(61,220,151,0.4)] mb-[-9px]"></div>
            </div>
            <div className="mt-8 bg-[#0E4A3A]/20 border border-[#3DDC97]/10 rounded-xl p-6 hover:translate-y-[-8px] hover:border-[#3DDC97]/50 hover:bg-[#0E4A3A]/80 transition-all duration-300 w-full">
              <span className="font-display text-[#3DDC97] font-bold text-lg">2019</span>
              <h3 className="font-display font-bold text-lg mt-1 text-white">Curiosity</h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">Began gymnasium studies, sparking an interest in structural thinking and logic.</p>
            </div>
          </div>

          {/* 2024 (A) Milestone */}
          <div className="flex flex-col items-center group">
            <div className="mb-4 lg:mb-0 lg:h-[120px] flex flex-col items-center justify-end">
              <div className="text-[#3DDC97] bg-[#3DDC97]/10 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="hidden lg:block w-4 h-4 rounded-full bg-[#3DDC97] border-4 border-[#F5F7F6] z-10 shadow-[0_0_15px_rgba(61,220,151,0.4)] mb-[-9px]"></div>
            </div>
            <div className="mt-8 bg-[#0E4A3A]/20 border border-[#3DDC97]/10 rounded-xl p-6 hover:translate-y-[-8px] hover:border-[#3DDC97]/50 hover:bg-[#0E4A3A]/80 transition-all duration-300 w-full">
              <span className="font-display text-[#3DDC97] font-bold text-lg">2024</span>
              <h3 className="font-display font-bold text-lg mt-1 text-white">Sales Assistant</h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">First work experience. Gained real-world business exposure and communication skills.</p>
            </div>
          </div>

          {/* 2024 (B) Milestone */}
          <div className="flex flex-col items-center group">
            <div className="mb-4 lg:mb-0 lg:h-[120px] flex flex-col items-center justify-end">
              <div className="text-[#3DDC97] bg-[#3DDC97]/10 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="hidden lg:block w-4 h-4 rounded-full bg-[#3DDC97] border-4 border-[#F5F7F6] z-10 shadow-[0_0_15px_rgba(61,220,151,0.4)] mb-[-9px]"></div>
            </div>
            <div className="mt-8 bg-[#0E4A3A]/20 border border-[#3DDC97]/10 rounded-xl p-6 hover:translate-y-[-8px] hover:border-[#3DDC97]/50 hover:bg-[#0E4A3A]/80 transition-all duration-300 w-full">
              <span className="font-display text-[#3DDC97] font-bold text-lg">2024</span>
              <h3 className="font-display font-bold text-lg mt-1 text-white">Business Studies</h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">Enrolled at CEEF. Specialized in Business Planning and Administration.</p>
            </div>
          </div>

          {/* 2025 Milestone */}
          <div className="flex flex-col items-center group">
            <div className="mb-4 lg:mb-0 lg:h-[120px] flex flex-col items-center justify-end">
              <div className="text-[#3DDC97] bg-[#3DDC97]/10 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="hidden lg:block w-4 h-4 rounded-full bg-[#3DDC97] border-4 border-[#F5F7F6] z-10 shadow-[0_0_15px_rgba(61,220,151,0.4)] mb-[-9px]"></div>
            </div>
            <div className="mt-8 bg-[#0E4A3A]/20 border border-[#3DDC97]/10 rounded-xl p-6 hover:translate-y-[-8px] hover:border-[#3DDC97]/50 hover:bg-[#0E4A3A]/80 transition-all duration-300 w-full">
              <span className="font-display text-[#3DDC97] font-bold text-lg">2025</span>
              <h3 className="font-display font-bold text-lg mt-1 text-white">Exelion AI</h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">Founded AI automation venture to revolutionize small business operations.</p>
            </div>
          </div>

          {/* 2026 Milestone */}
          <div className="flex flex-col items-center group">
            <div className="mb-4 lg:mb-0 lg:h-[120px] flex flex-col items-center justify-end">
              <div className="text-[#3DDC97] bg-[#3DDC97]/10 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="hidden lg:block w-4 h-4 rounded-full bg-[#3DDC97] border-4 border-[#F5F7F6] z-10 shadow-[0_0_15px_rgba(61,220,151,0.4)] mb-[-9px]"></div>
            </div>
            <div className="mt-8 bg-[#0E4A3A]/20 border border-[#3DDC97]/10 rounded-xl p-6 hover:translate-y-[-8px] hover:border-[#3DDC97]/50 hover:bg-[#0E4A3A]/80 transition-all duration-300 w-full">
              <span className="font-display text-[#3DDC97] font-bold text-lg">2026 (Vision)</span>
              <h3 className="font-display font-bold text-lg mt-1 text-white">Technovation</h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">Building AI study companion &amp; competing on the global tech stage.</p>
            </div>
          </div>
        </div>
      </div>

      </div>
    </section>
  );
}
