"use client";

import TypeWriter from "./TypeWriter";
import NeuralNetwork from "./NeuralNetwork";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#022B1C]">
      <NeuralNetwork />
      <div className="relative z-10 py-32 px-6 text-center max-w-4xl mx-auto">
        
        <h1 className="text-6xl md:text-8xl font-display mb-6 text-[#F5F7F6]">Bianca</h1>
        <h1 className="text-6xl md:text-8xl font-display mb-8 text-[#3DDC97]">Arghiri</h1>

        <div className="text-2xl font-light text-[#F5F7F6]/80 mb-12 italic min-h-[2.5rem]">
          <TypeWriter />
        </div>

        
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="btn-primary px-8 py-3">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-[#F5F7F6]/30 text-[#F5F7F6] rounded-lg font-semibold hover:bg-[#F5F7F6]/10 transition-all">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
