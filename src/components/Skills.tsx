export default function Skills() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto border-t border-[#022B1C]/10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3DDC97]/10 border border-[#3DDC97]/20 text-[#3DDC97] text-xs font-bold uppercase tracking-wider mb-4">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Capabilities
      </div>
      <h2 className="text-4xl font-display font-bold text-[#022B1C] mb-4">Professional <span className="text-[#3DDC97]">Skills</span></h2>
      <p className="text-lg text-[#0E4A3A]/80 max-w-2xl mb-16">A multidisciplinary toolkit combining business strategy with digital expertise and leadership, built for the next generation of AI-driven ventures.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Business & Venture */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-2 px-2">
            <svg className="w-5 h-5 text-[#3DDC97]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className="font-display font-bold text-[#022B1C]">Business &amp; Venture</h2>
          </div>
          <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-start gap-3">
            <div className="text-[#3DDC97] shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-bold text-[#022B1C] text-sm mb-1">Venture Strategy</h3>
              <p className="text-xs text-[#0E4A3A] leading-relaxed">Business planning and strategy — defining core logic for AI-powered operations.</p>
            </div>
          </div>
          <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-start gap-3">
            <div className="text-[#3DDC97] shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-bold text-[#022B1C] text-sm mb-1">Project Management</h3>
              <p className="text-xs text-[#0E4A3A] leading-relaxed">Development, operational organization and process optimization for high-growth ventures.</p>
            </div>
          </div>
          <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-start gap-3">
            <div className="text-[#3DDC97] shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-bold text-[#022B1C] text-sm mb-1">Customer Experience</h3>
              <p className="text-xs text-[#0E4A3A] leading-relaxed">Service management and entrepreneurial thinking that drives customer satisfaction.</p>
            </div>
          </div>
        </div>

        {/* Column 2: Digital & Technical */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-2 px-2">
            <svg className="w-5 h-5 text-[#3DDC97]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className="font-display font-bold text-[#022B1C]">Digital &amp; Technical</h2>
          </div>
          <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-start gap-3">
            <div className="text-[#3DDC97] shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-bold text-[#022B1C] text-sm mb-1">AI Tools & Systems</h3>
              <p className="text-xs text-[#0E4A3A] leading-relaxed">Practical usage of AI tools and workflow automation via Make.com for business operations.</p>
            </div>
          </div>
          <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-start gap-3">
            <div className="text-[#3DDC97] shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-bold text-[#022B1C] text-sm mb-1">CRM & Databases</h3>
              <p className="text-xs text-[#0E4A3A] leading-relaxed">CRM and database management via Airtable and business process automation tools.</p>
            </div>
          </div>
          <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-start gap-3">
            <div className="text-[#3DDC97] shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-bold text-[#022B1C] text-sm mb-1">Microsoft Office</h3>
              <p className="text-xs text-[#0E4A3A] leading-relaxed">Full Microsoft Office Suite and digital communication tools for professional use.</p>
            </div>
          </div>
        </div>

        {/* Column 3: Leadership & Vision */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-2 px-2">
            <svg className="w-5 h-5 text-[#3DDC97]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className="font-display font-bold text-[#022B1C]">Leadership &amp; Vision</h2>
          </div>
          <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-start gap-3">
            <div className="text-[#3DDC97] shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-bold text-[#022B1C] text-sm mb-1">Communication</h3>
              <p className="text-xs text-[#0E4A3A] leading-relaxed">Team collaboration, coordination, and public speaking for high-impact presentations.</p>
            </div>
          </div>
          <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-start gap-3">
            <div className="text-[#3DDC97] shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-bold text-[#022B1C] text-sm mb-1">Leadership & Initiative</h3>
              <p className="text-xs text-[#0E4A3A] leading-relaxed">Driving projects forward with initiative, fast learning, and adaptability under pressure.</p>
            </div>
          </div>
          <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-start gap-3">
            <div className="text-[#3DDC97] shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-bold text-[#022B1C] text-sm mb-1">Problem Solving</h3>
              <p className="text-xs text-[#0E4A3A] leading-relaxed">Analytical thinking and creative problem-solving to navigate complex business challenges.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Communication Protocols - Languages */}
      <div className="mt-16 pt-16 border-t border-[#022B1C]/10">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#3DDC97] animate-pulse"></span>
          <span className="text-[#3DDC97] text-xs font-bold uppercase tracking-widest font-display">Communication Protocols</span>
        </div>
        <p className="text-[#0E4A3A]/80 text-sm max-w-2xl mb-8">
          Bilingual expertise optimized for high-tech collaborative environments and international scale operations.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Romanian */}
          <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#022B1C] flex items-center justify-center text-[#3DDC97] group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-display text-lg font-black text-[#022B1C]">100<span className="text-[#3DDC97] text-xs ml-0.5">%</span></span>
            </div>
            <h3 className="font-display text-sm font-bold text-[#022B1C]">Romanian</h3>
            <p className="text-[#3DDC97] text-xs font-medium uppercase tracking-wide">Native</p>
            <div className="mt-3 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#3DDC97] rounded-full" style={{ width: "100%" }}></div>
            </div>
          </div>

          {/* English */}
          <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#022B1C] flex items-center justify-center text-[#3DDC97] group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-display text-lg font-black text-[#022B1C]">95<span className="text-[#3DDC97] text-xs ml-0.5">%</span></span>
            </div>
            <h3 className="font-display text-sm font-bold text-[#022B1C]">English</h3>
            <p className="text-[#3DDC97] text-xs font-medium uppercase tracking-wide">C1 Advanced</p>
            <div className="mt-3 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#3DDC97] rounded-full" style={{ width: "95%" }}></div>
            </div>
          </div>

          {/* Russian */}
          <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#022B1C] flex items-center justify-center text-[#3DDC97] group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3.284 14.253A8.959 8.959 0 013 12c0-1.636.437-3.17 1.198-4.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-display text-lg font-black text-[#022B1C]">30<span className="text-[#3DDC97] text-xs ml-0.5">%</span></span>
            </div>
            <h3 className="font-display text-sm font-bold text-[#022B1C]">Russian</h3>
            <p className="text-[#3DDC97] text-xs font-medium uppercase tracking-wide">A2 Basic</p>
            <div className="mt-3 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#3DDC97] rounded-full" style={{ width: "30%" }}></div>
            </div>
          </div>

          {/* French */}
          <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#022B1C] flex items-center justify-center text-[#3DDC97] group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-display text-lg font-black text-[#022B1C]">10<span className="text-[#3DDC97] text-xs ml-0.5">%</span></span>
            </div>
            <h3 className="font-display text-sm font-bold text-[#022B1C]">French</h3>
            <p className="text-[#3DDC97] text-xs font-medium uppercase tracking-wide">A1 Beginner</p>
            <div className="mt-3 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#3DDC97] rounded-full" style={{ width: "10%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
