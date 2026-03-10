export default function Languages() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto border-t border-[#022B1C]/10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3DDC97]/10 border border-[#3DDC97]/20 mb-6">
        <span className="w-2 h-2 rounded-full bg-[#3DDC97] animate-pulse"></span>
        <span className="text-[#3DDC97] text-xs font-bold uppercase tracking-widest font-display">Neural Connectivity</span>
      </div>
      <h2 className="font-display text-4xl lg:text-5xl font-black text-[#022B1C] mb-4 tracking-tight">
        Communication <span className="text-[#3DDC97]">Protocols</span>
      </h2>
      <p className="text-[#0E4A3A] text-lg max-w-2xl mb-12 leading-relaxed">
        Bilingual expertise optimized for high-tech collaborative environments and international scale operations.
      </p>
      <div className="grid gap-6 max-w-4xl">
        {/* Romanian */}
        <div className="bg-[#f8faf9] border border-[#022B1C]/10 p-6 lg:p-8 rounded-xl flex flex-col gap-6 hover:border-[#3DDC97]/40 transition-all group">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#022B1C] flex items-center justify-center text-[#3DDC97] group-hover:scale-110 transition-transform shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-[#022B1C]">Romanian</h3>
                <p className="text-[#3DDC97] text-sm font-medium uppercase tracking-wide">Native Speaker</p>
              </div>
            </div>
            <span className="font-display text-3xl font-black text-[#022B1C]">100<span className="text-[#3DDC97] text-sm ml-1">%</span></span>
          </div>
          <div className="space-y-3">
            <div className="relative h-3 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-[#3DDC97] rounded-full shadow-[0_0_15px_rgba(61,219,151,0.3)]" style={{ width: "100%" }}></div>
            </div>
            <div className="flex justify-between text-xs font-medium text-slate-400 uppercase tracking-tighter">
              <span>Initialization</span>
              <span>Mastery</span>
            </div>
          </div>
          <p className="text-[#0E4A3A] text-sm leading-relaxed">
            Primary language used for complex structural thought and native-level negotiations.
          </p>
        </div>

        {/* English */}
        <div className="bg-[#f8faf9] border border-[#022B1C]/10 p-6 lg:p-8 rounded-xl flex flex-col gap-6 hover:border-[#3DDC97]/40 transition-all group">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#022B1C] flex items-center justify-center text-[#3DDC97] group-hover:scale-110 transition-transform shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-[#022B1C]">English</h3>
                <p className="text-[#3DDC97] text-sm font-medium uppercase tracking-wide">Advanced C1 Proficiency</p>
              </div>
            </div>
            <span className="font-display text-3xl font-black text-[#022B1C]">95<span className="text-[#3DDC97] text-sm ml-1">%</span></span>
          </div>
          <div className="space-y-3">
            <div className="relative h-3 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-[#3DDC97] rounded-full shadow-[0_0_10px_rgba(61,219,151,0.3)]" style={{ width: "95%" }}></div>
            </div>
            <div className="flex justify-between text-xs font-medium text-slate-400 uppercase tracking-tighter">
              <span>Technical Load</span>
              <span>Full System Access</span>
            </div>
          </div>
          <p className="text-[#0E4A3A] text-sm leading-relaxed">
            Professional working proficiency. Optimized for technical documentation, global team management, and public speaking.
          </p>
        </div>

        {/* Russian */}
        <div className="bg-[#f8faf9] border border-[#022B1C]/10 p-6 lg:p-8 rounded-xl flex flex-col gap-6 hover:border-[#3DDC97]/40 transition-all group">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#022B1C] flex items-center justify-center text-[#3DDC97] group-hover:scale-110 transition-transform shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3.284 14.253A8.959 8.959 0 013 12c0-1.636.437-3.17 1.198-4.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-[#022B1C]">Russian</h3>
                <p className="text-[#3DDC97] text-sm font-medium uppercase tracking-wide">Basic A2 Proficiency</p>
              </div>
            </div>
            <span className="font-display text-3xl font-black text-[#022B1C]">30<span className="text-[#3DDC97] text-sm ml-1">%</span></span>
          </div>
          <div className="space-y-3">
            <div className="relative h-3 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-[#3DDC97] rounded-full shadow-[0_0_15px_rgba(61,219,151,0.3)]" style={{ width: "30%" }}></div>
            </div>
            <div className="flex justify-between text-xs font-medium text-slate-400 uppercase tracking-tighter">
              <span>Booting</span>
              <span>In Progress</span>
            </div>
          </div>
          <p className="text-[#0E4A3A] text-sm leading-relaxed">
            Limited working proficiency. Capable of basic interpersonal exchanges and reading foundational technical context.
          </p>
        </div>
        {/* French */}
        <div className="bg-[#f8faf9] border border-[#022B1C]/10 p-6 lg:p-8 rounded-xl flex flex-col gap-6 hover:border-[#3DDC97]/40 transition-all group">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#022B1C] flex items-center justify-center text-[#3DDC97] group-hover:scale-110 transition-transform shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-[#022B1C]">French</h3>
                <p className="text-[#3DDC97] text-sm font-medium uppercase tracking-wide">Beginner A1</p>
              </div>
            </div>
            <span className="font-display text-3xl font-black text-[#022B1C]">10<span className="text-[#3DDC97] text-sm ml-1">%</span></span>
          </div>
          <div className="space-y-3">
            <div className="relative h-3 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-[#3DDC97] rounded-full shadow-[0_0_15px_rgba(61,219,151,0.3)]" style={{ width: "10%" }}></div>
            </div>
            <div className="flex justify-between text-xs font-medium text-slate-400 uppercase tracking-tighter">
              <span>Starting</span>
              <span>In Queue</span>
            </div>
          </div>
          <p className="text-[#0E4A3A] text-sm leading-relaxed">
            Early-stage exposure to French. Foundational vocabulary and basic conversational phrases.
          </p>
        </div>
      </div>
    </section>
  );
}
