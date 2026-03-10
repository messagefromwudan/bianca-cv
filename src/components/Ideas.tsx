"use client";

import { useState, useCallback } from "react";

const thoughts = [
  {
    title: "Rethinking Student-AI Interaction",
    quote: "Smart AI tools should challenge thought, not replace it.",
    body: "Automation in education is often misunderstood as efficiency. True progress comes when AI acts as a Socratic mentor—guiding students through mental models, prompting questions, and encouraging reflection instead of simply giving answers.",
    tags: ["AI Ethics", "Education"],
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
  },
  {
    title: "Invisible Automation",
    quote: "The best systems are the ones you barely notice.",
    body: "Automation isn't just about speed—it's about removing friction silently. The smartest tools anticipate needs and handle repetitive tasks in the background, freeing humans to focus on creativity, strategy, and meaningful decision-making.",
    tags: ["Automation", "Systems"],
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Learning How to Learn",
    quote: "AI can accelerate understanding, but thinking itself remains irreplaceable.",
    body: "Tools that teach shouldn't substitute cognition; they should enhance it. By highlighting patterns, reinforcing mental frameworks, and prompting reflection, AI can amplify learning while preserving the human role as the active thinker.",
    tags: ["Learning", "Cognition"],
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Ethical AI by Design",
    quote: "Every AI system shapes behavior—design it to empower, not exploit.",
    body: "AI tools are not neutral. Systems that reward shortcuts or passive consumption risk diminishing human agency. Ethical design creates tools that foster curiosity, critical thinking, and responsible decision-making, giving users both guidance and freedom.",
    tags: ["Ethics", "Design"],
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    title: "Knowledge as a System",
    quote: "Information alone isn't enough—connections create power.",
    body: "AI is most valuable when it organizes disparate data into coherent systems. By highlighting relationships between ideas, concepts, and outcomes, it helps users make informed decisions, anticipate consequences, and act strategically.",
    tags: ["Knowledge", "Systems"],
    icon: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
  },
  {
    title: "Intelligent Feedback Loops",
    quote: "Guidance beats answers every time.",
    body: "The best AI provides feedback, not just output. Thoughtful nudges and real-time prompts create learning loops where users iterate, experiment, and refine their understanding, making each interaction a step toward mastery.",
    tags: ["Feedback", "Learning"],
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182",
  },
  {
    title: "Automation Without Noise",
    quote: "Efficiency that demands attention isn't efficiency.",
    body: "Intelligent automation works invisibly. By silently handling mundane or repetitive tasks, it allows humans to focus on creativity and high-level thinking, amplifying capability without distraction.",
    tags: ["Automation", "Focus"],
    icon: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Tools That Teach Thinking",
    quote: "Software should train minds, not just execute commands.",
    body: "AI can act as a mentor that asks the right questions, surfaces reasoning gaps, and encourages structured exploration. By turning passive interactions into active thinking, these tools help humans develop robust mental models.",
    tags: ["AI", "Mentorship"],
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z",
  },
  {
    title: "Structured Creativity",
    quote: "Freedom thrives within frameworks.",
    body: "AI can scaffold creativity by providing structured constraints and iterative feedback. This allows users to explore new ideas, test hypotheses, and innovate consistently, turning raw potential into reliable output.",
    tags: ["Creativity", "Frameworks"],
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
  },
  {
    title: "Building for Impact",
    quote: "Every feature should solve a meaningful problem.",
    body: "AI is impressive only when it amplifies human capability. Systems that improve decision-making, reduce friction, or enable new possibilities create tangible impact rather than novelty for its own sake.",
    tags: ["Impact", "Product"],
    icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  },
  {
    title: "Human + Machine Collaboration",
    quote: "The future is co-piloting intelligence.",
    body: "Humans bring intuition, curiosity, and judgment. AI provides memory, pattern recognition, and real-time insight. Together, they exceed what either could do alone, creating synergistic problem-solving and learning.",
    tags: ["Collaboration", "AI"],
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
  {
    title: "Systems Thinking as a Superpower",
    quote: "Seeing connections is the key to mastery.",
    body: "AI enhances systems thinking by mapping dependencies, simulating outcomes, and highlighting leverage points. This allows abstract understanding to become actionable strategy, turning complexity into opportunity.",
    tags: ["Systems", "Strategy"],
    icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
  },
];

export default function Ideas() {
  const [currentPage, setCurrentPage] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  const goNext = useCallback(() => {
    if (currentPage >= thoughts.length - 1) return;
    setFadeKey((k) => k + 1);
    setCurrentPage((p) => p + 1);
  }, [currentPage]);

  const goPrev = useCallback(() => {
    if (currentPage <= 0) return;
    setFadeKey((k) => k + 1);
    setCurrentPage((p) => p - 1);
  }, [currentPage]);

  const current = thoughts[currentPage];
  const chapterNum = String(currentPage + 1).padStart(2, "0");

  return (
    <section id="ideas" className="pt-12 pb-24 px-6 border-t border-[#022B1C]/10 bg-[#022B1C]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-2 text-[10px] font-bold tracking-widest text-[#3DDC97]/60 uppercase">Founder&apos;s Notebook</div>
          <h2 className="text-4xl md:text-5xl font-display mb-4 text-[#F5F7F6]">Visionary <span className="text-[#3DDC97]">Cognition</span></h2>
          <p className="text-[#F5F7F6]/50">Exploring the intersection of human intelligence and invisible automation.</p>
        </div>

        {/* Journal */}
        <div className="relative w-full max-w-5xl mx-auto" style={{ aspectRatio: "16/10" }}>
          {/* Back cover shadow */}
          <div className="absolute inset-0 bg-[#0E4A3A] rounded-xl rotate-1 translate-y-2 border-r-8 border-black/20" style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }} />

          {/* Arrow buttons on top of pages */}
          <button
            onClick={goPrev}
            disabled={currentPage === 0}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-[#022B1C]/60 backdrop-blur-sm border border-[#3DDC97]/20 rounded-full hover:bg-[#022B1C]/80 transition-all disabled:opacity-0 disabled:pointer-events-none group"
          >
            <svg className="w-5 h-5 text-[#3DDC97] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={goNext}
            disabled={currentPage === thoughts.length - 1}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-[#022B1C]/60 backdrop-blur-sm border border-[#3DDC97]/20 rounded-full hover:bg-[#022B1C]/80 transition-all disabled:opacity-0 disabled:pointer-events-none group"
          >
            <svg className="w-5 h-5 text-[#3DDC97] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Main spread */}
          <div
            className="absolute inset-0 flex bg-[#0E4A3A] rounded-lg overflow-hidden border border-[#3DDC97]/30"
            style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
          >
            {/* Left Page */}
            <div className="relative flex-1 page-paper p-8 md:p-16 flex flex-col justify-between border-r border-black/10">
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 90%, rgba(0,0,0,0.05) 100%)" }} />
              <div key={fadeKey} className="relative z-10 page-content-animate">
                <div className="w-12 h-12 bg-[#3DDC97]/20 rounded-full flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-[#0E4A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={current.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-[#0E4A3A] leading-tight">{current.title}</h3>
                <div className="h-1 w-24 bg-[#3DDC97] mt-6" />
              </div>
              <div className="relative z-10 flex items-center gap-4 text-[#0E4A3A]/60 font-medium">
                <span className="text-xs uppercase tracking-widest">Chapter {chapterNum}</span>
                <span className="w-1 h-1 bg-[#0E4A3A]/40 rounded-full" />
                <span className="text-xs uppercase tracking-widest">2025</span>
              </div>
            </div>

            {/* Spine */}
            <div
              className="w-6 md:w-10 relative z-20 shadow-xl border-x border-black/10"
              style={{ background: "linear-gradient(90deg, #0E4A3A 0%, #1a5d4b 50%, #0E4A3A 100%)" }}
            />

            {/* Right Page */}
            <div className="relative flex-1 page-paper p-8 md:p-16 flex flex-col justify-center">
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 90%, rgba(0,0,0,0.05) 100%)", transform: "scaleX(-1)" }} />
              <div key={fadeKey} className="relative z-10 page-content-animate">
                <svg className="absolute -top-8 -left-4 w-16 h-16 text-[#0E4A3A]/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg md:text-2xl text-[#1a1a1a] leading-relaxed font-light italic">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div className="mt-10 flex flex-col gap-4">
                  <p className="text-sm text-[#333] leading-relaxed">
                    {current.body}
                  </p>
                  <div className="flex gap-2 mt-4">
                    {current.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#0E4A3A]/10 text-[#0E4A3A] text-[10px] font-bold rounded-full uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dot indicators — centered below journal */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {thoughts.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === currentPage ? "bg-[#3DDC97]" : "bg-[#3DDC97]/20"}`} />
          ))}
        </div>

      </div>
    </section>
  );
}
