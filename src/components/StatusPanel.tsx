const statuses = [
  {
    project: "TUTO AI TUTOR",
    status: "Building",
    detail: "Research + Prototype",
    progress: 35,
  },
  {
    project: "EXELION AI",
    status: "Active",
    detail: "Business automation",
    progress: 55,
  },
  {
    project: "TECHNOVATION PROJECT",
    status: "Development",
    detail: "Concept + Validation",
    progress: 30,
  },
  {
    project: "LEARNING MODE",
    status: "Always On",
    detail: "AI + Systems Thinking",
    progress: 100,
  },
];

export default function StatusPanel() {
  return (
    <section id="status" aria-labelledby="status-heading" className="py-[var(--space-section)] px-6 sm:px-12 lg:px-20 bg-graphite">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24 items-start">
          {/* Left — header */}
          <div className="lg:col-span-4">
            <span className="font-mono-accent text-[11px] font-semibold tracking-[0.12em] text-purple-light block mb-2 uppercase">
              Live Status
            </span>
            <h2 id="status-heading" className="text-[clamp(28px,4vw,40px)] font-bold text-canvas leading-tight mb-6">
              Currently
              <br />
              Building
            </h2>
            <p className="text-canvas/50 text-base leading-relaxed">
              A live look at what I&apos;m working on right now.
            </p>
          </div>

          {/* Right — terminal panel */}
          <div className="lg:col-span-8">
            <div className="bg-[#111111] rounded-2xl border border-white/8 overflow-hidden">
              {/* Header */}
              <div className="px-10 py-6 border-b border-white/5 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <span className="font-mono-accent text-xs text-canvas/25 tracking-wider ml-2">
                  SYSTEM STATUS
                </span>
              </div>

              {/* Status items — more spacious */}
              <div className="divide-y divide-white/5">
                {statuses.map((item) => (
                  <div
                    key={item.project}
                    className="px-10 py-9 sm:py-10 flex flex-col sm:flex-row sm:items-center gap-6"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" aria-hidden="true" />
                        <span className="font-mono-accent text-sm text-canvas/80 tracking-wider truncate">
                          {item.project}
                        </span>
                      </div>
                      <div className="flex items-center gap-6 pl-5">
                        <span className="font-mono-accent text-[11px] text-purple-light/60 tracking-wider">
                          STATUS: {item.status}
                        </span>
                        <span className="font-mono-accent text-[11px] text-canvas/25 tracking-wider">
                          FOCUS: {item.detail}
                        </span>
                      </div>
                    </div>
                    <div className="w-full sm:w-40">
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple to-blue rounded-full progress-bar-fill"
                          style={
                            { "--progress": `${item.progress}%` } as React.CSSProperties
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
