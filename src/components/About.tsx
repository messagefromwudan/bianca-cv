import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-2 text-[10px] font-bold tracking-widest text-[#0E4A3A] uppercase">ABOUT</div>
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Content on the Left */}
        <div className="lg:w-3/5">
          <h2 className="text-4xl font-display mb-8 text-[#022B1C]">
            The Person Behind <span className="italic font-light bg-[#3DDC97] text-[#022B1C] px-2 py-1 -ml-1.5">the Systems</span>
          </h2>
          <div className="space-y-6 text-[#111414] text-lg leading-relaxed opacity-80">
            <p>
              I&apos;m a 17 year old business student, builder, and curious problem-solver based in Chișinău. I&apos;m fascinated by how technology — especially AI — can help people think better, learn faster, and build smarter systems.
            </p>
            <p>
              I spend most of my time designing ideas, building projects, and exploring how automation and AI can reshape everyday life.
            </p>
          </div>
          {/* Badges */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card p-6 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg border border-[#022B1C]/10">
                  <Image src="/ceef-logo-1.png" alt="CEEF" width={65} height={39} className="object-contain" />
                </div>
              </div>
              <div className="font-bold text-sm text-[#022B1C]">Business Planning Student</div>
              <div className="text-xs text-[#0E4A3A]">CEEF</div>
            </div>
            <div className="card p-6 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#3DDC97]/20 to-[#022B1C]/10 rounded-xl flex items-center justify-center shadow-lg border border-[#022B1C]/10 overflow-hidden">
                  <Image src="/exelion-logo.PNG" alt="Exelion AI" width={72} height={72} className="object-contain transform scale-150" />
                </div>
              </div>
              <div className="font-bold text-sm text-[#022B1C]">Founder</div>
              <div className="text-xs text-[#0E4A3A]">Exelion AI</div>
            </div>
            <div className="card p-6 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg border border-[#022B1C]/10">
                  <Image src="/technovation-logo.jpg" alt="Technovation Girls" width={60} height={60} className="object-contain" />
                </div>
              </div>
              <div className="font-bold text-sm text-[#022B1C]">Participant</div>
              <div className="text-xs text-[#0E4A3A]">Technovation Girls</div>
            </div>
          </div>
        </div>
        {/* Portrait on the Right */}
        <div className="lg:w-2/5 w-full">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#022B1C]/5 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F5F7F6] border border-[#022B1C]/10 shadow-xl">
              <Image
                src="/BIANCA.jpg"
                alt="Bianca Arghiri"
                fill
                className="object-cover object-[top_50%]"
                sizes="(max-width: 768px) 100vw, 440px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
