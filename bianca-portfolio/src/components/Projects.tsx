import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#022B1C]/10">
      <div className="mb-2 text-[10px] font-bold tracking-widest text-[#0E4A3A] uppercase">PROJECTS</div>
      <h2 className="text-4xl font-display mb-2 text-[#022B1C]">The Lab</h2>
      <p className="text-[#0E4A3A] mb-12 opacity-80">Systems and tools I&apos;m designing to make complex things simpler.</p>

      {/* Featured Project */}
      <div className="bg-[#022B1C] rounded-[2rem] overflow-hidden text-white mb-8 flex flex-col md:flex-row items-stretch">
        <div className="p-12 md:w-1/2 flex flex-col justify-center">
          <div className="flex gap-2 mb-6">
            <span className="px-3 py-1 bg-[#3DDC97]/20 text-[#3DDC97] border border-[#3DDC97]/30 rounded-full text-[10px] font-bold uppercase">BUILDING</span>
          </div>
          <h3 className="text-5xl font-display mb-4">Tuto</h3>
          <p className="text-xl text-[#F5F7F6] opacity-90 mb-6">AI study companion for students</p>
          <p className="text-[#F5F7F6]/60 mb-10 leading-relaxed">
            An AI-powered learning assistant designed to help students study more efficiently while promoting responsible and ethical AI usage. Features a Thinking Credit system to encourage active learning instead of passive AI dependency.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-xs">Ethical AI use</span>
            <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-xs">Structured thinking</span>
            <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-xs">Reducing academic anxiety</span>
          </div>
        </div>
        <div className="md:w-1/2 bg-[#0E4A3A] flex items-center justify-center p-6 relative overflow-hidden">
          <div className="relative w-full h-full max-w-md mx-auto">
            <Image
              src="/IMG_8121.JPG"
              alt="Tuto Project"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
      </div>

      {/* Secondary Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-10 flex flex-col justify-between">
          <div>
            <div className="mb-6"><span className="px-3 py-1 bg-[#3DDC97]/10 text-[#3DDC97] border border-[#3DDC97]/20 rounded-full text-[10px] font-bold uppercase">ACTIVE</span></div>
            <h4 className="text-2xl font-display mb-2 text-[#022B1C]">Exelion AI</h4>
            <p className="text-[#0E4A3A] mb-4 text-sm">AI automation for businesses</p>
            <p className="text-[#111414] opacity-70 text-sm leading-relaxed mb-8">
              Building automation and AI-powered solutions for small businesses. Designing business automation systems using AI and workflow automation tools like Make.com, Airtable, and messaging APIs.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#F5F7F6] border border-[#022B1C]/10 rounded-lg text-[10px] text-[#0E4A3A]">CRM automation</span>
            <span className="px-3 py-1 bg-[#F5F7F6] border border-[#022B1C]/10 rounded-lg text-[10px] text-[#0E4A3A]">AI assistants</span>
            <span className="px-3 py-1 bg-[#F5F7F6] border border-[#022B1C]/10 rounded-lg text-[10px] text-[#0E4A3A]">Operational systems</span>
          </div>
        </div>
        <div className="card p-10 flex flex-col justify-between border-l-4 border-l-[#3DDC97]">
          <div>
            <div className="mb-6"><span className="px-3 py-1 bg-[#3DDC97]/10 text-[#3DDC97] border border-[#3DDC97]/20 rounded-full text-[10px] font-bold uppercase">ACTIVE</span></div>
            <h4 className="text-2xl font-display mb-2 text-[#022B1C]">Beauty Business System</h4>
            <p className="text-[#0E4A3A] mb-4 text-sm">Automation platform for salons</p>
            <p className="text-[#111414] opacity-70 text-sm leading-relaxed mb-8">
              A comprehensive business management system for beauty salons, automating client scheduling, reminders, CRM, and financial tracking.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#F5F7F6] border border-[#022B1C]/10 rounded-lg text-[10px] text-[#0E4A3A]">Scheduling</span>
            <span className="px-3 py-1 bg-[#F5F7F6] border border-[#022B1C]/10 rounded-lg text-[10px] text-[#0E4A3A]">Client CRM</span>
            <span className="px-3 py-1 bg-[#F5F7F6] border border-[#022B1C]/10 rounded-lg text-[10px] text-[#0E4A3A]">Reminders</span>
            <span className="px-3 py-1 bg-[#F5F7F6] border border-[#022B1C]/10 rounded-lg text-[10px] text-[#0E4A3A]">Financial tracking</span>
          </div>
        </div>
      </div>
    </section>
  );
}
