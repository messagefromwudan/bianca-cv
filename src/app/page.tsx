import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Ideas from "@/components/Ideas";
import Timeline from "@/components/Timeline";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ToastProvider } from "@/contexts/ToastContext";
import Toast from "@/components/Toast";

export default function Home() {
  return (
    <ToastProvider>
      <div className="dot-grid min-h-screen">
        <Toast />
        <Navbar />
        <main>
          <Hero />
          <ScrollReveal>
            <About />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Projects />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Ideas />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Timeline />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <section className="py-24 px-6 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <Experience />
                <Education />
              </div>
            </section>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Skills />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Contact />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </ToastProvider>
  );
}
